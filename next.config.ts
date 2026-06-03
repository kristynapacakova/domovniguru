import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  // Next.js inline scripts + Google Analytics + AdSense (připraveno pro budoucí monetizaci)
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com",
  // Inline styly jsou v projektu hojně používány; Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Obrázky: self + data: URI (SVG favicon, inline grafy) + jakékoli HTTPS
  "img-src 'self' data: https:",
  // Google Fonts soubory
  "font-src 'self' https://fonts.gstatic.com",
  // GA4 beacony
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
  // AdSense iframy
  "frame-src https://www.google.com https://googleads.g.doubleclick.net https://bid.g.doubleclick.net",
  // Zakazuje Flash, ActiveX a jiné pluginy
  "object-src 'none'",
  // Brání base-tag injection (přesměrování relativních URL)
  "base-uri 'self'",
  // Omezuje cíl formulářů
  "form-action 'self'",
  // Brání vložení webu do cizích frame/iframe (silnější než X-Frame-Options)
  "frame-ancestors 'self'",
  // HTTP požadavky uvnitř stránky automaticky přepíše na HTTPS
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/jak-pripravit-dum-na-zimu",
        destination: "/blog/priprava-domu-na-zimu",
        permanent: true,
      },
      {
        source: "/blog/jak-odvzdusit-radiatory",
        destination: "/blog/jak-odvzdusnit-radiatory",
        permanent: true,
      },
      {
        source: "/blog/sadrkarton-pricka-postup",
        destination: "/blog/sadrokarton-pricka-postup",
        permanent: true,
      },
      // Starý slug (bez 'u') → správný slug
      {
        source: "/blog/barva-do-vlhkych-prostor",
        destination: "/blog/barva-do-vlhkych-prostoru",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
