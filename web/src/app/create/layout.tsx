interface CreateLayoutProps {
  children: React.ReactNode;
}

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <section className="h-full flex-1 bg-accent-background">{children}</section>
  );
}
