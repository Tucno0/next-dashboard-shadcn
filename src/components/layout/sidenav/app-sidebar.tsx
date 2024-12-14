"use client"

import * as React from "react"

import { NavMain } from "@/components/layout/sidenav/nav-main"
import { NavProjects } from "@/components/layout/sidenav/nav-projects"
import { NavUser } from "@/components/layout/sidenav/nav-user"
import { TeamSwitcher } from "@/components/layout/sidenav/team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { sidebarConfig } from "@/config/sidebar.config"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarConfig.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={sidebarConfig.navMain} />
        <NavProjects projects={sidebarConfig.projects} />
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={sidebarConfig.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
