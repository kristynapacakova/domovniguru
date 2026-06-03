import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog o domácnosti – tipy, návody a rady | DomovniGuru",
  description: "Přes 110 článků o malování, elektrice, zahradě, stěhování a sezónní údržbě. Praktické rady bez zbytečné teorie.",
  alternates: { canonical: "https://www.domovniguru.cz/blog" },
  openGraph: {
    title: "Blog o domácnosti – DomovniGuru",
    description: "Přes 110 praktických článků. Malování, elektrika, zahrada, stěhování a sezónní údržba.",
    url: "https://www.domovniguru.cz/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
