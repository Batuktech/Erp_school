
import Card from "./card";
import Navbar from "./navbar";
  
  
  export default function DashboardPage() {
  return (
    <div className="pt-8">
      <Navbar/>
      <hr className="mt-4 border-gray-300 border"/>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">
          Overview of school activities and statistics
        </p>
      </div>
      <Card/>
    </div>
  
  );
}