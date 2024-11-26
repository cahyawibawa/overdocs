import db from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import { cache } from "react";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
		async sendResetPassword(data, request) {
			// Send an email to the user with a link to reset their password
		},
	},
	plugins: [nextCookies()],
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
			redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/github`,
		},
	},
});

export const getSession = cache(async () => {
	return await auth.api.getSession({
		headers: await headers(),
	});
});
