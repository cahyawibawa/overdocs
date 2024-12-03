"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
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
import { authClient } from "@/lib/auth-client";
import { signInFormSchema } from "@/lib/validations/auth";

type SignInFormValues = z.infer<typeof signInFormSchema>;

export function SignInForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isResendingVerification, setIsResendingVerification] = useState(false);
	const [unverifiedEmail, setUnverifiedEmail] = useState<string | null>(null);
	const router = useRouter();

	const form = useForm<SignInFormValues>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function handleResendVerification() {
		if (!unverifiedEmail) return;

		setIsResendingVerification(true);
		try {
			const result = await authClient.sendVerificationEmail({
				email: unverifiedEmail,
				callbackURL: "/dashboard",
			});

			if (result.error) {
				throw new Error(result.error.message);
			}

			toast.success("Verification email sent. Please check your inbox.");
		} catch (error: any) {
			toast.error(
				error.message || "Failed to send verification email. Please try again.",
			);
		} finally {
			setIsResendingVerification(false);
		}
	}

	async function onSubmit(values: SignInFormValues) {
		setIsLoading(true);
		setUnverifiedEmail(null);

		try {
			const result = await authClient.signIn.email({
				email: values.email,
				password: values.password,
				callbackURL: "/dashboard",
			});

			if (result.error) {
				throw result.error;
			}

			form.reset();
			router.push("/dashboard");
		} catch (error: any) {
			if (error.message.includes("not found")) {
				toast.error("Email not registered. Please sign up first.");
			} else if (
				error.status === 403 &&
				error.message?.includes("not verified")
			) {
				setUnverifiedEmail(values.email);
				toast.error("Please verify your email address before signing in.");
			} else {
				toast.error("Failed to sign in. Please check your credentials.");
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									required
									placeholder="email@example.com"
									{...field}
								/>
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
				{unverifiedEmail && (
					<Button
						type="button"
						variant="outline"
						className="w-full"
						onClick={handleResendVerification}
						disabled={isResendingVerification}
					>
						{isResendingVerification && (
							<Icons.spinner
								className="mr-2 size-4 animate-spin"
								aria-hidden="true"
							/>
						)}
						Resend verification email
					</Button>
				)}
				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading && (
						<Icons.spinner
							className="mr-2 size-4 animate-spin"
							aria-hidden="true"
						/>
					)}
					Sign in
				</Button>
			</form>
		</Form>
	);
}
