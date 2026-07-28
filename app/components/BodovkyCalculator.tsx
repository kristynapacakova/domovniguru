"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "#6a6a60", marginBottom: "6px" };
const inputCss: React.CSSProperties = { width: "100%", padding: "10px 14px", border: `1.5px solid ${border}`, borderRadius: "8px", fontSize: "15px", background: "#fff", color: "#2a2a28", outline: "none", boxSizing: "border-box", transition: "border-color 150ms" };

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /**/ }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", padding: "2px 6px", borderRadius: "6px", color: copied ? "#3a9a6f" : muted }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

type Mistnost = { id: string; nazev: string; lux: number };
const MISTNOSTI: Mistnost[] = [
  { id: "obyvak", nazev: "Obývací pokoj (150 lx)", lux: 150 },
  { id: "kuchyn", nazev: "Kuchyň (300 lx)", lux: 300 },
  { id: "koupelna", nazev: "Koupelna (200 lx)", lux: 200 },
  { id: "chodba", nazev: "Chodba (100 lx)", lux: 100 },
  { id: "pracovna", nazev: "Pracovna (400 lx)", lux: 400 },
];

export default function BodovkyCalculator() {
  const [plocha, setPlocha] = useState("16");
  const [typId, setTypId] = useState("obyvak");
  const [lumenNaBodovku, setLumenNaBodovku] = useState("400");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;
  const typ = MISTNOSTI.find(m => m.id === typId) || MISTNOSTI[0];

  const plochaN = n(plocha);
  const lm1 = n(lumenNaBodovku);
  // potřebný světelný tok = plocha × luxy × udržovací činitel 1,25
  const potrebnyTok = plochaN * typ.lux * 1.25;
  // počet bodovek
  const pocet = lm1 > 0 ? Math.max(1, Math.ceil(potrebnyTok / lm1)) : 0;
  // příkon ~ 5 W na bodovku
  const prikon = pocet * 5;
  // orientační rozmístění rows × cols dle sqrt
  const cols = pocet > 0 ? Math.ceil(Math.sqrt(pocet)) : 0;
  const rows = pocet > 0 ? Math.ceil(pocet / cols) : 0;
  const rozmisteni = pocet > 0 ? `${rows} × ${cols}` : "—";
  // orientační rozteč (m) — odmocnina z plochy na jednu bodovku
  const roztec = pocet > 0 && plochaN > 0 ? Math.sqrt(plochaN / pocet) : 0;

  const fmtNum = (v: number, d = 0) => new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: d }).format(v);

  const copyText = `Doporučený počet LED bodovek: ${pocet} ks (${typ.nazev}, plocha ${fmtNum(plochaN)} m², rozmístění ${rozmisteni}, příkon ${prikon} W). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius: "16px", padding: "28px 24px", border: `1px solid ${border}`, fontFamily: "inherit" }}>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>💡</span>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#2a2a28" }}>Kalkulačka LED bodovek do podhledu</h3>
        </div>
        <p style={{ margin: 0, fontSize: "13px", color: muted }}>Zadej plochu místnosti, její typ a světelný tok bodovky — kalkulačka spočítá doporučený počet bodovek do sádrokartonového podhledu.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "14px", marginBottom: "18px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Plocha místnosti (m²)</label>
          <input type="number" min="1" step="0.5" value={plocha} onChange={e => setPlocha(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={labelCss}>Světelný tok bodovky (lm)</label>
          <input type="number" min="50" step="50" value={lumenNaBodovku} onChange={e => setLumenNaBodovku(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)} />
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>běžně 350–500 lm</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gridColumn: "1 / -1" }}>
          <label style={labelCss}>Typ místnosti</label>
          <select value={typId} onChange={e => setTypId(e.target.value)} style={inputCss} onFocus={e => (e.target.style.borderColor = accent)} onBlur={e => (e.target.style.borderColor = border)}>
            {MISTNOSTI.map(m => <option key={m.id} value={m.id}>{m.nazev}</option>)}
          </select>
          <span style={{ fontSize: "11px", color: "#9a9a90", marginTop: "4px" }}>určuje požadovanou intenzitu osvětlení</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px", marginBottom: "14px" }}>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Potřebný světelný tok</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmtNum(potrebnyTok)} lm</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Celkový příkon</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{fmtNum(prikon)} W</div>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: "10px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: muted, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "4px" }}>Orientační rozmístění</div>
          <div style={{ fontSize: "20px", fontWeight: 700, color: "#2a2a28" }}>{rozmisteni}</div>
        </div>
      </div>

      <div style={{ background: accent, borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "11px", color: "#a0a090", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>Doporučený počet bodovek</div>
          <div style={{ fontSize: "32px", fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{pocet} ks</div>
          <div style={{ fontSize: "12px", color: "#b0b0a0", marginTop: "6px" }}>
            rozmístění {rozmisteni} &nbsp;·&nbsp; rozteč ≈ {fmtNum(roztec, 1)} m
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop: "12px", background: "#fffbf0", border: "1px solid #e8d890", borderRadius: "8px", padding: "10px 14px", fontSize: "12px", color: "#7a6a20", display: "flex", gap: "8px" }}>
        <span>💡</span><span>Bodovky rozmísti do pravidelné mřížky s roztečí zhruba 0,8–1,2 m a od stěn je odsaď přibližně 40–60 cm. Nad pracovní plochou v kuchyni nebo u zrcadla v koupelně přidej pár kusů navíc — bodová světla vytvářejí stíny a samotná nemusí prostor osvětlit rovnoměrně.</span>
      </div>
    </div>
  );
}
