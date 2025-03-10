import ContactsTable from "@/components/contact-table";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { NavHeader } from "@/components/sidebar/nav-header";
import { StatsGrid } from "@/components/stat-grid";
import { SwitcherTheme } from "@/components/switcher-theme";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { getSession } from "@/lib/auth";
import { RiScanLine } from "@remixicon/react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getSession();
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

	if (!session) {
		redirect("/signin");
	}

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar />
			<SidebarInset className="overflow-hidden px-4 md:px-6 lg:px-8">
				<header className="flex h-14 shrink-0 items-center gap-2 border-b">
					<div className="flex flex-1 items-center gap-2 px-3">
						<SidebarTrigger className="-ms-4" />
						<Separator
							orientation="vertical"
							className="mr-2 data-[orientation=vertical]:h-4"
						/>
						<NavHeader />
						<div className="ml-auto flex items-center gap-2">
							<SwitcherTheme />
						</div>
					</div>
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
