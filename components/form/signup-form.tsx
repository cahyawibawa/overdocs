/* eslint-disable react-hooks/exhaustive-deps */
"use client";

// import {
// 	createGithubAuthorizationURL,
// 	createGoogleAuthorizationURL,
// 	resendVerificationEmail,
// 	signUp,
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
import { signUp } from "@/lib/auth-client";
import { formSchema } from "@/lib/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCountdown } from "usehooks-ts";
import type { z } from "zod";
import { Icons } from "../icons";
import { PasswordInput } from "../password-input";

export function SignUpForm() {
	const [loading, setLoading] = useState(false);
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
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const { name, email, password } = values;
		const { data, error } = await signUp.email(
			{
				email,
				password,
				name,
				callbackURL: "/sign-in",
			},
			{
				onRequest: () => {
					toast("Signing up...");
				},
				onSuccess: () => {
					form.reset();
				},
				onError: (ctx) => {
					alert(ctx.error.message);
				},
			},
		);
		// setLoading(true);
		// const res = await signUp(values);
		// startCountdown();
		// setLoading(false);
		// if (res.error) {
		// 	toast(res.error);
		// } else if (res.success) {
		// 	toast(
		// 		"We've sent an verification email to your inbox. Please verify your email to continue.",
		// 	);
		// 	setShowResendVerificationEmail(true);
		// }

		console.log(values);
	}

	// const onResendVerificationEmail = async () => {
	// 	const res = await resendVerificationEmail(form.getValues("email"));
	// 	if (res.error) {
	// 		toast(res.error);
	// 	} else if (res.success) {
	// 		toast(res.success);
	// 		startCountdown();
	// 	}
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
		<>
			{/* <Button
				variant="outline"
				className="w-full px-5"
				disabled
			>
				<Icons.google className="mr-2 size-4" />
				Sign up with Google
			</Button>
			<Button
				variant="outline"
				className="w-full px-5"
				disabled
			>
				<Icons.github className="mr-2 size-4" />
				Sign up with Github
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
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="name" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
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
							<Link href={"/signin"}>Already signed up? Sign in</Link>
						</Button>
					</div>
					<Button type="submit" disabled={loading}>
						{loading ? (
							<Loader className="mr-2 size-4 animate-spin" />
						) : (
							"Sign Up"
						)}
					</Button>
				</form>
				{/* {showResendVerificationEmail && (
					<Button
						disabled={count > 0 && count < 60}
						onClick={onResendVerificationEmail}
						variant="link"
						size="sm"
						className="p-0"
					>
						Send Verification email {count > 0 && count < 60 && `in ${count}s`}
					</Button>
				)} */}
			</Form>
		</>
	);
}
