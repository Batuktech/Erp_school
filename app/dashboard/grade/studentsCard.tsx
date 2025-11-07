

export default function StudentsCard({students}: {students: any[]}) {

    return (
        <div className=" shadow-lg rounded-2xl m-8 p-4">
            <h1 className="font-bold">
                Highest Performing Students
            </h1>
            <table className="mt-10 w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Grade</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody> 
                    {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.grade}</td>
                        <td>{student.gpa}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}