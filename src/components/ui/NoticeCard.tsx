"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type NoticeType = {
  _id: string;
  notice_date: Date;
  notice_title: string;
  notice_content: string;
  notice_type: string;
};

export default function NoticeCard() {
  const [allNotices, setAllNotices] = useState<NoticeType[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllNotices = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/notices/all`
      );
      setAllNotices(res.data.notices);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNotices();
  }, []);

  
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 animate-pulse"
          >
            <div className="flex justify-between mb-3">
              <div className="h-4 w-24 bg-neutral-700 rounded"></div>
              <div className="h-4 w-20 bg-neutral-700 rounded"></div>
            </div>
            <div className="h-5 w-3/4 bg-neutral-700 rounded mb-2"></div>
            <div className="h-4 w-full bg-neutral-700 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {allNotices.map((notice) => (
        <div
          key={notice._id}
          className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 hover:border-indigo-600 transition"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-indigo-400">
              {notice.notice_type}
            </span>
            <span className="text-sm text-gray-400">
              {new Date(notice.notice_date).toLocaleDateString()}
            </span>
          </div>

          <h2 className="text-lg font-semibold">
            {notice.notice_title}
          </h2>

          <p className="text-gray-400 mt-1">
            {notice.notice_content}
          </p>
        </div>
      ))}
    </>
  );
}