"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Article = {
  id: number;
  cat: string;
  catLabel: string;
  title: string;
  desc: string;
  slug: string;
  read: string;
};

type Category = {
  key: string;
  label: string;
  count: number;
};

const CATS: Category[] = [
  { key: "vse",       label: "Vše",                         count: 102 },
  { key: "malovani",  label: "🎨 Malování & barvy",         count: 20  },
  { key: "elektrika", label: "⚡ Elektrika & osvětlení",    count: 20  },
  { key: "zahrada",   label: "🌿 Zahrada & terasa",         count: 22  },
  { key: "stehovani", label: "🏠 Stěhování & rekonstrukce", count: 20  },
  { key: "sezonni",   label: "❄️ Sezónní údržba",          count: 20  },
];

const ARTICLES: Article[] = [
  // ── Malování (1–20) ──────────────────────────────────────────────────────
  { id: 1,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat zeď – kompletní průvodce pro začátečníky",  desc: "Krok za krokem: příprava podkladu, nátěr, výběr barvy.",                          slug: "jak-malovat-zed",                     read: "5 min" },
  { id: 2,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Kolik barvy potřebuji? Kalkulačka + vzorec",            desc: "Spočítej přesné množství barvy na místnost.",                                     slug: "kolik-barvy-potrebuji",               read: "3 min" },
  { id: 3,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Latexová vs. akrylátová barva – jaký je rozdíl?",       desc: "Srovnání dvou nejpopulárnějších barev na zeď.",                                   slug: "latexova-vs-akrylatova-barva",        read: "4 min" },
  { id: 4,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak odstranit starou barvu ze zdi",                     desc: "Škrabka, teplovzdušná pistole nebo chemie?",                                      slug: "jak-odstranit-starou-barvu",          read: "4 min" },
  { id: 5,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat rohy a lišty bez přetahování",              desc: "Technika štětcem, páska. Výsledek jako od malíře.",                               slug: "jak-malovat-rohy-a-listy",            read: "3 min" },
  { id: 6,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jakou barvu zvolit do vlhkých prostor?",                desc: "Koupelna, kuchyň, sklep – odolnost vůči vlhkosti.",                               slug: "barva-do-vlhkych-prostoru",           read: "4 min" },
  { id: 7,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat přes tmavou barvu na světlo",               desc: "Jak přemalovat tmavou zeď bez šmouh.",                                            slug: "malovat-pres-tmavou-barvu",           read: "3 min" },
  { id: 8,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Penetrace před malováním – kdy je nutná?",              desc: "Kdy penetraci přeskočit a kdy je opravdu potřeba.",                               slug: "penetrace-pred-malovanim",            read: "4 min" },
  { id: 9,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak se zbavit plísně na zdi natrvalo",                  desc: "Příčina, postup čištění a prevence opakování.",                                   slug: "jak-odstranit-plisen-na-zdi",         read: "5 min" },
  { id: 10, cat: "malovani",  catLabel: "Malování & barvy",         title: "Malování stropu – jak neskapat barvu všude",            desc: "Správný váleček, ochrana podlahy, technika tahů.",                                slug: "jak-malovat-strop",                   read: "4 min" },
  { id: 11, cat: "malovani",  catLabel: "Malování & barvy",         title: "Fasádní barva – jak vybrat a jak nanášet",              desc: "Silikonová, akrylátová nebo minerální?",                                          slug: "fasadni-barva-vyber",                 read: "5 min" },
  { id: 12, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak opravit škrábance a díry ve zdi před malováním",    desc: "Tmel, sádra nebo sprej? Jak vyrovnat povrch.",                                    slug: "opravit-skrabance-diry-ve-zdi",       read: "3 min" },
  { id: 13, cat: "malovani",  catLabel: "Malování & barvy",         title: "Barvy do dětského pokoje – co je bezpečné?",            desc: "Bez škodlivých emisí, snadná údržba.",                                            slug: "barvy-do-detskeho-pokoje",            read: "4 min" },
  { id: 14, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat bez válenku – jen štětcem",                 desc: "Kdy se váleček nehodí a jak dosáhnout rovnoměrného výsledku.",                   slug: "malovat-jen-stetcem",                 read: "3 min" },
  { id: 15, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak celý byt vymalovat za víkend",                      desc: "Plán na 2 dny: pořadí místností, schnutí, příprava.",                            slug: "malovat-cely-byt-za-vikend",          read: "5 min" },
  { id: 16, cat: "malovani",  catLabel: "Malování & barvy",         title: "Efektové barvy a techniky – štuk, beton, patina",       desc: "Dekorativní omítky krok za krokem.",                                              slug: "efektove-barvy-techniky",             read: "6 min" },
  { id: 17, cat: "malovani",  catLabel: "Malování & barvy",         title: "Venkovní dřevo – jak natřít plot, terasu nebo fasádu",  desc: "Výběr laku nebo oleje, postup nanášení.",                                         slug: "natrit-venkovni-drevo",               read: "5 min" },
  { id: 18, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak správně míchat barvy – RAL a NCS systém",           desc: "Co je RAL kód a jak objednat přesný odstín.",                                    slug: "michani-barev-ral-ncs",               read: "4 min" },
  { id: 19, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat radiátory a kovové povrchy",                desc: "Speciální barva, příprava povrchu, počet vrstev.",                                slug: "malovat-radiatory-kovy",              read: "4 min" },
  { id: 20, cat: "malovani",  catLabel: "Malování & barvy",         title: "Barva se loupe – co jde špatně a jak to napravit",      desc: "Nejčastější příčiny a řešení.",                                                   slug: "barva-se-loupe",                      read: "4 min" },
  // ── Elektrika (21–40) ────────────────────────────────────────────────────
  { id: 21, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vyměnit zásuvku sám – bezpečný postup",             desc: "Vypni jistič, odšroubuj, přepoj. Krok za krokem.",                               slug: "jak-vymenit-zasuvku",                 read: "5 min" },
  { id: 22, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vyměnit vypínač světla",                            desc: "Jednopólový nebo dvojitý – postup a bezpečnost.",                                 slug: "jak-vymenit-vypinac",                 read: "4 min" },
  { id: 23, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "LED vs. žárovky – co se skutečně vyplatí?",             desc: "Spotřeba, životnost, cena. Kdy přejít na LED?",                                   slug: "led-vs-zarovky",                      read: "4 min" },
  { id: 24, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vybrat správnou LED žárovku (Kelvin, lumen, CRI)",  desc: "Co znamenají čísla na krabičce.",                                                 slug: "jak-vybrat-led-zarovku",              read: "5 min" },
  { id: 25, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak zapojit nové světlo na strop",                      desc: "Krabice, L, N, PE vodiče – správné zapojení.",                                   slug: "zapojit-svetlo-na-strop",             read: "5 min" },
  { id: 26, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Proč mi vypadává jistič?",                              desc: "Přetížení, zkrat nebo vadný spotřebič?",                                          slug: "proc-vypadava-jistic",                read: "4 min" },
  { id: 27, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak funguje chytrá domácnost – začínáme",               desc: "Chytré zásuvky a žárovky bez rekonstrukce.",                                     slug: "chytra-domacnost-zacinamy",           read: "6 min" },
  { id: 28, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak prodloužit elektrický kabel bezpečně",              desc: "Spojky, prodlužovačky nebo nová krabice.",                                        slug: "prodlouzit-elektricky-kabel",         read: "3 min" },
  { id: 29, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak osvětlit kuchyňskou linku",                         desc: "LED pásky nebo bodovky pod skříňky.",                                            slug: "osvetlit-kuchynskou-linku",           read: "4 min" },
  { id: 30, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vybrat lustry a svítidla do každé místnosti",       desc: "Obývák, ložnice, koupelna – jaký typ kam.",                                      slug: "vybrat-svitidla-do-mistnosti",        read: "5 min" },
  { id: 31, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Co dělat, když nejde proud jen v části bytu",           desc: "Postup: jistič, chránič, zásuvky.",                                               slug: "nejde-proud-cast-bytu",               read: "4 min" },
  { id: 32, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak nainstalovat stmívač světla",                       desc: "Zapojení krok za krokem. Co je potřeba pro LED.",                                 slug: "instalovat-stmivac",                  read: "4 min" },
  { id: 33, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Venkovní osvětlení zahrady – jak na to",                desc: "Solární nebo kabelové? Typy a instalace.",                                        slug: "venkovni-osvetleni-zahrady",          read: "5 min" },
  { id: 34, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak přidat zásuvku tam, kde žádná není",                desc: "Pod omítku nebo na povrch.",                                                      slug: "pridat-zasuvku",                      read: "4 min" },
  { id: 35, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak fungují pojistky a jak je vyměnit",                 desc: "Starý bytový rozvaděč – bezpečná výměna.",                                        slug: "jak-funguji-pojistky",                read: "4 min" },
  { id: 36, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak snížit účet za elektřinu doma",                    desc: "Kde teče elektřina zbytečně.",                                                    slug: "snizit-ucet-za-elektrinu",            read: "5 min" },
  { id: 37, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak nainstalovat pohybový senzor ke světlu",            desc: "Zapojení senzoru pohybu.",                                                        slug: "instalovat-pohybovy-senzor",          read: "4 min" },
  { id: 38, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Elektrické podlahové topení – co vědět před montáží",   desc: "Rohož nebo kabel? Co pod dlažbu a vinyl.",                                       slug: "elektricke-podlahove-topeni",         read: "5 min" },
  { id: 39, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak otestovat zásuvku – je pod napětím?",               desc: "Fázová tužka nebo multimetr.",                                                    slug: "otestovat-zasuvku",                   read: "3 min" },
  { id: 40, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak číst elektroměr a hlídat spotřebu",                desc: "Jednosazbový, dvousazbový, chytrý.",                                              slug: "jak-cist-elektromer",                 read: "4 min" },
  // ── Zahrada (41–60 + 101–102) ────────────────────────────────────────────
  { id: 41,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak připravit zahradu na jaro – kompletní checklist",   desc: "Co udělat v březnu a dubnu.",                                                     slug: "jarni-zahrada",                       read: "6 min" },
  { id: 42,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak postavit vyvýšený záhon",                          desc: "Dřevěný nebo z betonu? Za víkend.",                                               slug: "vyvseny-zahon-postup",                read: "6 min" },
  { id: 43,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak ošetřit dřevěnou terasu před zimou",                desc: "Čištění, oprava a nátěr olejem nebo lazurou.",                                    slug: "drevo-terasa-zima",                   read: "4 min" },
  { id: 44,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak se zbavit plevele bez chemie",                     desc: "Mulčování, ocet, vroucí voda.",                                                   slug: "zbavit-se-plevele-bez-chemie",        read: "4 min" },
  { id: 45,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak vybudovat závlahový systém",                       desc: "Kapková závlaha nebo postřikovače.",                                               slug: "zavlaha-zahrada-postup",              read: "6 min" },
  { id: 46,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak sekat trávník správně",                            desc: "Výška, frekvence, okraje.",                                                       slug: "jak-sekat-travnik",                   read: "4 min" },
  { id: 47,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak opravit poškozený trávník",                        desc: "Přísev, odvzdušnění nebo vápnění.",                                               slug: "opravit-travnik-ples-mech",           read: "5 min" },
  { id: 48,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak zařídit terasu na balkoně",                        desc: "Nábytek, rostliny, osvětlení pro balkon.",                                        slug: "terasa-na-balkone",                   read: "5 min" },
  { id: 49,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak kompostovat doma a na zahradě",                    desc: "Kompostér nebo hromada?",                                                         slug: "jak-kompostovat",                     read: "4 min" },
  { id: 50,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak zasít anglický trávník od nuly",                   desc: "Příprava půdy, setí a zálivka.",                                                  slug: "zasit-travnik-od-nuly",               read: "5 min" },
  { id: 51,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak postavit zahradní plot ze dřeva",                  desc: "Kůly, latě, impregnace.",                                                         slug: "zahradni-plot-ze-dreva",              read: "6 min" },
  { id: 52,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak přezimovat zahradní rostliny",                     desc: "Co zakrýt, přestěhovat, nechat.",                                                 slug: "prezimovat-zahradni-rostliny",        read: "5 min" },
  { id: 53,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak se zbavit krtků",                                  desc: "Ultrazvuk, pachové odpuzovače.",                                                  slug: "zbavit-se-krtku",                     read: "4 min" },
  { id: 54,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak správně zalévat zahradu",                          desc: "Ráno nebo večer? Zásady zálivky.",                                                slug: "jak-spravne-zalevat",                 read: "5 min" },
  { id: 55,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak postavit pergolu na terasu",                       desc: "Dřevěná nebo hliníková – stavba a kotvení.",                                      slug: "pergola-postup-stavba",               read: "7 min" },
  { id: 56,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak hnojit zahradu",                                   desc: "Organicky i minerálně.",                                                          slug: "jak-hnojit-zahradu",                  read: "5 min" },
  { id: 57,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Bylinkové zahrádka na parapetu nebo balkoně",          desc: "Výběr bylinek, substrát, zálivka.",                                               slug: "bylinkova-zahradka",                  read: "4 min" },
  { id: 58,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak pokládat betonové dlaždice na terasu",             desc: "Příprava podloží, spád, spárování.",                                              slug: "pokladat-betonove-dlazdice",          read: "6 min" },
  { id: 59,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak ošetřit zahradní nábytek před zimou",              desc: "Dřevo, ratan, kov nebo plast.",                                                   slug: "osetrit-zahradni-nabytek",            read: "4 min" },
  { id: 60,  cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak vybrat zahradní gril",                             desc: "Plyn, uhlí nebo elektrika? Srovnání.",                                            slug: "vybrat-zahradni-gril",                read: "5 min" },
  { id: 101, cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Jak pěstovat rajčata – od výsevu po sklizeň",          desc: "Výsev, přesazování, péče a sklizeň. Bez prázdných stonků.",                      slug: "jak-pestovat-rajcata",                read: "7 min" },
  { id: 102, cat: "zahrada",   catLabel: "Zahrada & terasa",        title: "Zahradní nástroje – jak o ně pečovat, aby vydržely",   desc: "Čištění, broušení, mazání a skladování krok za krokem.",                          slug: "zahradni-nastroje-pece",              read: "4 min" },
  // ── Stěhování (61–80) ────────────────────────────────────────────────────
  { id: 61, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Stěhování bez stresu – kompletní checklist",            desc: "Od výpovědi po přihlášení. Nic nevynecháš.",                                     slug: "stehovani-checklist",                 read: "5 min" },
  { id: 62, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak naplánovat rekonstrukci bytu",                      desc: "Rozpočet, pořadí prací, řemeslníci.",                                             slug: "planovani-rekonstrukce-bytu",         read: "7 min" },
  { id: 63, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Kolik stojí rekonstrukce koupelny v roce 2025?",        desc: "Průměrné ceny materiálu i práce.",                                                slug: "cena-rekonstrukce-koupelny",          read: "5 min" },
  { id: 64, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak vybrat dobrou stěhovací firmu",                     desc: "Na co se ptát a jak se vyhnout překvapením.",                                    slug: "vybrat-stehovaci-firmu",              read: "4 min" },
  { id: 65, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak sám postavit příčku ze sádrokartonu",               desc: "Profily, desky, spárování.",                                                      slug: "sadrkarton-pricka-postup",            read: "7 min" },
  { id: 66, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak odhadnout cenu rekonstrukce předem",                desc: "Sestavit rozpočet a počítat navíc.",                                              slug: "odhadnout-cenu-rekonstrukce",         read: "5 min" },
  { id: 67, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak se zbavit starého nábytku",                         desc: "Bazary, charita, svoz.",                                                          slug: "zbavit-se-stareho-nabytku",           read: "4 min" },
  { id: 68, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak přestěhovat velké spotřebiče",                      desc: "Lednička, pračka, myčka.",                                                        slug: "prestehovat-velke-spotrebice",        read: "4 min" },
  { id: 69, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak zateplit starý byt bez rekonstrukce",               desc: "Těsnění oken, rolety, levná řešení.",                                             slug: "zateplit-byt-bez-rekonstrukce",       read: "5 min" },
  { id: 70, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak vyměnit staré dveře",                               desc: "Správné rozměry, vyndání, usazení.",                                              slug: "vymenit-stare-dvere",                 read: "5 min" },
  { id: 71, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak renovovat parketovou podlahu",                      desc: "Broušení, tmelení, lak nebo vosk.",                                               slug: "renovovat-parkety",                   read: "6 min" },
  { id: 72, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak klást vinyl podlahu",                               desc: "Pokládka za víkend.",                                                             slug: "kladeni-vinyl-podlahy",               read: "5 min" },
  { id: 73, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak rozložit IKEA kuchyni",                             desc: "Demontáž linky krok za krokem.",                                                  slug: "rozlozit-ikea-kuchyn",                read: "4 min" },
  { id: 74, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak najít a prověřit řemeslníka",                       desc: "Kde hledat a jak poznat spolehlivého.",                                           slug: "najit-proveri-remeslnika",            read: "5 min" },
  { id: 75, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak správně zabalit věci při stěhování",                desc: "Krabice, papír, označování.",                                                     slug: "spravne-zabalit-veci",                read: "4 min" },
  { id: 76, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak nainstalovat kuchyňskou linku",                     desc: "Kotvení skříněk, vodorovnost.",                                                   slug: "instalovat-kuchynskou-linku",         read: "6 min" },
  { id: 77, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak odhalit skryté vady bytu před koupí",               desc: "Checklist kupce.",                                                                slug: "odhalit-skryte-vady-bytu",            read: "5 min" },
  { id: 78, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak zbavit byt zápachu po rekonstrukci",                desc: "Rychlé větrání a neutralizace pachů.",                                            slug: "zbavit-byt-zapachu-po-rekonstrukci",  read: "3 min" },
  { id: 79, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak přihlásit trvalý pobyt na nové adrese",             desc: "Postup, dokumenty, lhůty.",                                                       slug: "prihlasit-trvaly-pobyt",              read: "3 min" },
  { id: 80, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Co zkontrolovat při přebírání nového bytu",             desc: "Elektrika, voda, topení, dokumenty.",                                             slug: "prebrani-bytu-checklist",             read: "4 min" },
  // ── Sezónní (81–100) ─────────────────────────────────────────────────────
  { id: 81,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak připravit dům na zimu – kompletní checklist",       desc: "Kotel, okna, okapy, voda – co zkontrolovat.",                                    slug: "jak-pripravit-dum-na-zimu",           read: "5 min" },
  { id: 82,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak odvzdušnit radiátory – krok za krokem",             desc: "Studený radiátor nahoře? Za 10 minut to vyřešíš.",                               slug: "jak-odvzdusnit-radiatory",             read: "3 min" },
  { id: 83,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak vyčistit okapy na podzim",                         desc: "Listí, mech – bezpečné čištění.",                                                 slug: "jak-vycistit-okapy",                  read: "4 min" },
  { id: 84,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak přezimovat zahradní vodovodní přípojku",            desc: "Aby nezamrzla a nepraskla.",                                                      slug: "prezimovat-zahradni-vodu",            read: "3 min" },
  { id: 85,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak utěsnit okna na zimu",                             desc: "Těsnicí páska, silikon, zimní nastavení.",                                        slug: "jak-utesnit-okna-na-zimu",            read: "4 min" },
  { id: 86,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak zkontrolovat kotel před topnou sezónou",            desc: "Co si sám prověříš a co nechej odborníkovi.",                                    slug: "zkontrolovat-kotel-pred-zimou",       read: "5 min" },
  { id: 87,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak vymalovat byt před stěhováním",                    desc: "Načasování, pořadí místností, kolik barvy.",                                      slug: "malovani-pred-stehovani",             read: "5 min" },
  { id: 88,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak ošetřit auto na zimu",                             desc: "Vosk, konzervace, podběhy.",                                                      slug: "auto-na-zimu-karoserie",              read: "4 min" },
  { id: 89,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Kdy přejít na zimní pneumatiky?",                      desc: "Zákon a zdravý rozum.",                                                           slug: "zimni-pneumatiky-kdy",                read: "4 min" },
  { id: 90,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak vyčistit komín",                                   desc: "Kdy svépomocí a kdy kominík.",                                                    slug: "vycistit-komin",                      read: "4 min" },
  { id: 91,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak připravit dům na léto",                            desc: "Klimatizace, stínění, závlahy.",                                                  slug: "dum-priprava-na-leto",                read: "5 min" },
  { id: 92,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak správně větrat byt",                               desc: "Efektivní větrání v létě i v zimě.",                                              slug: "spravne-vetrat-byt",                  read: "4 min" },
  { id: 93,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak se zbavit vlhkosti v bytě",                        desc: "Kondenzace, plíseň, zatékání.",                                                   slug: "zbavit-se-vlhkosti-v-byte",           read: "5 min" },
  { id: 94,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak pečovat o podlahové topení",                       desc: "Teplota, provoz, čištění.",                                                       slug: "pece-o-podlahove-topeni",             read: "4 min" },
  { id: 95,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak ušetřit na vytápění bez výměny kotle",             desc: "Termostatické hlavice, termostat.",                                               slug: "usetrit-na-vytapeni",                 read: "5 min" },
  { id: 96,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak čistit filtr klimatizace doma",                    desc: "Demontáž, mytí nebo výměna.",                                                     slug: "cistit-filtr-klimatizace",            read: "3 min" },
  { id: 97,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak se zbavit hmyzu v létě",                           desc: "Sítě, přírodní odpuzovače.",                                                      slug: "zbavit-se-hmyzu-bez-chemie",          read: "4 min" },
  { id: 98,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak pečovat o septik a žumpu",                         desc: "Frekvence vyvážení, životnost.",                                                  slug: "pece-o-septik-zumpu",                 read: "4 min" },
  { id: 99,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak odlehčit střechu od sněhu",                        desc: "Kdy je nebezpečný a jak ho odstranit.",                                           slug: "odlehcit-strechu-od-snehu",           read: "4 min" },
  { id: 100, cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak správně topit v topné sezóně",                     desc: "Teploty, přetápění, větrání.",                                                    slug: "jak-spravne-topit",                   read: "4 min" },
];

function BlogContent() {
  const searchParams = useSearchParams();
  const [activeCat, setActiveCat] = useState<string>("vse");
  const [search,    setSearch]    = useState<string>("");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearch(q);
  }, [searchParams]);

  const filtered = ARTICLES.filter((a) => {
    const matchCat    = activeCat === "vse" || a.cat === activeCat;
    const q           = search.toLowerCase();
    const matchSearch = q === "" || a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const activeCatLabel = CATS.find((c) => c.key === activeCat)?.label ?? "";

  return (
    <div>
      <div className="wrap">
        <header style={{ padding: "52px 0 40px", borderBottom: "1px solid var(--border)" }}>
          <p className="hero-eyebrow">Tipy, průvodce &amp; srovnání</p>
          <h1 className="hero-h1" style={{ fontSize: "clamp(32px,4vw,52px)" }}>Blog</h1>
          <p style={{ fontSize: 16, color: "var(--muted)", fontWeight: 300, marginTop: 8 }}>
            100 článků o domácnosti. Najdi co hledáš.
          </p>
        </header>

        <div className="filter-bar">
          <div className="cat-tabs">
            {CATS.map((c) => (
              <button
                key={c.key}
                className={`cat-tab${activeCat === c.key ? " active" : ""}`}
                onClick={() => setActiveCat(c.key)}
              >
                {c.label} <span className="cnt">{c.count}</span>
              </button>
            ))}
          </div>
          <input
            className="search-input"
            placeholder="Hledat článek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <p className="results-meta">
          {filtered.length} článků
          {search && ` pro "${search}"`}
          {activeCat !== "vse" && ` · ${activeCatLabel}`}
        </p>

        {filtered.length === 0 ? (
          <div className="articles-grid">
            <p className="empty-state">Žádný článek nenalezen. Zkus jiný výraz.</p>
          </div>
        ) : (
          <div className="articles-grid">
            {filtered.map((a) => (
              <Link key={a.id} href={`/blog/${a.slug}`} className="card">
                <div className="card-eyebrow-row">
                  <span>{a.catLabel}</span>
                  <span>⏱ {a.read}</span>
                </div>
                <div className="card-h">{a.title}</div>
                <p className="card-p">{a.desc}</p>
                <div className="card-arrow">Číst →</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="wrap" style={{ padding: "80px 0", color: "var(--muted)" }}>Načítám...</div>}>
      <BlogContent />
    </Suspense>
  );
}
