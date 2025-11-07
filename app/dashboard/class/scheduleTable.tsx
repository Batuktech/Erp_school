



export default function ScheduleTable({ schedules }: { schedules: any[] }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = [
    "08:00 - 08:45",
    "09:00 - 09:45",
    "10:00 - 10:45",
    "11:00 - 11:45",
    "13:00 - 13:45",
    "14:00 - 14:45",
  ];

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 border-b border-gray-300 text-left">Time</th>
            {days.map((day) => (
              <th key={day} className="py-3 px-4 border-b border-gray-300">
                {day}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {times.map((time) => (
            <tr key={time} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-300 text-left font-semibold">
                {time}
              </td>

              {days.map((day) => {
                const slot = schedules.find(
                  (s) => s.dayOfWeek === day && s.time === time
                );
                return (
                  <td key={day + time} className="py-3 px-4 border-b border-gray-300">
                    {slot ? (
                      <div>
                        <div className="font-medium">{slot.subject}</div>
                        <div className="text-sm text-gray-500">
                          {slot.teacher} <br /> {slot.room}
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">—</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
