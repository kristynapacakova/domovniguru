import type { MetadataRoute } from "next";

const BASE = "https://www.domovniguru.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Hlavní stránky
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/kalkulacky`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/navody`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/checklisty`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/o-webu`, changeFrequency: "yearly", priority: 0.3 },

    // Blog – kategorie
    { url: `${BASE}/blog/kategorie/malovani`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/elektrika`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/zahrada`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/stehovani`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/sezonni-udrzba`, changeFrequency: "weekly", priority: 0.7 },

    // Blog – články
    { url: `${BASE}/blog/jak-malovat-zed`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/led-vs-zarovky`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jarni-zahrada`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/drevo-terasa-zima`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-odvzdusit-radiatory`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-pripravit-dum-na-zimu`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-vybrat-barvu-na-zed`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-cistit-stetce`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/malovani-stropu`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/tapety-vs-barva`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-malovat-okna`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/sprava-trhliny-zed`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-malovat-radiator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/vyvseny-zahon-postup`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/zbavit-se-plevele-bez-chemie`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-sekat-travnik`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/terasa-na-balkone`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog/jak-kompostovat`, changeFrequency: "monthly", priority: 0.8 },

    // Kalkulačky
    { url: `${BASE}/kalkulacky/kolik-barvy`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-laminatu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-dlazby`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-betonu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-tapet`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/tepelna-izolace`, changeFrequency: "monthly", priority: 0.7 },

    // Návody
    { url: `${BASE}/navody/jak-vycistit-sifon`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-utesnit-vanu-silikonem`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-nastavit-okna-na-zimu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-vycistit-spary-v-dlazbe`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-vymenit-zasuvku`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-odvzdusnit-radiator`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
