import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Příprava domu na zimu – checklist | DomovniGuru",
  description: "Kompletní checklist přípravy domu na zimu. Kotel, okna, okapy, voda, zahrada – vše co musíte zkontrolovat před mrazem.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/priprava-na-zimu" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
