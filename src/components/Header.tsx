"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { AMAZON_ORDER_URL } from "@/lib/site-links";
import { cn } from "@/lib/utils";

const navItems = [
  // { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Reviews", href: "/reviews" },
  { name: "About", href: "/about" },
] as const;

export default function Header() {
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-zinc-900"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-emerald-600">FOOD CHAIN</span> TAG
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-semibold transition-colors",
                path === href
                  ? "text-emerald-700"
                  : "text-zinc-600 hover:text-zinc-900",
              )}
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-amber-400 font-semibold text-zinc-900 hover:bg-amber-300 sm:inline-flex"
          >
            <a
              href={AMAZON_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on Amazon
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            className="bg-amber-400 font-semibold text-zinc-900 hover:bg-amber-300 sm:hidden"
          >
            <a
              href={AMAZON_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order
            </a>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                    path === href
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
