
interface StudentCardProps {
    topic : { label: string; value: number | string }[];
}

export default function OverallCard({topic}: StudentCardProps) {
  return (
        <div className="mt-4 flex gap-6 mx-10">
                {topic?.map((topic) => (
                    <div key={topic.label} className="flex items-start gap-4 bg-white rounded-lg shadow-md p-6 ">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">{topic.label}</h2>
                            <p className="text-2xl">{topic.value}</p>
                        </div>
                    </div>
                    
                ))}
        </div>
  );
}