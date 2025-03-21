"use client";

import { ThemeSelector } from "@/components/theme-selector";
import { ToggleMode } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function NavHeader() {
	const pathname = usePathname();
	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<NavigationMenu>
					<NavigationMenuList className="gap-2 *:data-[slot=navigation-menu-item]:h-7 **:data-[slot=navigation-menu-link]:py-1 **:data-[slot=navigation-menu-link]:font-medium">
						<NavigationMenuItem>
							<NavigationMenuLink asChild data-active={pathname === "/"}>
								<Link href="/">Home</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						{/* <NavigationMenuItem>
					<NavigationMenuLink asChild data-active={pathname === "/members"}>
						<Link href="/members">Member</Link>
					</NavigationMenuLink>
				</NavigationMenuItem> */}
						<NavigationMenuItem>
							<NavigationMenuLink asChild data-active={pathname === "/forms"}>
								<Link href="/forms">Forms</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" asChild size="sm" className="hidden sm:flex">
						<a
							href={siteConfig.links.github}
							rel="noopener noreferrer"
							target="_blank"
							className="dark:text-foreground"
						>
							GitHub
						</a>
					</Button>
					<ThemeSelector />
					<ToggleMode />
				</div>
			</div>
		</header>
	);
}
