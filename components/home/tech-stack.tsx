"use client";

import { Icons } from "@/components/icons";
import { useEffect, useState } from "react";
import { useScramble } from "use-scramble";

interface TechItem {
	title: string;
	icon: keyof typeof Icons;
	description: string;
	url: string;
	status: string | null;
}

export const TechStack = () => {
	const techStack: TechItem[] = [
		{
			title: "Next.js 15",
			icon: "nextJS",
			description: "The React Framework for the Web",
			url: "https://nextjs.org",
			status: null,
		},
		{
			title: "Vercel",
			icon: "vercel",
			description: "Deploy and scale your web projects",
			url: "https://vercel.com",
			status: null,
		},
		{
			title: "Better Auth",
			icon: "betterAuth",
			description: "Authentication solution",
			url: "#",
			status: null,
		},
		{
			title: "Neon Serverless",
			icon: "neon",
			description: "Serverless Postgres",
			url: "https://neon.tech",
			status: null,
		},
		{
			title: "Drizzle ORM",
			icon: "drizzleOrm",
			description: "TypeScript ORM for SQL databases",
			url: "https://orm.drizzle.team",
			status: null,
		},
		{
			title: "shadcn/ui",
			icon: "shadcn",
			description: "Beautifully designed components",
			url: "https://ui.shadcn.com",
			status: null,
		},
		{
			title: "Resend",
			icon: "resend",
			description: "Email API for developers",
			url: "https://resend.com",
			status: null,
		},
		{
			title: "Stripe",
			icon: "stripe",
			description: "Payment processing platform",
			url: "https://stripe.com",
			status: null,
		},
	];

	const ITEM_HEIGHT = 112;
	const GRID_COLS = 4;
	const gridRows = Math.ceil(techStack.length / GRID_COLS);
	const totalHeight = ITEM_HEIGHT * gridRows;

	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [isIconicHovered, setIsIconicHovered] = useState(false);
	const [windowWidth, setWindowWidth] = useState<number>(
		typeof window !== "undefined" ? window.innerWidth : 768,
	);
	const [intersections, setIntersections] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (isIconicHovered) {
			const timer = setTimeout(() => {
				setIsIconicHovered(false);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [isIconicHovered]);

	useEffect(() => {
		const calculateIntersections = () => {
			const rows = Math.ceil(
				techStack.length / (windowWidth < 768 ? 2 : GRID_COLS),
			);
			const newIntersections = [];
			const horizontalPoints = (windowWidth < 768 ? 2 : GRID_COLS) + 1;
			const verticalPoints = rows + 1;

			for (let row = 0; row < verticalPoints; row++) {
				for (let col = 0; col < horizontalPoints; col++) {
					const isHighlighted =
						hoveredIndex !== null &&
						((row ===
							Math.floor(hoveredIndex / (windowWidth < 768 ? 2 : GRID_COLS)) &&
							col === hoveredIndex % (windowWidth < 768 ? 2 : GRID_COLS)) ||
							(row ===
								Math.floor(
									hoveredIndex / (windowWidth < 768 ? 2 : GRID_COLS),
								) &&
								col ===
									(hoveredIndex % (windowWidth < 768 ? 2 : GRID_COLS)) + 1) ||
							(row ===
								Math.floor(hoveredIndex / (windowWidth < 768 ? 2 : GRID_COLS)) +
									1 &&
								col === hoveredIndex % (windowWidth < 768 ? 2 : GRID_COLS)) ||
							(row ===
								Math.floor(hoveredIndex / (windowWidth < 768 ? 2 : GRID_COLS)) +
									1 &&
								col ===
									(hoveredIndex % (windowWidth < 768 ? 2 : GRID_COLS)) + 1));

					newIntersections.push(
						<div
							key={`intersection-${row}-${col}`}
							className={`absolute flex h-3 w-3 items-center justify-center transition-colors duration-200 ${
								isHighlighted ? "text-primary" : "text-muted-foreground"
							}`}
							style={{
								top: `${(row * 100) / rows}%`,
								left:
									col === 0
										? "0%"
										: col === horizontalPoints - 1
											? "100%"
											: `${(col * 100) / (windowWidth < 768 ? 2 : GRID_COLS)}%`,
								transform: "translate(-50%, -50%)",
							}}
						>
							+
						</div>,
					);
				}
			}
			setIntersections(newIntersections);
		};

		if (typeof window !== "undefined") {
			calculateIntersections();
		}
	}, [hoveredIndex, windowWidth, techStack.length]);

	return (
		<div className="py-1">
			<p>Powered by robust tech stack:</p>
			<div className="relative w-full">
				<div className="absolute inset-0">{intersections}</div>
				<div
					className="relative mb-3 grid grid-cols-2 grid-rows-4 items-center justify-center md:grid-cols-4 md:grid-rows-2"
					style={{ height: totalHeight }}
				>
					{techStack.map((tech, index) => (
						<a
							key={index}
							href={tech.url}
							target="_blank"
							aria-label={tech.title}
							rel="noopener noreferrer"
							className="group relative flex h-28 items-center justify-center md:h-44"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div className="h-8 w-8 transition-all duration-300 group-hover:opacity-0">
								{Icons[tech.icon]({ className: "w-full h-full" })}
							</div>
							<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
								{hoveredIndex === index && <ScrambleText text={tech.title} />}
								{tech.status && (
									<span className="mt-1 text-primary text-xs">
										{tech.status}
									</span>
								)}
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

const ScrambleText = ({
	text,
	className = "text-2xl font-bold tracking-wide",
}: { text: string; className?: string }) => {
	const { ref } = useScramble({
		text,
		speed: 0.8,
		tick: 1,
		step: 1,
		scramble: 3,
		seed: 3,
	});

	return <span ref={ref} className={className} />;
};
