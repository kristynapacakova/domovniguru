"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

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

// ─── Data ────────────────────────────────────────────────────────────────────

const CATS: Category[] = [
  { key: "vse",       label: "Vše",                         count: 100 },
  { key: "malovani",  label: "🎨 Malování & barvy",         count: 20  },
  { key: "elektrika", label: "⚡ Elektrika & osvětlení",    count: 20  },
  { key: "zahrada",   label: "🌿 Zahrada & terasa",         count: 20  },
  { key: "stehovani", label: "🏠 Stěhování & rekonstrukce", count: 20  },
  { key: "sezonni",   label: "❄️ Sezónní údržba",          count: 20  },
];

const ARTICLES: Article[] = [
  // ── Malování (1–20) ──────────────────────────────────────────────────────
  { id: 1,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat zeď – kompletní průvodce pro začátečníky",  desc: "Krok za krokem: příprava podkladu, nátěr, výběr barvy. Bez chyb, bez přemalování.", slug: "jak-malovat-zed",                      read: "5 min" },
  { id: 2,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Kolik barvy potřebuji? Kalkulačka + vzorec",            desc: "Spočítej přesné množství barvy na místnost. Vzorec, tipy na rezervu.",             slug: "kolik-barvy-potrebuji",                read: "3 min" },
  { id: 3,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Latexová vs. akrylátová barva – jaký je rozdíl?",       desc: "Srovnání dvou nejpopulárnějších barev na zeď. Co kdy použít.",                    slug: "latexova-vs-akrylatova-barva",         read: "4 min" },
  { id: 4,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak odstranit starou barvu ze zdi",                     desc: "Škrabka, teplovzdušná pistole nebo chemie? Porovnání metod.",                    slug: "jak-odstranit-starou-barvu",           read: "4 min" },
  { id: 5,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat rohy a lišty bez přetahování",              desc: "Technika malování rohů štětcem, páska. Výsledek jako od malíře.",                 slug: "jak-malovat-rohy-a-listy",             read: "3 min" },
  { id: 6,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jakou barvu zvolit do vlhkých prostor?",                desc: "Koupelna, kuchyň, sklep – které barvy odolají vlhkosti a plísni.",               slug: "barva-do-vlhkych-prostoru",            read: "4 min" },
  { id: 7,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat přes tmavou barvu na světlo",               desc: "Jedna vrstva nestačí. Jak přemalovat tmavou zeď bez šmouh.",                     slug: "malovat-pres-tmavou-barvu",            read: "3 min" },
  { id: 8,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Penetrace před malováním – kdy je nutná?",              desc: "Kdy penetraci přeskočit a kdy je opravdu potřeba.",                               slug: "penetrace-pred-malovanim",             read: "4 min" },
  { id: 9,  cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak se zbavit plísně na zdi natrvalo",                  desc: "Nejprve příčina, pak řešení. Postup čištění a prevence.",                        slug: "jak-odstranit-plisen-na-zdi",          read: "5 min" },
  { id: 10, cat: "malovani",  catLabel: "Malování & barvy",         title: "Malování stropu – jak neskapat barvu všude",            desc: "Správný váleček, ochrana podlahy, technika tahů.",                                slug: "jak-malovat-strop",                    read: "4 min" },
  { id: 11, cat: "malovani",  catLabel: "Malování & barvy",         title: "Fasádní barva – jak vybrat a jak nanášet",              desc: "Silikonová, akrylátová nebo minerální? Co vydrží déle.",                          slug: "fasadni-barva-vyber",                  read: "5 min" },
  { id: 12, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak opravit škrábance a díry ve zdi před malováním",    desc: "Tmel, sádra nebo sprej? Jak vyrovnat povrch zdi.",                                slug: "opravit-skrabance-diry-ve-zdi",        read: "3 min" },
  { id: 13, cat: "malovani",  catLabel: "Malování & barvy",         title: "Barvy do dětského pokoje – co je bezpečné?",            desc: "Bez škodlivých emisí, snadná údržba. Co hledat na štítku.",                      slug: "barvy-do-detskeho-pokoje",             read: "4 min" },
  { id: 14, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat bez válenku – jen štětcem",                 desc: "Kdy se váleček nehodí a jak dosáhnout rovnoměrného výsledku.",                   slug: "malovat-jen-stetcem",                  read: "3 min" },
  { id: 15, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak celý byt vymalovat za víkend",                      desc: "Plán na 2 dny: pořadí místností, schnutí, příprava. Bez chaosu.",                slug: "malovat-cely-byt-za-vikend",           read: "5 min" },
  { id: 16, cat: "malovani",  catLabel: "Malování & barvy",         title: "Efektové barvy a techniky – štuk, beton, patina",       desc: "Dekorativní omítky krok za krokem. Efekt betonu nebo vintage patiny.",            slug: "efektove-barvy-techniky",              read: "6 min" },
  { id: 17, cat: "malovani",  catLabel: "Malování & barvy",         title: "Venkovní dřevo – jak natřít plot, terasu nebo fasádu",  desc: "Příprava dřeva, výběr laku nebo oleje, postup nanášení.",                        slug: "natrit-venkovni-drevo",                read: "5 min" },
  { id: 18, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak správně míchat barvy – RAL a NCS systém",           desc: "Co je RAL kód a jak objednat přesný odstín.",                                    slug: "michani-barev-ral-ncs",                read: "4 min" },
  { id: 19, cat: "malovani",  catLabel: "Malování & barvy",         title: "Jak malovat radiátory a kovové povrchy",                desc: "Speciální barva, příprava povrchu, počet vrstev.",                                slug: "malovat-radiatory-kovy",               read: "4 min" },
  { id: 20, cat: "malovani",  catLabel: "Malování & barvy",         title: "Barva se loupe – co jde špatně a jak to napravit",      desc: "Nejčastější příčiny loupání barvy a jak problém vyřešit.",                       slug: "barva-se-loupe",                       read: "4 min" },
  // ── Elektrika (21–40) ────────────────────────────────────────────────────
  { id: 21, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vyměnit zásuvku sám – bezpečný postup",             desc: "Vypni jistič, odšroubuj, přepoj. Krok za krokem.",                               slug: "jak-vymenit-zasuvku",                  read: "5 min" },
  { id: 22, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vyměnit vypínač světla",                            desc: "Jednopólový nebo dvojitý – postup výměny a bezpečnost.",                          slug: "jak-vymenit-vypinac",                  read: "4 min" },
  { id: 23, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "LED vs. žárovky – co se skutečně vyplatí?",             desc: "Srovnání spotřeby, životnosti a ceny. Kdy přejít na LED?",                       slug: "led-vs-zarovky-srovnani",              read: "4 min" },
  { id: 24, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vybrat správnou LED žárovku (Kelvin, lumen, CRI)",  desc: "Co znamenají čísla na krabičce. Správné světlo pro každý pokoj.",                slug: "jak-vybrat-led-zarovku",               read: "5 min" },
  { id: 25, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak zapojit nové světlo na strop",                      desc: "Krabice, L, N, PE vodiče – správné zapojení svítidla.",                          slug: "zapojit-svetlo-na-strop",              read: "5 min" },
  { id: 26, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Proč mi vypadává jistič? Nejčastější příčiny",          desc: "Přetížení, zkrat nebo vadný spotřebič? Jak najít příčinu.",                      slug: "proc-vypadava-jistic",                 read: "4 min" },
  { id: 27, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak funguje chytrá domácnost – začínáme",               desc: "Chytré zásuvky a žárovky bez rekonstrukce.",                                     slug: "chytra-domacnost-zacinamy",            read: "6 min" },
  { id: 28, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak prodloužit elektrický kabel bezpečně",              desc: "Spojky, prodlužovačky nebo nová krabice? Co je bezpečné.",                       slug: "prodlouzit-elektricky-kabel",          read: "3 min" },
  { id: 29, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak osvětlit pracovní kout nebo kuchyňskou linku",      desc: "LED pásky nebo bodovky pod skříňky – instalace a výběr.",                       slug: "osvetlit-kuchynskou-linku",            read: "4 min" },
  { id: 30, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak vybrat lustry a svítidla do každé místnosti",       desc: "Obývák, ložnice, koupelna – jaký typ osvětlení kam patří.",                     slug: "vybrat-svitidla-do-mistnosti",         read: "5 min" },
  { id: 31, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Co dělat, když nejde proud jen v části bytu",           desc: "Postup: jistič, proudový chránič, zásuvky.",                                     slug: "nejde-proud-cast-bytu",                read: "4 min" },
  { id: 32, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak nainstalovat stmívač světla",                       desc: "Zapojení stmívače krok za krokem. Co je potřeba pro LED.",                       slug: "instalovat-stmivac",                   read: "4 min" },
  { id: 33, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Venkovní osvětlení zahrady – jak na to",                desc: "Solární nebo kabelové? Typy osvětlení a instalace.",                             slug: "venkovni-osvetleni-zahrady",           read: "5 min" },
  { id: 34, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak přidat zásuvku tam, kde žádná není",                desc: "Pod omítku nebo na povrch – postup, materiál, kdy elektrikář.",                  slug: "pridat-zasuvku",                       read: "4 min" },
  { id: 35, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak fungují pojistky a jak je vyměnit",                 desc: "Starý bytový rozvaděč – bezpečná výměna pojistek.",                              slug: "jak-funguji-pojistky",                 read: "4 min" },
  { id: 36, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak snížit účet za elektřinu doma",                    desc: "Pohotovostní režim, spotřebiče, tarif – kde teče elektřina zbytečně.",           slug: "snizit-ucet-za-elektrinu",             read: "5 min" },
  { id: 37, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak nainstalovat pohybový senzor ke světlu",            desc: "Zapojení senzoru pohybu ke stropnímu světlu nebo lampě.",                        slug: "instalovat-pohybovy-senzor",           read: "4 min" },
  { id: 38, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Elektrické podlahové topení – co vědět před montáží",   desc: "Topná rohož nebo kabel? Co pod dlažbu a co pod vinyl.",                          slug: "elektricke-podlahove-topeni",          read: "5 min" },
  { id: 39, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak otestovat zásuvku – je pod napětím?",               desc: "Fázová tužka nebo multimetr? Bezpečná kontrola zásuvky.",                        slug: "otestovat-zasuvku",                    read: "3 min" },
  { id: 40, cat: "elektrika", catLabel: "Elektrika & osvětlení",    title: "Jak číst elektroměr a hlídat spotřebu",                desc: "Jednosazbový, dvousazbový, chytrý – jak odečítat hodnoty.",                     slug: "jak-cist-elektromer",                  read: "4 min" },
  // ── Zahrada (41–60) ──────────────────────────────────────────────────────
  { id: 41, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak připravit zahradu na jaro – kompletní checklist",   desc: "Co udělat v březnu a dubnu, aby zahrada vypadala celé léto skvěle.",             slug: "zahrada-priprava-na-jaro",             read: "6 min" },
  { id: 42, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak postavit vyvýšený záhon",                          desc: "Dřevěný nebo z betonu? Záhon za víkend i bez zkušeností.",                       slug: "vyvseny-zahon-postup",                 read: "6 min" },
  { id: 43, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak ošetřit dřevěnou terasu na jaře",                  desc: "Broušení, čištění, impregnace nebo olej? Obnova terasy.",                        slug: "osetrit-drevenou-terasu",              read: "5 min" },
  { id: 44, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak se zbavit plevele bez chemie",                     desc: "Mulčování, ocet, vroucí voda. Co skutečně funguje.",                             slug: "zbavit-se-plevele-bez-chemie",         read: "4 min" },
  { id: 45, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak vybudovat závlahový systém na zahradu",             desc: "Kapková závlaha nebo postřikovače? Systém za odpoledne.",                        slug: "zavlaha-zahrada-postup",               read: "6 min" },
  { id: 46, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak sekat trávník správně – výška, frekvence, okraje", desc: "Nejčastější chyby při sečení. Správná výška trávy.",                             slug: "jak-sekat-travnik",                    read: "4 min" },
  { id: 47, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak opravit poškozený trávník – plešiny a mechy",       desc: "Přísev, odvzdušnění nebo vápnění? Jak zachránit trávník.",                       slug: "opravit-travnik-ples-mech",            read: "5 min" },
  { id: 48, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak zařídit terasu na balkoně",                        desc: "Nábytek, rostliny, osvětlení pro balkon 4–10 m².",                               slug: "terasa-na-balkone",                    read: "5 min" },
  { id: 49, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak kompostovat doma a na zahradě",                    desc: "Kompostér nebo hromada? Co patří do kompostu.",                                  slug: "jak-kompostovat",                      read: "4 min" },
  { id: 50, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak zasít anglický trávník od nuly",                   desc: "Příprava půdy, výběr směsi, setí a zálivka.",                                    slug: "zasit-travnik-od-nuly",                read: "5 min" },
  { id: 51, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak postavit zahradní plot ze dřeva",                  desc: "Kůly, latě, impregnace – postup stavby plotu.",                                  slug: "zahradni-plot-ze-dreva",               read: "6 min" },
  { id: 52, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak přezimovat zahradní rostliny a keře",               desc: "Co zakrýt, přestěhovat a co přežije bez pomoci.",                                slug: "prezimovat-zahradni-rostliny",         read: "5 min" },
  { id: 53, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak se zbavit krtků a chroustů na zahradě",            desc: "Ultrazvuk, pachové odpuzovače. Co funguje a co je mýtus.",                       slug: "zbavit-se-krtku",                      read: "4 min" },
  { id: 54, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak správně zalévat zahradu – kdy a kolik",            desc: "Ráno nebo večer? Zásady správné zálivky.",                                       slug: "jak-spravne-zalevat",                  read: "4 min" },
  { id: 55, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak postavit pergolu na terasu",                       desc: "Dřevěná nebo hliníková – postup stavby a kotvení.",                              slug: "pergola-postup-stavba",                read: "7 min" },
  { id: 56, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak hnojit zahradu – organicky i minerálně",           desc: "Kdy, čím a jak moc hnojit zeleninu, trávník a keře.",                            slug: "jak-hnojit-zahradu",                   read: "5 min" },
  { id: 57, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak vytvořit bylinkovou zahrádku na parapetu",         desc: "Výběr bylinek, správný substrát, zálivka a sklizeň.",                            slug: "bylinkova-zahradka",                   read: "4 min" },
  { id: 58, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak pokládat betonové dlaždice na terasu",             desc: "Příprava podloží, spád, spárování. Pokládka bez odborníka.",                     slug: "pokladat-betonove-dlazdice",           read: "6 min" },
  { id: 59, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak ošetřit zahradní nábytek před zimou",              desc: "Dřevo, ratan, kov nebo plast – uskladnění na zimu.",                             slug: "osetrit-zahradni-nabytek",             read: "4 min" },
  { id: 60, cat: "zahrada",   catLabel: "Zahrada & terasa",         title: "Jak vybrat zahradní gril – typy, výkon, cena",         desc: "Plyn, dřevěné uhlí nebo elektrický? Srovnání.",                                  slug: "vybrat-zahradni-gril",                 read: "5 min" },
  // ── Stěhování (61–80) ────────────────────────────────────────────────────
  { id: 61, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Checklist stěhování – na co nezapomenout",              desc: "Od výpovědi smlouvy po přihlášení. Nic nevynecháš.",                             slug: "checklist-stehovani",                  read: "5 min" },
  { id: 62, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak naplánovat rekonstrukci bytu – od A do Z",          desc: "Rozpočet, pořadí prací, výběr řemeslníků.",                                      slug: "planovani-rekonstrukce-bytu",          read: "7 min" },
  { id: 63, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Kolik stojí rekonstrukce koupelny v roce 2025?",        desc: "Průměrné ceny materiálu i práce. Kde ušetřit.",                                  slug: "cena-rekonstrukce-koupelny",           read: "5 min" },
  { id: 64, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak vybrat dobrou stěhovací firmu",                     desc: "Na co se ptát a jak se vyhnout překvapením.",                                    slug: "vybrat-stehovaci-firmu",               read: "4 min" },
  { id: 65, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak sám postavit příčku ze sádrokartonu",               desc: "UW, CW profily, desky, spárování. Krok za krokem.",                              slug: "sadrkarton-pricka-postup",             read: "7 min" },
  { id: 66, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak odhadnout cenu rekonstrukce předem",                desc: "Jak sestavit rozpočet a s čím počítat navíc.",                                   slug: "odhadnout-cenu-rekonstrukce",          read: "5 min" },
  { id: 67, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak se zbavit starého nábytku při stěhování",           desc: "Bazary, charita, svoz nebo demontáž.",                                           slug: "zbavit-se-stareho-nabytku",            read: "4 min" },
  { id: 68, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak přestěhovat velké spotřebiče bezpečně",             desc: "Lednička, pračka, myčka – odpojení, zabalení, přeprava.",                       slug: "prestehovat-velke-spotrebice",         read: "4 min" },
  { id: 69, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak zateplit starý byt bez velké rekonstrukce",         desc: "Těsnění oken, rolety, těžké závěsy. Levná řešení.",                              slug: "zateplit-byt-bez-rekonstrukce",        read: "5 min" },
  { id: 70, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak vyměnit staré dveře – postup a výběr",              desc: "Správné rozměry, vyndání starých, usazení nových.",                              slug: "vymenit-stare-dvere",                  read: "5 min" },
  { id: 71, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak renovovat parketovou podlahu",                      desc: "Broušení, tmelení, lakování nebo voskování.",                                    slug: "renovovat-parkety",                    read: "6 min" },
  { id: 72, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak klást vinyl podlahu",                               desc: "Příprava podkladu, způsoby pokládky. Vinyl za víkend.",                          slug: "kladeni-vinyl-podlahy",                read: "5 min" },
  { id: 73, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak rozložit IKEA kuchyni sám",                         desc: "Postup demontáže kuchyňské linky krok za krokem.",                               slug: "rozlozit-ikea-kuchyn",                 read: "4 min" },
  { id: 74, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak najít a prověřit řemeslníka",                       desc: "Kde hledat a jak poznat spolehlivého řemeslníka.",                               slug: "najit-proveri-remeslnika",             read: "5 min" },
  { id: 75, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak správně zabalit věci při stěhování",                desc: "Krabice, bublinkový papír, označování. Systém bez chaosu.",                     slug: "spravne-zabalit-veci",                 read: "4 min" },
  { id: 76, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak nainstalovat kuchyňskou linku na zeď",              desc: "Kotvení skříněk, vodorovnost. Postup bez odborníka.",                            slug: "instalovat-kuchynskou-linku",          read: "6 min" },
  { id: 77, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak odhalit skryté vady bytu před koupí",               desc: "Co zkontrolovat na prohlídce. Checklist kupce.",                                 slug: "odhalit-skryte-vady-bytu",             read: "5 min" },
  { id: 78, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak zbavit byt zápachu po rekonstrukci",                desc: "Barvy, lepidla, nový nábytek – jak rychle vyvětrat.",                            slug: "zbavit-byt-zapachu-po-rekonstrukci",  read: "3 min" },
  { id: 79, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak přihlásit trvalý pobyt na nové adrese",             desc: "Postup na úřadě, dokumenty a lhůty.",                                           slug: "prihlasit-trvaly-pobyt",               read: "3 min" },
  { id: 80, cat: "stehovani", catLabel: "Stěhování & rekonstrukce", title: "Jak odstranit tapety ze zdi bez poškození omítky",      desc: "Voda, párovač nebo chemie? Který postup na jaký typ tapety.",                   slug: "odstranit-tapety-ze-zdi",              read: "4 min" },
  // ── Sezónní (81–100) ─────────────────────────────────────────────────────
  { id: 81,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak připravit dům na zimu – kompletní checklist",       desc: "Kotel, okna, okapy, voda v zahradě – co zkontrolovat.",                         slug: "dum-priprava-na-zimu",                 read: "5 min" },
  { id: 82,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak odvzdušnit radiátory – krok za krokem",             desc: "Studený radiátor nahoře? Za 10 minut to vyřešíš sám.",                          slug: "jak-odvzdusnit-radiatory",             read: "4 min" },
  { id: 83,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak vyčistit okapy na podzim",                         desc: "Listí, mech a nečistoty – bezpečné čištění.",                                   slug: "jak-vycistit-okapy",                   read: "4 min" },
  { id: 84,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak přezimovat zahradní vodovodní přípojku",            desc: "Jak vypustit vodu, aby nezamrzla a nepraskla.",                                 slug: "prezimovat-zahradni-vodu",             read: "3 min" },
  { id: 85,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak nastavit okna na zimní těsnění",                   desc: "Přetočení kliky a jak ušetřit na vytápění.",                                    slug: "okna-zimni-tesneni",                   read: "3 min" },
  { id: 86,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak zkontrolovat kotel před topnou sezónou",            desc: "Co si sám prověříš a co nechej odborníkovi.",                                   slug: "zkontrolovat-kotel-pred-zimou",        read: "5 min" },
  { id: 87,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak utěsnit průvany u dveří a oken",                   desc: "Těsnící pásky, prahy a lišty. Kde průvan hledat.",                               slug: "utesnit-pruvany",                      read: "4 min" },
  { id: 88,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak ošetřit auto na zimu – péče o karoserii",           desc: "Vosk, konzervace dutin, podběhy. Ochrana před solí.",                           slug: "auto-na-zimu-karoserie",               read: "4 min" },
  { id: 89,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Kdy přejít na zimní pneumatiky?",                       desc: "Zákon a zdravý rozum. Jak pneumatiky správně uskladnit.",                        slug: "zimni-pneumatiky-kdy",                 read: "4 min" },
  { id: 90,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak vyčistit komín a kdy to nechat odborníkovi",        desc: "Jak poznat ucpaný komín a kdy je nutný kominík.",                                slug: "vycistit-komin",                       read: "4 min" },
  { id: 91,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak připravit dům na léto – jarní checklist",           desc: "Klimatizace, stínění, závlahy, střecha po zimě.",                                slug: "dum-priprava-na-leto",                 read: "5 min" },
  { id: 92,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak správně větrat byt v létě i v zimě",               desc: "Kdy otevřít, kdy nechat zavřené. Efektivní větrání.",                            slug: "spravne-vetrat-byt",                   read: "4 min" },
  { id: 93,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak se zbavit vlhkosti v bytě",                        desc: "Kondenzace, plíseň, zatékání – jak rozlišit příčiny.",                           slug: "zbavit-se-vlhkosti-v-byte",            read: "5 min" },
  { id: 94,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak pečovat o podlahové topení",                       desc: "Správná teplota, uvedení do provozu, čištění.",                                  slug: "pece-o-podlahove-topeni",              read: "4 min" },
  { id: 95,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak ušetřit na vytápění bez výměny kotle",              desc: "Termostatické hlavice, termostat, těsnění.",                                     slug: "usetrit-na-vytapeni",                  read: "5 min" },
  { id: 96,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak čistit filtr klimatizace doma",                    desc: "Demontáž, mytí nebo výměna filtru. Krok za krokem.",                             slug: "cistit-filtr-klimatizace",             read: "3 min" },
  { id: 97,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak se zbavit hmyzu v létě – bez chemie",               desc: "Sítě, přírodní odpuzovače, těsnění.",                                            slug: "zbavit-se-hmyzu-bez-chemie",           read: "4 min" },
  { id: 98,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak pečovat o septik a žumpu celoročně",               desc: "Frekvence vyvážení a jak prodloužit životnost.",                                 slug: "pece-o-septik-zumpu",                  read: "4 min" },
  { id: 99,  cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak odlehčit střechu od sněhu bezpečně",               desc: "Kdy je sníh nebezpečný a jak ho bezpečně odstranit.",                            slug: "odlehcit-strechu-od-snehu",            read: "4 min" },
  { id: 100, cat: "sezonni",  catLabel: "Sezónní údržba",           title: "Jak správně topit v topné sezóně",                     desc: "Teploty, přetápění, větrání – jak topit efektivně.",                             slug: "jak-spravne-topit",                    read: "4 min" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState<string>("vse");
  const [search,    setSearch]    = useState<string>("");

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

        {/* ── Blog hero ── */}
        <header style={{ padding: "52px 0 40px", borderBottom: "1px solid var(--border)" }}>
          <p className="hero-eyebrow">Tipy, průvodce &amp; srovnání</p>
          <h1 className="hero-h1" style={{ fontSize: "clamp(32px,4vw,52px)" }}>Blog</h1>
          <p style={{ fontSize: 16, color: "var(--muted)", fontWeight: 300, marginTop: 8 }}>
            100 článků o domácnosti. Najdi co hledáš.
          </p>
        </header>

        {/* ── Filter bar ── */}
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
            placeholder="Hledat článek…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <p className="results-meta">
          {filtered.length} článků
          {search && ` pro „${search}"`}
          {activeCat !== "vse" && ` · ${activeCatLabel}`}
        </p>

        {/* ── Articles grid ── */}
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
