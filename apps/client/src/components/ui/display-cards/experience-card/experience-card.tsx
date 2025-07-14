import type { Experience } from '../../../../lib/types/experience/experience';

interface ExperienceCardProps {
  exp: Experience;
  delayClasses: string[];
}

const ExperienceCard = ({ exp, delayClasses }: ExperienceCardProps) => {
  return (
    <article key={exp.company} className='max-w-[525px]'>
      <div className='flex items-center gap-2'>
        <div
          className='bg-bg-dark min-w-4 size-4 intersect-once intersect:motion-preset-fade motion-delay-300 motion-duration-1000'
          aria-hidden='true'
          role='presentation'
        />
        <h4 className='text-xl sm:text-2xl font-medium intersect-once intersect:motion-preset-fade motion-delay-[400ms] motion-duration-1000'>
          {exp.company}
        </h4>
      </div>

      <p className='pl-6 intersect-once intersect:motion-preset-fade motion-delay-[500ms] motion-duration-1000'>
        {exp.title} <br /> {exp.start} - {exp.end}
      </p>
      <ul className='list-disc pl-10 mt-2'>
        {exp.responsibilities.map((resp, index) => {
          return (
            <li
              key={index}
              className={`intersect-once intersect:motion-preset-fade motion-duration-1000 ${
                delayClasses[index] || 'motion-delay-[900ms]'
              }`}
            >
              {resp}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ExperienceCard;
