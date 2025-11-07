
import OverallCard from "../overall";
import CardStudents from "./studentsCard";

export default function StudentPage({searchParams,
}: { searchParams?: {grade?: string; section?: string; gpa?: string; search?: string}

}){

  const topic = [
      { label: "Total Students", value: 1200 },
      { label: "Active Students", value: 1120 },
      { label: "Average GPA", value: 3.2 },
      { label: "New This Term", value: 45 },
  ]
  // Fetch students from database with filters
  const students = [
    { id: 1, name: "John Doe", grade: "10th", section: "A", gpa: 3.5, status: "Active" },
    { id: 2, name: "Jane Smith", grade: "11th", section: "B", gpa: 3.8, status: "Active" },
    { id: 3, name: "Alice Johnson", grade: "12th", section: "C", gpa: 3.9, status: "Inactive" },
  ];
  // const filters: any ={};
  // if(searchParams?.grade) filters.grade = searchParams.grade
  // if(searchParams?.section) filters.section = searchParams.section
  // if(searchParams?.gpa) filters.gpa ={gte: parseFloat(searchParams.gpa)};
  // const students = await prisma.student.findMany({  
  //   where : filters,
  // });

  return (
          <div className="">
            <div className="p-4 flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">Students Management</h1>
                <p className="text-gray-600">
                  Manage student records and information
                </p>
              </div>
              <div>
                <button className="bg-lime-600 text-white rounded-lg p-4 hover:bg-lime-700">Add New Student</button>
              </div>
            </div>
            <OverallCard topic={topic} />
            <CardStudents students = {students}  />
          </div>
  );
}