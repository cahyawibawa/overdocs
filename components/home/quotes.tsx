"use client";

import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcuts";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const quotes = [
	{
		text: "Instead of trying to search for mastery to build things, i was just like building things with the knowledge that i had at the time, putting out of the door and then progressively moving towards mastery.",
		author: "Mariana Castilho",
		title: "design engineer",
		company: "pierre",
		url: "https://pierre.com",
	},
	{
		text: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
		author: "Oprah Winfrey",
		title: "",
		company: "",
		url: "",
	},
	{
		text: "There are two kinds of people, those who do the work and those who take the credit. Try to be in the first group; there is less competition there.",
		author: "Indira Gandhi",
		title: "",
		company: "",
		url: "",
	},
	{
		text: "You cannot define a person on just one thing. You can’t just forget all these wonderful and good things that a person has done because one thing didn’t come off the way you thought it should come off.",
		author: "Aretha Franklin",
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
		<div className="pt-5">
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
						<p>&ldquo;{quotes[currentIndex].text}&rdquo;</p>
						<p className="mt-4">
							—{" "}
							<a
								href={quotes[currentIndex].url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground"
							>
								<span className="font-bold">{quotes[currentIndex].author}</span>
								{quotes[currentIndex].title && (
									<span>, {quotes[currentIndex].title}</span>
								)}
								{quotes[currentIndex].company && (
									<span>, @{quotes[currentIndex].company}</span>
								)}
							</a>
						</p>
					</blockquote>
				</div>
				<button
					onClick={() =>
						setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
					}
					className="hidden whitespace-nowrap rounded-lg border border-muted p-2 text-sm transition-colors hover:border-dashed md:block "
				>
					[n] next
				</button>
			</div>
		</div>
	);
};
