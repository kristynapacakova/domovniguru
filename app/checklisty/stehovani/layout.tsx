import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist stěhování – na co nezapomenout",
  description: "Kompletní checklist stěhování od 2 měsíců dopředu až po první dny v novém bytě. Nic vám neunikne.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/stehovani" },
  openGraph: { title: "Checklist stěhování – na co nezapomenout", description: "Kompletní checklist stěhování od 2 měsíců dopředu až po první dny v novém bytě. Nic vám neunikne.", url: "https://www.domovniguru.cz/checklisty/stehovani", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
