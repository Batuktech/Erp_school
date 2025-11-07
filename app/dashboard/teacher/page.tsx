import OverallCard from "../overall"
import Cardteachers from "./teacherCard";

export default function TeacherPage({searchParams,
}: { searchParams?: {grade?: string; section?: string; gpa?: string; search?: string}

}){

  const topic = [
      { label: "Total Teachers", value: 24 },
      { label: "Active Teachers", value: 23 },
      { label: "Total Classes", value: 17 },
      { label: "Intern Teachers", value: 2 },
  ]
  // Fetch students from database with filters
  const teachers = [
    { id: 1, name: "John Doe", department: "Mathematics", contact: "78895465", specilization: "Algebra & Calculus", classes: "3", students: 120, experience: "5 years"},
    { id: 2, name: "Jane Smith", department: "Physics", contact: "77884411", specilization: "World History", classes: "2", students: 150, experience: "7 years"},
    { id: 3, name: "Alice Johnson", department: "Biology", contact: "78152351", specilization: "Literature & writing", classes: "1", students: 100, experience: "4 years"},
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
            <Cardteachers teachers = {teachers}  />
          </div>
  );
}