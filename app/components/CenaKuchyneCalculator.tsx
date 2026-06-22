"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display:"block", fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"6px" };
const inputCss: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1.5px solid ${border}`, borderRadius:"8px", fontSize:"15px", background:"#fff", color:"#2a2a28", outline:"none", boxSizing:"border-box", transition:"border-color 150ms" };

const STANDARD_LINKY: { value: string; label: string; cena: number }[] = [
  { value: "ikea_basic",       label: "IKEA základní",                  cena: 8000  },
  { value: "ikea_premium",     label: "IKEA premium",                   cena: 14000 },
  { value: "studio_standard",  label: "Kuchyňské studio – standard",    cena: 22000 },
  { value: "studio_premium",   label: "Kuchyňské studio – premium",     cena: 38000 },
  { value: "na_miru",          label: "Truhlář na míru",                cena: 55000 },
];

const SPOTREBICE: { value: string; label: string; cena: number }[] = [
  { value: "zadne",    label: "Bez spotřebičů",                              cena: 0      },
  { value: "basic",    label: "Základní (trouba, varná deska, digestoř)",    cena: 25000  },
  { value: "mid",      label: "Mid-range (+ myčka, lednice)",                cena: 55000  },
  { value: "premium",  label: "Prémiové (vše značkové)",                     cena: 120000 },
];

const DESKY: { value: string; label: string; cena: number }[] = [
  { value: "laminat",  label: "Laminát",          cena: 1800 },
  { value: "drevo",    label: "Dřevo/masiv",       cena: 5500 },
  { value: "kamen",    label: "Kámen/kompozit",    cena: 9000 },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background:"none", border:"none", cursor:"pointer", fontSize:"16px", padding:"2px 6px", borderRadius:"6px", color: copied ? "#3a9a6f" : muted, transition:"color 200ms" }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

function fmt(n: number) {
  return n.toLocaleString("cs-CZ") + " Kč";
}

export default function CenaKuchyneCalculator() {
  const [delka, setDelka] = useState("3");
  const [standard, setStandard] = useState("ikea_basic");
  const [spotrebice, setSpotrebice] = useState("zadne");
  const [montaz, setMontaz] = useState("svepomoci");
  const [deska, setDeska] = useState("laminat");

  const d = parseFloat(delka.replace(",", ".")) || 0;

  const cenaLinky    = d * (STANDARD_LINKY.find(s => s.value === standard)?.cena ?? 0);
  const cenaDesky    = d * (DESKY.find(s => s.value === deska)?.cena ?? 0);
  const cenaSpotreb  = SPOTREBICE.find(s => s.value === spotrebice)?.cena ?? 0;
  const cenaMontaze  = montaz === "firma" ? d * 3500 : 0;
  const celkem       = cenaLinky + cenaDesky + cenaSpotreb + cenaMontaze;

  const copyText = `Orientační cena kuchyně: ${fmt(celkem)} (linka ${fmt(cenaLinky)}, deska ${fmt(cenaDesky)}, spotřebiče ${fmt(cenaSpotreb)}, montáž ${fmt(cenaMontaze)}). Spočíteno na DomovniGuru.cz`;

  const breakdown = [
    { label: "Linka",           value: cenaLinky   },
    { label: "Pracovní deska",  value: cenaDesky   },
    { label: "Spotřebiče",      value: cenaSpotreb },
    { label: "Montáž",          value: cenaMontaze },
  ];

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🍳</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka ceny kuchyně</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej orientační cenu nové kuchyňské linky včetně spotřebičů a montáže.</p>
      </div>

      <div style={{ display:"grid", gap:"16px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Délka linky (m)</label>
          <input
            type="number" min="1" step="0.5" value={delka}
            onChange={e => setDelka(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Standard linky</label>
          <select
            value={standard}
            onChange={e => setStandard(e.target.value)}
            style={inputCss}
          >
            {STANDARD_LINKY.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Spotřebiče</label>
          <select
            value={spotrebice}
            onChange={e => setSpotrebice(e.target.value)}
            style={inputCss}
          >
            {SPOTREBICE.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Montáž</label>
          <select
            value={montaz}
            onChange={e => setMontaz(e.target.value)}
            style={inputCss}
          >
            <option value="svepomoci">Svépomocí</option>
            <option value="firma">Montážní firma</option>
          </select>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Pracovní deska</label>
          <select
            value={deska}
            onChange={e => setDeska(e.target.value)}
            style={inputCss}
          >
            {DESKY.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"14px 16px", marginBottom:"14px" }}>
        {breakdown.map((row, i) => (
          <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom: i < breakdown.length - 1 ? `1px solid ${border}` : "none" }}>
            <div style={{ fontSize:"14px", color:"#3a3a30" }}>{row.label}</div>
            <div style={{ fontSize:"14px", fontWeight:600, color:"#2a2a28" }}>{fmt(row.value)}</div>
          </div>
        ))}
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Celková cena přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{fmt(celkem)}</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>
            Linka {fmt(cenaLinky)} · Deska {fmt(cenaDesky)} · Spotřebiče {fmt(cenaSpotreb)} · Montáž {fmt(cenaMontaze)}
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Ceny jsou orientační bez DPH. Cena se může lišit dle konkrétní konfigurace, dopravy a místních podmínek instalace.</span>
      </div>
    </div>
  );
}
