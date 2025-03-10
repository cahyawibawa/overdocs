import { cn } from "@/lib/utils";
import { RiArrowRightDownLine, RiArrowRightUpLine } from "@remixicon/react";

interface StatsCardProps {
	title: string;
	value: string;
	change: {
		value: string;
		trend: "up" | "down";
	};
	icon: React.ReactNode;
}

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
	const isPositive = change.trend === "up";
	const trendColor = isPositive ? "text-blue-500" : "text-red-500";

	return (
		<div className="group relative p-4 before:absolute before:inset-y-8 before:right-0 before:w-px before:bg-gradient-to-b before:from-input/30 before:via-input before:to-input/30 last:before:hidden lg:p-5">
			<div className="relative flex items-center gap-4">
				<RiArrowRightUpLine
					className="absolute top-0 right-0 text-blue-500 opacity-0 transition-opacity group-has-[a:hover]:opacity-100"
					size={20}
					aria-hidden="true"
				/>
				{/* Icon */}
				<div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-blue-600/50 bg-blue-600/25 text-blue-500 max-[480px]:hidden">
					{icon}
				</div>
				{/* Content */}
				<div>
					<a
						href="#"
						className="font-medium text-muted-foreground/60 text-xs uppercase tracking-widest before:absolute before:inset-0"
					>
						{title}
					</a>
					<div className="mb-2 font-semibold text-2xl">{value}</div>
					<div className="text-muted-foreground/60 text-xs">
						<span className={cn("font-medium", trendColor)}>
							{isPositive ? "↗" : "↘"} {change.value}
						</span>{" "}
						vs last week
					</div>
				</div>
			</div>
		</div>
	);
}

interface StatsGridProps {
	stats: StatsCardProps[];
}

export function StatsGrid({ stats }: StatsGridProps) {
	return (
		<div className="grid grid-cols-2 rounded-xl border border-border bg-gradient-to-br from-sidebar/60 to-sidebar min-[1200px]:grid-cols-4">
			{stats.map((stat) => (
				<StatsCard key={stat.title} {...stat} />
			))}
		</div>
	);
}
