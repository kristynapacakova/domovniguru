// Affiliate CTA button for calculators – eHub tracking (a_aid=31989715).
// Product-intent traffic → matching eHub merchant. Deep-links to shop homepage;
// commission counts from any purchase within the cookie window.

const A_AID = "31989715";

type Merchant = {
  store: string;
  bid: string;
};

const MERCHANTS: Record<string, Merchant> = {
  podlahy: { store: "NejlevnějšíPodlahy.cz", bid: "06cfb451" },
  naradi:  { store: "Nářadí-Praha.cz",       bid: "fc349ed4" },
  aku:     { store: "Aku-shop.cz",           bid: "9bc93257" },
  bonami:  { store: "Bonami.cz",             bid: "600e3982" },
  hnojik:  { store: "Hnojík.cz",             bid: "1da58c10" },
  zahrada: { store: "Neleňprozeleň.cz",      bid: "2f3af11d" },
  koberce: { store: "KoberceKK.cz",          bid: "03dc0e27" },
};

export default function AffiliateCTA({ merchant, text }: { merchant: string; text: string }) {
  const m = MERCHANTS[merchant];
  if (!m) return null;
  const href = `https://ehub.cz/system/scripts/click.php?a_aid=${A_AID}&a_bid=${m.bid}`;

  return (
    <div style={{ marginTop: "16px" }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
          padding: "16px 20px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #2e6b4f 0%, #3a3a38 100%)",
          border: "1px solid #2e6b4f",
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(46,107,79,0.18)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "22px" }}>🛒</span>
          <span>
            <span style={{ display: "block", fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
              {text}
            </span>
            <span style={{ display: "block", fontSize: "12px", color: "#c5e0d2", marginTop: "2px" }}>
              u&nbsp;{m.store}
            </span>
          </span>
        </span>
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>→</span>
      </a>
      <div style={{ fontSize: "11px", color: "#a8a89c", marginTop: "6px", textAlign: "center" }}>
        Partnerský odkaz — nákupem podpoříte provoz webu, cena pro vás zůstává stejná.
      </div>
    </div>
  );
}
