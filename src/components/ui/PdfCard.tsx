"use client";
import axios from "axios";
import { useState, useEffect } from "react";

type QueryType = {
  year: string;
  semester: string;
  department: string;
};

type PdfItem = {
  url: string;
  subject: string;
};

type QuestionsType = {
  _id: string;
  year: string;
  department: string;
  semester: string;
  pdfs: PdfItem[];
};

export default function PdfCard({ year, semester, department }: QueryType) {
  const [allQuestions, setAllQuestions] = useState<QuestionsType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!year || !semester || !department) return;

    const getAllPdfs = async () => {
      setAllQuestions([]);
      try {
        setLoading(true);

        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/pdfs/all`,
          { params: { year, semester, department } }
        );

        setAllQuestions(res.data.pdfs);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getAllPdfs();
  }, [year, semester, department]);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 animate-pulse"
          >
            <div className="h-5 w-1/2 bg-neutral-700 rounded mb-3" />
            <div className="h-4 w-1/3 bg-neutral-700 rounded mb-1" />
            <div className="h-4 w-1/4 bg-neutral-700 rounded mb-1" />
            <div className="h-4 w-1/3 bg-neutral-700 rounded mb-4" />
            <div className="h-9 w-32 bg-neutral-700 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (allQuestions.length === 0) {
    return <p className="text-neutral-500 w-full text-center text-xl">No PDFs found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {allQuestions.map((question) =>
        question.pdfs.map((pdf, index) => (
          <div
            key={`${question._id}-${index}`}
            className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-indigo-600 transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              Subject : {pdf.subject}
            </h3>

            <p className="text-gray-400 text-sm">
              Department : {question.department}
            </p>
            <p className="text-gray-400 text-sm">Year : {question.year}</p>
            <p className="text-gray-400 text-sm">
              Semester : {question.semester}
            </p>

            <a
              href={pdf.url}
              target="_blank"
              className="inline-block mt-4 bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Download PDF
            </a>
          </div>
        ))
      )}
    </div>
  );
}
