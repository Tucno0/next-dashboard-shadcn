import { Metadata } from "next";

import { ChartsNav } from "@/components/charts-nav";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export const metadata: Metadata = {
  title: "Beautiful Charts",
  description:
    "Built using Recharts. Copy and paste into your apps. Open Source.",
};

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Beautiful Charts</PageHeaderHeading>
        <PageHeaderDescription>
          Built using Recharts. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
      </PageHeader>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ChartsNav />
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="container py-6">
          <section id="charts" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </>
  );
}
