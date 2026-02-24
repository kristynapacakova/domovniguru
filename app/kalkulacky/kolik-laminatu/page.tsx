import LaminatCalculator from "./LaminatCalculator";

export const metadata = {
  title: "Kolik laminátu potřebuji | DomovniGuru",
  description:
    "Spočítej potřebný počet balení laminátu podle plochy, rezervy a velikosti balení.",
};

export default function KolikLaminatuPage() {
  return (
    <main className="container" style={{ padding: "44px 0 60px" }}>
      <h1 className="h1">Kolik laminátu potřebuji</h1>
      <p className="p" style={{ marginTop: 12, maxWidth: 720 }}>
        Zadej plochu místnosti, rezervu a kolik m² je v jednom balení.
      </p>

      <LaminatCalculator />
    </main>
  );
}