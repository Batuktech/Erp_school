import Link from "next/link";



export default function Sidebar() {

    return (
        <div className="">
            <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
            <Link href="/dashboard/student" className="block px-4 py-2 hover:bg-gray-200">Students</Link>
            <Link href="/dashboard/teacher" className="block px-4 py-2 hover:bg-gray-200">Teachers</Link>
            <Link href="/dashboard/class" className="block px-4 py-2 hover:bg-gray-200">Classes</Link>
            <Link href="/dashboard/grade" className="block px-4 py-2 hover:bg-gray-200">Grades</Link>
            <Link href="/dashboard/announcement" className="block px-4 py-2 hover:bg-gray-200">Announcements</Link>
        </div>
    );

}