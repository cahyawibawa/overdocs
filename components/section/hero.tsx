import { siteConfig } from "@/config/site";

export function Hero() {
	return (
		<div className="mt-6 flex flex-col gap-y-3">
			<div>
				<h1 className="font-medium text-foreground">
					The SaaS Starter You Need
				</h1>
				<p>
					Overdocs is a robust foundation for your product launch, built with
					focus on{" "}
					<a
						data-discover="true"
						href="#performance"
						className="border-b border-dashed text-primary underline-offset-2 hover:underline"
					>
						performance
					</a>
					, scalability, and security in mind.
				</p>{" "}
				<p>
					Deploy on{" "}
					<a
						rel="noreferrer"
						target="_blank"
						className="border-b border-dashed text-primary underline-offset-2 hover:underline"
						href={siteConfig.links.deploy}
					>
						Vercel
					</a>{" "}
					today and star us on{" "}
					<a
						rel="noreferrer"
						target="_blank"
						className="border-b border-dashed text-primary underline-offset-2 hover:underline"
						href={siteConfig.links.github}
					>
						GitHub.
					</a>
				</p>
			</div>
		</div>
	);
}
