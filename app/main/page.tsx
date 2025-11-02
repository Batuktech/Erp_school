import Sidebar from "../../components/sidebar";

export default function Main() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar />
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Welcome to the Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          This is the main content area.
        </p>
      </div>
    </div>
  );
}
