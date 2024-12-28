import { CardsDemo } from "@/components/cards-ui";
import { Metadata } from 'next';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export const metadata: Metadata = {
  title: "Card UI components",
  description: "Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. Open source.",
};

export default function Page() {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Card UI components</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
      </PageHeader>

      <div className="container-wrapper">
        <div className="container py-6">
          <section className="[&>div]:p-0">
            <CardsDemo />
          </section>
        </div>
      </div>
    </>
  );
}
