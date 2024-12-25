"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  navItems: NavItem[];
}

export function NavOverview({ title, navItems }: Props) {
  const currentPath = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{title}</SidebarGroupLabel>

      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.url}>
            <SidebarMenuButton asChild>
              <Link
                href={item.url}
                className={
                  currentPath === item.url ? "bg-primary/10 text-primary" : ""
                }
              >
                {item.icon && <item.icon />}

                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
