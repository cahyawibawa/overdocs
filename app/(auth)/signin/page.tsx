import { SignInForm } from "@/components/form/signin-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const metadata = {
	title: "Log In",
	description: "Log in to your account",
};
export default async function SigninPage() {
	return (
		<Card className="w-full max-w-md">
			<CardHeader className="text-center">
				<CardTitle className="text-2xl">Log In</CardTitle>
				<CardDescription>Log in to your account</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-3">
				<SignInForm />
			</CardContent>
		</Card>
	);
}
