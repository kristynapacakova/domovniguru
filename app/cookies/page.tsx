export const metadata = {
  title: "Používání cookies | DomovniGuru",
  description: "Informace o používání cookies na webu DomovniGuru.",
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