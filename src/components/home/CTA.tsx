import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AMAZON_ORDER_URL } from "@/lib/site-links";

export default function CTA() {
  return (
    <section
      id="order"
      className="scroll-mt-4 bg-linear-to-br from-[#f0c234] via-[#f5d060] to-[#f7d97e] px-6 py-14 md:py-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-800/70">
          Get the Game
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Ready to bring <span className="italic">Food Chain Tag</span> to your class?
        </h2>
        <p className="mt-3 text-lg text-zinc-800">
          One deck. 15+ players. Outdoor or gym.
        </p>

        <div className="mt-4">
          <Button
            asChild
            size="lg"
            className="min-w-[220px] bg-zinc-900 font-semibold text-white hover:bg-zinc-800"
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
}
