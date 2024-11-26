"use client";

import { Shell } from "@/components/shell";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SignInForm } from "../_components/signin-form";

export default function SignInPage() {
	return (
		<Shell className="max-w-lg">
			<Card>
				<CardHeader>
					<CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
					<CardDescription className="text-xs md:text-sm">
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInForm />
				</CardContent>
				<CardFooter className="flex flex-wrap items-center justify-between gap-2">
					<div className="text-muted-foreground text-sm">
						<span className="mr-1 hidden sm:inline-block">
							Don&apos;t have an account?
						</span>
						<Link
							aria-label="Sign up"
							href="/signup"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign up
						</Link>
					</div>
					<Link
						aria-label="Reset password"
						href="#"
						className="text-primary text-sm underline-offset-4 transition-colors hover:underline"
					>
						Reset password
					</Link>
				</CardFooter>
			</Card>
		</Shell>
	);
}
