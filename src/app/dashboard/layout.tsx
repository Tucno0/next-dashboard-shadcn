import { Header } from "@/components/layout/navbar/header";
import { AppSidebar } from "@/components/layout/sidenav/app-sidebar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="font-[family-name:var(--font-inter)]">
      <AppSidebar />

      <SidebarInset>
        <Header />

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
