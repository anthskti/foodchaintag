import Image from "next/image";
import { Eye, Shield, Utensils } from "lucide-react";

const winConditions = [
  {
    title: "Stay Alive",
    description: "Avoid being tagged and eaten by predators.",
    icon: Shield,
  },
  {
    title: "Hide & Escape",
    description: "Use space and strategy to slip away and thrive.",
    icon: Eye,
  },
  {
    title: "Eat to Survive",
    description: "Tag prey lower than you to gain energy.",
    icon: Utensils,
  },
] as const;

const featuredCards = [
  {
    name: "Producer",
    image: "/assets/producer_card.png",
    width: 367,
    height: 494,
  },
  {
    name: "Omnivore",
    image: "/assets/omnivore_card.png",
    width: 361,
    height: 486,
  },
  {
    name: "Carnivore",
    image: "/assets/carnivore_card.png",
    width: 360,
    height: 485,
  },
] as const;

const deckComposition = [
  { role: "Producer", count: 18 },
  { role: "1° Herbivore", count: 12 },
  { role: "2° Herbivore", count: 5 },
  { role: "Omnivore", count: 9 },
  { role: "1° Carnivore", count: 3 },
  { role: "2° Carnivore", count: 2 },
  { role: "Human", count: 1 },
  { role: "Disease", count: 1 },
  { role: "Truck Driver", count: 1 },
] as const;

export const Details = () => {
  return (
    <section
      id="deck"
      className="scroll-mt-4 border-y border-zinc-200 bg-zinc-50 py-16 px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Gameplay
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            How to Win
          </h2>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {winConditions.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-xl border border-zinc-200 bg-white p-5 ring-1 ring-zinc-200/60"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-50">
                <Icon className="size-5 text-emerald-700" aria-hidden />
              </div>
              <h3 className="mt-3 font-bold text-zinc-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-zinc-200 pt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                The deck
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                What's in the box?
              </h2>
            </div>
            <p className="text-sm font-medium text-zinc-500">
              52 cards per deck
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 items-stretch gap-4 md:grid-cols-4 md:gap-5">
            {featuredCards.map(({ name, image, width, height }) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl bg-white p-3 shadow-md ring-1 ring-zinc-200"
              >
                <Image
                  src={image}
                  alt={`${name} role card`}
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 45vw, 22vw"
                  draggable={false}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}

            <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-zinc-200">
              <div className="border-b border-zinc-100 bg-zinc-50 px-3 py-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
                  Deck
                </h3>
              </div>
              <table className="w-full text-left text-xs">
                <tbody>
                  {deckComposition.map(({ role, count }) => (
                    <tr
                      key={role}
                      className="border-b border-zinc-50 last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="px-3 py-1.5 font-medium text-zinc-600"
                      >
                        {role}
                      </th>
                      <td className="px-3 py-1.5 text-right font-bold tabular-nums text-zinc-900">
                        {count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
