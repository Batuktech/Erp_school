"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import TeacherList from "./teacherList";

export default function Cardteachers({teachers}: {teachers: any[]}) {
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
    router.push(`/dashboard/teacher?${queryParams}`);
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
        <h2 className="text-xl font-semibold text-gray-800">All teachers</h2>

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
            placeholder="Search teachers..."
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
            <option value="">Department</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="English">English</option>
            <option value="PE">PE</option>
            <option value="Society">Society</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Mongolian Language">Mongolian Language</option>
          </select>

          {/* Section Filter */}
          <select
            name="section"
            value={filters.section}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
          >
            <option value="">Experience</option>
            <option value="A">1 year</option>
            <option value="B">2 year</option>
            <option value="C">3 year</option>
            <option value="D">4 year</option>
            <option value="E">5 year</option>
            <option value="F">6 year</option>
            <option value="G">7 year</option>
            <option value="H">8+ year</option>
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
      <TeacherList teachers={teachers} />
    </div>
  );
}
