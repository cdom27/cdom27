import { studies } from "@/app/_lib/utils/case-studies";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = studies.find((s) => s.project?.slug === slug);

  if (!study || !study.project) notFound();

  return (
    <>
      <div className="xl:max-w-300 2xl:max-w-400 xl:mx-auto pb-24">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-2/5 2xl:w-1/3 lg:sticky 2xl:pr-6 lg:top-6 lg:self-start min-h-96 lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto pb-24">
            <h1 className="font-fle text-2xl lg:text-5xl">
              {study.project.title}
            </h1>

            <ul className="flex flex-wrap gap-2 pt-6 pb-12">
              {study.project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-stone-200 px-2 py-1 rounded-xs transition-colors duration-700 hover:duration-150 ease-in-out hover:bg-stone-300"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-12">
              {study.sections.map((section) => (
                <div key={section.id} className="flex flex-col gap-4">
                  <h2 className="font-semibold text-xl">{section.title}</h2>
                  {section.paragraphs &&
                    section.paragraphs.map((p, index) => (
                      <p key={index}>{p}</p>
                    ))}

                  {section.subsections &&
                    section.subsections.map((sub) => (
                      <div key={sub.id} className="flex flex-col gap-2 pt-2">
                        <h3 className="font-semibold">{sub.heading}</h3>

                        {sub.paragraphs &&
                          sub.paragraphs.map((p, index) => (
                            <p key={index}>{p}</p>
                          ))}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </aside>

          <div className="w-full lg:w-3/5 2xl:w-2/3 min-h-96">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {study.images.map((img, index) => (
                <div
                  key={img.id}
                  className={
                    index === 0 || index === 1
                      ? "xl:col-span-2"
                      : "xl:col-span-1"
                  }
                >
                  <Image
                    id={img.id}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 40vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={90}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
