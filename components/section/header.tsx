"use client";

import { NavUserHeader } from "@/components/nav-user-header";
import { Separator } from "@/components/ui/separator";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const navigationItems = [
	{ href: "#", label: "Documentation" },
	{ href: "#", label: "Blog" },
	{ href: "#", label: "Changelog" },
	{ href: "#", label: "OSS" },
	{ href: "#", label: "About" },
	{ href: "#pricing", label: "Pricing" },
];

export function Header() {
	const { data } = useSession();

	return (
		<header className="relative mt-4 mb-6 w-full">
			<div className="grid w-full grid-cols-[auto_1fr] grid-rows-1 md:grid-rows-2 md:gap-3 lg:grid-rows-1">
				<Link
					aria-label="Home"
					href="/"
					className="col-start-1 col-end-2 flex size-7 items-center rounded-full text-primary lg:hidden"
				>
					<div className="size-6 rounded-full bg-primary"></div>
				</Link>
				<div className="group col-start-2 col-end-3 flex items-center justify-end gap-1.5 lg:row-start-1 lg:gap-3">
					{data?.session ? (
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								<span className="font-semibold text-primary transition-colors hover:text-foreground">
									<Link href="/dashboard">Dashboard</Link>
								</span>
							</div>
							<NavUserHeader />
						</div>
					) : (
						<div className="flex items-center gap-1">
							<div className="flex items-center gap-1">
								<span className="font-semibold text-primary transition-colors hover:text-foreground">
									<Link href="/signin">Sign in</Link>
								</span>
							</div>
							<Separator
								orientation="vertical"
								className="mx-2 inline-block h-4 align-middle"
							/>
							<div className="flex items-center gap-1">
								<span className="font-semibold text-primary">
									<Link href="/signup">Get started</Link>
								</span>
							</div>
						</div>
					)}
				</div>
				<div className="col-start-1 col-end-3 flex items-center gap-x-3 lg:col-end-2 lg:row-start-1">
					<Link
						aria-label="Home"
						href="/"
						className="col-start-1 col-end-2 hidden size-6 items-center rounded-full text-primary lg:flex"
					>
						<div className="size-6 rounded-full bg-primary"></div>
					</Link>
					<nav aria-label="main-nav" className="hidden items-center md:flex">
						<ul className="flex flex-wrap gap-x-1 md:flex-wrap">
							{navigationItems.map((item, index) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="font-semibold text-foreground"
									>
										{item.label}
									</Link>
									{index < navigationItems.length - 1 && (
										<Separator
											orientation="vertical"
											className="mx-2 inline-block h-4 align-middle"
										/>
									)}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
			<details className="mt-6 md:hidden">
				<summary className="font-semibold text-primary">Navigation</summary>
				<nav className="dashed-box mt-1 p-6">
					<ul className="flex flex-wrap gap-x-1 md:flex-nowrap">
						{navigationItems.map((item, index) => (
							<li key={item.label}>
								<Link
									href={item.href}
									className="font-semibold text-primary transition hover:text-foreground"
								>
									{item.label}
								</Link>
								{index < navigationItems.length - 1 && (
									<Separator
										orientation="vertical"
										className="mx-2 inline-block h-4 align-middle"
									/>
								)}
							</li>
						))}
					</ul>
				</nav>
			</details>
		</header>
	);
}
