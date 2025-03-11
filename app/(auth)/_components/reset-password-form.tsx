"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { resetPasswordSchema } from "@/lib/validations/auth";
import { toast } from "sonner";
import { AssistedPasswordConfirmation } from "./assist-password-confirmation";

type Inputs = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const form = useForm<Inputs>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	// Get the password value for the animation component
	const password = form.watch("password");

	async function onSubmit(data: Inputs) {
		if (!token) {
			toast.error(
				"Invalid or missing reset token. Please request a new password reset.",
			);
			return;
		}

		setLoading(true);
		try {
			await authClient.resetPassword({
				newPassword: data.password,
				token: token,
			});
			toast.success("Password reset successfully.");
			router.push("/signin");
		} catch (error) {
			console.error("Error during password reset:", error);
			toast.error("Failed to reset password. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	if (!token) {
		return (
			<Card className="text-center">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Check Your Email</CardTitle>
					<CardDescription>
						We've sent a password reset link to your email
					</CardDescription>
				</CardHeader>
				<CardFooter className="flex justify-center">
					<Button variant="outline" asChild>
						<Link href="/forgot-password">
							<Icons.refresh className="mr-2 size-4" />
							Send new reset link
						</Link>
					</Button>
				</CardFooter>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">Reset password</CardTitle>
				<CardDescription>Enter your new password below</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>New Password</FormLabel>
									<FormControl>
										<PasswordInput
											className="tracking-[0.75em]"
											placeholder="********"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm New Password</FormLabel>
									<FormControl>
										<AssistedPasswordConfirmation
											password={password}
											value={field.value}
											onChange={field.onChange}
											placeholder="********"
											error={!!form.formState.errors.confirmPassword}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="mt-2" disabled={loading}>
							{loading && (
								<Icons.spinner
									className="mr-2 size-4 animate-spin"
									aria-hidden="true"
								/>
							)}
							Reset Password
							<span className="sr-only">Reset Password</span>
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
