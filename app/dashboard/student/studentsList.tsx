

export default function StudentList({students}: {students: any[]}) {
    return (
        <div className="mt-6 mx-10">
            <h2 className="text-xl font-semibold mb-4">Students List</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Grade</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Section</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">GPA</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Status</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b border-gray-200">{student.id}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{student.name}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{student.grade}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{student.section}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{student.gpa}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{student.status}</td>
                            {/* write backend code for delete student    */}
                            <td className="py-2 px-4 border-b border-gray-200">
                                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}