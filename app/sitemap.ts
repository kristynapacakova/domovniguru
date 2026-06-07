import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE = "https://www.domovniguru.cz";

const BLOG_SLUGS = [
  // Malování & barvy
  "jak-malovat-zed",
  "kolik-barvy-potrebuji",
  "latexova-vs-akrylatova-barva",
  "jak-odstranit-starou-barvu",
  "jak-malovat-rohy-a-listy",
  "barva-do-vlhkych-prostoru",
  "malovat-pres-tmavou-barvu",
  "penetrace-pred-malovanim",
  "jak-odstranit-plisen-na-zdi",
  "jak-malovat-strop",
  "fasadni-barva-vyber",
  "opravit-skrabance-diry-ve-zdi",
  "barvy-do-detskeho-pokoje",
  "malovat-jen-stetcem",
  "malovat-cely-byt-za-vikend",
  "efektove-barvy-techniky",
  "natrit-venkovni-drevo",
  "michani-barev-ral-ncs",
  "jak-malovat-radiator",
  "barva-se-loupe",
  "tapety-vs-barva",
  "jak-vybrat-barvu-na-zed",

  // Elektrika & osvětlení
  "jak-vymenit-zasuvku",
  "jak-vymenit-vypinac",
  "led-vs-zarovky",
  "jak-vybrat-led-zarovku",
  "jak-vybrat-solarni-panely",
  "jaky-bojler-vybrat",
  "zapojit-svetlo-na-strop",
  "proc-vypadava-jistic",
  "chytra-domacnost-zaciname",
  "prodlouzit-elektricky-kabel",
  "osvetlit-kuchynskou-linku",
  "vybrat-svitidla-do-mistnosti",
  "nejde-proud-cast-bytu",
  "instalovat-stmivac",
  "venkovni-osvetleni-zahrady",
  "pridat-zasuvku",
  "jak-funguji-pojistky",
  "snizit-ucet-za-elektrinu",
  "instalovat-pohybovy-senzor",
  "elektricke-podlahove-topeni",
  "otestovat-zasuvku",
  "jak-cist-elektromer",
  "vymena-zasuvky",
  "jak-vybrat-dodavatele-elektriny",

  // Zahrada & terasa
  "jarni-zahrada",
  "vyvyseny-zahon-postup",
  "drevo-terasa-zima",
  "zbavit-se-plevele-bez-chemie",
  "zavlaha-zahrada-postup",
  "jak-sekat-travnik",
  "opravit-travnik-ples-mech",
  "terasa-na-balkone",
  "jak-kompostovat",
  "zasit-travnik-od-nuly",
  "zahradni-plot-ze-dreva",
  "prezimovat-zahradni-rostliny",
  "zbavit-se-krtku",
  "jak-spravne-zalevat",
  "pergola-postup-stavba",
  "jak-hnojit-zahradu",
  "bylinkova-zahradka",
  "pokladat-betonove-dlazdice",
  "osetrit-zahradni-nabytek",
  "vybrat-zahradni-gril",
  "vyvysene-zahony",
  "jak-pestovat-rajcata",
  "jak-pestovat-jahody",
  "jak-pestovat-papriky",
  "jak-strihat-ovocne-stromy",
  "jak-strihat-kere",
  "zahradni-nastroje-pece",
  "ochrana-rostlin-pred-zimou",

  // Stěhování & rekonstrukce
  "stehovani-checklist",
  "planovani-rekonstrukce-bytu",
  "cena-rekonstrukce-koupelny",
  "vybrat-stehovaci-firmu",
  "sadrokarton-pricka-postup",
  "odhadnout-cenu-rekonstrukce",
  "zbavit-se-stareho-nabytku",
  "prestehovat-velke-spotrebice",
  "zateplit-byt-bez-rekonstrukce",
  "vymenit-stare-dvere",
  "renovovat-parkety",
  "kladeni-vinyl-podlahy",
  "rozlozit-ikea-kuchyn",
  "najit-proveri-remeslnika",
  "spravne-zabalit-veci",
  "instalovat-kuchynskou-linku",
  "odhalit-skryte-vady-bytu",
  "zbavit-byt-zapachu-po-rekonstrukci",
  "prihlasit-trvaly-pobyt",
  "prebrani-bytu-checklist",
  "jak-namazat-dvere-aby-nevrzaly",

  // Sezónní údržba
  "priprava-domu-na-zimu",
  "jak-odvzdusnit-radiatory",
  "jak-vycistit-okapy",
  "prezimovat-zahradni-vodu",
  "jak-utesnit-okna-na-zimu",
  "zkontrolovat-kotel-pred-zimou",
  "malovani-pred-stehovani",
  "auto-na-zimu-karoserie",
  "zimni-pneumatiky-kdy",
  "vycistit-komin",
  "dum-priprava-na-leto",
  "spravne-vetrat-byt",
  "zbavit-se-vlhkosti-v-byte",
  "pece-o-podlahove-topeni",
  "usetrit-na-vytapeni",
  "cistit-filtr-klimatizace",
  "zbavit-se-hmyzu-bez-chemie",
  "pece-o-septik-zumpu",
  "odlehcit-strechu-od-snehu",
  "jak-spravne-topit",
  "vodni-podlahove-topeni",
  "chytry-termostat-uspora-vytapeni",

  // Ostatní
  "tepelne-cerpadlo-pruvodce",
];

