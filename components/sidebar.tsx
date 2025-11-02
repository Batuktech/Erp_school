import Link from "next/link";



export default function Sidebar() {

    return (
        <div className="">
            <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
            <Link href="/students" className="block px-4 py-2 hover:bg-gray-200">Students</Link>
            <Link href="/teachers" className="block px-4 py-2 hover:bg-gray-200">Teachers</Link>
            <Link href="/classes" className="block px-4 py-2 hover:bg-gray-200">Classes</Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-200">Grades</Link>
            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-200">Announcements</Link>
        </div>
    );

}