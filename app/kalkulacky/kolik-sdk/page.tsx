import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import SdkCalculator from "@/app/components/SdkCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka sádrokartonu 2026 – kolik desek a profilů potřebuju?",
  description: "Spočítej přesné množství SDK desek, CW a UW profilů, šroubů a tmelu na sádrokartonovou příčku. Zadej rozměry a počet vrstev — výsledek ihned zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-sdk" },
  openGraph: {
    title: "Kalkulačka sádrokartonu 2026 – kolik desek a profilů potřebuju?",
    description: "Kolik SDK desek a profilů potřebuju na příčku? Spočítej přesně podle rozměrů a počtu vrstev.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-sdk",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20s%C3%A1drokartonu%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka sádrokartonu 2026" }],
  },
};

export default function KolikSdkPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik SDK</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik sádrokartonu potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej délku a výšku příčky, počet vrstev desek a to, zda chceš vložit minerální vatu — kalkulačka ti okamžitě spočítá počet SDK desek, CW a UW profilů, šroubů i potřebné množství tmelu.
        </p>

        <SdkCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak správně naplánovat materiál na SDK příčku
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Sádrokartonová příčka se skládá z ocelové kostry z UW a CW profilů a opláštění sádrokartonovými deskami. UW profily (U-shaped Wall) se kotví do podlahy a stropu po celé délce příčky — tvoří rám. CW profily (C-shaped Wall) se vsazují do UW každých 60 cm a tvoří svislé výztuhy. Standardní deska SDK má rozměr 1 200 × 2 500 mm, tedy plochu 3 m². Kalkulačka s tímto rozměrem počítá a přidává rezervu na řezy. Při výšce místnosti do 2,6 m zpravidla vystačí jedna deska na výšku bez příčného spoje, což montáž výrazně zjednodušuje.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Počet vrstev desek závisí na požadavcích na zvukovou izolaci a požární odolnost. Jednoduchá příčka (1+1) s tloušťkou kostry 75 mm a minerální vatou dosahuje vzduchové neprůzvučnosti Rw přibližně 48–52 dB, což postačuje pro oddělení obývacího pokoje od ložnice. Pro koupelny nebo domácí kina se doporučuje dvojité opláštění (2+2), které zvyšuje neprůzvučnost o 5–8 dB. Minerální vata také zlepšuje tepelnou izolaci — v příčce oddělující vytápěné a nevytápěné prostory je proto téměř nezbytná.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Při tmelení a finální úpravě povrchu počítej se třemi vrstvami tmelu — základní vyplnění spár, přestěrkování a finální přebroušení. Spotřeba tmelu je přibližně 0,3 kg na m² na jednu vrstvu, kalkulačka uvádí celkovou zásobu na obě strany. Na spáry používej armovací sklotextilní pásku, která zabraňuje vzniku trhlin v rozích a na spojích desek. Výsledný povrch je potřeba penetrovat před malováním — sádrová deska je jinak velmi savá a barva by se spotřebovala dvojnásobně.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Sádrokarton příčka – postup krok za krokem", href: "/blog/sadrokarton-pricka-postup", icon: "🧱" },
              { title: "Kolik cihel potřebuju – kalkulačka zdiva", href: "/kalkulacky/kolik-cihel", icon: "🏗️" },
              { title: "Kalkulačka barvy na zeď", href: "/kalkulacky/kolik-barvy", icon: "🪣" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display:"block", background:"#f8f4f0", border:"1px solid #e8e0d8", borderRadius:"10px", padding:"14px 16px", textDecoration:"none", transition:"background 120ms" }}>
                <div style={{ fontSize:"18px", marginBottom:"6px" }}>{r.icon}</div>
                <div style={{ fontSize:"14px", fontWeight:500, color:"#2a2a28", lineHeight:1.4 }}>{r.title}</div>
                <div style={{ fontSize:"12px", color:"#8a8a80", marginTop:"6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
