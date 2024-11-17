"use client";

import Header from "@/components/header";
import Content from "./content";
export default function HomePage() {
	return (
		<div className="font-mono">
			<Header />
			<div className="container my-6 max-w-7xl px-3 py-10 sm:px-5 lg:px-12">
				<Content />
			</div>
			{/* <SiteFooter /> */}
		</div>
	);
}
