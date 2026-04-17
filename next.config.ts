import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Přejmenované stránky
      {
        source: '/blog/jak-pripravit-dum-na-zimu',
        destination: '/blog/priprava-domu-na-zimu',
        permanent: true,
      },
      // Špatný slug radiátorů (chybí 'n')
      {
        source: '/blog/jak-odvzdusit-radiatory',
        destination: '/blog/jak-odvzdusnit-radiatory',
        permanent: true,
      },
      // Moje chyba – špatný slug sádrokartonu (chybělo 'o')
      {
        source: '/blog/sadrkarton-pricka-postup',
        destination: '/blog/sadrokarton-pricka-postup',
        permanent: true,
      },
      {
        source: '/blog/barva-do-vlhkych-prostoru ',
        destination: '/blog/barva-do-vlhkych-prostor',
        permanent: true,
      },
      {
        source: '/blog/chytra-domacnost-zacinamy ',
        destination: '/blog/blog/chytra-domacnost-zaciname',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' }
        ]
      }
    ]
  }
};
export default nextConfig;
