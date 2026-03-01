"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ChecklistyInteraktivni() {
  // Stav pro zaškrtnuté položky
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const checklisty = [
    {
      id: "jaro",
      icon: "🌱",
      title: "Jarní údržba domu",
      items: [
        "Vyčistit okapy a svody od listí",
        "Zkontrolovat střechu po zimě (uvolněné tašky)",
        "Přepnout okna na letní režim (seřízení kování)",
        "Větrat sklep a kontrolovat vlhkost",
        "Zprovoznit venkovní přívod vody",
        "Zkontrolovat stav fasády (praskliny)"
      ]
    },
    {
      id: "zima",
      icon: "❄️",
      title: "Příprava na zimu",
      items: [
        "Odvzdušnit všechny radiátory",
        "Vypustit vodu z venkovních kohoutů",
        "Zimní režim na oknech (zvýšení přítlaku)",
        "Kontrola a vyčištění komína",
        "Výměna baterií v termostatu",
        "Zkontrolovat těsnění kolem vchodových dveří"
      ]
    }
  ];

  const toggleItem = (listId: string, index: number) => {
    const key = `${listId}-${index}`;
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh", padding: "60px 0" }}>
      <div className="no-print" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
        
        <header style={{ marginBottom: "60px", borderBottom: "1px solid #e5e5e0", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", color: "#888", letterSpacing: "0.15em", marginBottom: "15px" }}>Sezónní údržba</div>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: "56px", margin: 0, fontWeight: 400 }}>Checklisty</h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "15px", maxWidth: "600px", fontWeight: 300 }}>
            Odškrtněte si hotové úkoly přímo zde, nebo si seznam vytiskněte do PDF pro práci v terénu.
          </p>
          <button 
            onClick={handlePrint}
            style={{ marginTop: "30px", background: "#111", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, fontSize: "14px" }}
          >
            🖨️ Stáhnout jako PDF / Tisknout
          </button>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
          {checklisty.map((list) => (
            <div key={list.id} className="printable-list" style={{ background: "#fff", border: "1px solid #e5e5e0", borderRadius: "16px", padding: "40px" }}>
              <div style={{ fontSize: "32px", marginBottom: "20px" }}>{list.icon}</div>
              <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: "28px", marginBottom: "25px" }}>{list.title}</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {list.items.map((item, idx) => {
                  const isChecked = checkedItems[`${list.id}-${idx}`];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleItem(list.id, idx)}
                      style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "12px", 
                        cursor: "pointer",
                        padding: "8px",
                        borderRadius: "8px",
                        transition: "0.2s",
                        background: isChecked ? "#f8faf8" : "transparent"
                      }}
                    >
                      <div style={{ 
                        width: "22px", 
                        height: "22px", 
                        border: isChecked ? "none" : "2px solid #ddd", 
                        background: isChecked ? "#22c55e" : "#fff",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "14px"
                      }}>
                        {isChecked && "✓"}
                      </div>
                      <span style={{ 
                        fontSize: "16px", 
                        color: isChecked ? "#aaa" : "#444",
                        textDecoration: isChecked ? "line-through" : "none",
                        fontWeight: 300
                      }}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS pro tisk */}
      <style>{`
        @media print {
          .no-print { visibility: hidden; }
          .printable-list { 
            visibility: visible; 
            position: absolute; 
            left: 0; top: 0; 
            width: 100%; 
            border: none !important;
            padding: 0 !important;
          }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}
