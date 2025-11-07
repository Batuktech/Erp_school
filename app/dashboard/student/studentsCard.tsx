"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import StudentList from "./studentsList";

export default function CardStudents({students}: {students: any[]}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    grade: "",
    section: "",
    gpa: "",
    search: "",
  });

  const updateFilter = (newFilters: Record<string, string> ) => {
    const queryParams = new URLSearchParams(
      Object.entries(newFilters).filter(([_, v]) => v !== "")
    ).toString();
    router.push(`/dashboard/student?${queryParams}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newfilters = { ...filters, [name]: value };
    setFilters(newfilters)
    updateFilter(newfilters);``
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newfilters = { ...filters, search: value };
    setFilters(newfilters);
    updateFilter(newfilters);
  }

  return (
    <div className="mt-4 mx-10 bg-white shadow-sm rounded-xl p-4">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">All Students</h2>

        {/* Search Bar */}
        <form className="flex items-center border border-gray-300 rounded-lg px-3 py-1 w-64">
          <Image
            src="/image/searchpng.png"
            alt="Search Icon"
            width={18}
            height={18}
            className="opacity-70 mr-2"
          />
          <input
            type="text"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search students..."
            className="w-full outline-none text-sm"
          />
        </form>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {/* Grade Filter */}
          <select
            name="grade"
            value={filters.grade}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
          >
            <option value="">Grade</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>

          {/* Section Filter */}
          <select
            name="section"
            value={filters.section}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
          >
            <option value="">Section</option>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
          </select>

          {/* GPA Filter */}
          <select
            name="gpa"
            value={filters.gpa}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
          >
            <option value="">GPA</option>
            <option value="4">4.0</option>
            <option value="3.9">3.9</option>
            <option value="3.8">3.8</option>
            <option value="3.7">3.7</option>
            <option value="3.6">3.6</option>
            <option value="3.5">3.5</option>
          </select>

          {/* Filter Button */}
          <button
            type="button"
            className="bg-olive-600 hover:bg-olive-700 text-black px-4 py-2 rounded-lg text-sm"
          >
            Apply
          </button>
        </div>
      </div>
      <StudentList students={students} />
    </div>
  );
}
