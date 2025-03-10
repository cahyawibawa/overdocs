import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import LocalFont from "next/font/local";
import { Toaster } from "sonner";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import "./globals.css";

const geist = Geist({
	variable: "--font-geist",
	subsets: ["latin"],
});

const serverMono = LocalFont({
	src: "../fonts/ServerMono-Regular.otf",
	variable: "--font-server-mono",
});

const META_THEME_COLORS = {
	light: "#ffffff",
	dark: "#09090b",
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [
		{
			name: "cahya",
			url: "https://cahyawibawa.com",
		},
	],
	creator: "cahya",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@kyuotaka",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
	themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					serverMono.variable,
					geist.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative flex min-h-svh flex-col bg-background px-4">
						{children}
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
