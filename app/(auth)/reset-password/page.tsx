"use client";
import { ResetPasswordForm } from "@/app/(auth)/_components/reset-password-form";
import { Shell } from "@/components/shell";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	if (!token) {
		return <div>Loading...</div>;
	}

	return (
		<Shell className="max-w-lg">
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Reset password</CardTitle>
					<CardDescription>
						Enter your email address and we will send you a verification code
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ResetPasswordForm params={{ token }} />
				</CardContent>
			</Card>
		</Shell>
	);
}
