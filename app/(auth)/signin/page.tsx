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
import { OAuthSignIn } from "../_components/oauth-signin";
import { SignInForm } from "../_components/signin-form";

export default function SignInPage() {
	return (
		<Shell className="max-w-lg">
			<Card>
				<CardHeader>
					<CardTitle className="text-lg md:text-xl">
						Sign in to Overdocs
					</CardTitle>
					<CardDescription className="text-xs md:text-sm">
						Choose your preferred sign in method
					</CardDescription>
				</CardHeader>
				<CardContent className="grid gap-4">
					<OAuthSignIn />
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-background px-2 text-muted-foreground">
								Or
							</span>
						</div>
					</div>
					<SignInForm />
				</CardContent>
				<CardFooter className="flex flex-wrap items-center justify-between gap-2">
					<div className="text-[13px] text-muted-foreground">
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
						href="/forgot-password"
						className="text-[13px] text-primary underline-offset-4 transition-colors hover:underline"
					>
						Forgot password?
					</Link>
				</CardFooter>
			</Card>
		</Shell>
	);
}
