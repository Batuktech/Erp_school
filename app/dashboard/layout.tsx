import Sidebar from "../../components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-mono">
      <aside>
          <Sidebar />
      </aside>
      <main className="flex-grow">{children}</main>
    </div>
  );
}