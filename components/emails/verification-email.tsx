import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

interface VerificationEmailProps {
	url: string;
	userFirstname?: string;
	companyName?: string;
}

export default function VerificationEmail({
	url,
	userFirstname = "",
	companyName = "Overdocs",
}: VerificationEmailProps) {
	const previewText = `Welcome to ${companyName}! Please verify your email address.`;
	return (
		<Html>
			<Head />
			<Preview>Verify your email address</Preview>
			<Tailwind>
				<Body className="mx-auto my-auto bg-white font-sans">
					<Container className="mx-auto my-10 w-[465px] p-5">
						<Section className="mt-8">
							<Img
								src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/shadcn.jpg`}
								width="40"
								height="37"
								alt="shadcn avatar"
								className="mx-auto my-0"
							/>
						</Section>
						<Heading className="mx-0 my-8 p-0 text-center font-normal text-2xl">
							Welcome to <strong>{companyName}</strong>!
						</Heading>
						<Text className="text-center">
							Please verify your email address by clicking the button below.
						</Text>
						<Section className="mt-[32px] mb-[32px] text-center">
							<Button
								className="rounded bg-[#000000] px-5 py-3 text-center font-semibold text-[12px] text-white no-underline"
								href={url}
							>
								Verify Email
							</Button>
						</Section>
						<Text className="text-sm">
							Cheers,
							<br />
							<Link
								href="https://cahyawibawa.com"
								className="text-blue-600 no-underline"
							>
								cahyawibawa.com
							</Link>
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
