import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jarní údržba domu – kompletní checklist",
  description: "Co zkontrolovat a udělat na jaře? Okapy, střecha, fasáda, zahrada, vytápění – 40+ úkolů přehledně rozdělených do sekcí.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/jarni-udrzba" },
  openGraph: { title: "Jarní údržba domu – kompletní checklist", description: "Co zkontrolovat a udělat na jaře? Okapy, střecha, fasáda, zahrada, vytápění – 40+ úkolů přehledně rozdělených do sekcí.", url: "https://www.domovniguru.cz/checklisty/jarni-udrzba", type: "website" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
