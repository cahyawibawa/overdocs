export const Hero = () => {
	return (
		<div className="flex flex-col gap-y-3">
			<div>
				<h1 className="text-primary">The SaaS Starter You Need</h1>
				<p>
					Overdocs is a robust foundation for your product launch, built with
					simplicity, scalability, and security in mind.
				</p>{" "}
				<p>
					Deploy on{" "}
					<a
						rel="noreferrer"
						target="_blank"
						className="border-b border-dashed underline-offset-2 hover:underline"
						href="https://vercel.com"
					>
						Vercel
					</a>{" "}
					today and star us on{" "}
					<a
						rel="noreferrer"
						target="_blank"
						className="border-b border-dashed underline-offset-2 hover:underline"
						href="https://github.com/cahyawibawa/overdocs"
					>
						GitHub.
					</a>
				</p>
			</div>
		</div>
	);
};
