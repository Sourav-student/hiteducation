"use client";
import { useState } from "react";
import PdfCard from "@/components/ui/PdfCard";

export default function Questions() {
  const [allQuary, setAllQuary] = useState({
    year: "",
    department: "",
    semester: ""
  });

  const [isSearch, setIsSearch] = useState(false);

  return (
    <main className="min-h-[92vh] bg-zinc-950 text-white px-6 py-12">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-bold">Previous Year Questions</h1>
        <p className="text-gray-400 mt-1">
          Browse semester-wise and subject-wise question papers
        </p>
      </div>

      {/* Filters*/}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-4 mb-8">
        {/* Semester */}
        <select
          name="semester"
          required
          className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-white"
          value={allQuary.semester}
          onChange={(e) => setAllQuary({ ...allQuary, semester: e.target.value })}
        >
          <option value="" disabled>Semester</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
          <option value="3">3rd Semester</option>
          <option value="4">4th Semester</option>
          <option value="5">5th Semester</option>
          <option value="6">6th Semester</option>
          <option value="7">7th Semester</option>
          <option value="8">8th Semester</option>
        </select>

        {/* Department */}
        <select
          name="department"
          required
          className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-white"
          value={allQuary.department}
          onChange={(e) => setAllQuary({ ...allQuary, department: e.target.value })}
        >
          <option value="" disabled>Department</option>
          <option value="SASH">SASH</option>
          <option value="AEIE">AEIE</option>
          <option value="AGE">AGE</option>
          <option value="BT">BT</option>
          <option value="CE">CE</option>
          <option value="CHE">CHE</option>
          <option value="CSE">CSE</option>
          <option value="CSE-AIML">CSE-AIML</option>
          <option value="CSE-CS">CSE-CS</option>
          <option value="CSE-DS">CSE-DS</option>
          <option value="ECE">ECE</option>
          <option value="EE">EE</option>
          <option value="FT">FT</option>
          <option value="IT">IT</option>
          <option value="ME">ME</option>
        </select>

        {/* Academic Year */}
        <select
          name="year"
          required
          className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-white"
          value={allQuary.year}
          onChange={(e) => setAllQuary({ ...allQuary, year: e.target.value })}
        >
          <option value="" disabled>Academic Year</option>
          <option value="1st">1st Year</option>
          <option value="2nd">2nd Year</option>
          <option value="3rd">3rd Year</option>
          <option value="4th">4th Year</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow-md cursor-pointer"
          onClick={() => setIsSearch(true)}
        >
          Search
        </button>
      </div>

      {/* Question Cards */}
      {isSearch ?
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <PdfCard year={allQuary.year} semester={allQuary.semester} department={allQuary.department}/>
        </div>
        :
        <p className="text-center text-neutral-400 mt-10">
          Select Semester, Department, and Academic Year to view questions
        </p>
      }
    </main>
  );
}
