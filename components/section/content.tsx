export function Content() {
	return (
		<div className="flex flex-col gap-y-3">
			<div>
				<h2 id="performance" className="font-medium text-foreground">
					Performance
				</h2>
				<div className="space-y-3">
					{[
						"Powered by Next.js for fast, modern server-side rendering.",
						"Seamless authentication with Better Auth.",
						"Neon + Drizzle ORM ensure efficient, serverless database operations.",
					].map((item, i) => (
						<ul key={i} className="flex items-center space-x-3">
							<li>* {item}</li>
						</ul>
					))}
				</div>
			</div>
			<hr className="dot-fill my-5"></hr>
			<div>
				<h2 className="font-medium text-foreground">Battery guaranteed</h2>
				<div className="space-y-3">
					{[
						"Actively maintained and follows best practices.",
						"Fully open-source and available on GitHub.",
						"Completely free for both personal and commercial use.",
					].map((item, i) => (
						<ul key={i} className="flex items-center space-x-3">
							<li>* {item}</li>
						</ul>
					))}
				</div>
			</div>
		</div>
	);
}
