"use client";

import * as React from "react";

import { NavMain } from "@/components/layout/sidenav/nav-main";
import { NavProjects } from "@/components/layout/sidenav/nav-projects";
import { NavOverview } from "@/components/layout/sidenav/nav-overview";
import { NavUser } from "@/components/layout/sidenav/nav-user";
import { TeamSwitcher } from "@/components/layout/sidenav/team-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { sidebarConfig } from "@/config/sidebar.config";
import { user } from "@/constants/data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { overview, teams, navMain, projects } = sidebarConfig;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavOverview title="Overview" navItems={overview} />
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
