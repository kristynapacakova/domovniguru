import type { MetadataRoute } from "next";

const BASE = "https://www.domovniguru.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Hlavní stránky
    { url: `${BASE}/`,               changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blog`,           changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/kalkulacky`,     changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/navody`,         changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/o-webu`,         changeFrequency: "yearly",  priority: 0.3 },

    // Blog – kategorie
    { url: `${BASE}/blog/kategorie/malovani`,       changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/elektrika`,      changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/zahrada`,        changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/sezonni-udrzba`, changeFrequency: "weekly", priority: 0.7 },

    // Blog – články (Ty, které jsou 100% hotové)
    { url: `${BASE}/blog/jak-malovat-zed`,           changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-odstranit-plisen-na-zdi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-vybrat-led-zarovku`,    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jarni-zahrada`,             changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/vyvysene-zahony`,           changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/zbavit-se-plevele-bez-chemie`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-sekat-travnik`,         changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/tepelne-cerpadlo-pruvodce`, changeFrequency: "monthly", priority: 0.8 },

    // Kalkulačky (Ověřené a funkční)
    { url: `${BASE}/kalkulacky/kolik-barvy`,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-laminatu`,  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-dlazby`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-betonu`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-tapet`,     changeFrequency: "monthly", priority: 0.7 },

    // Návody (Ty, které jsme teď oživili)
    { url: `${BASE}/navody/jak-utesnit-vanu-silikonem`,  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-odvzdusnit-radiator`,     changeFrequency: "monthly", priority: 0.7 },
  ];
}
