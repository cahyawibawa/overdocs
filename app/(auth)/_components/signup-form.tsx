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
import { signUp } from "@/lib/auth-client";
import { signUpFormSchema } from "@/lib/validations/auth";

type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export function SignUpForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(values: SignUpFormValues) {
		if (values.password !== values.confirmPassword) {
			form.setError("confirmPassword", {
				type: "manual",
				message: "Passwords do not match",
			});
			return;
		}

		setIsLoading(true);
		try {
			const result = await signUp.email({
				name: values.name,
				email: values.email,
				password: values.password,
				callbackURL: "/dashboard",
			});

			if (result.error) {
				if (result.error.message?.includes("email already exists")) {
					form.setError("email", {
						type: "manual",
						message: "This email is already in use. Please try another one.",
					});
					toast.error(
						"Email already in use. Please use a different email address.",
					);
				} else {
					throw new Error(result.error.message);
				}
			} else {
				form.reset();
				toast.success(
					"Account created successfully. Please check your email to verify your account.",
				);
				router.push("/signin");
			}
		} catch (error: any) {
			toast.error(
				error.message || "Failed to create account. Please try again.",
			);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									type="text"
									required
									placeholder="tyler durden"
									{...field}
								/>
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
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<PasswordInput placeholder="********" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="mt-2" disabled={isLoading}>
					{isLoading && (
						<Icons.spinner
							className="mr-2 size-4 animate-spin"
							aria-hidden="true"
						/>
					)}
					Sign up
					<span className="sr-only">Sign up</span>
				</Button>
			</form>
		</Form>
	);
}
