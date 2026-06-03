import type { Metadata } from "next";
import ShareButtons from "@/app/components/ShareButtons";
import Link from "next/link";
import OsivoCalculator from "@/app/components/OsivoCalculator";

export const metadata: Metadata = {
  title: "Kalkulačka osiva trávníku 2026 – kolik kg osiva na zahradu?",
  description: "Spočítej přesné množství travního osiva podle plochy a typu trávníku. Rekreační, okrasný, sportovní nebo stínový trávník — výsledek ihned zdarma.",
  alternates: { canonical: "https://www.domovniguru.cz/kalkulacky/kolik-osiva" },
  openGraph: {
    title: "Kalkulačka osiva trávníku 2026 – kolik kg osiva na zahradu?",
    description: "Kolik kilogramů osiva potřebuju na trávník? Spočítej přesně podle plochy a zvoleného typu směsi.",
    url: "https://www.domovniguru.cz/kalkulacky/kolik-osiva",
    siteName: "DomovniGuru",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/api/og?title=Kalkula%C4%8Dka%20osiva%20tr%C3%A1vn%C3%ADku%202026&cat=kalkulacky", width: 1200, height: 630, alt: "Kalkulačka osiva trávníku 2026" }],
  },
};

export default function KolikOsivaPage() {
  return (
    <div className="wrap" style={{ padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "680px" }}>
        <nav style={{ fontSize: "12px", color: "#8a8a80", marginBottom: "24px", display: "flex", gap: "6px" }}>
          <Link href="/">Domů</Link><span>/</span>
          <Link href="/kalkulacky">Kalkulačky</Link><span>/</span>
          <span>Kolik osiva</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,40px)", fontWeight: 400, marginBottom: "12px", lineHeight: 1.15 }}>
          Kolik osiva na trávník potřebuju?
        </h1>
        <p style={{ fontSize: "17px", color: "#6a6a60", fontWeight: 300, marginBottom: "36px", lineHeight: 1.7 }}>
          Zadej rozměry plochy, zvol typ trávníku a způsob výsevu — kalkulačka ti okamžitě spočítá potřebné množství osiva i startovacího hnojiva.
        </p>

        <OsivoCalculator />

        <div style={{ marginTop: "56px", borderTop: "1px solid #e8e0d8", paddingTop: "40px" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 400, marginBottom: "16px" }}>
            Jak vybrat správné osivo a kdy vysévat pro nejlepší výsledky
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Výběr správné travní směsi je pro vzhled trávníku důležitější než přesné množství osiva. Rekreační trávníky jsou určeny pro rodiny s dětmi a domácí mazlíčky — obsahují odolné druhy jako jílek vytrvalý (Lolium perenne) a kostřavu červenou (Festuca rubra), které snáší intenzivní sešlapávání. Okrasné trávníky jsou tvořeny jemnějšími druhy, jako je lipnice luční (Poa pratensis), a vyžadují pravidelnější péči. Pro stinné části zahrady — pod stromy nebo na severní straně — existují speciální stínové směsi s vyšším podílem kostřav, které přežijí i v podmínkách s méně než 3–4 hodinami přímého slunce denně.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "16px" }}>
            Nejlepší termín pro nový výsev je jaro (duben až květen) nebo konec léta (srpen až polovina září). Jarní výsev těží z dostatku vlhkosti z půdy, ale musíš počítat s konkurencí plevelů, které v té době rovněž vzcházejí. Podzimní výsev naopak probíhá v době, kdy jsou plevele méně agresivní, a tráva stihne zakořenit ještě před zimou. Vyhni se výsevu v červnu a červenci — v horkém a suchém počasí je nutné zálivky třikrát denně, jinak osivo vyschne ještě před vyklíčením.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#3a3a30", fontWeight: 300, marginBottom: "0" }}>
            Před výsevem půdu dobře zpracuj — rozrušení do hloubky 10–15 cm, doplnění substrátu v případě chudé půdy a urovnání povrchu hráběmi. Startovací hnojivo s vysokým obsahem fosforu (podporuje klíčení a tvorbu kořenů) zapracuj do vrchní vrstvy 3–5 cm. Po výsevu osivo přikryj lehce hráběmi a přiválcuj, aby semena přilnula k půdě. První tři týdny udržuj povrch vlhký zalíváním jemným rozprašovačem — silný proud vody semena smyje nebo přesune. První sečení proveď, až tráva dorůstá výšky 8–10 cm, a seč pouze do výšky 5 cm.
          </p>
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a80", marginBottom: "16px" }}>
            Mohlo by vás zajímat
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { title: "Jak sekat trávník – průvodce péčí o zahradu", href: "/blog/jak-sekat-travnik", icon: "🌿" },
              { title: "Kalkulačka hlíny a substrátu", href: "/kalkulacky/kolik-hliny", icon: "🪴" },
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
