import OverallCard from "../overall";
import StudentCard from "./studentsCard";


export default function GradePage(){

  const topic = [
      { label: "Total Grades Recorded", value: 910 },
      { label: "Average GPA", value: "2.8" },
      { label: "Highest Grade", value: "4" },
      { label: "Lowest Grade", value: "1.4" },
  ]

  const students = [
    { id: 1, name: "John Doe", grade: "10th", gpa: 3.9 },
    { id: 2, name: "Jane Smith", grade: "11th", gpa: 3.8 },
    { id: 3, name: "Alice Johnson", grade: "12th", gpa: 3.7 },
  ];

  return (
          <div className="">
            <div className="p-4 flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">Grades Management</h1>
                <p className="text-gray-600">
                  View and manage student grades  
                </p>
              </div>
            </div>
            <OverallCard topic={topic} />
            <StudentCard students = {students}  />
          </div>
  );
}