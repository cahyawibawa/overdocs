"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavHeader() {
	const pathname = usePathname();

	return (
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
	);
}
