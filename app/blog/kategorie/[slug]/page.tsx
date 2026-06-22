import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Article = {
  id: number;
  cat: string;
  title: string;
  desc: string;
  slug: string;
  read: string;
};

type CatConfig = {
  label: string;
  icon: string;
  desc: string;
};

const CAT_CONFIG: Record<string, CatConfig> = {
  malovani: {
    label: "Malování & barvy",
    icon: "🎨",
    desc: "Jak malovat, jakou barvu vybrat a jak opravit chyby. Průvodce pro každý povrch i každého kutila.",
  },
  elektrika: {
    label: "Elektrika & osvětlení",
    icon: "⚡",
    desc: "Zásuvky, jističe, LED žárovky a chytrá domácnost. Bezpečné postupy i pro laiky.",
  },
  zahrada: {
    label: "Zahrada & terasa",
    icon: "🌿",
    desc: "Trávník, záhony, pergola, závlaha. Jak mít zahradu v pořádku celý rok.",
  },
  stehovani: {
    label: "Stěhování & rekonstrukce",
    icon: "🏠",
    desc: "Od výběru firmy po rekonstrukci koupelny. Vše, co potřebuješ vědět.",
  },
  "sezonni-udrzba": {
    label: "Sezónní údržba",
    icon: "❄️",
    desc: "Příprava na zimu i na léto. Checklisty, návody a tipy pro každé roční období.",
  },
};

