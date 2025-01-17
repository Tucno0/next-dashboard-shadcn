import { ScrollArea } from "../ui/scroll-area";

interface Props {
  children: React.ReactNode;
  scrollable?: boolean;
}

export default function PageContainer({ children, scrollable = true }: Props) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-52px)]">
          <div className="h-full p-8">{children}</div>
        </ScrollArea>
      ) : (
        <div className="h-full p-8">{children}</div>
      )}
    </>
  );
}
