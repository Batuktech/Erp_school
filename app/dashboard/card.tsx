
import Image from "next/image";

interface CardProps {
    details : { label: string; value: number | string }[];
    icons : Record<string, string>;
}


export default function Card({details, icons}: CardProps) {

    return(
        <div className="mt-4 flex gap-10 mx-10">
            {details?.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6 ">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">{detail.label}</h2>
                        <p className="text-2xl">{detail.value}</p>
                    </div>
                    <Image 
                        src={icons[detail.label]}
                        alt={detail.label}
                        width={60}
                        height={60}
                        className="bg-gray-300 p-2 rounded-xl"
                    />
                </div>
                
            ))}
        </div>
    );
}