const ARTICLES_BY_CAT: Record<string, Article[]> = {
  malovani: [
    { id: 1,  cat: "malovani", title: "Jak malovat zeď – kompletní průvodce pro začátečníky",  desc: "Krok za krokem: příprava podkladu, nátěr, výběr barvy.",            slug: "jak-malovat-zed",                     read: "5 min" },
    { id: 2,  cat: "malovani", title: "Kolik barvy potřebuji? Kalkulačka + vzorec",            desc: "Vzorec, tipy na rezervu a výběr správné barvy.",                   slug: "kolik-barvy-potrebuji",               read: "3 min" },
    { id: 3,  cat: "malovani", title: "Latexová vs. akrylátová barva – jaký je rozdíl?",       desc: "Srovnání dvou nejpopulárnějších barev na zeď.",                    slug: "latexova-vs-akrylatova-barva",        read: "4 min" },
    { id: 4,  cat: "malovani", title: "Jak odstranit starou barvu ze zdi",                     desc: "Škrabka, teplovzdušná pistole nebo chemie?",                       slug: "jak-odstranit-starou-barvu",          read: "4 min" },
    { id: 5,  cat: "malovani", title: "Jak malovat rohy a lišty bez přetahování",              desc: "Technika štětcem, páska. Výsledek jako od malíře.",                 slug: "jak-malovat-rohy-a-listy",            read: "3 min" },
    { id: 6,  cat: "malovani", title: "Jakou barvu zvolit do vlhkých prostor?",                desc: "Koupelna, kuchyň, sklep – odolnost vůči vlhkosti.",                 slug: "barva-do-vlhkych-prostoru",           read: "4 min" },
    { id: 7,  cat: "malovani", title: "Jak malovat přes tmavou barvu na světlo",               desc: "Jak přemalovat tmavou zeď bez šmouh.",                             slug: "malovat-pres-tmavou-barvu",           read: "3 min" },
    { id: 8,  cat: "malovani", title: "Penetrace před malováním – kdy je nutná?",              desc: "Kdy přeskočit a kdy je opravdu potřeba.",                          slug: "penetrace-pred-malovanim",            read: "4 min" },
    { id: 9,  cat: "malovani", title: "Jak se zbavit plísně na zdi natrvalo",                  desc: "Příčina, postup čištění a prevence opakování.",                    slug: "jak-odstranit-plisen-na-zdi",         read: "5 min" },
    { id: 10, cat: "malovani", title: "Malování stropu – jak neskapat barvu všude",            desc: "Správný váleček, ochrana podlahy, technika tahů.",                  slug: "jak-malovat-strop",                   read: "4 min" },
    { id: 11, cat: "malovani", title: "Fasádní barva – jak vybrat a jak nanášet",              desc: "Silikonová, akrylátová nebo minerální?",                           slug: "fasadni-barva-vyber",                 read: "5 min" },
    { id: 12, cat: "malovani", title: "Jak opravit škrábance a díry ve zdi před malováním",    desc: "Tmel, sádra nebo sprej? Jak vyrovnat povrch.",                     slug: "opravit-skrabance-diry-ve-zdi",       read: "3 min" },
    { id: 13, cat: "malovani", title: "Barvy do dětského pokoje – co je bezpečné?",            desc: "Bez škodlivých emisí, snadná údržba.",                             slug: "barvy-do-detskeho-pokoje",            read: "4 min" },
    { id: 14, cat: "malovani", title: "Jak malovat bez válenku – jen štětcem",                 desc: "Kdy se váleček nehodí a jak dosáhnout rovnoměrného výsledku.",    slug: "malovat-jen-stetcem",                 read: "3 min" },
    { id: 15, cat: "malovani", title: "Jak celý byt vymalovat za víkend",                      desc: "Plán na 2 dny: pořadí místností, schnutí, příprava.",              slug: "malovat-cely-byt-za-vikend",          read: "5 min" },
    { id: 16, cat: "malovani", title: "Efektové barvy a techniky – štuk, beton, patina",       desc: "Dekorativní omítky krok za krokem.",                               slug: "efektove-barvy-techniky",             read: "6 min" },
    { id: 17, cat: "malovani", title: "Venkovní dřevo – jak natřít plot, terasu nebo fasádu",  desc: "Výběr laku nebo oleje, postup nanášení.",                          slug: "natrit-venkovni-drevo",               read: "5 min" },
    { id: 18, cat: "malovani", title: "Jak správně míchat barvy – RAL a NCS systém",           desc: "Co je RAL kód a jak objednat přesný odstín.",                      slug: "michani-barev-ral-ncs",               read: "4 min" },
    { id: 19, cat: "malovani", title: "Jak malovat radiátory a kovové povrchy",                desc: "Speciální barva, příprava povrchu, počet vrstev.",                  slug: "jak-malovat-radiator",              read: "4 min" },
    { id: 20, cat: "malovani", title: "Barva se loupe – co jde špatně a jak to napravit",      desc: "Nejčastější příčiny a řešení.",                                    slug: "barva-se-loupe",                      read: "4 min" },
    { id: 101, cat: "malovani", title: "Tapety vs. barva na zeď – co se více vyplatí?", desc: "Srovnání ceny, náročnosti i výsledku.", slug: "tapety-vs-barva", read: "4 min" },
    { id: 102, cat: "malovani", title: "Jak vybrat barvu na zeď – podle světla i stylu", desc: "Teplé, studené odstíny a jak testovat vzorník.", slug: "jak-vybrat-barvu-na-zed", read: "4 min" },
    { id: 129, cat: "malovani", title: "Jak vybrat barvu pro každou místnost v bytě", desc: "Jaké barvy a odstíny se hodí do obýváku, ložnice, kuchyně, koupelny i dětského pokoje – praktický průvodce výběrem.", slug: "jak-vybrat-barvu-pro-kazdou-mistnost", read: "6 min" },
    { id: 130, cat: "malovani", title: "Jak malovat nábytek a dveře krok za krokem", desc: "Postup renovace starého nábytku a dveří barvou – příprava povrchu, výběr barvy, technika nanášení a finální ochrana.", slug: "jak-malovat-nabytek-a-dvere", read: "6 min" },
    { id: 131, cat: "malovani", title: "Nejčastější chyby při malování a jak se jim vyhnout", desc: "Od špatné přípravy povrchu po nesprávné ředění barvy – přehled typických chyb při malování a jak je opravit.", slug: "nejcastejsi-chyby-pri-malovani", read: "7 min" },
    { id: 132, cat: "malovani", title: "Jak vyzdobit zeď pomocí šablon a vzorů", desc: "Návod na malování geometrických vzorů, pruhů a šablon na zeď – pomůcky, postup a tipy pro rovné linie.", slug: "malovani-vzory-sablony-postup", read: "6 min" },
    { id: 144, cat: "malovani", title: "Jak natřít sklo, zrcadla a kovové prvky v bytě", desc: "Speciální barvy a postupy pro natírání skla, rámů zrcadel, klik, baterií a dalších kovových prvků.", slug: "malovani-skla-zrcadel-a-kovu", read: "5 min" },
    { id: 145, cat: "malovani", title: "Jaká barva na strop a do koupelny? Praktický přehled", desc: "Proč potřebuje strop jinou barvu než stěny a jak vybrat omyvatelnou barvu odolnou vlhkosti do koupelny.", slug: "barva-na-strop-a-do-koupelny", read: "5 min" },
    { id: 146, cat: "malovani", title: "Jak ošetřit novou omítku, než ji začnete malovat", desc: "Doba zrání omítky, vlhkost zdiva, penetrace a postup prvního malování nově omítnutých stěn.", slug: "osetrit-novou-omitku-pred-malovanim", read: "6 min" },
    { id: 147, cat: "malovani", title: "Jak obnovit fasádu domu novým nátěrem bez nového zateplení", desc: "Kdy stačí jen přemalovat fasádu, jak ji připravit a jaký typ fasádní barvy vybrat pro dlouhou životnost.", slug: "obnova-fasady-naterem", read: "7 min" },
    { id: 159, cat: "malovani", title: "Jak vybrat štětce a válečky pro různé typy nátěrů", desc: "Přehled štětců, válečků a jejich použití podle typu barvy a povrchu – jak vybrat správné nářadí a jak o něj pečovat.", slug: "vyber-stetcu-a-valecku", read: "5 min" },
    { id: 160, cat: "malovani", title: "Jak natřít kovový plot a bránu, aby nerezavěly", desc: "Postup přípravy, odstranění rezu, základní nátěr a finální barva na kovový plot a bránu – jak dosáhnout trvanlivého výsledku.", slug: "jak-malovat-kovovy-plot-a-branu", read: "6 min" },
    { id: 161, cat: "malovani", title: "Jak namalovat betonovou podlahu v garáži nebo dílně", desc: "Příprava betonu, penetrace, výběr epoxidové nebo podlahové barvy a postup nátěru podlahy v garáži krok za krokem.", slug: "malovani-betonove-podlahy-garaz", read: "6 min" },
    { id: 162, cat: "malovani", title: "Malování nových sádrokartonových stěn – co nepodcenit", desc: "Jak správně připravit a natřít nový sádrokarton – penetrace, tmelení spojů, počet vrstev a výběr barvy.", slug: "jak-malovat-na-sadrokarton", read: "5 min" },
    { id: 163, cat: "malovani", title: "Jak opravit praskliny ve fasádě před nátěrem", desc: "Diagnostika typů prasklin na fasádě, jejich oprava tmelem nebo sítí a příprava povrchu před fasádním nátěrem.", slug: "oprava-prasklin-ve-fasade-pred-malovanim", read: "6 min" },
    { id: 179, cat: "malovani", title: "Barvy bez VOC – jak vybrat zdravou barvu do interiéru", desc: "Co je VOC, jak rozeznat nízko-VOC barvu, kdy je to klíčové a jak správně větrat při malování.", slug: "barvy-s-nizkym-obsahem-voc", read: "5 min" },
    { id: 180, cat: "malovani", title: "Jak správně skladovat a uchovat zbylou barvu", desc: "Jak plechovku správně uzavřít, kde a jak dlouho barvu skladovat a jak poznat, že je už nepoužitelná.", slug: "jak-skladovat-zbylou-barvu", read: "5 min" },
    { id: 181, cat: "malovani", title: "Křídová barva na nábytek – postup pro vintage look", desc: "Jak natřít starý nábytek křídovou barvou bez broušení a penetrace. Postup, vintage efekt a typické chyby.", slug: "kridova-barva-na-nabytek-postup", read: "5 min" },
  ],
  elektrika: [
    { id: 21, cat: "elektrika", title: "Jak vyměnit zásuvku sám – bezpečný postup",             desc: "Vypni jistič, odšroubuj, přepoj. Krok za krokem.",                 slug: "jak-vymenit-zasuvku",                 read: "5 min" },
    { id: 22, cat: "elektrika", title: "Jak vyměnit vypínač světla",                            desc: "Jednopólový nebo dvojitý – postup a bezpečnost.",                  slug: "jak-vymenit-vypinac",                 read: "4 min" },
    { id: 23, cat: "elektrika", title: "LED vs. žárovky – co se skutečně vyplatí?",             desc: "Spotřeba, životnost, cena. Kdy přejít na LED?",                    slug: "led-vs-zarovky",                      read: "4 min" },
    { id: 24, cat: "elektrika", title: "Jak vybrat správnou LED žárovku (Kelvin, lumen, CRI)",  desc: "Co znamenají čísla na krabičce.",                                  slug: "jak-vybrat-led-zarovku",              read: "5 min" },
    { id: 25, cat: "elektrika", title: "Jak zapojit nové světlo na strop",                      desc: "Krabice, L, N, PE vodiče – správné zapojení.",                     slug: "zapojit-svetlo-na-strop",             read: "5 min" },
    { id: 26, cat: "elektrika", title: "Proč mi vypadává jistič?",                              desc: "Přetížení, zkrat nebo vadný spotřebič?",                           slug: "proc-vypadava-jistic",                read: "4 min" },
    { id: 27, cat: "elektrika", title: "Jak funguje chytrá domácnost – začínáme",               desc: "Chytré zásuvky a žárovky bez rekonstrukce.",                       slug: "chytra-domacnost-zaciname",           read: "6 min" },
    { id: 28, cat: "elektrika", title: "Jak prodloužit elektrický kabel bezpečně",              desc: "Spojky, prodlužovačky nebo nová krabice.",                         slug: "prodlouzit-elektricky-kabel",         read: "3 min" },
    { id: 29, cat: "elektrika", title: "Jak osvětlit kuchyňskou linku",                         desc: "LED pásky nebo bodovky pod skříňky.",                              slug: "osvetlit-kuchynskou-linku",           read: "4 min" },
    { id: 30, cat: "elektrika", title: "Jak vybrat lustry a svítidla do každé místnosti",       desc: "Obývák, ložnice, koupelna – jaký typ kam.",                        slug: "vybrat-svitidla-do-mistnosti",        read: "5 min" },
    { id: 31, cat: "elektrika", title: "Co dělat, když nejde proud jen v části bytu",           desc: "Postup: jistič, chránič, zásuvky.",                                slug: "nejde-proud-cast-bytu",               read: "4 min" },
    { id: 32, cat: "elektrika", title: "Jak nainstalovat stmívač světla",                       desc: "Zapojení krok za krokem. Co je potřeba pro LED.",                  slug: "instalovat-stmivac",                  read: "4 min" },
    { id: 33, cat: "elektrika", title: "Venkovní osvětlení zahrady – jak na to",                desc: "Solární nebo kabelové? Typy a instalace.",                         slug: "venkovni-osvetleni-zahrady",          read: "5 min" },
    { id: 34, cat: "elektrika", title: "Jak přidat zásuvku tam, kde žádná není",                desc: "Pod omítku nebo na povrch.",                                       slug: "pridat-zasuvku",                      read: "4 min" },
    { id: 35, cat: "elektrika", title: "Jak fungují pojistky a jak je vyměnit",                 desc: "Starý bytový rozvaděč – bezpečná výměna.",                         slug: "jak-funguji-pojistky",                read: "4 min" },
    { id: 36, cat: "elektrika", title: "Jak snížit účet za elektřinu doma",                    desc: "Kde teče elektřina zbytečně.",                                     slug: "snizit-ucet-za-elektrinu",            read: "5 min" },
    { id: 37, cat: "elektrika", title: "Jak nainstalovat pohybový senzor ke světlu",            desc: "Zapojení senzoru pohybu.",                                         slug: "instalovat-pohybovy-senzor",          read: "4 min" },
    { id: 38, cat: "elektrika", title: "Elektrické podlahové topení – co vědět před montáží",   desc: "Rohož nebo kabel? Co pod dlažbu a vinyl.",                         slug: "elektricke-podlahove-topeni",         read: "5 min" },
    { id: 39, cat: "elektrika", title: "Jak otestovat zásuvku – je pod napětím?",               desc: "Fázová tužka nebo multimetr.",                                     slug: "otestovat-zasuvku",                   read: "3 min" },
    { id: 40, cat: "elektrika", title: "Jak číst elektroměr a hlídat spotřebu",                desc: "Jednosazbový, dvousazbový, chytrý.",                               slug: "jak-cist-elektromer",                 read: "4 min" },
    { id: 114, cat: "elektrika", title: "Solární panely na dům – jak vybrat výkon, typ a dodavatele", desc: "Jaký výkon (kWp) zvolit, kolik FVE stojí, jaká je návratnost s dotací a jak poznat spolehlivého dodavatele.", slug: "jak-vybrat-solarni-panely", read: "6 min" },
    { id: 117, cat: "elektrika", title: "Jak vybrat dodavatele a tarif elektřiny a ušetřit tisíce ročně", desc: "Jednotarif, dvoutarif nebo spotová cena? Jak porovnat nabídky, přejít k levnějšímu dodavateli a ušetřit bez rizika.", slug: "jak-vybrat-dodavatele-elektriny", read: "6 min" },
    { id: 115, cat: "elektrika", title: "Jaký bojler vybrat – elektrický, plynový nebo zásobníkový?", desc: "Srovnání typů, výpočet velikosti podle počtu osob a reálné roční náklady na ohřev vody.", slug: "jaky-bojler-vybrat", read: "5 min" },
    { id: 119, cat: "elektrika", title: "Klimatizace – jak vybrat výkon, typ a dodavatele", desc: "Split, mobilní nebo multi-split? Jak vybrat správný výkon, co stojí provoz a jak ušetřit na elektřině.", slug: "jak-vybrat-klimatizaci", read: "7 min" },
    { id: 121, cat: "elektrika", title: "Fotovoltaika s baterií – má smysl doma skladovat elektřinu?", desc: "Vyplatí se baterie k fotovoltaice? Srovnání LFP vs. NMC, výpočet kapacity, dotace NZÚ a realistická návratnost.", slug: "fotovoltaika-s-baterii", read: "6 min" },
    { id: 133, cat: "elektrika", title: "Klimatizace v bytě: instalace, provoz a úspora energie", desc: "Co obnáší instalace split klimatizace, jak ji správně provozovat a jak snížit spotřebu elektřiny při chlazení.", slug: "klimatizace-instalace-a-provoz", read: "7 min" },
    { id: 148, cat: "elektrika", title: "Jak vybrat a nainstalovat domovní zvonek nebo videotelefon", desc: "Drátový vs. bezdrátový zvonek, klasický vypínač nebo videotelefon s kamerou – přehled, výběr a instalace.", slug: "vyber-domovniho-zvonku-a-videotelefonu", read: "6 min" },
    { id: 149, cat: "elektrika", title: "Jak vybrat záložní zdroj nebo generátor pro výpadky proudu", desc: "Elektrocentrála, powerstation nebo záložní baterie k fotovoltaice – srovnání řešení pro výpadky elektřiny v domácnosti.", slug: "zalozni-zdroj-generator-pro-domacnost", read: "7 min" },
    { id: 150, cat: "elektrika", title: "Jak bezpečně instalovat venkovní zásuvku a osvětlení na zahradě", desc: "Krytí IP, proudový chránič a uložení kabelu do země – co je potřeba pro bezpečnou venkovní elektroinstalaci.", slug: "instalace-venkovni-zasuvky-a-osvetleni", read: "6 min" },
    { id: 182, cat: "elektrika", title: "USB zásuvky a nabíjecí stanice doma – jak na to", desc: "Jak vybrat a nainstalovat USB zásuvku, kam ji umístit a kdy zvládneš výměnu sám a kdy zavolat elektrikáře.", slug: "usb-zasuvky-a-nabijeci-stanice", read: "5 min" },
    { id: 183, cat: "elektrika", title: "Schodišťový vypínač – jak zapojit a k čemu slouží", desc: "Schodišťové zapojení vypínače umožní rozsvítit i zhasnout světlo ze dvou míst. Schéma a bezpečnost.", slug: "schodistovy-vypinac-zapojeni", read: "5 min" },
    { id: 184, cat: "elektrika", title: "Spotřebiče v pohotovostním režimu – kolik stojí standby", desc: "Tabulka standby příkonů, roční náklady a praktické tipy jak fantomovou spotřebu omezit.", slug: "spotrebice-ve-standby-jak-usetrit", read: "5 min" },
  ],
  zahrada: [
    { id: 41, cat: "zahrada", title: "Jak připravit zahradu na jaro",                           desc: "Co udělat v březnu a dubnu.",                                      slug: "jarni-zahrada",                       read: "6 min" },
    { id: 42, cat: "zahrada", title: "Jak postavit vyvýšený záhon",                             desc: "Dřevěný nebo z betonu? Za víkend.",                                slug: "vyvyseny-zahon-postup",                read: "6 min" },
    { id: 43, cat: "zahrada", title: "Jak ošetřit dřevěnou terasu před zimou",                  desc: "Broušení, čištění, impregnace nebo olej.",                         slug: "drevo-terasa-zima",                   read: "4 min" },
    { id: 44, cat: "zahrada", title: "Jak se zbavit plevele bez chemie",                         desc: "Mulčování, ocet, vroucí voda.",                                    slug: "zbavit-se-plevele-bez-chemie",        read: "4 min" },
    { id: 45, cat: "zahrada", title: "Jak vybudovat závlahový systém",                           desc: "Kapková závlaha nebo postřikovače.",                               slug: "zavlaha-zahrada-postup",              read: "6 min" },
    { id: 46, cat: "zahrada", title: "Jak sekat trávník správně",                                desc: "Výška, frekvence, okraje.",                                        slug: "jak-sekat-travnik",                   read: "4 min" },
    { id: 47, cat: "zahrada", title: "Jak opravit poškozený trávník",                            desc: "Přísev, odvzdušnění nebo vápnění.",                                slug: "opravit-travnik-ples-mech",           read: "5 min" },
    { id: 48, cat: "zahrada", title: "Jak zařídit terasu na balkoně",                            desc: "Nábytek, rostliny, osvětlení pro balkon.",                         slug: "terasa-na-balkone",                   read: "5 min" },
    { id: 49, cat: "zahrada", title: "Jak kompostovat doma a na zahradě",                        desc: "Kompostér nebo hromada?",                                          slug: "jak-kompostovat",                     read: "4 min" },
    { id: 50, cat: "zahrada", title: "Jak zasít anglický trávník od nuly",                       desc: "Příprava půdy, setí a zálivka.",                                   slug: "zasit-travnik-od-nuly",               read: "5 min" },
    { id: 51, cat: "zahrada", title: "Jak postavit zahradní plot ze dřeva",                      desc: "Kůly, latě, impregnace.",                                          slug: "zahradni-plot-ze-dreva",              read: "6 min" },
    { id: 52, cat: "zahrada", title: "Jak přezimovat zahradní rostliny",                         desc: "Co zakrýt, přestěhovat, nechat.",                                  slug: "prezimovat-zahradni-rostliny",        read: "5 min" },
    { id: 53, cat: "zahrada", title: "Jak se zbavit krtků",                                      desc: "Ultrazvuk, pachové odpuzovače.",                                   slug: "zbavit-se-krtku",                     read: "4 min" },
    { id: 54, cat: "zahrada", title: "Jak správně zalévat zahradu",                              desc: "Ráno nebo večer? Zásady zálivky.",                                 slug: "jak-spravne-zalevat",                 read: "4 min" },
    { id: 55, cat: "zahrada", title: "Jak postavit pergolu na terasu",                           desc: "Dřevěná nebo hliníková – stavba a kotvení.",                       slug: "pergola-postup-stavba",               read: "7 min" },
    { id: 56, cat: "zahrada", title: "Jak hnojit zahradu",                                       desc: "Organicky i minerálně.",                                           slug: "jak-hnojit-zahradu",                  read: "5 min" },
    { id: 57, cat: "zahrada", title: "Bylinkové zahrádka na parapetu nebo balkoně",              desc: "Výběr bylinek, substrát, zálivka.",                                slug: "bylinkova-zahradka",                  read: "4 min" },
    { id: 58, cat: "zahrada", title: "Jak pokládat betonové dlaždice na terasu",                 desc: "Příprava podloží, spád, spárování.",                               slug: "pokladat-betonove-dlazdice",          read: "6 min" },
    { id: 59, cat: "zahrada", title: "Jak ošetřit zahradní nábytek před zimou",                  desc: "Dřevo, ratan, kov nebo plast.",                                    slug: "osetrit-zahradni-nabytek",            read: "4 min" },
    { id: 60, cat: "zahrada", title: "Jak vybrat zahradní gril",                                 desc: "Plyn, uhlí nebo elektrika? Srovnání.",                             slug: "vybrat-zahradni-gril",                read: "5 min" },
    { id: 103, cat: "zahrada", title: "Vyvýšené záhony – typy, materiály a tipy", desc: "Dřevo, beton nebo kov? Výběr a stavba.", slug: "vyvysene-zahony", read: "5 min" },
    { id: 104, cat: "zahrada", title: "Jak pěstovat rajčata", desc: "Výsev, přesazení, zálivka, sklizeň.", slug: "jak-pestovat-rajcata", read: "5 min" },
    { id: 105, cat: "zahrada", title: "Jak pěstovat jahody", desc: "Na záhonu i v nádobě – výsadba a péče.", slug: "jak-pestovat-jahody", read: "4 min" },
    { id: 106, cat: "zahrada", title: "Jak pěstovat papriky", desc: "Od semínka po sklizeň na zahradě i balkoně.", slug: "jak-pestovat-papriky", read: "4 min" },
    { id: 107, cat: "zahrada", title: "Jak stříhat ovocné stromy", desc: "Jarní a letní řez – kdy a jak na to.", slug: "jak-strihat-ovocne-stromy", read: "5 min" },
    { id: 108, cat: "zahrada", title: "Jak stříhat keře a živý plot", desc: "Tvarovací a omlazovací řez krok za krokem.", slug: "jak-strihat-kere", read: "4 min" },
    { id: 109, cat: "zahrada", title: "Zahradní nástroje – jak o ně pečovat", desc: "Čištění, broušení, uskladnění.", slug: "zahradni-nastroje-pece", read: "3 min" },
    { id: 110, cat: "zahrada", title: "Jak ochránit rostliny před zimou", desc: "Mulčování, zábal, přesun do interiéru.", slug: "ochrana-rostlin-pred-zimou", read: "4 min" },
    { id: 125, cat: "zahrada", title: "Automatické zavlažování zahrady – instalace, nastavení a cena", desc: "Kapkové, postřikové nebo podzemní zavlažování? Jak naplánovat, nainstalovat a nastavit automatický závlahový systém.", slug: "automaticke-zavlazovani-zahrady", read: "6 min" },
    { id: 126, cat: "zahrada", title: "Jak navrhnout zahradu od nuly – plán, zóny a výběr rostlin", desc: "Jak rozdělit zahradu na zóny, vybrat styl a rostliny, naplánovat trávník a celou realizaci rozfázovat do etap.", slug: "jak-navrhnout-zahradu", read: "7 min" },
    { id: 138, cat: "zahrada", title: "Jak vybudovat skleník na zahradě svépomocí", desc: "Typy skleníků, výběr materiálu, umístění na zahradě a postup stavby svépomocí krok za krokem.", slug: "sklenik-na-zahrade-svepomoci", read: "6 min" },
    { id: 155, cat: "zahrada", title: "Jak postavit zahradní jezírko svépomocí", desc: "Výběr místa, fólie nebo jezírková nádrž, filtrace a osázení – kompletní postup stavby zahradního jezírka.", slug: "stavba-zahradniho-jezirka", read: "7 min" },
    { id: 156, cat: "zahrada", title: "Jak vybrat a udržovat zahradní nábytek, aby vydržel roky", desc: "Dřevo, ratan, kov nebo plast – srovnání materiálů zahradního nábytku a jak o něj pečovat během sezóny i v zimě.", slug: "vyber-a-udrzba-zahradniho-nabytku", read: "5 min" },
    { id: 157, cat: "zahrada", title: "Jak pěstovat bylinky a zeleninu na balkoně bez zahrady", desc: "Truhlíky, samozavlažovací nádoby, vhodné odrůdy a péče – jak si na balkoně vypěstovat vlastní bylinky a zeleninu.", slug: "bylinky-a-zelenina-na-balkone", read: "6 min" },
    { id: 158, cat: "zahrada", title: "Jak postavit dřevěné schody a zahradní cestičky svépomocí", desc: "Návod na stavbu dřevěných schodů do svahu a zahradních cestiček z dřevěných pražců nebo dlažby.", slug: "drevene-schody-a-cesticky-na-zahrade", read: "6 min" },
    { id: 164, cat: "zahrada", title: "Stavba zahradního domku na nářadí svépomocí", desc: "Výběr lokality, materiálu a postup stavby zahradního domku na nářadí krok za krokem – od základů po střechu.", slug: "jak-postavit-zahradni-domek-na-naradi", read: "7 min" },
    { id: 165, cat: "zahrada", title: "Jak vybudovat skalku na zahradě krok za krokem", desc: "Výběr místa, kamenů a substrátu pro skalku a tipy na výsadbu skalniček, které zvládnou i suchá léta.", slug: "jak-vybudovat-skalku", read: "6 min" },
    { id: 166, cat: "zahrada", title: "Podzimní výsadba cibulovin – tulipány, narcisy, krokusy", desc: "Kdy a jak na podzim sázet cibuloviny, aby na jaře vykvetly – hloubka výsadby, kombinace druhů a péče.", slug: "podzimni-vysadba-cibulovin", read: "5 min" },
    { id: 167, cat: "zahrada", title: "Vertikální zahrada na balkoně – inspirace a postup", desc: "Jak si vybudovat vertikální zahradu na balkoně – konstrukce, vhodné rostliny, zavlažování a údržba.", slug: "vertikalni-zahrada-na-balkone", read: "6 min" },
    { id: 168, cat: "zahrada", title: "Jak pěstovat okurky a cukety na zahradě", desc: "Výsadba, zálivka, hnojení a ochrana proti plísním – praktický návod na pěstování okurek a cuket.", slug: "pestovani-okurek-a-cuket", read: "6 min" },
    { id: 185, cat: "zahrada", title: "Jak pěstovat česnek a cibuli na zahradě", desc: "Ozimý vs. jarní česnek, sadba vs. semena cibule, sázení, hnojení i sklizeň a uskladnění.", slug: "jak-pestovat-cesnek-a-cibuli", read: "6 min" },
    { id: 186, cat: "zahrada", title: "Okenní truhlíky – postup instalace a výběr rostlin", desc: "Jak vybrat truhlík, bezpečně ho uchytit a zvolit rostliny podle orientace okna.", slug: "okenni-truhliky-postup-a-vyber-rostlin", read: "5 min" },
    { id: 187, cat: "zahrada", title: "Odvodnění zahrady – jak řešit přebytečnou dešťovou vodu", desc: "Drenáž, vsakovací jímka, dešťová zahrada nebo úprava sklonu terénu – řešení podle závažnosti problému.", slug: "odvodneni-zahrady-pri-destich", read: "5 min" },
  ],
  stehovani: [
    { id: 61, cat: "stehovani", title: "Stěhování bez stresu – kompletní checklist",              desc: "Od výpovědi po přihlášení.",                                       slug: "stehovani-checklist",                 read: "5 min" },
    { id: 62, cat: "stehovani", title: "Jak naplánovat rekonstrukci bytu",                        desc: "Rozpočet, pořadí prací, řemeslníci.",                              slug: "planovani-rekonstrukce-bytu",         read: "7 min" },
    { id: 63, cat: "stehovani", title: "Kolik stojí rekonstrukce koupelny v roce 2025?",          desc: "Průměrné ceny materiálu i práce.",                                 slug: "cena-rekonstrukce-koupelny",          read: "5 min" },
    { id: 64, cat: "stehovani", title: "Jak vybrat dobrou stěhovací firmu",                       desc: "Na co se ptát a jak se vyhnout překvapením.",                      slug: "vybrat-stehovaci-firmu",              read: "4 min" },
    { id: 65, cat: "stehovani", title: "Jak sám postavit příčku ze sádrokartonu",                 desc: "Profily, desky, spárování.",                                       slug: "sadrokarton-pricka-postup",            read: "7 min" },
    { id: 66, cat: "stehovani", title: "Jak odhadnout cenu rekonstrukce předem",                  desc: "Sestavit rozpočet a počítat navíc.",                               slug: "odhadnout-cenu-rekonstrukce",         read: "5 min" },
    { id: 67, cat: "stehovani", title: "Jak se zbavit starého nábytku",                           desc: "Bazary, charita, svoz.",                                           slug: "zbavit-se-stareho-nabytku",           read: "4 min" },
    { id: 68, cat: "stehovani", title: "Jak přestěhovat velké spotřebiče",                        desc: "Lednička, pračka, myčka.",                                         slug: "prestehovat-velke-spotrebice",        read: "4 min" },
    { id: 69, cat: "stehovani", title: "Jak zateplit starý byt bez rekonstrukce",                 desc: "Těsnění oken, rolety, levná řešení.",                              slug: "zateplit-byt-bez-rekonstrukce",       read: "5 min" },
    { id: 70, cat: "stehovani", title: "Jak vyměnit staré dveře",                                 desc: "Správné rozměry, vyndání, usazení.",                               slug: "vymenit-stare-dvere",                 read: "5 min" },
    { id: 71, cat: "stehovani", title: "Jak renovovat parketovou podlahu",                        desc: "Broušení, tmelení, lak nebo vosk.",                                slug: "renovovat-parkety",                   read: "6 min" },
    { id: 72, cat: "stehovani", title: "Jak klást vinyl podlahu",                                 desc: "Pokládka za víkend.",                                              slug: "kladeni-vinyl-podlahy",               read: "5 min" },
    { id: 73, cat: "stehovani", title: "Jak rozložit IKEA kuchyni",                               desc: "Demontáž linky krok za krokem.",                                   slug: "rozlozit-ikea-kuchyn",                read: "4 min" },
    { id: 74, cat: "stehovani", title: "Jak najít a prověřit řemeslníka",                         desc: "Kde hledat a jak poznat spolehlivého.",                            slug: "najit-proveri-remeslnika",            read: "5 min" },
    { id: 75, cat: "stehovani", title: "Jak správně zabalit věci při stěhování",                  desc: "Krabice, papír, označování.",                                      slug: "spravne-zabalit-veci",                read: "4 min" },
    { id: 76, cat: "stehovani", title: "Jak nainstalovat kuchyňskou linku",                       desc: "Kotvení skříněk, vodorovnost.",                                    slug: "instalovat-kuchynskou-linku",         read: "6 min" },
    { id: 77, cat: "stehovani", title: "Jak odhalit skryté vady bytu před koupí",                 desc: "Checklist kupce.",                                                 slug: "odhalit-skryte-vady-bytu",            read: "5 min" },
    { id: 78, cat: "stehovani", title: "Jak zbavit byt zápachu po rekonstrukci",                  desc: "Rychlé větrání a neutralizace pachů.",                             slug: "zbavit-byt-zapachu-po-rekonstrukci", read: "3 min" },
    { id: 79, cat: "stehovani", title: "Jak přihlásit trvalý pobyt na nové adrese",               desc: "Postup, dokumenty, lhůty.",                                        slug: "prihlasit-trvaly-pobyt",              read: "3 min" },
    { id: 80, cat: "stehovani", title: "Co zkontrolovat při přebírání nového bytu",               desc: "Elektrika, voda, topení, dokumenty.",                              slug: "prebrani-bytu-checklist",             read: "4 min" },
    { id: 111, cat: "stehovani", title: "Jak namazat dveře aby nevrzaly", desc: "Závěsy, pant nebo práh – rychlá oprava.", slug: "jak-namazat-dvere-aby-nevrzaly", read: "3 min" },
    { id: 120, cat: "stehovani", title: "Jak zateplovat dům – fasáda, střecha, podlaha a návratnost", desc: "Fasáda, střecha, podlaha nebo okna? Jak postupovat při zateplování, reálné ceny a návratnost s dotacemi NZÚ.", slug: "jak-zateplit-dum", read: "7 min" },
    { id: 122, cat: "stehovani", title: "Rekonstrukce koupelny – průvodce, ceny a pořadí prací", desc: "Kolik stojí rekonstrukce koupelny, v jakém pořadí jdou práce a co zvládneš svépomocí. Od bourání po dokončení.", slug: "rekonstrukce-koupelny-pruvodce", read: "8 min" },
    { id: 123, cat: "stehovani", title: "Jak vybrat dlažbu do koupelny – protiskluz, formát a spárování", desc: "Protiskluzové třídy, formáty, keramika vs. porcelán a jak vybrat správnou spárovací hmotu.", slug: "jak-vybrat-dlazbu-do-koupelny", read: "5 min" },
    { id: 124, cat: "stehovani", title: "Sprchový kout nebo vana – co se vyplatí v malé koupelně?", desc: "Sprchový kout nebo vana? Srovnání plochy, spotřeby vody a nákladů pro malou koupelnu, páry i rodiny.", slug: "sprchovy-kout-nebo-vana", read: "5 min" },
    { id: 127, cat: "stehovani", title: "Kuchyňská linka – na míru, IKEA nebo kuchyňské studio?", desc: "IKEA, kuchyňské studio nebo truhlář na míru? Srovnání cen, kvality a termínů + jak se připravit na rekonstrukci kuchyně.", slug: "kuchynska-linka-na-miru-vs-ikea", read: "6 min" },
    { id: 128, cat: "stehovani", title: "Plovoucí podlaha vs. dlažba – co vybrat do jakých místností?", desc: "Laminát, vinyl, dřevo nebo dlažba? Co vybrat do obýváku, ložnice, kuchyně nebo koupelny – srovnání cen a vhodnosti.", slug: "plovouci-podlaha-vs-dlazba", read: "6 min" },
    { id: 135, cat: "stehovani", title: "Hypotéka na rekonstrukci: jak spočítat splátky a vybrat úvěr", desc: "Jak funguje úvěr na rekonstrukci, na co si dát pozor u úrokové sazby a fixace a jak si spočítat měsíční splátku.", slug: "hypoteka-na-rekonstrukci", read: "7 min" },
    { id: 136, cat: "stehovani", title: "Zateplení domu: kolik stojí a za jak dlouho se vrátí", desc: "Náklady na zateplení fasády, střechy a oken, dostupné dotace a reálná doba návratnosti investice.", slug: "navratnost-zatepleni-domu", read: "7 min" },
    { id: 137, cat: "stehovani", title: "Jak naplánovat novou kuchyň krok za krokem", desc: "Od měření prostoru přes návrh dispozice až po výběr spotřebičů a rozpočet – kompletní plán pořízení kuchyně.", slug: "planovani-kuchyne-krok-za-krokem", read: "7 min" },
    { id: 151, cat: "stehovani", title: "Jak vybrat nová okna při rekonstrukci bytu nebo domu", desc: "Materiál rámů, počet komor, izolační trojskla a montáž – na co se zaměřit při výměně oken.", slug: "jak-vybrat-okna-pri-rekonstrukci", read: "7 min" },
    { id: 152, cat: "stehovani", title: "Jak vyřešit úložné prostory v malém bytě", desc: "Vestavěné skříně, využití výšky stropu, multifunkční nábytek a šikovné systémy úložného prostoru pro malé byty.", slug: "uloziste-v-malem-byte", read: "6 min" },
    { id: 153, cat: "stehovani", title: "Jak naplánovat osvětlení v celém bytě při rekonstrukci", desc: "Vrstvení světla, rozmístění zásuvek a vypínačů, teplota barvy a chytré ovládání – plán osvětlení pro každou místnost.", slug: "planovani-osvetleni-bytu", read: "7 min" },
    { id: 154, cat: "stehovani", title: "Jak vybrat vchodové dveře do bytu nebo domu", desc: "Bezpečnostní třídy, materiály, zámky a tepelná izolace – na co se zaměřit při výběru vchodových dveří.", slug: "jak-vybrat-vchodove-dvere", read: "6 min" },
    { id: 169, cat: "stehovani", title: "Jak naplánovat dětský pokoj, který poroste s dítětem", desc: "Tipy na nábytek, úložné prostory a uspořádání dětského pokoje, který vydrží od batolete až po školáka.", slug: "planovani-detskeho-pokoje", read: "6 min" },
    { id: 170, cat: "stehovani", title: "Jak vybrat kuchyňský dřez a baterii", desc: "Materiály, velikosti a typy dřezů a kuchyňských baterií – jak vybrat podle provozu domácnosti a rozpočtu.", slug: "jak-vybrat-kuchynsky-drez-a-baterii", read: "5 min" },
    { id: 171, cat: "stehovani", title: "Jak vybrat podlahovou krytinu do bytu podle místnosti", desc: "Srovnání laminátu, vinylu, dlažby a dřeva pro obytné místnosti, kuchyň, koupelnu a chodbu – co se kam hodí.", slug: "vyber-podlahovych-krytin-pro-byt", read: "7 min" },
    { id: 172, cat: "stehovani", title: "Stěhování s dětmi – jak to zvládnout v klidu", desc: "Praktické tipy, jak připravit děti na stěhování, zorganizovat balení a první dny v novém bydlení.", slug: "stehovani-s-detmi-tipy", read: "5 min" },
    { id: 173, cat: "stehovani", title: "Jak navrhnout malou koupelnu, aby působila větší", desc: "Tipy na rozvržení, barvy, osvětlení a úložné prostory v malé koupelně – jak vizuálně i prakticky zvětšit prostor.", slug: "jak-navrhnout-male-koupelny", read: "7 min" },
    { id: 188, cat: "stehovani", title: "Rekonstrukce pronajatého bytu – co můžete a co ne", desc: "Co si nájemník může v pronajatém bytě upravit bez souhlasu a co vyžaduje písemné svolení pronajímatele.", slug: "rekonstrukce-bytu-v-najmu-co-je-mozne", read: "6 min" },
    { id: 189, cat: "stehovani", title: "Jak přežít bydlení během rekonstrukce bytu", desc: "Kdy zůstat bydlet a kdy se odstěhovat, provizorní zázemí a vaření i hygiena bez kuchyně a koupelny.", slug: "jak-bydlet-behem-rekonstrukce", read: "6 min" },
    { id: 190, cat: "stehovani", title: "Demoliční práce svépomocí, nebo najmout firmu?", desc: "Co lze bourat svépomocí, jak zjistit nosnou stěnu, nářadí, odvoz suti a kdy se vyplatí demoliční firma.", slug: "demolicni-prace-svepomoci-vs-firma", read: "6 min" },
  ],
  "sezonni-udrzba": [
    { id: 81,  cat: "sezonni-udrzba", title: "Jak připravit dům na zimu",                        desc: "Kotel, okna, okapy, voda.",                                        slug: "priprava-domu-na-zimu",               read: "5 min" },
    { id: 82,  cat: "sezonni-udrzba", title: "Jak odvzdušnit radiátory",                         desc: "Studený radiátor nahoře? Za 10 minut.",                            slug: "jak-odvzdusnit-radiatory",             read: "3 min" },
    { id: 83,  cat: "sezonni-udrzba", title: "Jak vyčistit okapy na podzim",                     desc: "Listí a mech – bezpečné čištění.",                                 slug: "jak-vycistit-okapy",                  read: "4 min" },
    { id: 84,  cat: "sezonni-udrzba", title: "Jak přezimovat zahradní vodovodní přípojku",       desc: "Aby nezamrzla a nepraskla.",                                       slug: "prezimovat-zahradni-vodu",            read: "3 min" },
    { id: 85,  cat: "sezonni-udrzba", title: "Jak utěsnit okna na zimu",                         desc: "Těsnicí páska, silikon, zimní nastavení.",                         slug: "jak-utesnit-okna-na-zimu",            read: "4 min" },
    { id: 86,  cat: "sezonni-udrzba", title: "Jak zkontrolovat kotel před topnou sezónou",       desc: "Co si sám prověříš.",                                              slug: "zkontrolovat-kotel-pred-zimou",       read: "5 min" },
    { id: 87,  cat: "sezonni-udrzba", title: "Jak vymalovat byt před stěhováním",                desc: "Načasování, pořadí místností, kolik barvy.",                       slug: "malovani-pred-stehovani",             read: "5 min" },
    { id: 88,  cat: "sezonni-udrzba", title: "Jak ošetřit auto na zimu",                         desc: "Vosk, konzervace, podběhy.",                                       slug: "auto-na-zimu-karoserie",              read: "4 min" },
    { id: 89,  cat: "sezonni-udrzba", title: "Kdy přejít na zimní pneumatiky?",                  desc: "Zákon a zdravý rozum.",                                            slug: "zimni-pneumatiky-kdy",                read: "4 min" },
    { id: 90,  cat: "sezonni-udrzba", title: "Jak vyčistit komín",                               desc: "Kdy svépomocí a kdy kominík.",                                     slug: "vycistit-komin",                      read: "4 min" },
    { id: 91,  cat: "sezonni-udrzba", title: "Jak připravit dům na léto",                        desc: "Klimatizace, stínění, závlahy.",                                   slug: "dum-priprava-na-leto",                read: "5 min" },
    { id: 92,  cat: "sezonni-udrzba", title: "Jak správně větrat byt",                           desc: "Efektivní větrání v létě i v zimě.",                               slug: "spravne-vetrat-byt",                  read: "4 min" },
    { id: 93,  cat: "sezonni-udrzba", title: "Jak se zbavit vlhkosti v bytě",                    desc: "Kondenzace, plíseň, zatékání.",                                    slug: "zbavit-se-vlhkosti-v-byte",           read: "5 min" },
    { id: 94,  cat: "sezonni-udrzba", title: "Jak pečovat o podlahové topení",                   desc: "Teplota, provoz, čištění.",                                        slug: "pece-o-podlahove-topeni",             read: "4 min" },
    { id: 95,  cat: "sezonni-udrzba", title: "Jak ušetřit na vytápění bez výměny kotle",         desc: "Termostatické hlavice, termostat.",                                 slug: "usetrit-na-vytapeni",                 read: "5 min" },
    { id: 96,  cat: "sezonni-udrzba", title: "Jak čistit filtr klimatizace doma",                desc: "Demontáž, mytí nebo výměna.",                                      slug: "cistit-filtr-klimatizace",            read: "3 min" },
    { id: 97,  cat: "sezonni-udrzba", title: "Jak se zbavit hmyzu v létě",                       desc: "Sítě, přírodní odpuzovače.",                                       slug: "zbavit-se-hmyzu-bez-chemie",          read: "4 min" },
    { id: 98,  cat: "sezonni-udrzba", title: "Jak pečovat o septik a žumpu",                     desc: "Frekvence vyvážení, životnost.",                                   slug: "pece-o-septik-zumpu",                 read: "4 min" },
    { id: 99,  cat: "sezonni-udrzba", title: "Jak odlehčit střechu od sněhu",                    desc: "Kdy je nebezpečný a jak ho odstranit.",                            slug: "odlehcit-strechu-od-snehu",           read: "4 min" },
    { id: 100, cat: "sezonni-udrzba", title: "Jak správně topit v topné sezóně",                 desc: "Teploty, přetápění, větrání.",                                     slug: "jak-spravne-topit",                   read: "4 min" },
    { id: 112, cat: "sezonni-udrzba", title: "Tepelné čerpadlo – průvodce pro domácnosti", desc: "Jak funguje, kolik stojí a kdy se vyplatí.", slug: "tepelne-cerpadlo-pruvodce", read: "6 min" },
    { id: 116, cat: "sezonni-udrzba", title: "Vodní podlahové topení – průvodce instalací, provozem a náklady", desc: "Mokrý vs. suchý systém, reálné náklady na m² a provoz, vhodné zdroje tepla i časté chyby při seřízení.", slug: "vodni-podlahove-topeni", read: "6 min" },
    { id: 118, cat: "sezonni-udrzba", title: "Chytrý termostat – jak funguje a kolik ušetří na vytápění", desc: "Srovnání s klasickým termostatem, reálné úspory, návratnost investice a tipy na výběr i instalaci.", slug: "chytry-termostat-uspora-vytapeni", read: "5 min" },
    { id: 134, cat: "sezonni-udrzba", title: "Jak snížit spotřebu vody v domácnosti", desc: "Praktické tipy na úsporu vody při sprchování, praní, mytí nádobí i zalévání zahrady – kolik se dá reálně ušetřit.", slug: "jak-snizit-spotrebu-vody", read: "6 min" },
    { id: 139, cat: "sezonni-udrzba", title: "Jak pečovat o myčku nádobí, aby vydržela a myla dokonale", desc: "Čištění filtru, odstraňování vodního kamene, ramínka a těsnění – pravidelná údržba myčky krok za krokem.", slug: "jak-udrzovat-mycku-nadobi", read: "5 min" },
    { id: 140, cat: "sezonni-udrzba", title: "Jak připravit zahradní bazén na letní sezónu", desc: "Spuštění bazénu po zimě, čištění, chemie a filtrace – kompletní postup od odkrytí po první koupání.", slug: "priprava-bazenu-na-leto", read: "6 min" },
    { id: 141, cat: "sezonni-udrzba", title: "Jak zazimovat zahradní bazén, aby vydržel do dalšího léta", desc: "Vypouštění, čištění, zazimovací chemie a ochrana konstrukce – jak bazén bezpečně připravit na zimu.", slug: "zazimovani-bazenu", read: "6 min" },
    { id: 142, cat: "sezonni-udrzba", title: "Jak pečovat o dřevěné a parketové podlahy během roku", desc: "Pravidelné čištění, ochrana proti vlhkosti a poškrábání a sezónní úpravy vlhkosti vzduchu pro dřevěné podlahy.", slug: "pece-o-drevene-podlahy", read: "6 min" },
    { id: 143, cat: "sezonni-udrzba", title: "Jak připravit dům a zahradu na silné bouřky a vítr", desc: "Kontrola střechy, oken a zahrady před bouřkovou sezónou – jak předejít škodám při silném větru a dešti.", slug: "pripravit-dum-na-boure-a-vitr", read: "5 min" },
    { id: 174, cat: "sezonni-udrzba", title: "Jak připravit auto na letní sezónu", desc: "Kontrola klimatizace, pneumatik, kapalin a karoserie – co všechno zkontrolovat na autě před letní sezónou.", slug: "jak-pripravit-auto-na-leto", read: "6 min" },
    { id: 175, cat: "sezonni-udrzba", title: "Údržba a čištění grilu před sezónou", desc: "Jak vyčistit a zkontrolovat plynový, uhlíkový nebo elektrický gril před první letní sezónou.", slug: "udrzba-grilu-pred-sezonou", read: "5 min" },
    { id: 176, cat: "sezonni-udrzba", title: "Markýzy, rolety a žaluzie – jak vybrat stínění oken na léto", desc: "Srovnání venkovních a vnitřních stínicích technik – markýzy, venkovní žaluzie, rolety a fólie – jak vybrat podle orientace oken.", slug: "letni-stinici-technika-oken", read: "6 min" },
    { id: 177, cat: "sezonni-udrzba", title: "Jak zazimovat sekačku a další zahradní techniku", desc: "Postup zazimování sekačky, křovinořezu a dalšího zahradního nářadí, aby na jaře bez problémů nastartovaly.", slug: "zazimovani-zahradni-techniky", read: "5 min" },
    { id: 178, cat: "sezonni-udrzba", title: "Ochrana domu před bleskem – hromosvod a přepětí", desc: "Jak funguje hromosvod, kdy je povinný a jak ochránit elektroniku v domě před přepětím při bouřce.", slug: "jak-ochranit-dum-pred-blesky", read: "6 min" },
    { id: 191, cat: "sezonni-udrzba", title: "Jak připravit balkon na zimu – kompletní checklist", desc: "Rostliny, nábytek, odtok, dlažba i zábradlí – jak balkon připravit na mráz a sníh bez škod.", slug: "jak-pripravit-balkon-na-zimu", read: "5 min" },
    { id: 192, cat: "sezonni-udrzba", title: "Jak připravit garáž na zimu – kompletní checklist", desc: "Vrata, těsnění, vlhkost, nářadí, auto i elektřina – co zkontrolovat než přijdou mrazy.", slug: "jak-pripravit-garaz-na-zimu", read: "6 min" },
    { id: 193, cat: "sezonni-udrzba", title: "Hasicí přístroj a detektory kouře doma – kontrola a údržba", desc: "Jak často testovat detektor kouře, kdy měnit baterii a jaká je revizní lhůta hasicího přístroje.", slug: "kontrola-hasicich-pristroju-a-detektoru-koure", read: "5 min" },
  ],
};

