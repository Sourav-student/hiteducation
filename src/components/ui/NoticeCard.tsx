"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type NoticeType = {
  _id: string,
  notice_date: Date,
  notice_title: string,
  notice_content: string,
  notice_type: string
}

export default function NoticeCard() {

  const [allNotices, setAllNotices] = useState<NoticeType[]>([]);

  const getAllNotices = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notices/all`);
      setAllNotices(res.data.notices);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllNotices();
  }, []);

  return (
    <>
      {
        allNotices.map((notice) => (
          <div className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 hover:border-indigo-600 transition" key={notice._id}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-indigo-400">{notice.notice_type}</span>
              <span className="text-sm text-gray-400">{new Date(notice.notice_date).toLocaleDateString()}</span>
            </div>
            <h2 className="text-lg font-semibold">
              {notice.notice_title}
            </h2>
            <p className="text-gray-400 mt-1">
              {notice.notice_content}
            </p>
          </div>
        ))
      }
    </>
  )
}