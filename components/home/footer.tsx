interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
	external?: boolean;
}

function FooterLink({ href, children, external }: FooterLinkProps) {
	const linkProps = external
		? {
				rel: "nofollow noopener noreferrer",
				target: "_blank",
			}
		: {
				"data-discover": "true",
			};

	return (
		<a
			className="-indent-1ch block pl-1ch text-primary hover:text-foreground"
			href={href}
			{...linkProps}
		>
			{children}
		</a>
	);
}

export default function Footer() {
	return (
		<footer className="pt-12">
			<nav className="grid grid-cols-1 text-left sm:grid-cols-2 lg:grid-cols-5">
				<div className="dashed-box dashed-box-x-t sm:dashed-box-l-t lg:dashed-box-y-l p-3">
					<h2 className="font-semibold">Company</h2>
					<FooterLink href="#">About</FooterLink>
					<FooterLink href="#">Blog</FooterLink>
					<FooterLink href="#">Changelog</FooterLink>
					<FooterLink href="#">Careers</FooterLink>
				</div>
				<div className="dashed-box dashed-box-x-t lg:dashed-box-y-l p-3">
					<h2 className="font-semibold">Product</h2>
					<FooterLink href="#">Case studies</FooterLink>
					<FooterLink href="#">Studio</FooterLink>
					<FooterLink href="#">Pricing</FooterLink>
				</div>
				<div className="dashed-box dashed-box-x-t sm:dashed-box-l-t lg:dashed-box-y-l p-3">
					<h2 className="font-semibold">References</h2>
					<FooterLink href="https://planetscale.com/" external>
						Planetscale
					</FooterLink>
					<FooterLink href="https://turbopuffer.com/" external>
						turbopuffer
					</FooterLink>
				</div>
				<div className="dashed-box dashed-box-x-t lg:dashed-box-y-l p-3">
					<h2 className="font-semibold">Legal</h2>
					<FooterLink href="#">Privacy Policy</FooterLink>
					<FooterLink href="#">Terms of Service</FooterLink>
					<FooterLink href="#">Cookie Policy</FooterLink>
				</div>
				<div className="dashed-box p-3 sm:col-span-2 lg:col-span-1">
					<h2 className="font-semibold text-primary hover:text-foreground">
						Open source
					</h2>
					<FooterLink href="https://uitopia.xyz" external>
						ui/topia
					</FooterLink>
					<FooterLink href="https://github.com/cahyawibawa/overdocs" external>
						GitHub
					</FooterLink>
				</div>
			</nav>
		</footer>
	);
}
