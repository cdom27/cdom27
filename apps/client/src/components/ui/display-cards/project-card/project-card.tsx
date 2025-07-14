import type { Project } from '../../../../lib/types/experience/project';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

interface ProjectCardProps {
  p: Project;
}

const ProjectCard = ({ p }: ProjectCardProps) => {
  return (
    <article key={p.title} className='flex flex-col h-full gap-2'>
      <div className='flex items-center gap-2'>
        <div
          className='bg-bg-dark min-w-4 size-4 intersect-once intersect:motion-preset-fade motion-delay-300 motion-duration-1000'
          aria-hidden='true'
          role='presentation'
        />
        <a
          href={p.repo_url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline flex items-center gap-2 text-xl sm:text-2xl intersect-once intersect:motion-preset-fade motion-duration-1000 motion-delay-[400ms] hover:text-link-active transition-all duration-300 group'
          aria-label={`View source code for ${p.title}`}
        >
          <span>{p.title}</span>
          <ArrowSquareOutIcon
            className='min-w-4 size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
            aria-hidden='true'
          />
        </a>
      </div>

      <p className='pl-6 intersect-once intersect:motion-preset-fade motion-duration-2000 motion-delay-500'>
        {p.description}
      </p>

      <ul className='pt-2 flex flex-wrap gap-2 pl-6 md:mt-auto'>
        {p.stack.map((tech) => (
          <li
            key={tech}
            className='bg-btn-bg border-btn-border text-bg-light py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-sm text-sm intersect-once intersect:motion-preset-fade motion-delay-[600ms] motion-duration-2000'
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProjectCard;
