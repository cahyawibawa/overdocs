import ResetPasswordEmail from "@/components/emails/reset-password-email";
import VerificationEmail from "@/components/emails/verification-email";
import db from "@/db";
import { resend } from "@/lib/resend";
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
		requireEmailVerification: true,
		sendResetPassword: async ({ user, url }) => {
			try {
				await resend.emails.send({
					from: "no-reply@cahyawibawa.dev",
					to: user.email,
					subject: "Reset Your Password",
					react: ResetPasswordEmail({ url }),
				});
				console.log(`Reset password email sent to ${user.email}`);
			} catch (error) {
				console.error("Failed to send reset password email:", error);
			}
		},
		plugins: [nextCookies(),],
	},
	emailVerification: {
		autoSignInAfterVerification: true,
		sendOnSignUp: true,
		sendVerificationEmail: async ({ user, url }) => {
			try {
				await resend.emails.send({
					from: "no-reply@cahyawibawa.dev",
					to: user.email,
					subject: "Verify Your Email",
					react: VerificationEmail({ url }),
				});
				console.log(`Verification email sent to ${user.email}`);
			} catch (error) {
				console.error("Failed to send verification email:", error);
			}
		},
	},
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
			redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/github`,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`,
		},
		// facebook: {
		// 	clientId: process.env.FACEBOOK_CLIENT_ID!,
		// 	clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
		// 	redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/facebook`,
		// },
		// discord: {
		// 	clientId: process.env.DISCORD_CLIENT_ID!,
		// 	clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		// 	redirectURI: `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/discord`,
		// }
	},
});

export const getSession = cache(async () => {
	return await auth.api.getSession({
		headers: await headers(),
	});
});

