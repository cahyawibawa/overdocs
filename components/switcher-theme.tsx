"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { META_THEME_COLORS, useMetaColor } from "@/hooks/use-meta-color";

export function SwitcherTheme() {
	const { setTheme, resolvedTheme } = useTheme();
	const { setMetaColor } = useMetaColor();

	const toggleTheme = React.useCallback(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
		setMetaColor(
			resolvedTheme === "dark"
				? META_THEME_COLORS.light
				: META_THEME_COLORS.dark,
		);
	}, [resolvedTheme, setTheme, setMetaColor]);

	return (
		<Button
			variant="ghost"
			className="group/toggle h-8 w-8 px-0"
			onClick={toggleTheme}
		>
			<SunIcon className="hidden [html.dark_&]:block" />
			<MoonIcon className="hidden [html.light_&]:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
