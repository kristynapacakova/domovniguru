import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist stěhování – na co nezapomenout",
  description: "Kompletní checklist stěhování od 2 měsíců dopředu až po první dny v novém bytě. Nic vám neunikne.",
  alternates: { canonical: "https://www.domovniguru.cz/checklisty/stehovani" },
  openGraph: { title: "Checklist stěhování – na co nezapomenout", description: "Kompletní checklist stěhování od 2 měsíců dopředu až po první dny v novém bytě. Nic vám neunikne.", url: "https://www.domovniguru.cz/checklisty/stehovani", type: "website", images: [{ url: "/api/og?title=Checklist%20st%C4%9Bhov%C3%A1n%C3%AD%20%E2%80%93%20na%20co%20nezapomenout&cat=checklisty", width: 1200, height: 630, alt: "Checklist stěhování – na co nezapomenout" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
