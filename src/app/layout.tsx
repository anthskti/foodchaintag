import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Chain Tag",
  description: "An Outdoor Learning Ecosystem Game for Educational Purposes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-pt-20", "font-sans", geistSans.variable)}
    >
      <body className={`${geistSans.className} antialiased min-full`}>
        <main className="flex flex-col min-h-screen bg-[#F8F8F8]">
          <Header />
          <div className="flex flex-col flex-1 text-black">{children}</div>
        </main>
      </body>
    </html>
  );
}
