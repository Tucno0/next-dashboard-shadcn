import PageContainer from "@/components/layout/page-container";

interface Props {
  children: React.ReactNode;
}
export default function UsersLayout({ children }: Readonly<Props>) {

  return (
    <PageContainer scrollable>
      {children}
    </PageContainer>
    
  );
}