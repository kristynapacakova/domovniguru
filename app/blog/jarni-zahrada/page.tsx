import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Jak připravit zahradu na jaro: Kompletní průvodce a checklist',
  description: 'Nepodceňte jarní start! Přinášíme podrobný návod na vertikutaci trávníku, prořezávání dřevin a přípravu záhonů pro bohatou úrodu.',
};

export default function JarniZahradaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-sans leading-relaxed text-slate-900">
      
      {/* DROBEČKOVÁ NAVIGACE */}
      <nav className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:underline">Domů</Link> › 
        <Link href="/blog" className="hover:underline ml-1">Magazín</Link> › 
        <span className="ml-1 text-slate-800">Jarní zahrada</span>
      </nav>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Jak připravit zahradu na jaro: Kompletní průvodce a checklist 2026
          </h1>
          
          {/* ✅ OPRAVA: rodič musí mít position:relative A pevnou výšku */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl mb-4 overflow-hidden shadow-lg border border-slate-200">
            <Image 
              src="/images/zahrada-jaro-hero.png" 
              alt="Krásně upravená jarní zahrada s rozkvetlými stromy, připravenými záhony a zahradním nářadím"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-slate-400 italic text-center mb-8">Příprava v březnu je základem úspěšné sezóny.</p>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Zima pomalu ustupuje a vaše zahrada se začíná probouzet. Aby vám dělala radost po celou sezónu, je potřeba jí teď věnovat pár hodin intenzivní péče. Od vertikutace trávníku až po první výsevy – máme pro vás plán, který nic nevynechá.
          </p>
        </header>

        {/* TABULKA */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Časový plán jarních prací</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-lg shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-700">Období</th>
                  <th className="p-4 font-semibold text-slate-700">Hlavní činnost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Březen</td>
                  <td className="p-4">Řez ovocných stromů, úklid listí, provzdušnění trávníku.</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-medium">Duben</td>
                  <td className="p-4">Hnojení, výsadba brambor a kořenové zeleniny.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Květen</td>
                  <td className="p-4">Výsadba citlivých rostlin (rajčata, okurky) po "zmrzlých".</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PRO TIP BOX */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-10 rounded-r-lg shadow-sm">
          <h3 className="text-green-800 font-bold mb-2 flex items-center text-lg">
             💡 Pro Tip: Pozor na ranní mrazy
          </h3>
          <p className="text-green-900 leading-relaxed">
            I když přes den svítí sluníčko, březnové noci jsou zrádné. Nezapomeňte citlivé keře a novou výsadbu chránit bílou netkanou textilií, dokud teploty v noci neklesnou pod nulu.
          </p>
        </div>

        {/* CHECKLIST */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 border-b pb-2">Jarní checklist (co musíte udělat)</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span> 
              <span><strong className="text-slate-800">Vertikutace:</strong> Odstraňte mech a starou trávu, aby kořeny mohly dýchat a trávník zhoustnul.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span> 
              <span><strong className="text-slate-800">Hnojení:</strong> Dodejte půdě dusík pro rychlý start růstu. Ideální je použít hnojiva s postupným uvolňováním.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-3 text-xl">✅</span> 
              <span><strong className="text-slate-800">Řez dřevin:</strong> Omlazení keřů a stromů předtím, než začnou rašit. Odstraňte suché a poškozené větve.</span>
            </li>
          </ul>
        </section>

        {/* FAQ SEKCE */}
        <section className="mt-16 pt-8 border-t border-slate-200 bg-slate-50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-8 text-slate-900 text-center">Často kladené otázky (FAQ)</h2>
          <div className="space-y-4 max-w-2xl mx-auto text-left">
            <details className="group p-4 bg-white rounded-xl cursor-pointer shadow-sm border border-slate-100 transition-all">
              <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
                Kdy je nejlepší čas na vertikutaci?
                <span className="group-open:rotate-180 transition-transform duration-300 text-slate-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-600 border-t pt-3">Ideálně v dubnu, kdy už tráva začíná aktivně růst a teplota půdy je stabilně nad 10 °C.</p>
            </details>
            <details className="group p-4 bg-white rounded-xl cursor-pointer shadow-sm border border-slate-100 transition-all">
              <summary className="font-bold text-slate-800 list-none flex justify-between items-center">
                Můžu hnojit hned po zimě?
                <span className="group-open:rotate-180 transition-transform duration-300 text-slate-400">▼</span>
              </summary>
              <p className="mt-3 text-slate-600 border-t pt-3">Ano, ale počkejte, až zmizí poslední sníh a půda nebude rozblácená, aby se hnojivo neodplavilo.</p>
            </details>
          </div>
        </section>
      </article>

      <footer className="mt-16 py-12 border-t border-slate-200 text-center">
         <p className="text-slate-500 mb-6 text-lg">Líbil se vám tento průvodce? Sledujte náš web pro další tipy pro váš domov.</p>
         <Link href="/blog" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-700 hover:shadow-lg transition-all active:scale-95">
            Zpět na magazín
         </Link>
      </footer>
    </div>
  );
}
