import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import LocalFont from "next/font/local";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

const satoshi = LocalFont({
	src: "../fonts/Satoshi-Variable.ttf",
	variable: "--font-satoshi",
});

export const fontVariables = cn(
	geistSans.variable,
	geistMono.variable,
	satoshi.variable,
);
