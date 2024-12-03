"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { signOut, useSession } from "@/lib/auth-client";
import { BadgeCheck, CreditCard, Gauge, LogOut, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navigationItems = [
	{ href: "/docs", label: "Documentation" },
	{ href: "/blog", label: "Blog" },
	{ href: "/changelog", label: "Changelog" },
	{ href: "/oss", label: "OSS" },
	{ href: "/about", label: "About" },
	{ href: "/pricing", label: "Pricing" },
];

export default function Header() {
	const router = useRouter();
	const { data } = useSession();

	const handleSignOut = async () => {
		await signOut();
		router.push("/signin");
	};

	return (
		<header className="relative mt-4 mb-6 bg-background">
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
								<span className="font-semibold text-blue-600 hover:text-primary">
									<Link href="/dashboard">Dashboard</Link>
								</span>
							</div>
							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center gap-2">
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage
											src={data.user.image || ""}
											alt={data.user.name || ""}
										/>
										<AvatarFallback className="rounded-lg">
											{data.user.name?.charAt(0)}
										</AvatarFallback>
									</Avatar>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56" align="end">
									<DropdownMenuLabel className="font-normal">
										<div className="flex flex-col space-y-1">
											<p className="font-medium text-sm leading-none">
												{data.user.name}
											</p>
											<p className="text-muted-foreground text-xs leading-none">
												{data.user.email}
											</p>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem disabled>
											<Sparkles className="mr-2 h-4 w-4" />
											<span>Upgrade to Pro</span>
										</DropdownMenuItem>
										<DropdownMenuItem disabled>
											<BadgeCheck className="mr-2 h-4 w-4" />
											<span>Account</span>
										</DropdownMenuItem>
										<DropdownMenuItem disabled>
											<CreditCard className="mr-2 h-4 w-4" />
											<span>Billing</span>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href="/dashboard">
												<Gauge className="mr-2 h-4 w-4" />
												<span>Dashboard</span>
											</Link>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuItem onSelect={handleSignOut}>
										<LogOut className="mr-2 h-4 w-4" />
										<span>Log out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					) : (
						<div className="flex items-center gap-1">
							<div className="flex items-center gap-1">
								<span className="font-semibold text-primary hover:text-blue-600">
									<Link href="/signin">Sign in</Link>
								</span>
							</div>
							<Separator
								orientation="vertical"
								className="mx-2 inline-block h-4 align-middle"
							/>
							<div className="flex items-center gap-1">
								<span className="font-semibold text-blue-600">
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
										className="font-semibold text-primary transition-colors hover:text-foreground"
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
