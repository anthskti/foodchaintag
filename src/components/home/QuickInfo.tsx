// Science Base Background Section
import Link from "next/link";
import { ArrowRight, Crosshair, GitBranch, Rabbit } from "lucide-react";

import { cn } from "@/lib/utils";

const definitions = [
  {
    term: "Predator",
    definition: "An organism that hunts other organisms for food.",
    icon: Crosshair,
    accent: "border-l-red-500",
  },
  {
    term: "Prey",
    definition: "An organism that is hunted by other organisms for food.",
    icon: Rabbit,
    accent: "border-l-amber-400",
  },
] as const;

export const QuickInfo = () => {
  return (
    <section
      id="science-background"
      className="border-t border-zinc-200 bg-white py-14 px-6 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Science Background
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Ecosystem Essentials
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-zinc-600">
            Quick definitions to support classroom discussion before, during, or
            after a game.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {definitions.map(({ term, definition, icon: Icon, accent }) => (
            <article
              key={term}
              className={cn(
                "rounded-xl border border-zinc-200 bg-zinc-50 p-6 border-l-4",
                accent,
              )}
            >
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-zinc-200">
                  <Icon className="size-5 text-zinc-800" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">{term}</h3>
                  <p className="mt-1 leading-relaxed text-zinc-800">
                    {definition}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 shadow-sm">
              <GitBranch className="size-5 text-white" aria-hidden />
            </div>
            <div className="max-w-3xl">
              <h3 className="text-lg font-bold text-zinc-900">
                Food Chains & Food Webs
              </h3>
              <p className="mt-2 leading-relaxed text-zinc-800">
                A food chain is a sequence of organisms that are linked by the
                order of food they eat. Real ecosystems have many food chains
                that vary in size and species. Food webs are when a species
                belongs to multiple food chains in an ecosystem. These
                relationships are complicated by predation and competition and
                can leave individual species vying for the same resources.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8">
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
          >
            Explore lesson ideas
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};
