import ResetPasswordEmail from "@/components/emails/reset-password-email";
import VerificationEmail from "@/components/emails/verification-email";
import db from "@/db";
import { resend } from "@/lib/resend";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { headers } from "next/headers";
import { cache } from "react";

const from = process.env.RESEND_DOMAIN || "onboarding@resend.dev";

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
					from: `"no-reply" <no-reply@${process.env.RESEND_DOMAIN}>`,
					to: user.email,
					subject: "Reset Your Password",
					react: ResetPasswordEmail({ url }),
				});
				console.log(`Reset password email sent to ${user.email}`);
			} catch (error) {
				console.error("Failed to send reset password email:", error);
			}
		},
		plugins: [nextCookies()],
	},
	emailVerification: {
		autoSignInAfterVerification: true,
		sendOnSignUp: true,
		sendVerificationEmail: async ({ user, url }) => {
			try {
				const result = await resend.emails.send({
					from: `"no-reply" <no-reply@${process.env.RESEND_DOMAIN}>`,
					to: user.email,
					subject: "Verify Your Email",
					react: VerificationEmail({ url }),
				});
				console.log(`Verification email sent to ${user.email}`, result);
			} catch (error) {
				console.error("Failed to send verification email:", error);
				if (error instanceof Error) {
					console.error("Error details:", error.message);
				}
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
	},
});

export const getSession = cache(async () => {
	return await auth.api.getSession({
		headers: await headers(),
	});
});
