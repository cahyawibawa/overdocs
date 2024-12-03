import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface VerificationEmailProps {
	url: string;
	userFirstname?: string;
}

export default function VerificationEmail({
	url,
	userFirstname = "",
}: VerificationEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>Verify your email address</Preview>
			<Tailwind>
				<Body className="bg-white font-sans">
					<Container className="mx-auto px-10 py-20">
						<Section className="mt-8">
							<svg
								width="76"
								height="65"
								viewBox="0 0 76 65"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
							</svg>

							<Heading className="mb-8 text-center font-normal text-2xl">
								Verify your email address
							</Heading>

							{userFirstname && (
								<Text className="text-gray-700">Hi {userFirstname},</Text>
							)}

							<Text className="text-gray-700">
								Please click the button below to verify your email address:
							</Text>

							<Section className="mt-8 mb-8 text-center">
								<Button
									className="box-border w-full rounded-[8px] bg-zinc-950 px-[12px] py-[12px] text-center font-semibold text-white"
									href={url}
								>
									Verify Email
								</Button>
							</Section>

							<Text className="text-gray-500 text-sm">
								If you didn't request this email, you can safely ignore it.
							</Text>

							<Text className="text-gray-500 text-sm">
								Overdocs is built by{" "}
								<Link
									href="https://cahyawibawa.dev"
									className="text-blue-600 no-underline"
								>
									cahyawibawa.dev
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
