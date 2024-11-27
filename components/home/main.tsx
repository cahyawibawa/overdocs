"use client";

import { Shell } from "@/components/shell";
import { Content } from "./content";
import Header from "./header";
import { Hero } from "./hero";
import { Quotes } from "./quotes";
import { TechStack } from "./tech-stack";

export default function HomePage() {
	return (
		<Shell className="mb-16 max-w-7xl font-mono">
			<Header />
			<Hero />
			<TechStack />
			<Quotes />
			<Content />
		</Shell>
	);
}
