import { Project } from "@/interfaces/project.interface";
import { Team } from "@/interfaces/team.interface";
import { NavItem } from "@/types";
import { teams, navMain, projects, overview } from "../constants/data";

interface SidebarConfig {
  overview: NavItem[];
  teams: Team[];
  navMain: NavItem[];
  projects: Project[];
}

export const sidebarConfig: SidebarConfig = {
  overview,
  teams,
  navMain,
  projects,
};
