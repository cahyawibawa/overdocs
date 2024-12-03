"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { Icons } from "@/components/icons";
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
import { toast } from "sonner";

type Inputs = Pick<z.infer<typeof signInFormSchema>, "email">;

export function ForgetPasswordForm() {
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();

	const form = useForm<Inputs>({
		resolver: zodResolver(signInFormSchema.pick({ email: true })),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(data: Inputs) {
		setLoading(true);
		try {
			await authClient.forgetPassword({
				email: data.email,
				redirectTo: "/reset-password",
			});
			toast.success("Password reset email sent. Please check your inbox.");
			router.push("/reset-password");
		} catch (error) {
			toast.error("Failed to send reset password email. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" placeholder="you@example.com" {...field} />
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
					Send Reset Link
					<span className="sr-only">Send Reset Link</span>
				</Button>
			</form>
		</Form>
	);
}
