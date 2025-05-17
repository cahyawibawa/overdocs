"use client";

import { Button } from "@/components/ui/button";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcuts";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const quotes = [
	{
		text: "Whelve is a great foundation for your product launch with a lot of features out of the box. I've been using it for a while now and it's been a great experience.",
		author: "David Googins",
		title: "Motivational Speaker",
		company: "Googins",
		url: "https://www.davidgoogins.com",
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		author: "John Doe",
		title: "",
		company: "",
		url: "",
	},
	{
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		author: "John Doe",
		title: "",
		company: "",
		url: "",
	},
];

export const Quotes = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Add auto-advance timer with resize handling
	useEffect(() => {
		let timer: NodeJS.Timeout | null = null;

		const handleResize = () => {
			// Clear existing timer
			if (timer) clearInterval(timer);

			// Only set new timer if mobile
			const isMobile = window.innerWidth < 768;
			if (isMobile) {
				timer = setInterval(() => {
					setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
				}, 5000);
			}
		};

		// Initial setup
		handleResize();

		// Add resize listener
		window.addEventListener("resize", handleResize);

		return () => {
			if (timer) clearInterval(timer);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useKeyboardShortcut({
		handlers: [
			{
				key: "n",
				handler: () =>
					setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length),
				description: "Next quote",
			},
			{
				key: "p",
				handler: () =>
					setCurrentIndex(
						(prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length,
					),
				description: "Previous quote",
			},
		],
	});

	// Add swipe handlers
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
		},
		onSwipedRight: () => {
			setCurrentIndex(
				(prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length,
			);
		},
		trackMouse: false,
		preventScrollOnSwipe: true,
		trackTouch: true,
		delta: 10,
		swipeDuration: 500,
	});

	return (
		<div className="my-6">
			<div className="flex items-center gap-6">
				<div
					{...handlers}
					className="flex gap-6"
					// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
					tabIndex={0}
					// biome-ignore lint/a11y/useSemanticElements: <explanation>
					role="region"
					aria-label="Testimonial quotes"
				>
					<blockquote className="mb-2">
						<p className="text-[15px]">
							&ldquo;{quotes[currentIndex].text}&rdquo;
						</p>
						<p className="mt-4">
							—{" "}
							<a
								href={quotes[currentIndex].url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="font-semibold text-[15px]">
									{quotes[currentIndex].author}
								</span>
								{quotes[currentIndex].title && (
									<span className="text-[15px]">
										, {quotes[currentIndex].title}
									</span>
								)}
								{quotes[currentIndex].company && (
									<span className="text-[15px]">
										, @{quotes[currentIndex].company}
									</span>
								)}
							</a>
						</p>
					</blockquote>
				</div>
				<Button
					variant="outline"
					size="sm"
					onClick={() =>
						setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
					}
					className="relative inset-shadow-2xs inset-shadow-white hidden cursor-pointer border border-zinc-300 bg-muted shadow-sm shadow-zinc-950/10 ring-0 duration-150 hover:bg-background md:block dark:inset-shadow-transparent dark:border-border dark:bg-muted/25 dark:hover:bg-muted/50"
				>
					<span className="text-xs">[n] next</span>
				</Button>
			</div>
		</div>
	);
};
