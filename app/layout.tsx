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
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        {/* Main zajistí, že obsah nebude nalepený na Headeru a patička bude vždy dole */}
        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t border-slate-100 py-12 bg-white">
          <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-slate-400">
            <div>© {new Date().getFullYear()} DomovniGuru</div>
            <div className="flex gap-6">
              <a href="/kontakt" className="hover:text-black transition-colors">Kontakt</a>
              <a href="/ochrana-osobnich-udaju" className="hover:text-black transition-colors">Soukromí</a>
              <a href="/cookies" className="hover:text-black transition-colors">Cookies</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