export function generateStaticParams() {
  return Object.keys(CAT_CONFIG).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cfg = CAT_CONFIG[slug];
  if (!cfg) return {};
  return {
    title: `${cfg.label} – DomovniGuru`,
    description: cfg.desc,
    alternates: { canonical: `https://www.domovniguru.cz/blog/kategorie/${slug}` },
    openGraph: {
      title: `${cfg.label} – DomovniGuru`,
      description: cfg.desc,
      url: `https://www.domovniguru.cz/blog/kategorie/${slug}`,
      type: "website",
    },
  };
}

export default async function KategoriePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cfg      = CAT_CONFIG[slug];
  const articles = ARTICLES_BY_CAT[slug];

  if (!cfg || !articles) notFound();

  const otherCats = Object.entries(CAT_CONFIG).filter(([k]) => k !== slug);

  return (
    <div>
      <div className="wrap">
        <header className="cat-hero">
          <div>
            <nav className="breadcrumb">
              <Link href="/">Domů</Link>
              <span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="breadcrumb-sep">/</span>
              <span>{cfg.label}</span>
            </nav>
            <h1 className="cat-h1">{cfg.icon} {cfg.label}</h1>
            <p className="cat-desc">{cfg.desc}</p>
            <p className="cat-count-badge">📄 {articles.length} článků</p>
          </div>
          <div aria-hidden style={{ fontSize: 80, opacity: 0.10, lineHeight: 1 }}>
            {cfg.icon}
          </div>
        </header>

        <section className="sec">
          <div className="sec-head">
            <span className="sec-label">Všechny články</span>
          </div>
          <div className="articles-grid" style={{ paddingBottom: 0 }}>
            {articles.map((a, i) => (
              <Link key={a.id} href={`/blog/${a.slug}`} className="card">
                <div className="art-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="card-h">{a.title}</div>
                <p className="card-p">{a.desc}</p>
                <div className="card-arrow" style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Číst →</span>
                  <span style={{ fontWeight: 400, color: "var(--muted)" }}>⏱ {a.read}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="sec" style={{ paddingBottom: 80 }}>
          <div className="sec-head">
            <span className="sec-label">Další kategorie</span>
          </div>
          <div className="grid-3">
            {otherCats.map(([key, c]) => (
              <Link key={key} href={`/blog/kategorie/${key}`} className="card">
                <span className="card-icon">{c.icon}</span>
                <div className="card-h" style={{ fontSize: 16 }}>{c.label}</div>
                <p className="card-p">{c.desc}</p>
                <div className="card-arrow">Procházet →</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
