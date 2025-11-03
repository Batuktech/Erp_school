
import Image from "next/image";

export default function Card(){

    const detail = [
        { label: "Total Students", value: 1200 },
        { label: "Total Teachers", value: 75 },
        { label: "Attendance Rate", value: 40 },
        { label: "Average Grade", value: "B+" },
    ]

    const icons: Record<string, string> = {
        "Total Students": "/image/student.png",
        "Total Teachers": "/image/teacher.png",
        "Attendance Rate": "/image/attendance.png",
        "Average Grade" : "/image/grading.png",
    }

    return(
        <div className="mt-4 flex gap-6 mx-10">
            {detail.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6 ">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{detail.label}</h2>
                        <p className="text-2xl">{detail.value}</p>
                    </div>
                    <Image 
                        src={icons[detail.label]}
                        alt={detail.label}
                        width={50}
                        height={50}
                        className="bg-gray-300 p-2 rounded-xl"
                    />
                </div>
                
            ))}
        </div>
    );
}