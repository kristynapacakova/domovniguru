import type { Metadata } from "next";
import Link from "next/link";
import SchnutiPoteruCalculator from "@/app/components/SchnutiPoteruCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka doby schnutí potěru 2026 – kdy pokládat podlahu?",
  description: "Spočítej orientační dobu schnutí cementového i anhydritového potěru podle tloušťky a podlahového topení. Zjisti, kdy je potěr připraven na pokládku podlahy.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/doba-schnuti-poteru" },
  openGraph: { title: "Kalkulačka doby schnutí potěru 2026", description: "Kdy pokládat podlahu na potěr? Orientační doba schnutí okamžitě.", url: "https://www.domovniguru.cz/kalkulacky/doba-schnuti-poteru", siteName: "DomovniGuru", locale: "cs_CZ", type: "website", images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20doby%20schnut%C3%AD%20pot%C4%9Bru%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka doby schnutí potěru 2026" }] },
};

export default function DobaSchnutiPoteruPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span><Link href="/kalkulacky">Kalkulačky</Link><span>/</span><span>Doba schnutí potěru</span>
        </nav>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>Jak dlouho schne potěr?</h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>Zadej tloušťku a typ potěru — kalkulačka spočítá orientační dobu schnutí a připomene, kdy je potěr skutečně připraven na pokládku podlahy.</p>

        <SchnutiPoteruCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>Jak dlouho nechat potěr schnout před pokládkou podlahy</h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Doba schnutí potěru je jednou z nejčastěji podceňovaných fází při rekonstrukci. Základní pravidlo pro cementový potěr říká, že do tloušťky 40 mm potřebuje přibližně jeden týden na každý centimetr. Nad 40 mm už schnutí neprobíhá lineárně — každý další centimetr trvá zhruba dvakrát déle, protože vlhkost se z hlubších vrstev odpařuje mnohem pomaleji. Anhydritový (síranovápenatý) potěr schne v počáteční fázi o něco rychleji, ale i u něj platí, že silnější vrstvy vyžadují trpělivost.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Rychlost schnutí ovlivňuje řada faktorů: teplota a vlhkost v místnosti, větrání, typ podlahové krytiny i to, zda je do potěru zabudováno podlahové topení. Funkčním vytápěním (tzv. topná zkouška podle protokolu) lze schnutí urychlit, ale teplotu je nutné zvyšovat postupně — prudké vytopení může způsobit praskliny a trvalé deformace potěru. Kalkulačka výše proto u zapnutého topení uvádí zkrácenou orientační dobu, kterou je ale vždy nutné ověřit měřením.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300 }}>
            Nejdůležitější zásada zní: nikdy nepokládejte podlahu jen podle kalendáře nebo podle pocitu, že už je potěr suchý na dotek. Rozhodující je zbytková vlhkost změřená metodou CM (karbidová metoda). U cementového potěru se pro pokládku obvykle vyžaduje hodnota do 2,0 % CM (do 1,8 % CM u podlahového topení), u anhydritu je limit výrazně přísnější — do 0,5 % CM, respektive do 0,3 % CM s topením. Vinylová a dřevěná podlaha položená na příliš vlhký potěr se může kroutit, boulit nebo odlepovat, což znamená nákladnou reklamaci.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>Mohlo by vás zajímat</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Betonový potěr a doba schnutí", href: "/blog/betonovy-poter-doba-schnuti", icon: "🧱" },
              { title: "Kladení vinylové podlahy", href: "/blog/kladeni-vinyl-podlahy", icon: "🪵" },
              { title: "Kalkulačka podlahového topení", href: "/kalkulacky/podlahove-topeni", icon: "♨️" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display: "block", background: "#f8f4f0", border: "1px solid #e8e0d8", borderRadius: "10px", padding: "14px 16px", textDecoration: "none" }}>
                <div style={{ fontSize: "18px", marginBottom: "6px" }}>{r.icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#2a2a28", lineHeight: 1.4 }}>{r.title}</div>
                <div style={{ fontSize: "12px", color: "#8a8a80", marginTop: "6px" }}>Číst →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
