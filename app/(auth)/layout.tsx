export default function AuthLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="grid min-h-screen place-items-center p-4">{children}</div>
	);
}
