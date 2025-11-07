"use client";

import Image from "next/image";
import Options from "./options";

export default function Sidebar() {

    return (
            <div className="flex min-w-full">
                <div className="">
                    <div className="flex items-center py-5 gap-6 pl-10 pr-30">
                        <Image
                            src="/image/bachelor.png"
                            alt="Logo"
                            width={45}
                            height={45}
                            className="mx-auto p-2 bg-lime-700 rounded-xl"
                            />
                        <div>
                            <h1 className="text-center font-semibold text-2xl mt-2 flex items-start">SIS</h1>
                        {/* <h2 className="text-gray-600 text-l -mt-2 w-full">School Portal</h2>  */}
                        </div>

                    </div>
                    <hr className="w-full border-gray-300 border"></hr>
                    <Options />

                </div>
                <hr className="border h-screen border-gray-300"></hr>
            </div>



    );
}