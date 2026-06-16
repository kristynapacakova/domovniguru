interface ProductBoxProps {
  name: string;
  store: string;
  price: string;
  /** Affiliate odkaz – nahraď svým tracking URL z Dognetu / eHubu */
  href: string;
  why: string;
  icon?: string;
}

export default function ProductBox({ name, store, price, href, why, icon = "🛒" }: ProductBoxProps) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: "16px",
      background: "#fff", border: "1px solid #e8e0d8", borderRadius: "12px",
      padding: "16px 20px", margin: "24px 0", position: "relative",
    }}>
      <div style={{ fontSize: "28px", flexShrink: 0, marginTop: "2px" }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "11px", color: "#aaa8a0", fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", marginBottom: "4px" }}>Doporučený produkt</div>
        <div style={{ fontWeight: 700, fontSize: "16px", color: "#1a1a18", marginBottom: "6px" }}>{name}</div>
        <div style={{ fontSize: "13px", color: "#5a5a50", lineHeight: 1.55, marginBottom: "12px" }}>{why}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontWeight: 700, fontSize: "15px", color: "#1a1a18" }}>{price}</span>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            style={{
              background: "#1a1a18", color: "#fff", borderRadius: "8px",
              padding: "8px 16px", fontWeight: 600, fontSize: "13px",
              textDecoration: "none", display: "inline-block",
            }}
          >
            Koupit na {store} →
          </a>
        </div>
      </div>
      <div style={{
        position: "absolute", top: "8px", right: "12px",
        fontSize: "10px", color: "#c0beb8", fontWeight: 500,
      }}>Partnerský odkaz</div>
    </div>
  );
}
