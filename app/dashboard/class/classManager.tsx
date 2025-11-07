"use client";

import { useState, useEffect } from "react";
import ScheduleTable from "./scheduleTable";

export default function ClassManager({ classes }: { classes: any[] }) {

  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [schedules, setSchedules] = useState<any[]>([]);


    //   backend connection to fetch schedules for selected class
    //   async function handleSelectClass(id: number) {
    //     setSelectedClass(classes.find((c) => c.id === id));

    //     const res = await fetch(`/api/schedules?classId=${id}`);
    //     const data = await res.json();
    //     setSchedules(data);
    //   }
    
    // thats what schedules data should look like
    //     const schedules = [
    //   {
    //     dayOfWeek: "Monday",
    //     time: "08:00 - 08:45",
    //     subject: "Math",
    //     teacher: "Mr. Bat-Erdene",
    //     room: "101",
    //   },
  return (
    <div className="mt-6">
      <div className="flex items-center gap-4">
        <select
          className="border border-gray-300 rounded-lg p-2"
          onChange={(e) => handleSelectClass(Number(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>
            Select Class
          </option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.grade} - {c.name}
            </option>
          ))}
        </select>
      </div>

      {selectedClass && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">
            Schedule for {selectedClass.grade}-{selectedClass.name}
          </h2>
          <ScheduleTable schedules={schedules} />
        </div>
      )}
    </div>
  );
}
