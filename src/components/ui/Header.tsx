import Link from "next/link";
import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

export function Header() {
  return (
    <header className="bg-neutral-900 w-full shadow-md sticky top-0 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 max-sm:px-2 py-3 text-white">
        <Link href="/" className="text-2xl max-sm:text-xl font-semibold tracking-wide">
          HITEducation
        </Link>

        <nav className="flex gap-5 max-sm:gap-2 items-center text-sm md:text-base">
          <Link className="hover:text-indigo-400 transition" href="/">
            Home
          </Link>

          <Link className="hover:text-indigo-400 transition" href="/notices">
            Notices
          </Link>

          <Link className="hover:text-indigo-400 transition" href="/questions">
            Questions
          </Link>

          <SignedOut>
            <Link className="hover:text-indigo-400 transition" href="/register">
              Register
            </Link>
            <Link className="hover:text-indigo-400 transition" href="/login">
              Login
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
