import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Příprava domu na zimu – checklist",
  description: "Kompletní checklist přípravy domu na zimu. Kotel, okna, okapy, voda, zahrada – vše co musíte zkontrolovat před mrazem.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/priprava-na-zimu" },
  openGraph: { title: "Příprava domu na zimu – checklist", description: "Kompletní checklist přípravy domu na zimu. Kotel, okna, okapy, voda, zahrada – vše co musíte zkontrolovat před mrazem.", url: "https://www.domovniguru.cz/checklisty/priprava-na-zimu", type: "website", images: [{ url: "/api/og?title=P%C5%99%C3%ADprava%20domu%20na%20zimu%20%E2%80%93%20checklist&cat=checklisty", width: 1200, height: 630, alt: "Příprava domu na zimu – checklist" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
