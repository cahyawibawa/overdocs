"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { signIn } from "@/lib/auth-client";
import { signInFormSchema } from "@/lib/validations/auth";

type SignInFormValues = z.infer<typeof signInFormSchema>;

export function SignInForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<SignInFormValues>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: SignInFormValues) {
		setIsLoading(true);
		try {
			await signIn.email({
				email: values.email,
				password: values.password,
				callbackURL: "/dashboard",
			});
			form.reset();
			toast.success("Signed in successfully");
		} catch (error) {
			toast.error("Failed to sign in. Please try again.");
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

				<Button type="submit" className="mt-2" disabled={isLoading}>
					{isLoading && (
						<Icons.spinner
							className="mr-2 size-4 animate-spin"
							aria-hidden="true"
						/>
					)}
					Sign in
					<span className="sr-only">Sign in</span>
				</Button>
			</form>
		</Form>
	);
}
