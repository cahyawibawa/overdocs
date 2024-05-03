import type { ValidIcon } from "@/components/icons";

export type Page = {
  title: string;
  description: string;
  href: string;
  icon: ValidIcon;
  disabled?: boolean;
  segment: string;
  children?: Page[];
};
export const marketingPagesConfig = [
  {
    href: "/blog",
    title: "Blog",
    description: "All the latest articles and news from OpenStatus.",
    segment: "blog",
    icon: "book",
  },
  {
    href: "/play",
    title: "Playground",
    description: "All the latest tools build by OpenStatus.",
    segment: "play",
    icon: "toy-brick",
  },
  {
    href: "/changelog",
    title: "Changelog",
    description: "All the latest features, fixes and work to OpenStatus.",
    segment: "changelog",
    icon: "newspaper",
  },
  {
    href: "/pricing",
    title: "Pricing",
    description: "The pricing for OpenStatus.",
    segment: "pricing",
    icon: "credit-card",
  },
  {
    href: "https://docs.openstatus.dev",
    description: "The documentation for OpenStatus.",
    title: "Docs",
    segment: "docs",
    icon: "book",
  },
] as const satisfies readonly Page[];