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
import { SignUpForm } from "../_components/signup-form";

export default function SignUpPage() {
	return (
		<Shell className="max-w-lg">
			<Card>
				<CardHeader>
					<CardTitle className="text-lg md:text-xl">Sign Up</CardTitle>
					<CardDescription className="text-xs md:text-sm">
						Enter your email below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent>
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
