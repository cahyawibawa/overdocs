import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "./db";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
	}),
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
			redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/github`,
		},
	},
});
