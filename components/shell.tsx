import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const shellVariants = cva("grid my-6 items-center px-5 lg:px-12", {
	variants: {
		variant: {
			default: "container",
			sidebar: "",
			centered: "container flex h-dvh max-w-2xl flex-col justify-center",
			markdown: "container max-w-3xl py-8 md:py-10",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface ShellProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof shellVariants> {
	as?: React.ElementType;
}

function Shell({
	className,
	as: Comp = "section",
	variant,
	...props
}: ShellProps) {
	return (
		<Comp className={cn(shellVariants({ variant }), className)} {...props} />
	);
}

export { Shell, shellVariants };
