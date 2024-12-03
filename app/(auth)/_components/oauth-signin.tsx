"use client";

import * as React from "react";
import { toast } from "sonner";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const oauthProviders = [
	{ name: "GitHub", provider: "github", icon: "gitHub" },
	{ name: "Google", provider: "google", icon: "google" },
	// { name: "Discord", provider: "discord", icon: "discord" },
	// { name: "Facebook", provider: "facebook", icon: "facebook" },
] as const;

type OAuthProvider = (typeof oauthProviders)[number]["provider"];

export function OAuthSignIn() {
	const [loading, setLoading] = React.useState<OAuthProvider | null>(null);

	async function oauthSignIn(provider: OAuthProvider) {
		try {
			setLoading(provider);
			const result = await authClient.signIn.social({
				provider: provider,
				callbackURL: "/dashboard", // Adjust this as needed
			});

			if (result.error) {
				throw new Error(result.error.message);
			}

			// Handle successful sign-in
			toast.success(`Signed in with ${provider} successfully`);
		} catch (err) {
			console.error(err);
			toast.error(`Failed to sign in with ${provider}`);
		} finally {
			setLoading(null);
		}
	}

	return (
		<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
			{oauthProviders.map((provider) => {
				const Icon = Icons[provider.icon];

				return (
					<Button
						key={provider.provider}
						variant="outline"
						size="icon"
						className="w-full bg-background"
						onClick={() => void oauthSignIn(provider.provider)}
						disabled={loading !== null}
					>
						{loading === provider.provider ? (
							<Icons.spinner
								className="size-4 animate-spin"
								aria-hidden="true"
							/>
						) : (
							<Icon className="size-4" aria-hidden="true" />
						)}
						{/* {provider.name} */}
						<span className="sr-only">{provider.name}</span>
					</Button>
				);
			})}
		</div>
	);
}
