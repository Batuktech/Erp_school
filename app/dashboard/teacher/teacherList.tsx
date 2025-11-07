

export default function TeacherList({teachers}: {teachers: any[]}) {
    return (
        <div className="mt-6 mx-10">
            <h2 className="text-xl font-semibold mb-4">teachers List</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Department</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Contact</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Specilization</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Classes</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Students</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.id}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.name}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.department}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.contact}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.specilization}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.classes}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.students}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{teacher.experience}</td>
                            {/* write backend code for delete teacher    */}
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