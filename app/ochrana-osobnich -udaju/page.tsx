export const metadata = {
  title: "Ochrana osobních údajů | DomovniGuru",
  description: "Informace o ochraně osobních údajů na webu DomovniGuru.",
};

export default function PrivacyPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Ochrana osobních údajů</h1>

      <p className="p" style={{ marginTop: 16 }}>
        Tento web neshromažďuje žádné osobní údaje uživatelů,
        kromě údajů technické povahy (např. cookies), které jsou
        nezbytné pro správné fungování webu.
      </p>

      <p className="p" style={{ marginTop: 16 }}>
        V budoucnu může web využívat reklamní systém Google AdSense,
        který může používat cookies pro personalizaci reklam.
      </p>

      <p className="p" style={{ marginTop: 16 }}>
        Pro více informací o zpracování údajů společností Google
        navštivte: https://policies.google.com/privacy
      </p>
    </main>
  );
}