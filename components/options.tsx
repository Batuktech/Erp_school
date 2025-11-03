"use client" 

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Options() {

    const pathname = usePathname();

    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/student", label: "Students" },
        { href: "/dashboard/teacher", label: "Teachers" },
        { href: "/dashboard/class", label: "Classes" },
        { href: "/dashboard/grade", label: "Grades" },
        { href: "/dashboard/announcement", label: "Announcements" },
    ]

    return (
                <div className="flex flex-col gap-2 mx-10 mt-6">
                    {links.map((link)=>{
                        const isActive = pathname === link.href;

                        return(
                                <Link
                                key = {link.href}
                                href = {link.href}
                                className={`block px-4 py-2 bg-inherit rounded-xl
                                    ${isActive 
                                    ? 'bg-lime-600 text-white' 
                                    : 'hover:bg-gray-200 focus:bg-lime-600'
                                            }`}
                        >
                                {link.label}
                                </Link>
                        );
                    })}
                </div>
    );
}