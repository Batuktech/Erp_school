
import ClassManager from "./classManager";
import FilterSemester from "./filterSemester";
import ScheduleTable from "./scheduleTable";
// import { prisma } from "@/lib/prismaClient";


export default async function ClassPage(searchParams: { searchParams?: {semester?: string} }){

    // after made backend connection uncomment this
    // const filter = any={};
    // if(searchParams?.semester) filter.semester = searchParams.semester
    //     const schedules = await prisma.schedule.findMany({  
    //       where : filter,    
    //     });

    // const classes = await prisma.class.findMany({
    //     orderby : {grade: 'asc'},
    //     select : {id: true, grade: true, section: true, teacher: true, students: true},
    // });

    const classes = [
    { id: 1, name: "6A", grade: 6 },
    { id: 2, name: "6B", grade: 6 },
    { id: 3, name: "7A", grade: 7 },
    { id: 4, name: "7B", grade: 7 },
    { id: 5, name: "8A", grade: 8 },
    { id: 6, name: "8B", grade: 8 },
    { id: 7, name: "9A", grade: 9 },
    { id: 8, name: "9B", grade: 9 },
    { id: 9, name: "10A", grade: 10 },
    { id: 10, name: "10B", grade: 10 },
    ];


  return (
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">Classes Management</h1>
                <p className="text-gray-600">
                  Manage all school classes and schedules 
                </p>
              </div>
                <div className="flex gap-4">
                    <FilterSemester/>
                    <button className="bg-lime-600 text-white rounded-lg p-4 hover:bg-lime-700">Create Class</button>
                </div>
            </div>
            <ClassManager classes={classes} />
          </div>
  );
}