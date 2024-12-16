import { LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export interface NavItem {
  title: string;
  url: string;
  icon?: Icon;
  isActive?: boolean;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  label?: string;
  description?: string;
  items?: NavItem[];
}
