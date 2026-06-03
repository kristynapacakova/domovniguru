export const metadata = {
  title: "Kontakt",
  description: "Kontakt na provozovatele webu DomovniGuru.",
  alternates: { canonical: "https://www.domovniguru.cz/kontakt" },
  openGraph: { title: "Kontakt", description: "Kontakt na provozovatele webu DomovniGuru.", url: "https://www.domovniguru.cz/kontakt", type: "website" },
};

export default function KontaktPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Kontakt</h1>

      <p className="p" style={{ marginTop: 16, maxWidth: 700 }}>
        Máš dotaz, připomínku nebo návrh na novou kalkulačku?
        Napiš mi na:
      </p>

      <div className="card" style={{ marginTop: 20, maxWidth: 500 }}>
        <div className="resultBig">
          <a href="mailto:kristyna.chladkova@gmail.com">
            kristyna.chladkova@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}