import { z } from "zod";

export const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name must be at least 2 characters long" })
		.max(20, { message: "Name must be at most 20 characters long" }),
	email: z.string().email({ message: "Invalid email address" }),

	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(30, { message: "Password must be at most 30 characters long" }),
});

export const signInFormSchema = formSchema.pick({
	email: true,
	password: true,
});
