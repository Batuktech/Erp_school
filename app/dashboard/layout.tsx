import Sidebar from "../../components/sidebar";
import Navbar from "./navbar";

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
      <main className="flex-grow mt-4">
        <Navbar />
        <hr className="mt-4 border-gray-300 border"/>
        {children}</main>
    </div>
  );
}