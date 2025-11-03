"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { link } from "fs";
import Options from "./options";

export default function Sidebar() {

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
            <div className="flex">
                <div className="">
                    <div className="flex items-center py-6 gap-6 pl-10 pr-30">
                        <Image
                            src="/image/bachelor.png"
                            alt="Logo"
                            width={45}
                            height={45}
                            className="mx-auto p-2 bg-lime-700 rounded-xl"
                            />
                        <div>
                            <h1 className="text-center font-semibold text-2xl mt-2 flex items-start">SIS</h1>
                        <h2 className="text-gray-600 text-l -mt-2">School Portal</h2> 
                        </div>

                    </div>
                    <hr className="w-full border-gray-300 border"></hr>
                    <Options />
                    {/* <div className="flex flex-col gap-2 mx-10 mt-6">
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
                    </div> */}
                </div>
                <hr className="border h-screen border-gray-300"></hr>
            </div>



    );
}