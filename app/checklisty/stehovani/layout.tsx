import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist stěhování – na co nezapomenout | DomovniGuru",
  description: "Kompletní checklist stěhování od 2 měsíců dopředu až po první dny v novém bytě. Nic vám neunikne.",
  alternates: { canonical: "https://domovniguru.cz/checklisty/stehovani" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
