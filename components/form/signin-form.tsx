/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

// import {
// 	createGithubAuthorizationURL,
// 	createGoogleAuthorizationURL,
// 	resendVerificationEmail,
// 	signIn,
// } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth-client";
import { signInFormSchema } from "@/lib/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCountdown } from "usehooks-ts";
import type { z } from "zod";
import { Icons } from "../icons";
import { PasswordInput } from "../password-input";

export function SignInForm() {
	const [count, { startCountdown, stopCountdown, resetCountdown }] =
		useCountdown({
			countStart: 60,
			intervalMs: 1000,
		});

	useEffect(() => {
		if (count === 0) {
			stopCountdown();
			resetCountdown();
		}
	}, [count]);
	const [showResendVerificationEmail, setShowResendVerificationEmail] =
		useState(false);

	const router = useRouter();
	// 1. Define your form.
	const form = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof signInFormSchema>) {
		const { email, password } = values;
		const { data, error } = await signIn.email(
			{
				email,
				password,
				callbackURL: "/dashboard",
			},
			{
				onRequest: () => {
					toast("Signing in...");
				},
				onSuccess: () => {
					form.reset();
				},
				onError: (ctx) => {
					alert(ctx.error.message);
				},
			},
		);
		// const res = await signIn(values);
		// if (res.error) {
		// 	toast(res.error);

		// 	if (res?.key === "email_not_verified") {
		// 		setShowResendVerificationEmail(true);
		// 	}
		// } else if (res.success) {
		// 	toast("Signed in successfully");

		// 	router.push("/");
		// }

		console.log(values);
	}

	// const onResendVerificationEmail = async () => {
	// 	const res = await resendVerificationEmail(form.getValues("email"));
	// 	if (res.error) {
	// 		toast(res.error);
	// 	} else if (res.success) {
	// 		toast(res.success);
	// 	}
	// 	startCountdown();
	// };
	// const onGoogleSignIn = async () => {
	// 	const res = await createGoogleAuthorizationURL();
	// 	if (res.error) {
	// 		toast(res.error);
	// 	} else if (res.success) {
	// 		window.location.href = res.data.toString();
	// 	}
	// };
	// const onGithubSignIn = async () => {
	// 	const res = await createGithubAuthorizationURL();
	// 	if (res.error) {
	// 		toast(res.error);
	// 	} else if (res.success) {
	// 		window.location.href = res.data.toString();
	// 	}
	// };

	return (
		<Fragment>
			{/* <Button
				variant="outline"
				className="w-full px-5"
				disabled
			>
				<Icons.google className="mr-2 size-4" />
				Log in with Google
			</Button>
			<Button
				disabled
				variant="outline"
				className="w-full px-5"

			>
				<Icons.github className="mr-2 size-4" />
				Log in with Github
			</Button> */}
			<div className="my-2 flex items-center">
				<div className="grow border-muted border-t" />
				<div className="mx-2 text-muted-foreground">or</div>
				<div className="grow border-muted border-t" />
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="email@example.com" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<PasswordInput placeholder="********" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-wrap justify-between">
						<Button variant={"link"} size={"sm"} className="p-0" asChild>
							<Link href={"/signup"}>
								Don&apos;t have an account? Sign up now
							</Link>
						</Button>
					</div>
					<Button type="submit">Log In</Button>
				</form>
				{/* {showResendVerificationEmail && (
					<Button
						disabled={count > 0 && count < 60}
						onClick={onResendVerificationEmail}
						variant={"link"}
						size={"sm"}
						className="p-0"
					>
						Send Verification email {count > 0 && count < 60 && `in ${count}s`}
					</Button>
				)} */}
			</Form>
		</Fragment>
	);
}
