import { siteConfig } from "@/config/site";
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
	baseUrl?: string;
	userFirstname?: string;
	companyName?: string;
	imageUrl?: string;
}

export default function VerificationEmail({
	url,
	baseUrl,
	userFirstname = "",
	companyName = siteConfig.name,
	imageUrl,
}: VerificationEmailProps) {
	baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	imageUrl = imageUrl || `${baseUrl}/vercel.svg`;
	const previewText = `Welcome to ${companyName}! Please verify your email address.`;
	return (
		<Html>
			<Head>
				<meta name="x-apple-disable-message-reformatting" />
				<meta content="light dark" name="color-scheme" />
				<meta content="light dark" name="supported-color-schemes" />

				<style type="text/css">
					{`
                        :root {
                            color-scheme: light dark;
                            supported-color-schemes: light dark;
                        }
                    `}
				</style>

				<style type="text/css">
					{`      
                        html, body {
                            background-color: #ffffff;
                            color: #000000;
                        }

                        a {
                            color: #000000;
                        }

                        .border-color {
                            border-color: #eaeaea;
                        }

                        .action-button {
                            background-color: #000000 !important;
                            color: #ffffff !important;
                        }

                        @media (prefers-color-scheme: dark) {
                            html, body {
                                background-color: #000000 !important;
                                color: #ffffff !important;
                            }

                            a {
                                color: #ffffff;
                            }

                            .border-color {
                                border-color: #333333 !important;
                            }

                            .action-button {
                                background-color: rgb(38, 38, 38) !important;
                                color: #ffffff !important;
                            }
                        }
                    `}
				</style>
			</Head>
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="mx-auto my-auto bg-white font-sans">
					<Container className="mx-auto my-[40px] max-w-[465px] rounded border border-color border-solid p-5">
						<Section className="mt-8">
							<Img
								alt={companyName}
								className="mx-auto my-0 rounded-full"
								height="40"
								src={imageUrl}
								width="40"
							/>
						</Section>
						<Heading className="mx-0 my-8 p-0 text-center font-normal text-2xl">
							Welcome to <strong>{companyName}</strong>!
						</Heading>

						{userFirstname && (
							<Text className="text-sm leading-6">Hi {userFirstname},</Text>
						)}
						<Text className="text-sm leading-6">
							Please verify your email address by clicking the button below.
						</Text>
						<Section className="my-8 text-center">
							<Button
								className="action-button rounded px-5 py-3 text-center font-semibold text-xs no-underline"
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
