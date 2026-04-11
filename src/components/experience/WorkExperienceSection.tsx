import type { WorkExperience } from "@/data/work-experience";

type Props = {
  entries: WorkExperience[];
};

export function WorkExperienceSection({ entries }: Props) {
  return (
    <section className="w-full max-w-3xl" aria-labelledby="work-experience-heading">
      <h2
        id="work-experience-heading"
        className="text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-black mb-2"
      >
        Work experience
      </h2>
      <div
        className="h-px w-full bg-[var(--accent)] mb-8 sm:mb-10"
        aria-hidden
      />

      <ol className="space-y-10 sm:space-y-12 list-none p-0 m-0">
        {entries.map((job) => (
          <li key={job.company}>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
              {job.company}
            </h3>
            {job.role && job.period ? (
              <p className="text-sm sm:text-base font-medium text-black/80 mb-4">
                {job.role}
                <span className="font-normal text-black/45 mx-2">|</span>
                {job.period}
              </p>
            ) : null}
            {job.highlights.length > 0 ? (
              <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-sm sm:text-base text-black/85 leading-relaxed marker:text-[var(--accent)]">
                {job.highlights.map((item, i) => (
                  <li key={`${job.company}-${i}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm sm:text-base text-black/60 italic">
                Additional role details are on my full résumé — happy to share on
                request.
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
