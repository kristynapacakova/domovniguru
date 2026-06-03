import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulačky pro domácnost – výpočty zdarma",
  description: "Kalkulačky pro kutily a majitele nemovitostí. Spočítejte barvu, laminát, dlažbu, beton, tapety, hlínu a úspory LED žárovek.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky" },
  openGraph: {
    title: "Kalkulačky pro domácnost – výpočty zdarma",
    description: "Kalkulačky pro kutily a majitele nemovitostí. Spočítejte barvu, laminát, dlažbu, beton, tapety, hlínu a úspory LED žárovek.",
    url: "https://www.domovniguru.cz/kalkulacky",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }],
  },
};

export default function KalkulackyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
