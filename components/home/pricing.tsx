"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

export type PlanLevel = "starter" | "pro" | "all" | string;

export interface PricingFeature {
	name: string;
	included: PlanLevel | null;
}

export interface PricingPlan {
	name: string;
	level: PlanLevel;
	price: {
		monthly: number;
		yearly: number;
	};
	popular?: boolean;
}

export interface PricingTableProps
	extends React.HTMLAttributes<HTMLDivElement> {
	features: PricingFeature[];
	plans: PricingPlan[];
	onPlanSelect?: (plan: PlanLevel) => void;
	defaultPlan?: PlanLevel;
	defaultInterval?: "monthly" | "yearly";
	containerClassName?: string;
	buttonClassName?: string;
}

export function PricingTable({
	features,
	plans,
	onPlanSelect,
	defaultPlan = "pro",
	defaultInterval = "monthly",
	className,
	containerClassName,
	buttonClassName,
	...props
}: PricingTableProps) {
	const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly");
	const [selectedPlan, setSelectedPlan] =
		React.useState<PlanLevel>(defaultPlan);

	const handlePlanSelect = (plan: PlanLevel) => {
		setSelectedPlan(plan);
		onPlanSelect?.(plan);
	};

	return (
		<section
			className={cn(
				"bg-background text-foreground",
				"px-1",
				"fade-bottom overflow-hidden pb-0",
			)}
		>
			<div className={cn("mx-auto w-full", containerClassName)} {...props}>
				<h2 id="pricing" className="text-primary">
					Pricing
				</h2>
				<div className="mb-4 flex justify-end sm:mb-8">
					<div className="inline-flex items-center gap-2 text-xs sm:text-sm">
						<button
							type="button"
							onClick={() => setIsYearly(false)}
							className={cn(
								"rounded-md px-3 py-1 transition-colors",
								!isYearly ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500",
							)}
						>
							Monthly
						</button>
						<button
							type="button"
							onClick={() => setIsYearly(true)}
							className={cn(
								"rounded-md px-3 py-1 transition-colors",
								isYearly ? "bg-zinc-100 dark:bg-zinc-800" : "text-zinc-500",
							)}
						>
							Yearly
						</button>
					</div>
				</div>

				<div className="mb-8 flex flex-col gap-4 sm:flex-row">
					{plans.map((plan) => (
						<button
							key={plan.name}
							type="button"
							onClick={() => handlePlanSelect(plan.level)}
							className={cn(
								"flex-1 rounded-xl p-4 text-left transition-all",
								"border border-zinc-200 dark:border-zinc-800",
								selectedPlan === plan.level &&
									"ring-2 ring-blue-500 dark:ring-blue-400",
							)}
						>
							<div className="mb-2 flex items-center justify-between">
								<span className="font-medium text-sm">{plan.name}</span>
								{plan.popular && (
									<span className="rounded-full bg-blue-100 px-2 py-1 text-blue-600 text-xs dark:bg-blue-900 dark:text-blue-300">
										Popular
									</span>
								)}
							</div>
							<div className="flex items-baseline gap-1">
								<NumberFlow
									format={{
										style: "currency",
										currency: "USD",
										trailingZeroDisplay: "stripIfInteger",
									}}
									value={isYearly ? plan.price.yearly : plan.price.monthly}
									className="font-bold text-2xl"
								/>
								<span className="font-normal text-sm text-zinc-500">
									/{isYearly ? "year" : "month"}
								</span>
							</div>
						</button>
					))}
				</div>

				<div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
					<div className="no-scrollbar overflow-x-auto">
						<div className="min-w-[640px] divide-y divide-zinc-200 dark:divide-zinc-800">
							<div className="flex items-center bg-zinc-50 p-4 dark:bg-zinc-900">
								<div className="flex-1 font-medium text-sm">Features</div>
								<div className="flex items-center gap-8 text-sm">
									{plans.map((plan) => (
										<div
											key={plan.level}
											className="w-16 text-center font-medium"
										>
											{plan.name}
										</div>
									))}
								</div>
							</div>
							{features.map((feature) => (
								<div
									key={feature.name}
									className={cn(
										"flex items-center p-4 transition-colors",
										feature.included === selectedPlan &&
											"bg-blue-50/50 dark:bg-blue-900/20",
									)}
								>
									<div className="flex-1 text-sm">{feature.name}</div>
									<div className="flex items-center gap-8 text-sm">
										{plans.map((plan) => (
											<div
												key={plan.level}
												className={cn(
													"flex w-16 justify-center",
													plan.level === selectedPlan && "font-medium",
												)}
											>
												{shouldShowCheck(feature.included, plan.level) ? (
													<CheckIcon className="h-5 w-5 text-blue-500" />
												) : (
													<span className="text-zinc-300 dark:text-zinc-700">
														-
													</span>
												)}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mt-8 text-center">
					<Button
						className={cn(
							"mt-2 cursor-pointer rounded-xl border border-zinc-950/40 border-b-2 bg-gradient-to-t from-blue-600 to-blue-500/85 text-white shadow-md shadow-zinc-950/20 ring-1 ring-white/25 ring-inset transition-all duration-200 hover:brightness-110 active:brightness-90 dark:border-zinc-950/50 dark:border-x-0 dark:border-t-0 dark:ring-white/5",
							buttonClassName,
						)}
					>
						Get started with {plans.find((p) => p.level === selectedPlan)?.name}
						<ArrowRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</div>
		</section>
	);
}

function shouldShowCheck(
	included: PricingFeature["included"],
	level: string,
): boolean {
	if (included === "all") return true;
	if (included === "pro" && (level === "pro" || level === "all")) return true;
	if (
		included === "starter" &&
		(level === "starter" || level === "pro" || level === "all")
	)
		return true;
	return false;
}
