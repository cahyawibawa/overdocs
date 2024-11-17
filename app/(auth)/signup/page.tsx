import { SignUpForm } from "@/components/form/signup-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const metadata = {
	title: "Sign Up",
	description: "Sign up to your account",
};
export default function SignupPage() {
	return (
		<Card className="w-full max-w-md">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">Create your account</CardTitle>
				<CardDescription>Sign up to get started</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				<SignUpForm />
			</CardContent>
		</Card>
	);
}
