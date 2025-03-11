"use client";

import { BadgeCheck, CreditCard, Gauge, LogOut, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

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
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

export function NavUserHeader() {
	const router = useRouter();
	const { data } = useSession();

	if (!data?.session) {
		return null;
	}

	const { name, email, image } = data.user;

	const handleSignOut = async () => {
		await signOut();
		router.push("/signin");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2">
				<Avatar className="h-8 w-8 rounded-lg">
					<AvatarImage src={image || ""} alt={name} />
					<AvatarFallback className="rounded-lg">
						{name?.charAt(0)}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel className="font-normal">
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">{name}</span>
						<span className="truncate text-xs">{email}</span>
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
					<Link href="/dashboard">
						<DropdownMenuItem>
							<Gauge className="mr-2 h-4 w-4" />
							<span>Dashboard</span>
						</DropdownMenuItem>
					</Link>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onSelect={handleSignOut}>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
