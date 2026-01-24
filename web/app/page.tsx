import CellGrid from "./_components/ui/cell-grid";

export default function Home() {
  return (
    <>
      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black pb-24">
        <CellGrid />

        <h1 className="font-fle text-2xl lg:text-5xl 2xl:text-6xl pt-6">
          Cristian Dominguez is a design-forward Frontend Engineer shipping
          clean, responsive interfaces with production-grade systems.
        </h1>
      </div>

      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black pb-24 pt-6">
        <h2 className="font-semibold">INDEPENDENT WORK</h2>
      </div>

      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto border-b border-black pb-24 pt-6">
        <h2 className="font-semibold">OTHER PROJECTS</h2>
      </div>

      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto pb-24 pt-6">
        <h2 className="font-semibold">ABOUT CRISTIAN</h2>

        <div className="grid grid-flow-col auto-cols-fr grid-rows-3 md:grid-rows-2 lg:grid-rows-1 pt-6 gap-18">
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
                href="mailto:cdom27@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-indigo-500 transition-colors duration-700 hover:duration-150 ease-in-out"
              >
                <span className="inline-block underline underline-offset-3 transition-transform duration-150 ease-in-out origin-left hover:scale-105 active:scale-95">
                  cdom27@outlook.com
                </span>
              </a>
            </p>
          </div>

          <div className="lg:ml-auto">
            <h3 className="font-fle text-2xl lg:text-3xl">Experience</h3>

            <div className="flex flex-col gap-1 pt-6">
              <h4 className="font-semibold text-lg">Mandate Impact</h4>

              <ul>
                <li>
                  <em>Web Design & Developer Intern</em>
                </li>
                <li>Feb. 2026 - Present</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <h4 className="font-semibold text-lg">Unearth</h4>

              <ul>
                <li>
                  <em>Independent Full-Stack Developer</em>
                </li>
                <li>Sept. 2025 - Present</li>
              </ul>
            </div>
          </div>

          <div className="lg:ml-auto">
            <h3 className="font-fle text-2xl lg:text-3xl">Education</h3>

            <div className="flex flex-col gap-1 pt-6">
              <h4 className="font-semibold text-lg">San Diego City College</h4>

              <ul>
                <li>
                  <em>Associate of Arts in Interaction Design</em>
                </li>
                <li>Present</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <h4 className="font-semibold text-lg">San Diego Mesa College</h4>

              <ul>
                <li>
                  <em>Associate of Science in Web Development</em>
                </li>
                <li>Aug. 2020 - Jun. 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
