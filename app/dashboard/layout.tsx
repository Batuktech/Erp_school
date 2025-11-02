import Sidebar from "../../components/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <aside>
          <Sidebar />
      </aside>
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
}