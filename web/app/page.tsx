import Link from "next/link";
import CellGrid from "./_components/ui/cell-grid";
import Image from "next/image";
import { projects } from "./_lib/utils/projects";
import { work } from "./_lib/utils/work";

export default function Home() {
  return (
    <>
      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black pb-24">
        <CellGrid />

        <h1 className="font-fle text-2xl lg:text-5xl 2xl:text-6xl pt-6">
          Cristian Dominguez is a Fullstack Developer shipping clean, responsive
          interfaces with production-grade systems.
        </h1>
      </div>

      <div
        id="work"
        className="xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black pb-24 pt-6"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <h2 className="font-semibold">INDEPENDENT WORK</h2>
          <p className="text-gray-400 md:pl-2 md:border-l md:border-black">
            FULLY DESIGNED AND DEVELOPED
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-6 gap-18">
          {work.map((work) => (
            <div className="flex flex-col gap-1" key={work.id}>
              {work.imgSrc ? (
                <div className="overflow-hidden relative">
                  <Image
                    src={work.imgSrc}
                    alt={`${work.title} designs on various devices`}
                    className="h-82 w-full object-cover transition-all hover:scale-110 hover:rotate-2 duration-700 ease-in-out"
                    fetchPriority="high"
                    height={2000}
                    width={2000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {work.status && (
                    <span className="absolute top-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1">
                      {work.status}
                    </span>
                  )}
                </div>
              ) : (
                <div className="h-82 w-full bg-stone-500" />
              )}

              <div className="flex flex-col lg:grow">
                <h3 className="font-fle text-2xl lg:text-3xl pt-2">
                  {work.title}
                </h3>

                <em>{work.duration}</em>

                <p className="pt-2">{work.description}</p>

                <ul className="flex flex-wrap gap-2 pt-2">
                  {work.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-stone-200 px-2 py-1 rounded-xs transition-colors duration-700 hover:duration-150 ease-in-out hover:bg-stone-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 md:mt-auto">
                  {work.liveUrl && (
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-black hover:text-pink-500 transition-colors duration-700 hover:duration-150 ease-in-out"
                    >
                      <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 underline underline-offset-3">
                        Visit Site
                      </span>
                    </a>
                  )}

                  <a
                    href={work.codebaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-black hover:text-pink-500 transition-colors duration-700 hover:duration-150 ease-in-out"
                  >
                    <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 underline underline-offset-3">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black pb-24 pt-6">
        <div className="flex flex-col md:flex-row gap-2">
          <h2 className="font-semibold">PROJECTS</h2>
          <p className="text-gray-400 md:pl-2 md:border-l md:border-black">
            DESIGN CONCEPTS AND PAST PROJECTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-6 gap-18">
          {projects.map((proj) => (
            <div className="flex flex-col gap-1" key={proj.id}>
              {proj.imgSrc ? (
                <div className="overflow-hidden">
                  <Image
                    src={proj.imgSrc}
                    alt={`${proj.title} designs on various devices`}
                    className="h-62 w-full object-cover transition-all hover:scale-110 hover:rotate-2 duration-700 ease-in-out"
                    priority
                    height={2000}
                    width={2000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-62 w-full bg-stone-500" />
              )}

              <div className="flex flex-col lg:grow">
                <h3 className="font-fle text-2xl lg:text-3xl pt-2">
                  {proj.title}
                </h3>

                <p className="pt-2">{proj.description}</p>

                <ul className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-stone-200 px-2 py-1 rounded-xs transition-colors duration-700 hover:duration-150 ease-in-out hover:bg-stone-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-4 md:mt-auto">
                  <Link
                    href={`/case-studies/${proj.slug}`}
                    className="font-semibold text-black hover:text-pink-500 transition-colors duration-700 hover:duration-150 ease-in-out"
                  >
                    <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 underline underline-offset-3">
                      Case Study
                    </span>
                  </Link>

                  {proj.url != "" && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-black hover:text-pink-500 transition-colors duration-700 hover:duration-150 ease-in-out"
                    >
                      <span className="inline-block transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95 underline underline-offset-3">
                        GitHub
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="about"
        className="xl:max-w-300 2xl:max-w-400 xl:mx-auto pb-24 pt-6"
      >
        <h2 className="font-semibold">ABOUT CRISTIAN</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-18">
          <div className="flex flex-col gap-4">
            <p>
              I’m Cristian, a design-forward frontend engineer in San Diego, CA,
              focused on building clean, responsive interfaces and shipping web
              products from concept to production. I care about typography,
              accessibility, performance, and the small UX details that make
              software feel obvious to use.
            </p>

            <p>
              Outside of work, I’m usually reading classical literature,
              learning to cook, or reviewing the best coffee shops in my city.
            </p>

            <p>
              You can reach me at{" "}
              <a
                href="mailto:cristian@swe.cd"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-indigo-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out origin-left hover:scale-105 active:scale-95">
                  cristian@swe.cd
                </span>
              </a>
            </p>
          </div>

          <div className="lg:ml-auto">
            <h3 className="font-fle text-2xl lg:text-3xl">Experience</h3>

            <div className="flex flex-col gap-1 pt-6">
              <h4 className="font-semibold text-lg">Mandate Enterprises</h4>

              <ul>
                <li>
                  <em>Web Design & Developer</em>
                </li>
                <li>May 2026 - Present</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 pt-6">
              <h4 className="font-semibold text-lg">Pacific Soul Jazz Festival</h4>

              <ul>
                <li>
                  <em>Web Developer - Contract</em>
                </li>
                <li>Jun. 2026 - Jul. 2026</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <h4 className="font-semibold text-lg">Mandate Enterprises</h4>

              <ul>
                <li>
                  <em>Web Design & Developer - Intern</em>
                </li>
                <li>Jan. 2026 - May 2026</li>
              </ul>
            </div>
          </div>

          <div className="lg:ml-auto">
            <h3 className="font-fle text-2xl lg:text-3xl">Education</h3>

            <div className="flex flex-col gap-1 pt-4">
              <h4 className="font-semibold text-lg">San Diego Mesa College</h4>

              <ul>
                <li>
                  <em>Associate of Science in Web Development</em>
                </li>
                <li>Completed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
