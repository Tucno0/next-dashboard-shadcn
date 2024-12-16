import { Project } from "@/interfaces/project.interface";
import { Team } from "@/interfaces/team.interface";
import { User } from "@/interfaces/user.interface";
import { NavItem } from "@/types";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartPie,
  Command,
  Component,
  FileSliders,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Lightbulb,
  LockKeyhole,
  Map,
  PieChart,
  Settings2,
  ShieldAlert,
  SquareTerminal,
  UserCog,
} from "lucide-react";

export const user: User = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

export const teams: Team[] = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

export const overview: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
    icon: LayoutDashboard,
  },
  {
    title: "Charts",
    url: "/dashboard/charts",
    icon: ChartPie,
  },
];

export const navMain: NavItem[] = [
  {
    title: "Examples",
    url: "#",
    icon: Lightbulb,
    isActive: true,
    items: [
      {
        title: "UI",
        url: "/dashboard/examples/ui",
      },
      {
        title: "Mail",
        url: "/dashboard/examples/mail",
      },
      {
        title: "Tasks",
        url: "/dashboard/examples/tasks",
      },
      {
        title: "Playground",
        url: "/dashboard/examples/playground",
      },
      {
        title: "Music",
        url: "/dashboard/examples/music",
      },
      {
        title: "Kanban",
        url: "/dashboard/examples/kanban",
      },
    ],
  },
  {
    title: "Management",
    url: "#",
    icon: FileSliders,
    items: [
      {
        title: "Products",
        url: "/dashboard/management/products",
      },
    ],
  },
  {
    title: "Users",
    url: "#",
    icon: UserCog,
    items: [
      {
        title: "Employees",
        url: "/dashboard/users/employees",
      },
      {
        title: "Users",
        url: "/dashboard/users/users",
      },
      {
        title: "Clients",
        url: "/dashboard/users/clients",
      },
      {
        title: "Roles",
        url: "/dashboard/users/roles",
      },
    ],
  },
  {
    title: "Auth",
    url: "#",
    icon: LockKeyhole,
    items: [
      {
        title: "Sign Up",
        url: "/auth/signup",
      },
      {
        title: "Sign In",
        url: "/auth/signin",
      },
      {
        title: "Forgot Password",
        url: "/auth/forgot-password",
      },
      {
        title: "New Password",
        url: "/auth/new-password",
      },
      {
        title: "Two Step",
        url: "/auth/two-step",
      }
    ],
  },
  {
    title: "Errors",
    url: "#",
    icon: ShieldAlert,
    items: [
      {
        title: "404",
        url: '/errors/404',
      },
      {
        title: "500",
        url: "/errors/500",
      },
    ],
  },
  {
    title: "Components",
    url: "#",
    icon: Component,
    items: [
      {
        title: 'Forms',
        url: '/dashboard/components/forms',
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Design Engineering",
    url: "#",
    icon: Frame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChart,
  },
  {
    name: "Travel",
    url: "#",
    icon: Map,
  },
];
