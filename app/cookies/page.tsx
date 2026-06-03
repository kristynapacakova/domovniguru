export const metadata = {
  title: "Používání cookies",
  description: "Informace o používání cookies na webu DomovniGuru – jaké cookies používáme, k čemu slouží a jak je spravovat.",
  alternates: { canonical: "https://www.domovniguru.cz/cookies" },
  openGraph: { title: "Používání cookies", description: "Informace o používání cookies na webu DomovniGuru – jaké cookies používáme, k čemu slouží a jak je spravovat.", url: "https://www.domovniguru.cz/cookies", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "DomovniGuru" }] },
};

export default function CookiesPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Používání cookies</h1>

      <p className="p" style={{ marginTop: 16 }}>
        Web DomovniGuru může používat soubory cookies za účelem
        zajištění správné funkčnosti a analýzy návštěvnosti.
      </p>

      <p className="p" style={{ marginTop: 16 }}>
        Pokud bude web využívat reklamní systém Google AdSense,
        mohou být cookies použity také k personalizaci reklam.
      </p>

      <p className="p" style={{ marginTop: 16 }}>
        Používáním tohoto webu souhlasíte s používáním cookies.
      </p>
    </main>
  );
}