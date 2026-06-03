import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jarní údržba domu – kompletní checklist | DomovniGuru",
  description: "Co zkontrolovat a udělat na jaře? Okapy, střecha, fasáda, zahrada, vytápění – 40+ úkolů přehledně rozdělených do sekcí.",
  alternates: { canonical: "https://domovniguru.cz/checklisty/jarni-udrzba" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
