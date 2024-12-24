import { Metadata } from "next";
import { cookies } from "next/headers";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/sidenav/app-sidebar";
import { Header } from "@/components/layout/navbar/header";

import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

interface Props {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: Readonly<Props>) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <>
      <NextTopLoader showSpinner={false} />
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />

        <SidebarInset>
          <Header />

          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
