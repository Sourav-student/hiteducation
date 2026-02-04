import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          HITEducation
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your complete academic companion for Haldia Institute of Technology —  
          notes, PYQs, notices, and smart learning resources in one place.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/register"
            className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/pyqs"
            className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Explore PYQs
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        <div className="bg-neutral-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">📚 Previous Year Questions</h3>
          <p className="text-gray-400">
            Access organized PYQs for every semester and subject.
          </p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">📢 College Notices</h3>
          <p className="text-gray-400">
            Stay updated with academic and campus announcements.
          </p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">👤 Student Profile</h3>
          <p className="text-gray-400">
            Manage your account, security, and connected logins easily.
          </p>
        </div>

      </section>

      {/* Why Section */}
      <section className="bg-neutral-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Why HITEducation?
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Built by students, for students — HITEducation simplifies academic life 
          by bringing all important resources into a single smart platform.
        </p>
      </section>

      {/* CTA */}
      <section className="py-15 text-center flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold mb-4">
          Start Learning Smarter Today
        </h2>

        <Link
          href="/register"
          className="bg-indigo-600 px-8 py-3 rounded-xl text-lg hover:bg-indigo-700 transition w-fit"
        >
          Join HITEducation
        </Link>
      </section>

    </main>
  );
}