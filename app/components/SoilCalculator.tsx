"use client";

import React, { useState, useEffect } from "react";

export default function SoilCalculator() {
  const [shape, setShape] = useState<"square" | "circle">("square");
  const [width, setWidth] = useState(30); 
  const [length, setLength] = useState(30);
  const [height, setHeight] = useState(30);
  const [result, setResult] = useState(0);

  useEffect(() => {
    let volume = 0;
    if (shape === "square") {
      volume = (width * length * height) / 1000;
    } else {
      const radius = width / 2;
      volume = (Math.PI * Math.pow(radius, 2) * height) / 1000;
    }
    setResult(Math.round(volume * 10) / 10);
  }, [shape, width, length, height]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Budu potřebovat ${result} litrů hlíny. Spočítáno na DomovniGuru.cz`);
    alert("Výsledek zkopírován do schránky!");
  };

  return (
    <div style={{ 
      background: "#fdfcf0", 
      padding: "30px", 
      borderRadius: "16px", 
      border: "1px solid #e0dcb8", 
      margin: "20px 0",
      color: "#333" 
    }}>
      <h3 style={{ marginTop: 0, fontFamily: "var(--font-serif)", fontSize: "24px" }}>🌱 Kalkulačka objemu zeminy</h3>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button 
          onClick={() => setShape("square")}
          style={{ 
            flex: 1, padding: "12px", cursor: "pointer", borderRadius: "8px", border: "1px solid #3a3a38",
            background: shape === "square" ? "#3a3a38" : "#fff",
            color: shape === "square" ? "#fff" : "#3a3a38",
            fontWeight: "bold"
          }}
        >
          Hranatý
        </button>
        <button 
          onClick={() => setShape("circle")}
          style={{ 
            flex: 1, padding: "12px", cursor: "pointer", borderRadius: "8px", border: "1px solid #3a3a38",
            background: shape === "circle" ? "#3a3a38" : "#fff",
            color: shape === "circle" ? "#fff" : "#3a3a38",
            fontWeight: "bold"
          }}
        >
          Kulatý
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        <div>
          <label style={{ fontSize: "12px", display: "block", marginBottom: "5px", fontWeight: "bold" }}>
            {shape === "square" ? "Šířka (cm)" : "Průměr (cm)"}
          </label>
          <input 
            type="number" 
            value={width} 
            onChange={(e) => setWidth(Number(e.target.value))} 
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} 
          />
        </div>
        {shape === "square" && (
          <div>
            <label style={{ fontSize: "12px", display: "block", marginBottom: "5px", fontWeight: "bold" }}>Délka (cm)</label>
            <input 
              type="number" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))} 
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} 
            />
          </div>
        )}
        <div style={{ gridColumn: shape === "circle" ? "span 2" : "auto" }}>
          <label style={{ fontSize: "12px", display: "block", marginBottom: "5px", fontWeight: "bold" }}>Výška hlíny (cm)</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(Number(e.target.value))} 
            style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} 
          />
        </div>
      </div>

      <div style={{ 
        marginTop: "25px", 
        textAlign: "center", 
        padding: "25px", 
        background: "#fff", 
        borderRadius: "12px", 
        border: "2px dashed #e0dcb8" 
      }}>
        <div style={{ fontSize: "14px", color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }}>Budete potřebovat cca:</div>
        <div style={{ fontSize: "36px", fontWeight: "900", color: "#2d4a22", margin: "5px 0" }}>{result} litrů</div>
        <button 
          onClick={copyToClipboard}
          style={{ background: "none", border: "none", color: "#3a3a38", textDecoration: "underline", cursor: "pointer", fontSize: "13px" }}
        >
          📋 Zkopírovat výsledek
        </button>
      </div>
    </div>
  );
}