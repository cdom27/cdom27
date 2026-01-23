"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2">
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/logo.svg"
          alt="Cristian Dominguez Logo"
          className="w-10 h-5.5"
        />

        <span className="font-fle text-lg">Cristian Dominguez</span>
      </Link>

      <button
        className="flex flex-col justify-center gap-1 size-5.5"
        onClick={() => setOpen(!open)}
      >
        <div className="h-0.5 bg-black w-full" />
        <div className="h-0.5 bg-black w-full" />
        <div className="h-0.5 bg-black w-full" />
      </button>

      <div
        className={`fixed inset-0 transition-opacity duration-500 ease-in-out bg-black/10 ${open ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"}`}
      />

      <nav
        className={`bg-white border-b border-stone-300 fixed inset-x-0 top-0 px-4 pt-2 pb-6 transition-transform duration-500 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Cristian Dominguez Logo"
              className="w-10 h-5.5"
            />

            <span className="font-fle text-lg">Cristian Dominguez</span>
          </Link>

          <button
            className="flex flex-col justify-center gap-1 size-5.5"
            onClick={() => setOpen(!open)}
          >
            <div className="h-0.5 bg-white w-full" />
            <div className="h-0.5 bg-black w-full" />
            <div className="h-0.5 bg-white w-full" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 pt-6">
          <li>
            <Link href="/#work" className="font-semibold">
              WORK
            </Link>
          </li>
          <li>
            <Link href="/#about" className="font-semibold">
              ABOUT
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 pt-6">
          <li>
            <a
              href="https://linkedin.com/in/cdom27"
              className="font-semibold underline underline-offset-3"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cdom27"
              className="font-semibold underline underline-offset-3"
            >
              GITHUB
            </a>
          </li>
          <li>
            <a
              href="mailto:cdom27@outlook.com"
              className="font-semibold underline underline-offset-3"
            >
              CDOM27@OUTLOOK.COM
            </a>
          </li>
          <li>
            <a
              href="/cristian-dominguez-resume.pdf"
              className="font-semibold underline underline-offset-3"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
