import Image from "next/image";
import { Clock, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    label: "Players",
    value: "15+",
    icon: Users,
  },
  {
    label: "Ages",
    value: "8+",
    icon: GraduationCap,
  },
  {
    label: "Time",
    value: "20–60 min",
    icon: Clock,
  },
] as const;

const audiences = [
  "Educators",
  "Sports Teams",
  "Youth Groups",
  "Team Building",
] as const;

export default function AboutGame() {
  return (
    <section
      id="about"
      className="scroll-mt-4 border-t border-zinc-200 bg-white py-14 px-6 md:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            The game
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            What is Food Chain Tag?
          </h2>
          <p className="mt-4 max-w-prose text-lg text-zinc-800">
          Food Chain Tag is a comprehensive game that gets the participants
          active and outdoors in a fun competitive manner. Apply your science
          knowledge of food webs, food chains and ecosystem outdoors, in a gym
          or any open space or area. Great for gymansiums, school yards, forest
          and fields.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 ring-1 ring-zinc-200"
              >
                {audience}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-md md:ml-auto">
          <div className="overflow-hidden rounded-xl bg-zinc-50 p-4 shadow-md ring-1 ring-zinc-200">
            {/*
              Mobile:  flex-col  → stats row on top, image below
              Desktop: flex-row → stats column on left, image on right
            */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="grid grid-cols-3 gap-2 md:flex md:w-[112px] md:shrink-0 md:flex-col md:gap-3">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-lg bg-white p-2.5 text-center ring-1 ring-zinc-200 md:p-3"
                  >
                    <Icon
                      className="mx-auto size-5 text-emerald-700"
                      aria-hidden
                    />
                    <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-zinc-500 md:mt-2 md:text-xs">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-zinc-900 md:text-base">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex min-w-0 flex-1 items-center justify-center">
                <Image
                  src="/assets/foodchaincard.png"
                  alt="Food Chain Tag card back showing the game logo"
                  width={626}
                  height={874}
                  sizes="(max-width: 768px) 240px, 280px"
                  draggable={false}
                  className="h-auto w-full max-w-[240px] object-contain drop-shadow-sm md:max-w-none"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
