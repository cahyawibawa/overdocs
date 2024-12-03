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
import { SignUpForm } from "../_components/signup-form";

export default function SignUpPage() {
	return (
		<Shell className="max-w-lg">
			<Card>
				<CardHeader>
					<CardTitle className="text-lg md:text-xl">
						Sign up to Overdocs
					</CardTitle>
					<CardDescription className="text-xs md:text-sm">
						Choose your preferred sign up method
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
					<SignUpForm />
				</CardContent>
				<CardFooter>
					<div className="text-muted-foreground text-sm">
						Already have an account?{" "}
						<Link
							aria-label="Sign in"
							href="/signin"
							className="text-primary underline-offset-4 transition-colors hover:underline"
						>
							Sign in
						</Link>
					</div>
				</CardFooter>
			</Card>
		</Shell>
	);
}
