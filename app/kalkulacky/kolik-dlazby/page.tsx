"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function KalkulackaDlazba() {
  const [plocha, setPlocha] = useState<number>(0);
  const [sirkaKachle, setSirkaKachle] = useState<number>(30); // v cm
  const [vyskaKachle, setVyskaKachle] = useState<number>(30); // v cm
  const [spara, setSpara] = useState<number>(3); // v mm
  const [rezerva, setRezerva] = useState<number>(10);
  const [baleniM2, setBaleniM2] = useState<number>(1.5);

  const [vysledekKs, setVysledekKs] = useState<number>(0);
  const [vysledekM2, setVysledekM2] = useState<number>(0);
  const [vysledekBaleni, setVysledekBaleni] = useState<number>(0);

  useEffect(() => {
    if (plocha > 0 && sirkaKachle > 0 && vyskaKachle > 0) {
      // Výpočet plochy jedné kachle včetně spáry (převod na metry)
      const s = (sirkaKachle + spara / 10) / 100;
      const v = (vyskaKachle + spara / 10) / 100;
      const plochaJedneKachle = s * v;

      // Kolik kusů na čistou plochu
      const ksCista = plocha / plochaJedneKachle;
      
      // Připočtení rezervy
      const ksSRezervou = Math.ceil(ksCista * (1 + rezerva / 100));
      
      // Přepočet zpět na m2 a balení
      const celkovaPlochaKoupit = ksSRezervou * (sirkaKachle * vyskaKachle / 10000);
      const baliky = Math.ceil(celkovaPlochaKoupit / baleniM2);

      setVysledekKs(ksSRezervou);
      setVysledekM2(Number(celkovaPlochaKoupit.toFixed(2)));
      setVysledekBaleni(baliky);
    }
  }, [plocha, sirkaKachle, vyskaKachle, spara, rezerva, baleniM2]);

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
        
        <Link href="/kalkulacky" style={{ fontSize: "12px", color: "#888", textDecoration: "none", fontWeight: 600 }}>
          ← ZPĚT NA KALKULAČKY
        </Link>

        <header style={{ margin: "20px 0 40px", borderBottom: "1px solid #e5e5e0", paddingBottom: "30px" }}>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "42px", margin: 0 }}>Kalkulačka dlažby a obkladů 🧱</h1>
          <p style={{ color: "#666", marginTop: "10px", fontWeight: 300 }}>Přesný výpočet včetně vlivu spár, prořezu a počtu balení.</p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "40px", alignItems: "start" }}>
          
          <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", border: "1px solid #e5e5e0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ gridColumn: "span 2" }}>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888" }}>CELKOVÁ PLOCHA K OBKLÁDÁNÍ (m²)</label>
                <input type="number" value={plocha || ""} onChange={(e) => setPlocha(Number(e.target.value))} placeholder="např. 15" style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", fontSize: "16px" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888" }}>ŠÍŘKA KACHLE (cm)</label>
                <input type="number" value={sirkaKachle} onChange={(e) => setSirkaKachle(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888" }}>VÝŠKA KACHLE (cm)</label>
                <input type="number" value={vyskaKachle} onChange={(e) => setVyskaKachle(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888" }}>ŠÍŘKA SPÁRY (mm)</label>
                <input type="number" value={spara} onChange={(e) => setSpara(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888" }}>REZERVA NA PROŘEZ (%)</label>
                <select value={rezerva} onChange={(e) => setRezerva(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd", background: "#fff" }}>
                  <option value={5}>5 % (jednoduché)</option>
                  <option value={10}>10 % (standard)</option>
                  <option value={15}>15 % (mnoho rohů/diagonálně)</option>
                </select>
              </div>

              <div style={{ gridColumn: "span 2" }}>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, marginBottom: "8px", color: "#888" }}>M² V JEDNOM BALENÍ (najdete na krabici)</label>
                <input type="number" value={baleniM2} onChange={(e) => setBaleniM2(Number(e.target.value))} style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ddd" }} />
              </div>
            </div>
          </div>

          <aside style={{ position: "sticky", top: "40px" }}>
            <div style={{ background: "#111", color: "#fff", padding: "40px", borderRadius: "12px", textAlign: "center" }}>
              <span style={{ fontSize: "12px", color: "#888", fontWeight: 600, textTransform: "uppercase" }}>Musíte koupit</span>
              <div style={{ fontSize: "64px", fontFamily: "DM Serif Display, serif", margin: "10px 0" }}>{vysledekBaleni}</div>
              <span style={{ fontSize: "18px", color: "#aaa" }}>balení</span>
              
              <div style={{ marginTop: "30px", paddingTop: "30px", borderTop: "1px solid #333", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px" }}>
                  <span style={{ color: "#888" }}>Počet kusů kachlí:</span>
                  <span>{vysledekKs} ks</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
                  <span style={{ color: "#888" }}>Celková plocha:</span>
                  <span>{vysledekM2} m²</span>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: "20px", padding: "20px", background: "#f2f2ee", borderRadius: "8px", fontSize: "13px", color: "#666", lineHeight: 1.5 }}>
              <strong>Guru tip:</strong> Vždy si nechte jedno celé balení navíc pro strýčka Příhodu (když vám za 5 let praskne trubka pod dlažbou, stejnou šarži už neseženete).
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}