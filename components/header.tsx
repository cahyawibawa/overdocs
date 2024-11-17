import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const navigationItems = [
	{ href: "/docs", label: "Documentation" },
	{ href: "/blog", label: "Blog" },
	{ href: "/changelog", label: "Changelog" },
	{ href: "/oss", label: "OSS" },
	{ href: "/about", label: "About" },
	{ href: "/pricing", label: "Pricing" },
];

export default function Header() {
	return (
		<header className="relative mt-8 mb-6 bg-background">
			<div className="container flex max-w-7xl flex-col gap-y-3 px-3 sm:px-5">
				<div className="grid w-full grid-cols-[auto_1fr] grid-rows-1 md:grid-rows-2 md:gap-3 lg:grid-rows-1">
					<Link
						aria-label="Home"
						href="/"
						className="col-start-1 col-end-2 flex size-7 items-center rounded-full text-primary lg:hidden"
					>
						{/* your logo */}
						<div className="size-6 rounded-full bg-primary"></div>
					</Link>
					<div className="group col-start-2 col-end-3 flex items-center justify-end gap-1.5 lg:row-start-1 lg:gap-3">
						<div className="flex items-center gap-1">
							<button className="flex items-center gap-1">
								<span className="font-semibold text-primary hover:text-orange-600">
									Sign in
								</span>
							</button>
							<Separator
								orientation="vertical"
								className="mx-2 inline-block h-4 align-middle"
							/>
							<button className="flex items-center gap-1">
								<span className="font-semibold text-orange-600">
									Get started
								</span>
							</button>
						</div>
					</div>
					<div className="col-start-1 col-end-3 flex items-center gap-x-3 lg:col-end-2 lg:row-start-1">
						<Link
							aria-label="Home"
							href="/"
							className="col-start-1 col-end-2 hidden size-6 items-center rounded-full text-primary lg:flex"
						>
							<div className="size-6 rounded-full bg-primary"></div>
							{/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 40 40">
                <path
                  fill="currentColor"
                  d="M0 20C0 8.954 8.954 0 20 0c8.121 0 15.112 4.84 18.245 11.794l-26.45 26.45a20 20 0 0 1-3.225-1.83L24.984 20H20L5.858 34.142A19.94 19.94 0 0 1 0 20M39.999 20.007 20.006 40c11.04-.004 19.99-8.953 19.993-19.993"
                />
              </svg> */}
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
				<details className="md:hidden">
					<summary>Navigation</summary>
					<nav className="dashed-box mt-1 p-6">
						<ul className="flex flex-wrap gap-x-1 md:flex-nowrap">
							{navigationItems.map((item, index) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="font-semibold text-gray-200 transition hover:text-foreground"
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
			</div>
		</header>
	);
}
