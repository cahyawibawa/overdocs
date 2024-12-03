import { z } from "zod";

export const signUpFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters long" })
		.max(20, { message: "Name must be at most 20 characters long" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(30, { message: "Password must be at most 30 characters long" }),
	confirmPassword: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(30, { message: "Password must be at most 30 characters long" }),
});

export const signInFormSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(30, { message: "Password must be at most 30 characters long" }),
});

export const verifyEmailSchema = z.object({
	code: z
		.string()
		.min(6, {
			message: "Verification code must be 6 characters long",
		})
		.max(6),
})


export const resetPasswordSchema = z
	.object({
		password: signInFormSchema.shape.password,
		confirmPassword: signInFormSchema.shape.password,
		// code: verifyEmailSchema.shape.code.optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	})
