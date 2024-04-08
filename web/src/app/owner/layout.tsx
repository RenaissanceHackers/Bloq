interface OwnerLayoutProps {
  children: React.ReactNode;
}

export default function OwnerLayout({ children }: OwnerLayoutProps) {
  return (
    <section className="h-full flex-1 bg-background">{children}</section>
  );
}
