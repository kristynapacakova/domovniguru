"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare function gtag(...args: unknown[]): void;

const STORAGE_KEY = "dg_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const grant = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    if (typeof gtag !== "undefined") {
      gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
    setVisible(false);
  };

  const deny = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Souhlas s cookies">
      <div className="cookie-inner">
        <p className="cookie-text">
          Používáme cookies pro analýzu návštěvnosti a personalizovanou reklamu.{" "}
          <Link href="/cookies" className="cookie-link">Více informací</Link>
        </p>
        <div className="cookie-actions">
          <button onClick={deny} className="cookie-btn cookie-btn-deny">Odmítnout</button>
          <button onClick={grant} className="cookie-btn cookie-btn-accept">Přijmout vše</button>
        </div>
      </div>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: #1a1a18;
          color: #e8e6e0;
          border-top: 1px solid #333;
          padding: 16px 20px;
        }
        .cookie-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cookie-text {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          color: #b0ada6;
          flex: 1;
          min-width: 220px;
        }
        .cookie-link {
          color: #c8b89a;
          text-decoration: underline;
        }
        .cookie-actions {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .cookie-btn {
          padding: 8px 18px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-family: inherit;
          transition: opacity 150ms;
        }
        .cookie-btn:hover { opacity: 0.85; }
        .cookie-btn-deny {
          background: transparent;
          color: #b0ada6;
          border: 1px solid #444;
        }
        .cookie-btn-accept {
          background: #e8612a;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
