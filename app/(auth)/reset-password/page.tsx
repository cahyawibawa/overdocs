import { Shell } from "@/components/shell";
import { Suspense } from "react";
import ResetPasswordForm from "../_components/reset-password-form";

export default function ResetPasswordPage() {
	return (
		<Shell className="max-w-lg">
			<Suspense fallback={<div>Loading...</div>}>
				<ResetPasswordForm />
			</Suspense>
		</Shell>
	);
}
