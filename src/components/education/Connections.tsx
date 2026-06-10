import { cn } from "@/lib/utils";

const subjects = [
  {
    label: "Science",
    className: "bg-red-50 border-l-4 border-l-red-500",
    value:
      "Examining the food chain, food webs, habitats and predator/prey relationships.",
  },
  {
    label: "Math",
    className: "bg-blue-50 border-l-4 border-l-blue-500",
    value: "Pyramid of numbers and balanced ecosystems.",
  },
  {
    label: "Social Studies",
    className: "bg-emerald-50 border-l-4 border-l-emerald-500",
    value: "Resource management, ecosystems and orienteering.",
  },
  {
    label: "Health & Physical",
    className: "bg-yellow-50 border-l-4 border-l-yellow-500",
    value: "Interactive and active play.",
  },
] as const;

export const Connections = () => {
  return (
    <section className="border-t border-zinc-200 bg-white py-14 px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Food Chain Tag with Education
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Educational Connections
          </h2>
          <p className="mt-4 text-md leading-relaxed text-zinc-800">
            Food Chain Tag connects to learning in the classroom in the
            following ways:
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {subjects.map(({ label, value, className }) => (
            <li
              key={label}
              className={cn(
                "rounded-xl border border-zinc-200 bg-white p-5 ring-1 ring-zinc-200/60 shadow-md",
                className,
              )}
            >
              <div className="flex items-start gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-zinc-800 ring-1 ring-zinc-200">
                    {label}
                  </span>
                  <p className="mt-2 text-md leading-relaxed text-zinc-800">
                    {value}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <figure className="mt-10 rounded-xl border border-zinc-200 border-l-4 border-l-amber-400 bg-linear-to-br from-amber-50/80 to-zinc-50 p-6 md:p-8 shadow-md">
          <figcaption className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em]">
            Built for every learner
          </figcaption>
          <blockquote className="mt-3 text-sm md:text-md leading-relaxed text-zinc-700">
            Bright colourful cards that include both images and words for
            participants that are neurodivergent or who may be multilingual
            learners. Each card also has a number system embedded in a pyramid
            of numbers so that players can examine which number is lower. Game
            provides a series of modifications designed for different types of
            playing spaces and different levels of difficulty.
          </blockquote>
        </figure>
      </div>
    </section>
  );
};
