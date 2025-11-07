"use client";

import { useState } from "react";

export default function FilterSemester() {
  const semesters = ["Spring 2024", "Fall 2024", "Spring 2025"]; // list
  const [selectedSemester, setSelectedSemester] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="semester" className="font-medium">Semester:</label>
      <select
        id="semester"
        value={selectedSemester}
        onChange={handleChange}
      >
        <option value="">Select semester</option>
        {semesters.map((sem) => (
          <option key={sem} value={sem}>
            {sem}
          </option>
        ))}
      </select>
    </div>
  );
}
