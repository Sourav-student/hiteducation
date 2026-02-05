"use client";
import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export function Header() {

  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <header className="bg-neutral-900 w-full shadow-md sticky top-0 rounded-b-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 text-white">
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          HITEducation
        </Link>

        {/* //WINDOW AND TABLET */}
        <nav className="flex gap-5 max-sm:gap-2 items-center text-sm md:text-base max-sm:hidden">
          <Link className="hover:text-indigo-400 transition" href="/">
            Home
          </Link>

          <Link className="hover:text-indigo-400 transition" href="/notices">
            Notices
          </Link>

          <Link className="hover:text-indigo-400 transition" href="/questions-bank">
            Qbank
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

        {/* //MOBILE PHONE */}
        <nav className="sm:hidden flex gap-2 justify-center items-center">
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

          {!openNavbar ?
            <Image
              src="/hamburger.svg"
              alt="menu"
              width={30}
              height={30}
              onClick={() => setOpenNavbar(true)}
            />
            :
            <span className="font-mono ml-2 text-2xl bg-neutral-700 rounded-lg px-2" onClick={() => setOpenNavbar(false)}>X</span>
          }

          <ul className={openNavbar? "absolute top-13 p-3 right-0 bg-neutral-900 w-full text-lg font-medium flex flex-col justify-center text-center gap-4 transition-all duration-200 z-30" : "absolute top-13 -right-25 hidden"}>
            <li>
              <Link href="/" onClick={() => setOpenNavbar(false)}>Home</Link>
            </li>
            <li>
              <Link href="/notices" onClick={() => setOpenNavbar(false)}>Notices</Link>
            </li>
            <li>
              <Link href="/questions-bank" onClick={() => setOpenNavbar(false)}>Qbank</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
