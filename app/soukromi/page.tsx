import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana soukromí – DomovniGuru",
  description: "Zásady ochrany osobních údajů webu DomovniGuru.",
  alternates: { canonical: "https://domovniguru.cz/soukromi" },
};

export default function SoukromiPage() {
  return (
    <div className="wrap">
      <div className="simple-page">
        <header className="simple-header">
          <p className="hero-eyebrow">Právní informace</p>
          <h1 className="hero-h1" style={{ fontSize: "clamp(28px,4vw,44px)" }}>Ochrana soukromí</h1>
          <p className="simple-lead">Poslední aktualizace: 1. března 2025</p>
        </header>

        <div className="simple-body">
          <h2>Správce údajů</h2>
          <p>Provozovatelem webu DomovniGuru (domovniguru.cz) je fyzická osoba se sídlem v České republice. Pro dotazy k ochraně osobních údajů nás kontaktujte na e-mailu uvedeném v sekci Kontakt.</p>

          <h2>Jaké údaje sbíráme</h2>
          <p>DomovniGuru je obsahový web — nepožadujeme registraci, nevytváříme uživatelské účty a nesbíráme osobní údaje jako jméno nebo e-mail.</p>
          <p>Automaticky zpracováváme technická data návštěvnosti prostřednictvím analytických nástrojů (Google Analytics nebo Plausible). Tato data jsou anonymizovaná a slouží výhradně ke zlepšování obsahu webu.</p>

          <h2>Cookies</h2>
          <p>Web může používat technické cookies nezbytné pro správné fungování. Analytické cookies používáme pouze s vaším souhlasem, který můžete kdykoli odvolat.</p>

          <h2>Sdílení dat s třetími stranami</h2>
          <p>Vaše data neprodáváme ani neposkytujeme třetím stranám za účelem marketingu. Data mohou být sdílena pouze s poskytovateli technických služeb (hosting, analytika) v rozsahu nezbytném pro provoz webu.</p>

          <h2>Vaše práva</h2>
          <p>Máte právo na přístup k vašim osobním údajům, jejich opravu nebo výmaz. Pro uplatnění těchto práv nás kontaktujte e-mailem.</p>

          <h2>Změny zásad</h2>
          <p>Tyto zásady ochrany soukromí můžeme příležitostně aktualizovat. Aktuální verze je vždy dostupná na této stránce s uvedením data poslední aktualizace.</p>
        </div>
      </div>
      <style>{`
        .simple-page{max-width:680px;margin:0 auto;padding:60px 0 100px}
        .simple-header{margin-bottom:48px;padding-bottom:40px;border-bottom:1px solid var(--border)}
        .simple-lead{font-size:16px;line-height:1.65;color:var(--muted);font-weight:300;margin-top:16px}
        .simple-body h2{font-family:var(--font-serif);font-size:clamp(18px,2vw,22px);font-weight:400;margin-bottom:12px;margin-top:36px;padding-top:28px;border-top:1px solid var(--border)}
        .simple-body p{font-size:15px;line-height:1.75;color:#2a2a28;font-weight:300;margin-bottom:12px}
        .simple-body strong{font-weight:600;color:var(--text)}
      `}</style>
    </div>
  );
}
