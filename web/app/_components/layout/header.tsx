"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 sm:px-12 py-2 sm:py-6">
      <div className="flex justify-between items-center lg:pb-6 xl:max-w-300 2xl:max-w-400 xl:mx-auto lg:border-b lg:border-black">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Cristian Dominguez Logo"
            className="w-10 h-5.5"
          />

          <span className="font-fle text-lg lg:text-xl">
            Cristian Dominguez
          </span>
        </Link>

        <nav className="hidden lg:flex gap-4">
          <ul className="grid grid-flow-col auto-cols-max grid-rows-2 gap-y-2 gap-x-10 text-sm">
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
                href="mailto:cdom27@outlook.com"
                className="font-semibold underline underline-offset-3"
              >
                CDOM27@OUTLOOK.COM
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
                href="/cristian-dominguez-resume.pdf"
                className="font-semibold underline underline-offset-3"
              >
                RESUME
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="lg:hidden flex flex-col justify-center gap-1 size-5.5"
          onClick={() => setOpen(!open)}
        >
          <div className="h-0.5 bg-black w-full" />
          <div className="h-0.5 bg-black w-full" />
          <div className="h-0.5 bg-black w-full" />
        </button>
      </div>

      {/* mobile nav layouts */}

      <div
        className={`fixed inset-0 transition-opacity duration-500 ease-in-out bg-black/15 ${open ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"}`}
      />

      <nav
        className={`bg-white fixed inset-x-0 top-0 px-4 sm:px-12 pt-2 pb-6 sm:pt-6 transition-transform duration-500 ease-in-out
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

        <ul className="flex flex-col gap-2 pt-6 pb-6 border-b border-black">
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
