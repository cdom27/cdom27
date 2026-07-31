"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 sm:px-12 pt-2 sm:pt-6">
      <div className="flex justify-between items-center pb-2 sm:pb-6 xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black">
        <Link href="/" className="group flex items-center gap-2">
          <svg
            width="44"
            height="22"
            viewBox="0 0 44 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-5.5 stroke-black transition-transform duration-150 ease-in-out origin-left group-hover:scale-x-110 group-active:scale-x-95"
          >
            <rect
              x="2.5"
              y="2.5"
              width="39"
              height="17"
              rx="8.5"
              strokeWidth="5"
            />
          </svg>

          <span className="font-semibold text-lg transition-transform duration-150 ease-in-out group-hover:translate-x-1">
            Cristian Dominguez
          </span>
        </Link>

        <nav className="hidden lg:flex gap-4">
          <ul className="grid grid-flow-col auto-cols-max grid-rows-2 gap-y-2 gap-x-10 text-sm">
            <li>
              <Link
                href="/#work"
                className="font-semibold text-black hover:text-lime-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                  WORK
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="font-semibold text-black hover:text-teal-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                  ABOUT
                </span>
              </Link>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/cdom27"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-blue-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                  LINKEDIN
                </span>
              </a>
            </li>

            <li>
              <a
                href="mailto:cristian@swe.cd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-indigo-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                  CRISTIAN@SWE.CD
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/cdom27"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-violet-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                  GITHUB
                </span>
              </a>
            </li>

            <li>
              <a
                href="/cristian-dominguez-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-fuchsia-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                  RESUME
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          title="Open navigation menu"
          className="group lg:hidden flex flex-col justify-center gap-1 size-5.5 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="h-0.5 bg-black w-full transition-transform duration-150 ease-in-out origin-right group-hover:scale-x-140 group-active:scale-x-150" />
          <div className="h-0.5 bg-black w-full transition-transform duration-150 ease-in-out origin-right group-hover:scale-x-140 group-active:scale-x-150" />
          <div className="h-0.5 bg-black w-full transition-transform duration-150 ease-in-out origin-right group-hover:scale-x-140 group-active:scale-x-150" />
        </button>
      </div>

      {/* mobile nav layouts */}

      <div
        className={`z-10 fixed inset-0 transition-opacity duration-500 ease-in-out bg-black/15 ${open ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"}`}
      />

      <nav
        className={`z-10 bg-white fixed inset-x-0 top-0 px-4 sm:px-12 pt-2 pb-6 sm:pt-6 transition-transform duration-500 ease-in-out
        ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2">
            <svg
              width="44"
              height="22"
              viewBox="0 0 44 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-5.5 stroke-black transition-transform duration-150 ease-in-out origin-left group-hover:scale-x-110 group-active:scale-x-95"
            >
              <rect
                x="2.5"
                y="2.5"
                width="39"
                height="17"
                rx="8.5"
                strokeWidth="5"
              />
            </svg>

            <span className="font-semibold text-lg transition-transform duration-150 ease-in-out group-hover:translate-x-1">
              Cristian Dominguez
            </span>
          </Link>

          <button
            title="Close navigation menu"
            className="group flex flex-col justify-center gap-1 size-5.5 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <div className="h-0.5 bg-white w-full" />
            <div className="h-0.5 bg-black w-full transition-transform duration-150 ease-in-out origin-right group-hover:scale-x-140 group-active:scale-x-150" />
            <div className="h-0.5 bg-white w-full" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 pt-6 pb-6 border-b border-black">
          <li>
            <Link
              href="/#work"
              className="font-semibold text-black hover:text-lime-500 transition-colors duration-700 hover:duration-150 ease-in-out"
            >
              <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                WORK
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="font-semibold text-black hover:text-teal-500 transition-colors duration-700 hover:duration-150 ease-in-out"
            >
              <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                ABOUT
              </span>
            </Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 pt-6">
          <li>
            <a
              href="https://linkedin.com/in/cdom27"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-blue-500 transition-colors duration-700 hover:duration-150 ease-in-out"
            >
              <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                LINKEDIN
              </span>
            </a>
          </li>

          <li>
            <a
              href="mailto:cdom27@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-indigo-500 transition-colors duration-700 hover:duration-150 ease-in-out"
            >
              <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                CDOM27@OUTLOOK.COM
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/cdom27"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-violet-500 transition-colors duration-700 hover:duration-150 ease-in-out"
            >
              <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                GITHUB
              </span>
            </a>
          </li>

          <li>
            <a
              href="/cristian-dominguez-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-fuchsia-500 transition-colors duration-700 hover:duration-150 ease-in-out"
            >
              <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                RESUME
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