function getArticleLastModified(slug: string): Date | undefined {
  try {
    const filePath = path.join(process.cwd(), "app", "blog", slug, "page.tsx");
    const content = fs.readFileSync(filePath, "utf-8");
    const match = content.match(/"dateModified":\s*"([^"]+)"/);
    return match ? new Date(match[1]) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: getArticleLastModified(slug),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    // Hlavní stránky
    { url: `${BASE}/`,                lastModified: new Date("2026-06-04"), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blog`,            lastModified: new Date("2026-06-04"), changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/kalkulacky`,      changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/navody`,          changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/chyby-ostatnich`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/o-webu`,          changeFrequency: "yearly",  priority: 0.3 },
    // Kategorie
    { url: `${BASE}/blog/kategorie/malovani`,        lastModified: new Date("2026-06-04"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/elektrika`,       lastModified: new Date("2026-06-04"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/zahrada`,         lastModified: new Date("2026-06-04"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/sezonni-udrzba`,  lastModified: new Date("2026-06-04"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/blog/kategorie/stehovani`,       lastModified: new Date("2026-06-04"), changeFrequency: "weekly", priority: 0.7 },
    // Kalkulačky – původní
    { url: `${BASE}/kalkulacky/kolik-barvy`,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-laminatu`,  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-dlazby`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-betonu`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-tapet`,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-hliny`,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/led-uspora`,      changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/tepelna-izolace`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/tepelne-cerpadlo`,changeFrequency: "monthly", priority: 0.7 },
    // Kalkulačky – nové
    { url: `${BASE}/kalkulacky/kolik-osiva`,                       changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-sadrokartonu`,                changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-primeru`,                     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-sterky`,                      changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-mulce`,                       changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-hnojiva`,                     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-prknu`,                       changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-cihel`,                       changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-montazni-peny`,               changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-kompostu`,                    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/spotreba-elektriciny`,              changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/spotreba-plynu`,                    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/cena-malovani`,                     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/cena-podlahy`,                      changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-zavlahy`,                     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/velikost-bojleru`,                  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/podlahove-topeni`,                  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/cena-rekonstrukce-koupelny-odhad`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/solarni-panely`,                    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kalkulacky/kolik-stresni-tasek`,               changeFrequency: "monthly", priority: 0.7 },
    // Návody
    { url: `${BASE}/navody/jak-utesnit-vanu-silikonem`,    changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-odvzdusnit-radiator`,       changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-nastavit-okna-na-zimu`,     changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-vycistit-sifon`,            changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-vycistit-spary-v-dlazbe`,   changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/navody/jak-vymenit-zasuvku`,           changeFrequency: "monthly", priority: 0.7 },
    // Checklisty
    { url: `${BASE}/checklisty`,               changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/checklisty/jarni-udrzba`,  changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/checklisty/priprava-na-zimu`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/checklisty/stehovani`,     changeFrequency: "monthly", priority: 0.7 },
    // Všechny články
    ...blogUrls,
  ];
}
