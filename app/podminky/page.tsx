import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podmínky užití – DomovniGuru",
  description: "Podmínky užití webu DomovniGuru.",
  alternates: { canonical: "https://domovniguru.cz/podminky" },
};

export default function PodminkyPage() {
  return (
    <div className="wrap">
      <div className="simple-page">
        <header className="simple-header">
          <p className="hero-eyebrow">Právní informace</p>
          <h1 className="hero-h1" style={{ fontSize: "clamp(28px,4vw,44px)" }}>Podmínky užití</h1>
          <p className="simple-lead">Poslední aktualizace: 1. března 2025</p>
        </header>

        <div className="simple-body">
          <h2>Obecná ustanovení</h2>
          <p>Používáním webu DomovniGuru (domovniguru.cz) souhlasíte s těmito podmínkami užití. Pokud s podmínkami nesouhlasíte, přestaňte web používat.</p>

          <h2>Obsah webu</h2>
          <p>Obsah webu DomovniGuru (články, návody, kalkulačky, checklisty) má pouze informační charakter. Přestože usilujeme o přesnost a aktuálnost informací, nepřebíráme odpovědnost za případné chyby ani za výsledky prací provedených na základě informací z webu.</p>
          <p>Před zahájením jakýchkoliv stavebních, elektrikářských nebo jiných odborných prací doporučujeme konzultaci s kvalifikovaným odborníkem.</p>

          <h2>Duševní vlastnictví</h2>
          <p>Veškerý obsah webu — texty, ilustrace, grafika a kód — je chráněn autorským právem. Obsah nesmí být kopírován, šířen ani jinak využíván bez předchozího písemného souhlasu provozovatele.</p>
          <p>Citace krátkých úryvků s uvedením zdroje a odkazem na původní stránku jsou povoleny.</p>

          <h2>Odkazy na externí weby</h2>
          <p>Web může obsahovat odkazy na externí stránky. Za obsah externích webů nenese DomovniGuru žádnou odpovědnost.</p>

          <h2>Omezení odpovědnosti</h2>
          <p>DomovniGuru poskytuje informace tak jak jsou — bez záruky úplnosti nebo vhodnosti pro konkrétní účel. Provozovatel nenese odpovědnost za žádné přímé ani nepřímé škody vzniklé v souvislosti s používáním webu.</p>

          <h2>Změny podmínek</h2>
          <p>Vyhrazujeme si právo tyto podmínky kdykoli změnit. Aktuální verze je vždy dostupná na této stránce.</p>

          <h2>Kontakt</h2>
          <p>Pro dotazy nás kontaktujte prostřednictvím stránky <a href="/kontakt" style={{ color: "var(--text)", fontWeight: 500 }}>Kontakt</a>.</p>
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
