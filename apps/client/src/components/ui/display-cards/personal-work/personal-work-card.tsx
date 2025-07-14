import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import type { PersonalWork } from '../../../../lib/types/experience/personal-work';

interface PersonalWorkCardProps {
  work: PersonalWork;
}

const PersonalWorkCard = ({ work }: PersonalWorkCardProps) => {
  return (
    <article className='flex flex-col h-full gap-2'>
      <figure>
        <img
          src={work.image}
          alt={work.title}
          className='w-full h-auto intersect-once intersect:motion-preset-blur-right motion-duration-1000'
        />
        <figcaption className='text-xl sm:text-2xl font-medium mt-2 intersect-once intersect:motion-preset-fade motion-duration-1000 motion-delay-[400ms]'>
          {work.title}
        </figcaption>
      </figure>

      <p className='intersect-once intersect:motion-preset-fade motion-duration-2000 motion-delay-500'>
        {work.description}
      </p>

      <ul className='pt-2 flex flex-wrap gap-2 md:mt-auto'>
        {work.stack.map((tech) => (
          <li
            key={tech}
            className='bg-btn-bg border-[1px] border-btn-border text-bg-light py-1 px-2.5 rounded-sm text-sm intersect-once intersect:motion-preset-fade motion-delay-[600ms] motion-duration-2000'
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className='flex gap-6 pt-2'>
        {work.site_url && (
          <a
            href={work.site_url}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline flex items-center gap-2 intersect-once intersect:motion-preset-fade motion-delay-700 motion-duration-2000 hover:text-link-active transition-all duration-300 group'
            aria-label={`Visit live site for ${work.title}`}
          >
            <span>Visit</span>
            <ArrowSquareOutIcon
              className='size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
              aria-hidden='true'
            />
          </a>
        )}
        <a
          href={work.repo_url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline flex items-center gap-2 intersect-once intersect:motion-preset-fade motion-delay-[800ms] motion-duration-2000 hover:text-link-active transition-all duration-300 group'
          aria-label={`View source code for ${work.title}`}
        >
          <span>View Code</span>
          <ArrowSquareOutIcon
            className='size-4 stroke-bg-dark group-hover:motion-preset-seesaw motion-loop-once motion-duration-500 motion-delay-200'
            aria-hidden='true'
          />
        </a>
      </div>
    </article>
  );
};

export default PersonalWorkCard;
