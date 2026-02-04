import NoticeCard from "@/components/ui/NoticeCard";

export default function Notices() {

  return (
    <main className="min-h-[92vh] bg-zinc-950 text-white px-6 py-12">

      {/* Page Title */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-bold">College Notices</h1>
        <p className="text-gray-400 mt-1">
          Latest academic and campus updates from HIT
        </p>
      </div>

      {/* Notices List */}
      <div className="max-w-5xl mx-auto space-y-5">

        {/* Notice Card */}
        <NoticeCard/>
      </div>
    </main>
  );
}