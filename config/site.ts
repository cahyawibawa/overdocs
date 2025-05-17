export const siteConfig = {
	name: "whelve",
	url: "https://whelve.vercel.app/",
	ogImage: "https://whelve.vercel.app/opengraph-image.png",
	description: "A minimalisted SaaS templates with Next.js 15 and Better Auth.",
	links: {
		github: "https://github.com/cahyawibawa/whelve",
		deploy:
			"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcahyawibawa%2Fwhelve",
	},
	keywords: [
		"Next.js",
		"Drizzle",
		"Neon",
		"Better Auth",
		"shadcn ui",
		"Resend",
		"Stripe",
		"SaaS",
		"Boilerplate",
	],
};

export type SiteConfig = typeof siteConfig;
