interface TaskCenterLayoutProps {
  children: React.ReactNode;
}

export default function TaskCenterLayout({ children }: TaskCenterLayoutProps) {
  return (
    <section className="bg-accent-background h-full flex-1">{children}</section>
  );
}
