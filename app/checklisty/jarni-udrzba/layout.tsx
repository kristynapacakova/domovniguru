import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jarní údržba domu – kompletní checklist",
  description: "Co zkontrolovat a udělat na jaře? Okapy, střecha, fasáda, zahrada, vytápění – 40+ úkolů přehledně rozdělených do sekcí.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/jarni-udrzba" },
  openGraph: { title: "Jarní údržba domu – kompletní checklist", description: "Co zkontrolovat a udělat na jaře? Okapy, střecha, fasáda, zahrada, vytápění – 40+ úkolů přehledně rozdělených do sekcí.", url: "https://www.domovniguru.cz/checklisty/jarni-udrzba", type: "website", images: [{ url: "/api/og?title=Jarn%C3%AD%20%C3%BAdr%C5%BEba%20domu%20%E2%80%93%20kompletn%C3%AD%20checklist&cat=checklisty", width: 1200, height: 630, alt: "Jarní údržba domu – kompletní checklist" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
