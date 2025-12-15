import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import type { PersonalWork } from "../../../../lib/types/experience/personal-work";

interface PersonalWorkCardProps {
  work: PersonalWork;
}

const PersonalWorkCard = ({ work }: PersonalWorkCardProps) => {
  return (
    <article className="flex flex-col h-full gap-2">
      <h4 className="text-xl sm:text-2xl font-medium mt-2">{work.title}</h4>

      <p>{work.description}</p>

      <ul className="pt-2 flex flex-wrap gap-2 md:mt-auto">
        {work.stack.map((tech) => (
          <li
            key={tech}
            className="bg-btn-bg border border-btn-border text-bg-light py-1 px-2.5 rounded-sm text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-6 pt-2">
        {work.site_url && (
          <a
            href={work.site_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2 hover:text-link-active transition-all duration-300 group"
            aria-label={`Visit live site for ${work.title}`}
          >
            <span>Visit</span>
            <ArrowSquareOutIcon
              className="size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200"
              aria-hidden="true"
            />
          </a>
        )}
        <a
          href={work.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center gap-2 hover:text-link-active transition-all duration-300 group"
          aria-label={`View source code for ${work.title}`}
        >
          <span>View Code</span>
          <ArrowSquareOutIcon
            className="size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};

export default PersonalWorkCard;
