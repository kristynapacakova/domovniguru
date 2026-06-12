import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Cíle jsou absolutní (https://www...), aby přesměrování proběhlo
    // v jednom skoku i pro requesty na non-www/http variantu domény –
    // jinak by vznikl řetězec dvou přesměrování (starý slug → nový slug → www),
    // což Google Search Console hlásí jako "Chyba přesměrování".
    return [
      {
        source: "/blog/jak-pripravit-dum-na-zimu",
        destination: "https://www.domovniguru.cz/blog/priprava-domu-na-zimu",
        permanent: true,
      },
      {
        source: "/blog/jak-odvzdusit-radiatory",
        destination: "https://www.domovniguru.cz/blog/jak-odvzdusnit-radiatory",
        permanent: true,
      },
      {
        source: "/blog/sadrkarton-pricka-postup",
        destination: "https://www.domovniguru.cz/blog/sadrokarton-pricka-postup",
        permanent: true,
      },
      // Starý slug (bez 'u') → správný slug
      {
        source: "/blog/barva-do-vlhkych-prostor",
        destination: "https://www.domovniguru.cz/blog/barva-do-vlhkych-prostoru",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control",  value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
