"use client";

import { Shell } from "@/components/shell";
import Header from "./header";
import { Hero } from "./hero";
import { Quotes } from "./quotes";
import { TechStack } from "./tech-stack";

export default function HomePage() {
	return (
		<Shell className="max-w-7xl font-mono">
			<Header />
			<Hero />
			<TechStack />
			<Quotes />
		</Shell>
	);
}
