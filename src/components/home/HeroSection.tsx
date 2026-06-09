import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AMAZON_ORDER_URL } from "@/lib/site-links";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[50vh]">
      <div className="absolute inset-0 bg-[#59b223]">
        <div
          className="absolute inset-0 bg-[url('/assets/foodchainlogo.png')] bg-cover bg-center opacity-50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/50"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
          Outdoor Learning Game
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          FOOD CHAIN TAG
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white md:text-xl">
          A card-driven tag game that teaches food chains and food webs through
          movement, strategy, and play.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[200px] border-white/70 bg-white/10 text-white hover:bg-white/20 hover:text-white duration-200"
          >
            <Link href="#deck">
              See how it works
              <ChevronDown className="size-4" aria-hidden />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="min-w-[200px] bg-amber-400 font-semibold text-zinc-900 hover:bg-amber-300 duration-200"
          >
            <a
              href={AMAZON_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on Amazon
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
