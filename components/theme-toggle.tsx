"use client";

import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ThemeToggle({ isDropDown = false }: { isDropDown?: boolean }) {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null; // Or a loader, or whatever fallback you prefer
	}
	if (isDropDown) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50">
						<Sun className="dark:-rotate-90 size-[1.2rem] rotate-0 scale-100 stroke-neutral-600 transition-all duration-200 hover:stroke-primary dark:scale-0 dark:stroke-neutral-500 dark:hover:stroke-white" />
						<Moon className="absolute size-[1.2rem] rotate-90 scale-0 stroke-neutral-600 transition-all duration-200 hover:stroke-primary dark:rotate-0 dark:scale-100 dark:stroke-neutral-500 dark:hover:stroke-white" />
						<span className="sr-only">Toggle theme</span>
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => setTheme("light")}
					>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => setTheme("dark")}
					>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => setTheme("system")}
					>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}
	return (
		<>
			<div className="flex flex-row items-center space-x-2 rounded-full border p-1">
				<button
					className={cn(
						theme === "light"
							? "rounded-full bg-neutral-200"
							: "bg-transparent",
						"p-1",
					)}
					onClick={() => setTheme("light")}
				>
					<Sun size={18} className="stroke-1" />
				</button>

				<button
					className={cn(
						theme === "system"
							? "rounded-full bg-neutral-200 dark:bg-neutral-700"
							: "bg-transparent",
						"p-1",
					)}
					onClick={() => setTheme("system")}
				>
					<Monitor size={18} className="stroke-1" />
				</button>

				<button
					className={cn(
						theme === "dark" ? "rounded-full bg-neutral-700" : "bg-transparent",
						"p-1",
					)}
					onClick={() => setTheme("dark")}
				>
					<Moon size={18} className="stroke-1" />
				</button>
			</div>
		</>
	);
}
