import { ActiveThemeProvider } from "@/components/active-theme";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";

import { Toaster } from "sonner";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { fontVariables } from "@/lib/fonts";

import "@/styles/globals.css";

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

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const activeThemeValue = cookieStore.get("active_theme")?.value;
	const isScaled = activeThemeValue?.endsWith("-scaled");

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
					}}
				/>
			</head>
			<body
				className={cn(
					"overscroll-none bg-background font-sans antialiased",
					activeThemeValue ? `theme-${activeThemeValue}` : "",
					isScaled ? "theme-scaled" : "",
					fontVariables,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
					enableColorScheme
				>
					<ActiveThemeProvider initialTheme={activeThemeValue}>
						{children}
					</ActiveThemeProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
