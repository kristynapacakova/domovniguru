import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Příprava domu na zimu – checklist",
  description: "Kompletní checklist přípravy domu na zimu. Kotel, okna, okapy, voda, zahrada – vše co musíte zkontrolovat před mrazem.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/priprava-na-zimu" },
  openGraph: { title: "Příprava domu na zimu – checklist", description: "Kompletní checklist přípravy domu na zimu. Kotel, okna, okapy, voda, zahrada – vše co musíte zkontrolovat před mrazem.", url: "https://www.domovniguru.cz/checklisty/priprava-na-zimu", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
