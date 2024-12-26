"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const links = [
  {
    name: "All Charts",
    href: "/dashboard/charts",
  },
  {
    name: "Area Chart",
    href: "/dashboard/charts#area-chart",
  },
  {
    name: "Bar Chart",
    href: "/dashboard/charts#bar-chart",
  },
  {
    name: "Line Chart",
    href: "/dashboard/charts#line-chart",
  },
  {
    name: "Pie Chart",
    href: "/dashboard/charts#pie-chart",
  },
  {
    name: "Radar Chart",
    href: "/dashboard/charts#radar-chart",
  },
  {
    name: "Radial Chart",
    href: "/dashboard/charts#radial-chart",
  },
  {
    name: "Tooltip",
    href: "/dashboard/charts#tooltip",
  },
];

export function ChartsNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname();

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className={cn("flex items-center", className)} {...props}>
        {links.map((example, index) => (
          <Link
            href={example.href}
            key={example.href}
            className={cn(
              "flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith(example.href) ||
                (index === 0 && pathname === "/dashboard/charts")
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
