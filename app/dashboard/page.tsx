
import Card from "./card";
  
  export default function DashboardPage() {

  const detail = [
      { label: "Total Students", value: 1200 },
      { label: "Total Teachers", value: 75 },
      { label: "Attendance Rate", value: 40 },
      { label: "Average Grade", value: "B+" },
  ]

  const icon: Record<string, string> = {
      "Total Students": "/image/student.png",
      "Total Teachers": "/image/teacher.png",
      "Attendance Rate": "/image/attendance.png",
      "Average Grade" : "/image/grading.png",
  }

  return (
    <div className="">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">
          Overview of school activities and statistics
        </p>
      </div>
      <Card details={detail} icons={icon} />
      <div className="mt-10 mx-10">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-lime-600 text-white rounded-lg p-4 hover:bg-lime-700">Add Student</button>
          <button className="bg-lime-600 text-white rounded-lg p-4 hover:bg-lime-700">Add Teacher</button>
          <button className="bg-lime-600 text-white rounded-lg p-4 hover:bg-lime-700">Create Announcement</button>
        </div>
      </div>
    </div>
  
  );
}