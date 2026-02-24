import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "DomovniGuru",
  description: "Praktický pomocník pro domácnost – kalkulačky a návody.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <Header />
        {children}

<footer className="footer">
  <div className="container footerInner">
    <div>© {new Date().getFullYear()} DomovniGuru</div>

    <div>
      <a href="/kontakt">Kontakt</a>{" | "}
      <a href="/ochrana-osobnich-udaju">Ochrana osobních údajů</a>{" | "}
      <a href="/cookies">Cookies</a>
    </div>
  </div>
</footer>
</body>
    </html>
  );
}