import { ChartAreaInteractive } from "@/components/chart-area";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-stat";
import data from "@/config/data.json";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
	const session = await getSession();

	if (!session) {
		redirect("/signin");
	}

	return (
		<div className="@container/main flex flex-1 flex-col gap-2">
			<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
				<SectionCards />
				<div className="px-4 lg:px-6">
					<ChartAreaInteractive />
				</div>
				<DataTable data={data} />
			</div>
		</div>
	);
}
