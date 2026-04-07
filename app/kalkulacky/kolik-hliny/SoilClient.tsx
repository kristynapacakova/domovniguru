"use client";

import dynamic from "next/dynamic";

// Tady je to ssr: false v pořádku, protože tohle je Client Component
const SoilCalculator = dynamic(() => import("../../components/SoilCalculator"), {
  ssr: false,
});

export default function SoilClient() {
  return <SoilCalculator />;
}