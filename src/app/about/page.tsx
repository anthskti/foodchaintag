import Image from "next/image";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site-links";

export default function About() {
  return (
    <div className="bg-zinc-50 py-16 px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              About The Creator
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Melissa Smith
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-80">
              Melissa Smith is a York Region District School Board educator with
              over 20 years of classroom teaching experience, specializing in
              geography, science, special education, STEM and outdoor education
              in Ontario, Canada. Melissa has facilitated several ABQ & AQ
              courses for several Universities in Ontario. She has experience
              teaching in both the elementary and secondary panel and has taught
              K-12.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-800">
              As an educator, her mission is to inspire and empower staff and
              students to construct knowledge from engaging in meaningful
              experience. In addition to her teaching, Melissa is a wife and
              mother who strives to model a love for learning in the outdoors.
              Being in nature is the best type of art.
            </p>
          </div>

          <div className="shrink-0 rounded-xl bg-white p-4 shadow-md ring-1 ring-zinc-200">
            <Image
              src="/assets/melissa_smith.jpg"
              alt="Portrait of Melissa Smith, creator of Food Chain Tag"
              width={626}
              height={874}
              sizes="(max-width: 768px) 240px, 280px"
              draggable={false}
              className="h-auto w-full max-w-[240px] object-contain drop-shadow-sm md:max-w-[280px]"
              priority
            />
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-zinc-600">
              Questions about using Food Chain Tag in your classroom or district?
              Send Melissa an email, she'd love to hear from you.
            </p>

            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
              >
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="size-4" aria-hidden />
                  Email Melissa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
