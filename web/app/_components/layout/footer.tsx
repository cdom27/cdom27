import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-12 pb-2 sm:pb-6">
      <div className="flex flex-col lg:flex-row justify-between gap-6 pt-2 sm:pt-6 xl:max-w-300 2xl:max-w-400 xl:mx-auto border-t border-black">
        <Link href="/" className="group flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Cristian Dominguez Logo"
            className="w-10 h-5.5 transition-transform duration-150 ease-in-out origin-left group-hover:scale-x-110 group-active:scale-x-95"
          />

          <span className="font-semibold text-lg transition-transform duration-150 ease-in-out group-hover:translate-x-1">
            Cristian Dominguez
          </span>
        </Link>

        <nav>
          <ul className="grid grid-flow-col auto-cols-max grid-rows-4 lg:grid-rows-2 gap-y-2 gap-x-10 text-sm">
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
      </div>
    </footer>
  );
}
