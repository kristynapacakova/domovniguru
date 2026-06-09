"use client";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type AppState = "input" | "loading" | "results";

interface WebsiteContent {
  hero: string;
  subhero: string;
  whyUs: string[];
  cta: string;
}

interface SocialPost {
  platform: string;
  idea: string;
  caption: string;
  graphic: string;
}

interface ActionStep {
  n: number;
  title: string;
  desc: string;
}

interface FunnelResult {
  label: string;
  website: WebsiteContent;
  social: SocialPost[];
  action: ActionStep[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LOADING_MESSAGES = [
  "🔍 Analyzuji DNA tvého byznysu...",
  "✍️ Copywriter píše texty pro tvůj nový web...",
  "🎨 Designér navrhuje strategii pro Instagram a Pinterest...",
];

const EXAMPLES = [
  "Dělám ručně vyráběné interiérové dveře z masivního dubu v Brně",
  "Jsem svatební fotografka z Prahy",
  "Provozuji malou kavárnu v centru Olomouce",
  "Jsem osobní trenér fitness a výživový poradce",
  "Nabízím zahradnické služby v Ostravě a okolí",
];

// ─── Content Generator ───────────────────────────────────────────────────────

function detectLocation(text: string): string {
  const cities = [
    "Praha", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc",
    "Hradec Králové", "Zlín", "Pardubice", "Jihlava", "Ústí nad Labem",
    "České Budějovice", "Karlovy Vary", "Kladno", "Most", "Opava",
  ];
  for (const city of cities) {
    if (text.toLowerCase().includes(city.toLowerCase())) return city;
  }
  return "ČR";
}

function slug(s: string): string {
  return s.replace(/\s+/g, "").replace(/[ěéèêë]/g, "e").replace(/[áàâä]/g, "a")
    .replace(/[íìîï]/g, "i").replace(/[óòôö]/g, "o").replace(/[úùûü]/g, "u")
    .replace(/[ýỳŷÿ]/g, "y").replace(/[čć]/g, "c").replace(/[šś]/g, "s")
    .replace(/[žź]/g, "z").replace(/[ňń]/g, "n").replace(/[řŕ]/g, "r")
    .replace(/[ďđ]/g, "d").replace(/[ťŧ]/g, "t").replace(/[ľĺ]/g, "l");
}

function generateFunnel(input: string): FunnelResult {
  const loc = detectLocation(input);
  const locTag = slug(loc);

  // ── Fotograf ──
  if (/(fotograf|fotografie|focení|snímky|portrét|svatební foto|fotografka|photo)/i.test(input)) {
    return {
      label: "Fotografické studio",
      website: {
        hero: "Zachytím okamžiky, které si budete pamatovat celý život",
        subhero: `Profesionální fotografie v ${loc} — svatby, portréty, firemní akce. Přirozený styl, emotivní výsledek.`,
        whyUs: [
          "Autentický, přirozený styl bez zbytečné inscenace",
          "Upravené fotografie do 14 dní, vždy v plném rozlišení",
          "150+ spokojených klientů, 5★ hodnocení na Google",
        ],
        cta: "Zjistit volné termíny",
      },
      social: [
        {
          platform: "Instagram Reels (15–30 s)",
          idea: "Before / After záběru",
          caption: `✨ Syrový záběr vs. finální fotografie.\n\nTahle magie se skrývá za každým snímkem... 📸\n\n#fotograf${locTag} #profesionálníFoto #${locTag}foto`,
          graphic:
            "Split-screen: vlevo tmavý RAW záběr, vpravo upravená fotka s warmem a hloubkou. Tiché piano v pozadí. Délka 15 s.",
        },
        {
          platform: "Instagram + Facebook",
          idea: "Zákulisní záběr z focení",
          caption: `„Počkej, ještě jednou..." 😄\n\nNejlepší momenty vznikají spontánně.\nZákulisí z dnešního focení ➡️\n\n#${locTag}fotograf #zákulisí #autentickáFoto`,
          graphic:
            `Fotka fotografa při práci (zezadu nebo zboku) s výhledem na scenérii. Přidat Stories poll: „Měli jste profesionální focení? 📷“`,
        },
        {
          platform: "Pinterest + Instagram Grid",
          idea: "Sezónní mood board",
          caption: `Podzimní focení = zlaté světlo, padající listí 🍂\n\nVolná místa pro říjen a listopad. Napište mi ⬇️\n\n#podzimníFocení #outdoor #portréty${locTag}`,
          graphic:
            "Koláž 6 fotek v teplých podzimních barvách (zlatá, oranžová, hnědá). Estetický grid, logo v pravém dolním rohu.",
        },
      ],
      action: [
        {
          n: 1,
          title: "Google Firmy do 48 hodin",
          desc: `Vytvořte bezplatný profil na Google Business Profile. Přidejte 15 nejlepších fotek, kontakt a pracovní dobu. Je to první místo, kde vás zákazníci v ${loc} hledají.`,
        },
        {
          n: 2,
          title: "Instagram portfolio sprint",
          desc: `Nahrajte 9 nejlepších fotek jako základ gridu. Bio: „Fotograf | ${loc} | rezervace ➡ [odkaz]". Přidejte kontaktní tlačítko a odkaz na objednávku.`,
        },
        {
          n: 3,
          title: "Prvních 10 kontaktů dnes",
          desc: "Napište 10 přátelům, že spouštíte fotografické služby. Nabídněte prvním 3 klientům slevu 20 % výměnou za recenzi na Google.",
        },
        {
          n: 4,
          title: "14denní obsah sprint",
          desc: "1 příspěvek denně po dobu 2 týdnů. Střídejte: fotka z práce → zákulisní záběr → citát klienta → tip pro focení. Konzistentní přítomnost je klíč.",
        },
        {
          n: 5,
          title: "Spolupráce s místními firmami",
          desc: `Oslovte 3–5 salónů, restaurací nebo butiků v ${loc} s nabídkou firemní fotografie za zvýhodněnou cenu. Win-win: oni mají obsah, vy nové portfolio.`,
        },
      ],
    };
  }

  // ── Truhlářství / interiér ──
  if (/(dveř|truhlář|interiér|nábytek|dub|ořech|masiv|skříň|stůl|podlah|parket|kuchyňská)/i.test(input)) {
    return {
      label: "Truhlářství & interiérový design",
      website: {
        hero: "Ručně vyráběný nábytek a interiéry, které vydrží generace",
        subhero: `Zakázkové truhlářství v ${loc} — od prvního nákresu po finální montáž. Pracujeme s masivním dřevem, vždy na míru vašeho prostoru.`,
        whyUs: [
          "Každý kus je originál — šitý přesně na váš prostor a styl",
          "Masivní dub, ořech, jasan — pouze certifikované dřevo",
          "Záruční servis 5 let, osobní konzultace zdarma",
        ],
        cta: "Domluvit nezávaznou konzultaci",
      },
      social: [
        {
          platform: "Instagram Reels (30–60 s)",
          idea: "Time-lapse výroby od surového dřeva po hotový kus",
          caption: `Takhle vznikají dveře, které budou ve vaší rodině 50 let 🪵✨\n\nOd výběru kmene přes ruční opracování až po finální nátěr.\n\n#truhlářství #masivníDřevo #ručníVýroba #interiér${locTag}`,
          graphic:
            "Time-lapse z dílny: surové prkno → obrábění → broušení → lakování → hotový kus. 30 sekund, jen zvuky dřeva a rukou. Žádný komentář.",
        },
        {
          platform: "Instagram + Pinterest",
          idea: "Before / After rekonstrukce interiéru",
          caption: `Starý byt → nový domov 🏠\n\nTyto dveře jsme vyrobili z 80letého dubového kmene. Zákazník měl jen přibližnou představu — my ji proměnili v realitu.\n\n#interiér #dubovéDveře #bespoke #${locTag}design`,
          graphic:
            "Antes/despues: vlevo starý interiér, vpravo nový s novým nábytkem. Detail dřevěné textury jako inset v rohu. Teplé světlo.",
        },
        {
          platform: "Facebook + LinkedIn",
          idea: "Příběh zakázky — od klienta po výsledek",
          caption: `„Chtěl jsem něco, co nebude mít nikdo jiný." — Martin, ${loc} ⭐⭐⭐⭐⭐\n\nTakhle vypadá zakázka od A do Z.\n3 měsíce práce, 40 hodin výroby, jedna spokojená rodina.\n\n#zakázkovýNábytek #ručníPráce #kvalita`,
          graphic:
            "Karusel 5 fotek: 1. skica, 2. výběr materiálu, 3. výroba v dílně, 4. montáž, 5. finální výsledek. Citát klienta jako poslední slide.",
        },
      ],
      action: [
        {
          n: 1,
          title: "Vyfoťte svoji práci profesionálně",
          desc: "Jedna dobrá fotka prodá více než deset průměrných. Nastavte přirozené světlo a nafotěte 20 detailních fotek vašich nejlepších kusů. Smartphone s dobrým světlem stačí.",
        },
        {
          n: 2,
          title: "Pinterest profil do 7 dní",
          desc: `Pinterest je zlatý důl pro truhlářství. Vytvořte profil „Truhlářství ${loc}" a nahrávejte fotky s popisem materiálu. Zákazníci zde aktivně hledají inspiraci pro interiéry.`,
        },
        {
          n: 3,
          title: "Orientační ceník nebo kalkulátor",
          desc: `Zákazníci neradi píší slepě. Přidejte orientační ceny (např. „Kuchyňská dvířka od 2 500 Kč/kus") nebo formulář pro poptávku s rozměry.`,
        },
        {
          n: 4,
          title: "Sbírejte recenze aktivně",
          desc: "Po každé dokončené zakázce pošlete klientovi odkaz na Google recenzi. 10 recenzí s 5★ vám přivede více zákazníků než jakákoliv placená reklama.",
        },
        {
          n: 5,
          title: "Spolupráce s architekty a designéry",
          desc: `Oslovte 5 interiérových designérů nebo architektů v ${loc}. Nabídněte jim provizi za doporučení. Architekti aktivně hledají spolehlivé řemeslníky.`,
        },
      ],
    };
  }

  // ── Gastronomie ──
  if (/(kavárna|restaurac|bistro|catering|jídlo|pizza|sushi|kuchař|vařím|pekárna|cukrárna|kafe)/i.test(input)) {
    return {
      label: "Gastronomie & restaurace",
      website: {
        hero: "Přijďte na jídlo, zůstaňte pro atmosféru",
        subhero: `Domácí kuchyně v srdci ${loc}. Vaříme z lokálních surovin, každý den čerstvě. Rezervace online do 30 sekund.`,
        whyUs: [
          "100% čerstvé suroviny od lokálních farmářů",
          "Denní menu vždy za dostupnou cenu",
          "Kapacita pro firemní akce, narozeniny i romantické večeře",
        ],
        cta: "Rezervovat stůl",
      },
      social: [
        {
          platform: "Instagram Reels (15 s)",
          idea: "Ranní příprava kuchyně — ASMR záběry",
          caption: `6:30 ráno. Začínáme. 🫶\n\nVůně čerstvého pečiva, pára z kávovaru, krájení zeleniny...\n\nUž jste si rezervovali stůl na dnes? 🍽️\n\n#${locTag}jídlo #lokálníKuchyně #čerstvé`,
          graphic:
            "Close-up záběry: krájení zeleniny, pára z kávovaru, čerstvé bylinky, šálek kávy. ASMR zvuky. Teplé tóny. 15 sekund.",
        },
        {
          platform: "Instagram + Facebook",
          idea: "Dish of the week — hero foto jídla",
          caption: `Tenhle týden: Pomalu pečené vepřové s domácím zelím 🤤\n\nK dostání do pátku. Díky za vaše ❤️ a sdílení!\n\n#denníMenu #${locTag}restaurace #domácíKuchyně`,
          graphic:
            "Hero foto jídla na tmavém pozadí s elegantním světlem. Přidat cenovku a dostupnost jako text overlay. Teplá, sytá barevnost.",
        },
        {
          platform: "TikTok + Instagram Reels",
          idea: "Kuchař odhaluje recept nebo tip",
          caption: `Tajemství dokonalé omáčky? Trpělivost ⏰\n\nNáš šéfkuchař prozrazuje postup, který používáme každý den.\n\nUložte si to! 💾\n\n#recept #kuchařskéTajemství #foodTikTok`,
          graphic:
            "Over-the-shoulder záběr kuchaře při vaření. Rychlé střihy, nadpisy s tipy. Dynamické tempo. Délka 30–45 sekund.",
        },
      ],
      action: [
        {
          n: 1,
          title: "Google Firmy s fotkami jídel",
          desc: "Aktualizujte Google Business profil s 20+ fotkami jídel a interiéru. Přidejte odkaz na rezervaci. Zákazníci se rozhodují o návštěvě primárně na základě fotek.",
        },
        {
          n: 2,
          title: "Bolt Food / Wolt registrace",
          desc: "Rozvoz jídla = pasivní tržby bez nárůstu fixních nákladů. Registrace trvá 1–2 týdny. I 5 objednávek denně zaplatí nájem.",
        },
        {
          n: 3,
          title: "Týdenní obsah calendar",
          desc: "Po: foto denního menu. St: zákulisní záběr z kuchyně. Pá: speciální nabídka. Ne: tip na recept. Jednoduché, konzistentní, funkční.",
        },
        {
          n: 4,
          title: "Email newsletter pro stálé hosty",
          desc: "Sbírejte e-maily u registrace a pošlete každý týden newsletter s menu a akcemi. I 100 odběratelů = 100 lidí, kteří vidí vaše jídlo každý týden.",
        },
        {
          n: 5,
          title: "Firemní catering oslovení",
          desc: `Kontaktujte 10 firem v ${loc} s nabídkou pravidelného cateringu obědů. Jeden firemní zákazník = stabilní objednávky na měsíce dopředu.`,
        },
      ],
    };
  }

  // ── Beauty & wellness ──
  if (/(kosmetik|nehty|nehet|kadeřnic|masáž|wellness|spa|pedikúr|manikúr|beauty|líčení|brow|řasy|depilac)/i.test(input)) {
    return {
      label: "Beauty & wellness studio",
      website: {
        hero: "Starejte se o sebe — zasloužíte si to",
        subhero: `Váš beauty azyl v ${loc}. Nehty, masáže, péče o pleť a řasy — vše na jednom místě. Online rezervace za 30 sekund.`,
        whyUs: [
          "Prémiové produkty certified cruelty-free",
          "Uvolněná atmosféra, žádný stres, jen péče o vás",
          "Věrnostní program: každá 10. návštěva zdarma",
        ],
        cta: "Rezervovat termín online",
      },
      social: [
        {
          platform: "Instagram Reels (20–30 s)",
          idea: "Transformation video — before / after nehty / řasy",
          caption: `Glow up incoming ✨\n\nOd přírodních nehtů po... tohle 💅\n\nKlikněte na odkaz v biu pro rezervaci. Volná místa tento týden!\n\n#nehty${locTag} #nailArt #gelNehty #beautyStudio`,
          graphic:
            "Close-up rukou: před a po gelové manikúře. Teplé béžové/růžové pozadí. Slow motion. Jméno studia jako text overlay.",
        },
        {
          platform: "Instagram Stories + Feed",
          idea: "Day in a salon — zákulisní pohled",
          caption: `Takhle vypadá náš den 🌸\n\n08:00 ☕ ranní příprava\n11:30 💅 gel nehty pro Lucii\n14:00 ✨ ošetření pleti pro Kateřinu\n16:30 🧘 masáž pro Petru\n\n#salonLife #beauty${locTag} #beautyRoutine`,
          graphic:
            "Stories formát: koláž záběrů z dne s time stamp. Každý slide jiný záběr. Pastelové barvy, ženský font.",
        },
        {
          platform: "Pinterest + Instagram",
          idea: "Sezónní trendy nehtů",
          caption: `Trendy nehtů na podzim 2025 🍂\n\nNeutrální tóny, jemné textury, minimalistické designy...\n\nKteré jsou vaše favority? 1, 2, 3 nebo 4? Hlasujte ⬇️\n\n#nailTrends2025 #podzimníNehty #nailDesign`,
          graphic:
            "Grid 4 fotek různých nail designů pro podzim. Estetická kompozice, teplé tóny. Čísla (1–4) jako overlay pro engagement.",
        },
      ],
      action: [
        {
          n: 1,
          title: "Online rezervační systém ihned",
          desc: "Bookio, Reservio nebo Calendly — nastavte online rezervaci dnes. 60 % zákazníků rezervuje přes mobil večer, kdy nejste dostupní. Nechte to udělat za vás.",
        },
        {
          n: 2,
          title: "Instagram bio optimalizace",
          desc: `Bio: „Gel nehty | Řasy | Masáže | ${loc} 📍 Rezervace ➡️ [odkaz]". Přidejte Highlights: Ceník / Výsledky / Recenze. Přehledné bio = vyšší konverze.`,
        },
        {
          n: 3,
          title: "Věrnostní kartičky fyzicky i digitálně",
          desc: "Věrnostní program zvyšuje retenci klientů o 30 %. Tisk kartiček stojí 500 Kč. Nebo použijte Stamp app (zdarma) pro digitální verzi.",
        },
        {
          n: 4,
          title: "Žádejte o recenze ihned po návštěvě",
          desc: `Po každé návštěvě pošlete SMS nebo WhatsApp s odkazem na Google recenzi. Stačí: „Díky za návštěvu! Dáte nám hvězdičku?" Konverzní míra: 30–40 %.`,
        },
        {
          n: 5,
          title: "Mikro-influencer spolupráce",
          desc: `Oslovte 3–5 mikro-influencerů (1 000–10 000 followerů) v ${loc}. Nabídněte ošetření výměnou za Instagram post. Dosah bez nákladů na reklamu.`,
        },
      ],
    };
  }

  // ── Fitness & personal trainer ──
  if (/(fitness|trenér|cvičení|sport|posilovna|yoga|jóga|pilates|trénink|kondice|výživa|coach)/i.test(input)) {
    return {
      label: "Fitness & osobní trénink",
      website: {
        hero: "Transformace začíná prvním krokem. Udělám ho s tebou.",
        subhero: `Osobní trenér v ${loc}. Individuální plán, reálné výsledky, žádné výmluvy. První trénink zdarma.`,
        whyUs: [
          "Certifikovaný trenér s 5+ lety zkušeností a stovkami klientů",
          "100% individuální přístup — žádné generické programy z internetu",
          "Výsledky viditelné do 8 týdnů nebo vrátím peníze",
        ],
        cta: "Zarezervovat první trénink zdarma",
      },
      social: [
        {
          platform: "Instagram Reels / TikTok (30–60 s)",
          idea: "Klientova transformace — timeline video",
          caption: `8 týdnů. Toto jsou výsledky mého klienta Honzy 💪\n\nNeprodávám zázraky. Prodávám konzistenci + správný plán.\n\nChceš taky? Link v biu ⬆️\n\n#transformace #osobníTrenér #fitness${locTag} #výsledky`,
          graphic:
            "Side-by-side foto nebo video klienta: měsíc 1 vs. měsíc 2. Přidat: věk, cíl, výsledek. Dynamická energetická hudba.",
        },
        {
          platform: "Instagram + Facebook",
          idea: "Quick workout tip — 60sekundový cvik",
          caption: `Nemáš čas na posilovnu? Tohle trvá jen 60 sekund ⏱️\n\n3 cviky, 0 vybavení, 100 % účinek.\n\nUložte si to na zítřek! 💾\n\n#quickWorkout #homeFitness #cvičení #trainersLife`,
          graphic:
            "Split screen: trenér cvičí a ukazuje správnou techniku. Text overlay s názvem cviku a počtem opakování. Vertikální formát.",
        },
        {
          platform: "Instagram Stories",
          idea: "Q&A — odpověď na nejčastější otázku klientů",
          caption: `„Jak zhubnout bez hladovění?" — nejčastější otázka 🙋\n\nOdpověď: více proteinu, méně průmyslového cukru, pohyb 3× týdně.\n\nMám celý plán — DM mě! ✉️\n\n#výživa #hubnutí #trenér${locTag}`,
          graphic:
            "Stories Q&A formát: otázka klienta + odpověď trenéra. Přidat animovanou výzvu k DM nebo odkaz na reservaci.",
        },
      ],
      action: [
        {
          n: 1,
          title: "První trénink ZDARMA jako konverzní nástroj",
          desc: "80 % lidí, kteří přijdou na první trénink, se stanou platícími klienty. Je to nejlepší investice vašeho času — nabídněte to aktivně.",
        },
        {
          n: 2,
          title: "Instagram aktivita 7 dní v kuse",
          desc: `1 post denně po dobu 7 dní: cviky, tipy, zákulisí tréninku. Bio: „Osobní trenér | ${loc} | 1. trénink ZDARMA 📲". Přidejte booking link.`,
        },
        {
          n: 3,
          title: "5 recenzí na Google tento týden",
          desc: "Požádejte e-mailem nebo WhatsApp s přímým odkazem na Google recenzi. 5★ recenze = organický marketing bez nákladů.",
        },
        {
          n: 4,
          title: "Vstupte do lokálních Facebook skupin",
          desc: `Zapojte se do skupin jako „Fitness ${loc}" nebo „Zdravý životní styl". Odpovídejte na dotazy jako expert. Bez přímého spamu — pomáhejte.`,
        },
        {
          n: 5,
          title: "Vytvořte 8týdenní challenge program",
          desc: "Strukturovaný program (tréninkový plán + výživa + podpora) za fixní cenu je snazší prodat než jednotlivé hodiny. Zákazník vidí jasný cíl a výsledek.",
        },
      ],
    };
  }

  // ── Zahradník ──
  if (/(zahradník|zahrada|tráva|stromy|keře|sekání|sadba|trávník|terasa|pergola|landscape)/i.test(input)) {
    return {
      label: "Zahradnické služby",
      website: {
        hero: "Zahrada snů bez starostí — to za vás zařídíme my",
        subhero: `Profesionální zahradnické služby v ${loc} a okolí. Pravidelná údržba, návrh zahrady, výsadba a terénní úpravy na klíč.`,
        whyUs: [
          "Pravidelná sezónní péče v jednom měsíčním paušálu",
          "3D vizualizace návrhu zahrady zdarma ke každé zakázce",
          "Pracujeme ekologicky — bez chemických pesticidů",
        ],
        cta: "Objednat bezplatnou prohlídku zahrady",
      },
      social: [
        {
          platform: "Instagram + Facebook",
          idea: "Before / After fotka zahrady",
          caption: `Tato zahrada vypadala před měsícem jako divočina. Dnes? Pohádka 🌿✨\n\n3 dny práce, nová výsadba, nový trávník.\n\nChcete taky? Píšte ⬇️\n\n#zahrada${locTag} #úpravaZahrady #zahradník`,
          graphic:
            "Split: vlevo zarostlá zahrada, vpravo úhledně upravená. Detail trávy a výsadby jako inset. Sytě zelená barevnost.",
        },
        {
          platform: "Instagram Reels",
          idea: "Sezónní zahradnický tip",
          caption: `Tip na září: Teď je čas zasadit tulipánové cibulky! 🌷\n\nHloubka: 15 cm · Vzdálenost: 10 cm · Substrát: propustný\n\nJaro vám za to poděkuje 😊\n\n#zahradničení #podzim #sezónníSadba #tipy`,
          graphic:
            "Close-up záběry: ruce zasazující cibulky, zahradní nářadí, čerstvá zemina. Text overlay s tipy. 20–30 sekund.",
        },
        {
          platform: "Pinterest + Instagram",
          idea: "Inspirace zahradního designu — realizace",
          caption: `Takto jsme navrhli zahradu v ${loc} 🏡\n\nPožadavky: privátnost, dětský koutek, zeleň bez velké údržby.\n\nVýsledek? Sami posuďte ➡️\n\n#zahradníDesign #terasa #bydlení`,
          graphic:
            "Karusel: 3D vizualizace → realizace → detaily → hotová zahrada. Info o ploše a době realizace v podpisu.",
        },
      ],
      action: [
        {
          n: 1,
          title: "Fotodokumentace vašich prací",
          desc: "Nafotěte 20 párů před/po fotek vašich nejlepších zakázek. Smartphone stačí. Tyto fotky jsou vaše portfolio — bez nich nemáte jak prokázat kvalitu.",
        },
        {
          n: 2,
          title: "Sezónní letáky do schránek",
          desc: `Vytiskněte 500 letáků (cena ~1 000 Kč) a rozhoďte je ve vybraných čtvrtích ${loc}. Na jaře a na podzim — to je peak season zahradníků.`,
        },
        {
          n: 3,
          title: "Google Firmy s fotkami",
          desc: "Nastavte Google Business profil s fotkami, popisem služeb a ceníkem. Zahradníci dostávají 70 % zakázek přes Google Maps a místní vyhledávání.",
        },
        {
          n: 4,
          title: "Nabídka ročního paušálu = stabilní příjem",
          desc: `Prodávejte roční paušál místo jednotlivých zakázek. „Péče o zahradu 4× ročně za 4 000 Kč/rok" = předvídatelný příjem na celou sezónu.`,
        },
        {
          n: 5,
          title: "Spolupráce s realitními kancelářemi",
          desc: `Oslovte 3 realitní kanceláře v ${loc}. Nabídněte jim „quick facelift" zahrady před prodejem nemovitosti. Rychlá práce, dobrá odměna.`,
        },
      ],
    };
  }

  // ── IT / web / grafika ──
  if (/(web|aplikace|grafika|logo|programování|vývoj|it|software|eshop|seo|digitální)/i.test(input)) {
    return {
      label: "IT & digitální studio",
      website: {
        hero: "Váš digitální partner od nápadu po spuštění",
        subhero: `Webové stránky, aplikace, e-shopy a grafika v ${loc}. Dodáváme včas, komunikujeme jasně, výsledky měříme.`,
        whyUs: [
          "Transparentní ceník, žádné skryté poplatky ani lock-in",
          "Průměrná doba spuštění webu: 3 týdny",
          "Zákazník má vždy přístup ke kódu a datům",
        ],
        cta: "Získat nezávaznou nabídku",
      },
      social: [
        {
          platform: "LinkedIn + Twitter / X",
          idea: "Case study — projekt od brifu po výsledky",
          caption: `Za 3 týdny jsme spustili e-shop, který v prvním měsíci udělal 180 000 Kč v objednávkách. 🚀\n\nZde je celý proces: zadání → design → vývoj → launch.\n\n#webDev #ecommerce #caseStudy #${locTag}IT`,
          graphic:
            "Karusel: 1. wireframe, 2. design mockup, 3. hotový web, 4. screenshot analytics. Čistá, tech estetika.",
        },
        {
          platform: "Instagram + TikTok",
          idea: "Quick tech tip — věc, o které zákazníci neví",
          caption: `Váš web ztrácí zákazníky kvůli tomuto 1 problému 🚨\n\nNačítání > 3 sekundy = 53 % lidí odchází.\n\nJak to změříte: Google PageSpeed Insights (zdarma).\n\nChcete audit? Napište! 💬\n\n#web #seo #uxDesign`,
          graphic:
            "Screen recording: PageSpeed Insights pro pomalý web vs. rychlý web. Text overlay s klíčovými čísly.",
        },
        {
          platform: "LinkedIn",
          idea: "Myšlenkový příspěvek z oboru",
          caption: `Zákazníci neplatí za kód. Platí za výsledky.\n\nNejčastější chyba IT firem: mluvit o technologiích místo benefitů.\n\n„Děláme React SPA s GraphQL" → nikoho nezajímá.\n„Váš zákazník objedná za 20 sekund místo 2 minut" → to prodává.\n\n#podnikání #webDev #digitalMarketing`,
          graphic:
            "Čistá LinkedIn grafika: citát na bílém / tmavém pozadí. Logo studia v rohu. Profesionální font.",
        },
      ],
      action: [
        {
          n: 1,
          title: "Portfolio se 3 case studies",
          desc: "Zdokumentujte 3 nejlepší projekty: problém → řešení → výsledky (metriky). Bez case studies se IT firmy nedají rozlišit. Strávte na tom 1 den — vrátí se mnohonásobně.",
        },
        {
          n: 2,
          title: "LinkedIn aktivita 3× týdně",
          desc: "Postujte tip, case study nebo komentář k trendu. LinkedIn organický dosah je stále nejlepší B2B kanál bez placené reklamy.",
        },
        {
          n: 3,
          title: "Sociální důkaz na hlavní stránce",
          desc: "Přidejte 5 recenzí klientů, loga firem, se kterými jste pracovali, a čísla (počet projektů, let zkušeností). Sociální důkaz = konverze.",
        },
        {
          n: 4,
          title: "Bezplatný audit webu jako lead magnet",
          desc: `Nabídněte „Bezplatný audit webu za 15 minut". Dostanete kontakt, ukážete kompetence, zahájíte konverzaci. Konverzní míra: 20–30 %.`,
        },
        {
          n: 5,
          title: "Partnerská síť s jinými poskytovateli",
          desc: `Oslovte marketingové agentury, fotografy a copywritery v ${loc}. Navzájem si doporučujte klienty. Referral síť = nejlevnější akviziční kanál.`,
        },
      ],
    };
  }

  // ── Generic fallback ──
  const snippet = input.trim().split(/\s+/).slice(0, 5).join(" ");
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return {
    label: "Vaše podnikání",
    website: {
      hero: `${cap(snippet)} — kvalita, na které záleží`,
      subhero: `Profesionální služby v ${loc}. Přístup na míru, výsledky, které vidíte. Kontaktujte nás ještě dnes.`,
      whyUs: [
        "Individuální přístup ke každému zákazníkovi",
        `Lokální expert v ${loc} s prokazatelnými výsledky`,
        "Transparentní ceny a férové podmínky spolupráce",
      ],
      cta: "Získat nezávaznou nabídku",
    },
    social: [
      {
        platform: "Instagram + Facebook",
        idea: "Zákulisní pohled na vaši práci",
        caption: `Takhle to u nás vypadá za scénou 🎬\n\nKaždý detail, každá zakázka má svůj příběh.\n\nSledujte nás pro víc obsahu! ❤️\n\n#${locTag}podnikání #zákulisí #lokálníBiznis`,
        graphic:
          "Fotka nebo video z pracovního prostředí. Přirozené světlo, autentický pohled. Přidat jméno firmy a kontakt.",
      },
      {
        platform: "Instagram Reels",
        idea: "Before / After výsledku vaší práce",
        caption: `Před a po naší práci ✨\n\nNáš zákazník měl přesně toto přání. Takhle jsme ho splnili.\n\n🔁 Sdílejte, pokud se vám to líbí!\n\n#výsledky #kvalitníPráce #spokojenýZákazník`,
        graphic:
          "Split-screen nebo swipe video: stav před a výsledek po. Přidat text s popisem zakázky.",
      },
      {
        platform: "Facebook + LinkedIn",
        idea: "Testimonial — zkušenost zákazníka",
        caption: `„Práce ${cap(snippet).slice(0, 30)} překonala moje očekávání." ⭐⭐⭐⭐⭐\n\nNáš cíl je vždy přesáhnout to, co zákazník čeká.\n\nNapište nám — rádi pomůžeme!\n\n#recenze #doporučení #${locTag}`,
        graphic:
          "Grafika s citátem zákazníka na barevném pozadí. Hvězdičky. Logo a kontakt. Profesionální font.",
      },
    ],
    action: [
      {
        n: 1,
        title: "Google Firmy — základ viditelnosti",
        desc: `Vytvořte nebo aktualizujte profil na Google Business. Přidejte fotky, popis, kontakt a ceník. 80 % zákazníků hledá místní služby přes Google.`,
      },
      {
        n: 2,
        title: "5 recenzí na Google tento týden",
        desc: "Požádejte 5 spokojených zákazníků o Google recenzi přes přímý odkaz. 5★ recenze jsou nejsilnější organický marketing — a stojí vás jen odvahu se zeptat.",
      },
      {
        n: 3,
        title: "Jedna sociální síť, ale pořádně",
        desc: `Vyberte Facebook nebo Instagram. Bio: co děláte, kde, jak vás kontaktovat. Pak postujte 3× týdně. Konzistentnost bije kreativitu.`,
      },
      {
        n: 4,
        title: "Oslovte prvních 20 potenciálních zákazníků",
        desc: "Napište 20 lidem ze svého okolí o vašich službách. Osobní doporučení jsou pro začínající podnikání nejvýkonnějším kanálem. Nebojte se ptát.",
      },
      {
        n: 5,
        title: "Transparentní ceny nebo ceník",
        desc: `Zákazníci neradi píší slepě. Přidejte orientační ceny nebo „od X Kč" do profilu nebo na web. Transparentnost zvyšuje konverze o desítky procent.`,
      },
    ],
  };
}

// ─── Copy helper ─────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <button
      onClick={handle}
      style={{
        fontSize: 11,
        padding: "3px 10px",
        borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.12)",
        background: copied ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)",
        color: copied ? "#86efac" : "rgba(255,255,255,0.5)",
        cursor: "pointer",
        transition: "all 0.2s",
        fontFamily: "inherit",
        whiteSpace: "nowrap",
      }}
    >
      {copied ? "✓ Zkopírováno" : "Kopírovat"}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FunnelPage() {
  const [appState, setAppState] = useState<AppState>("input");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<FunnelResult | null>(null);
  const [msgIdx, setMsgIdx] = useState(0);
  const [msgVisible, setMsgVisible] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (appState !== "loading") return;
    const interval = setInterval(() => {
      setMsgVisible(false);
      setTimeout(() => {
        setMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length);
        setMsgVisible(true);
      }, 350);
    }, 3000);
    const timeout = setTimeout(() => {
      setResult(generateFunnel(input));
      setAppState("results");
      setTimeout(() => setRevealed(true), 80);
    }, 9600);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [appState, input]);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setMsgIdx(0);
    setMsgVisible(true);
    setRevealed(false);
    setAppState("loading");
  };

  const handleReset = () => {
    setAppState("input");
    setResult(null);
    setInput("");
    setRevealed(false);
  };

  // Shared dark container — breaks out of .wrap padding with negative margin
  const wrap: React.CSSProperties = {
    margin: "0 -32px",
    padding: "0 32px",
    background: "linear-gradient(160deg, #06020f 0%, #0d0520 40%, #020a18 100%)",
    minHeight: "calc(100vh - 60px)",
    fontFamily: "'DM Sans', system-ui, sans-serif",
  };

  return (
    <>
      {/* Keyframe animations injected once */}
      <style>{`
        @keyframes funnelSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes funnelPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.97); }
        }
        @keyframes funnelRingPop {
          0%   { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.5);  opacity: 0; }
        }
        @keyframes funnelGrad {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes funnelFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .funnel-grad-text {
          background: linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #60a5fa 100%);
          background-size: 200% 200%;
          animation: funnelGrad 5s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .funnel-card-reveal {
          opacity: 0;
          transform: translateY(22px);
        }
        .funnel-card-reveal.show {
          animation: funnelFadeUp 0.55s ease forwards;
        }
        .funnel-card-reveal.show:nth-child(2) { animation-delay: 0.1s; }
        .funnel-card-reveal.show:nth-child(3) { animation-delay: 0.2s; }
        .funnel-gen-btn {
          background: linear-gradient(135deg, #9333ea 0%, #4f46e5 100%);
          border: none;
          color: #fff;
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
        }
        .funnel-gen-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(147, 51, 234, 0.55);
        }
        .funnel-gen-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .funnel-gen-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }
        .funnel-textarea {
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          color: #f1f5f9;
          resize: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .funnel-textarea::placeholder { color: rgba(255,255,255,0.3); }
        .funnel-textarea:focus {
          border-color: rgba(168, 85, 247, 0.55);
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.12);
        }
        .funnel-example-chip {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
        }
        .funnel-example-chip:hover {
          background: rgba(168,85,247,0.12);
          border-color: rgba(168,85,247,0.4);
          color: #e2d9f3;
        }
        .funnel-reset-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
          cursor: pointer;
          transition: all 0.18s;
          font-family: inherit;
        }
        .funnel-reset-btn:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
      `}</style>

      <div style={wrap}>
        {/* ─── INPUT STATE ──────────────────────────────────────────── */}
        {appState === "input" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "calc(100vh - 120px)",
              padding: "48px 0",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(168,85,247,0.12)",
                border: "1px solid rgba(168,85,247,0.3)",
                borderRadius: 100,
                padding: "6px 16px",
                marginBottom: 28,
                fontSize: 13,
                color: "#c084fc",
                letterSpacing: "0.02em",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#a855f7",
                  display: "inline-block",
                  animation: "funnelPulse 1.6s ease-in-out infinite",
                }}
              />
              Marketingový generátor · Beta · Zdarma
            </div>

            {/* Headline */}
            <h1
              className="funnel-grad-text"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.18,
                textAlign: "center",
                maxWidth: 700,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Zadej svůj byznys nápad
              <br />a získej marketingový trychtýř
              <br />
              <span style={{ fontSize: "0.85em", opacity: 0.9 }}>za 30 vteřin</span>
            </h1>

            {/* Subline */}
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 16,
                textAlign: "center",
                maxWidth: 520,
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              Napište, co děláte — a během chvíle dostanete texty pro web, nápady na sociální sítě
              a konkrétní akční plán.
            </p>

            {/* Card */}
            <div
              style={{
                width: "100%",
                maxWidth: 640,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <textarea
                className="funnel-textarea"
                rows={4}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleGenerate();
                }}
                placeholder={`Příklad: "Dělám ručně vyráběné interiérové dveře z dubu v Brně"`}
                style={{
                  width: "100%",
                  borderRadius: 12,
                  padding: "14px 16px",
                  fontSize: 15,
                  lineHeight: 1.55,
                  fontFamily: "inherit",
                  marginBottom: 16,
                }}
              />

              {/* Example chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {EXAMPLES.map((ex) => (
                  <button
                    key={ex}
                    className="funnel-example-chip"
                    onClick={() => setInput(ex)}
                    style={{
                      fontSize: 12,
                      padding: "5px 12px",
                      borderRadius: 100,
                    }}
                  >
                    {ex.length > 42 ? ex.slice(0, 42) + "…" : ex}
                  </button>
                ))}
              </div>

              <button
                className="funnel-gen-btn"
                disabled={!input.trim()}
                onClick={handleGenerate}
                style={{
                  width: "100%",
                  padding: "14px 0",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  fontFamily: "inherit",
                }}
              >
                Vygenerovat zdarma →
              </button>

              <p
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.25)",
                  marginTop: 12,
                }}
              >
                Žádné přihlašování · Žádná platební karta · Výsledek za ~10 sekund
              </p>
            </div>
          </div>
        )}

        {/* ─── LOADING STATE ────────────────────────────────────────── */}
        {appState === "loading" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "calc(100vh - 120px)",
              gap: 40,
            }}
          >
            {/* Spinner with pulse rings */}
            <div style={{ position: "relative", width: 72, height: 72 }}>
              <div
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(168,85,247,0.35)",
                  animation: "funnelRingPop 1.6s ease-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(168,85,247,0.25)",
                  animation: "funnelRingPop 1.6s ease-out infinite 0.4s",
                }}
              />
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: "3px solid rgba(255,255,255,0.08)",
                  borderTopColor: "#a855f7",
                  animation: "funnelSpin 0.85s linear infinite",
                }}
              />
            </div>

            {/* Rotating message */}
            <div style={{ textAlign: "center", minHeight: 64 }}>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 1.55rem)",
                  color: "#e2e8f0",
                  fontWeight: 500,
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                  opacity: msgVisible ? 1 : 0,
                  transform: msgVisible ? "translateY(0)" : "translateY(8px)",
                  margin: 0,
                }}
              >
                {LOADING_MESSAGES[msgIdx]}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  marginTop: 12,
                }}
              >
                Chvíli strpení…
              </p>
            </div>

            {/* Steps indicator */}
            <div style={{ display: "flex", gap: 10 }}>
              {LOADING_MESSAGES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === msgIdx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === msgIdx ? "#a855f7" : "rgba(255,255,255,0.15)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ─── RESULTS STATE ────────────────────────────────────────── */}
        {appState === "results" && result && (
          <div style={{ padding: "52px 0 64px" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(34,197,94,0.12)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: 100,
                  padding: "5px 16px",
                  marginBottom: 20,
                  fontSize: 13,
                  color: "#86efac",
                }}
              >
                ✓ Vygenerováno pro: {result.label}
              </div>
              <h2
                className="funnel-grad-text"
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                Váš marketingový trychtýř je hotový
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>
                Níže najdete texty pro web, strategii na sociální sítě a konkrétní akční kroky.
              </p>
            </div>

            {/* 3-column grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 20,
                alignItems: "start",
              }}
            >
              {/* ── Card 1: Web ── */}
              <div
                className={`funnel-card-reveal${revealed ? " show" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(168,85,247,0.07)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 20 }}>🌐</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#c084fc",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      Sekce 1
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>
                      Návrh prodejního webu
                    </div>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  {/* Hero block */}
                  <div
                    style={{
                      background: "rgba(168,85,247,0.08)",
                      border: "1px solid rgba(168,85,247,0.2)",
                      borderRadius: 12,
                      padding: "14px 16px",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "#c084fc",
                          fontWeight: 600,
                        }}
                      >
                        Hero nadpis
                      </span>
                      <CopyButton text={result.website.hero} />
                    </div>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#f8fafc",
                        lineHeight: 1.35,
                        margin: 0,
                      }}
                    >
                      {result.website.hero}
                    </p>
                  </div>

                  {/* Subhero block */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 12,
                      padding: "14px 16px",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 600,
                        }}
                      >
                        Podnadpis
                      </span>
                      <CopyButton text={result.website.subhero} />
                    </div>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#cbd5e1",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {result.website.subhero}
                    </p>
                  </div>

                  {/* Why us block */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 12,
                      padding: "14px 16px",
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.4)",
                          fontWeight: 600,
                        }}
                      >
                        Sekce „Proč my"
                      </span>
                      <CopyButton text={result.website.whyUs.map((w) => `✓ ${w}`).join("\n")} />
                    </div>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                      {result.website.whyUs.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "flex-start",
                            marginBottom: i < result.website.whyUs.length - 1 ? 10 : 0,
                          }}
                        >
                          <span
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 5,
                              background: "rgba(34,197,94,0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 10,
                              color: "#86efac",
                              flexShrink: 0,
                              marginTop: 1,
                            }}
                          >
                            ✓
                          </span>
                          <span style={{ fontSize: 13.5, color: "#cbd5e1", lineHeight: 1.5 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA block */}
                  <div
                    style={{
                      background: "rgba(168,85,247,0.08)",
                      border: "1px dashed rgba(168,85,247,0.35)",
                      borderRadius: 10,
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: 13.5, color: "#c084fc", fontWeight: 600 }}>
                      🎯 {result.website.cta}
                    </span>
                    <CopyButton text={result.website.cta} />
                  </div>
                </div>
              </div>

              {/* ── Card 2: Social ── */}
              <div
                className={`funnel-card-reveal${revealed ? " show" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(59,130,246,0.07)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 20 }}>📱</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#93c5fd",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      Sekce 2
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>
                      Strategie sociálních sítí
                    </div>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  {result.social.map((post, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 12,
                        padding: "14px 16px",
                        marginBottom: i < result.social.length - 1 ? 14 : 0,
                      }}
                    >
                      {/* Platform tag */}
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(59,130,246,0.15)",
                          border: "1px solid rgba(59,130,246,0.3)",
                          borderRadius: 6,
                          padding: "2px 9px",
                          fontSize: 11,
                          color: "#93c5fd",
                          fontWeight: 600,
                          marginBottom: 10,
                        }}
                      >
                        {post.platform}
                      </div>

                      {/* Idea title */}
                      <p
                        style={{
                          fontSize: 13.5,
                          fontWeight: 600,
                          color: "#f1f5f9",
                          marginBottom: 10,
                          margin: "0 0 10px 0",
                        }}
                      >
                        💡 {post.idea}
                      </p>

                      {/* Caption */}
                      <div
                        style={{
                          background: "rgba(0,0,0,0.2)",
                          borderRadius: 8,
                          padding: "10px 12px",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 6,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 10,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "rgba(255,255,255,0.3)",
                              fontWeight: 600,
                            }}
                          >
                            Popis příspěvku
                          </span>
                          <CopyButton text={post.caption} />
                        </div>
                        <p
                          style={{
                            fontSize: 12.5,
                            color: "#94a3b8",
                            lineHeight: 1.6,
                            margin: 0,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {post.caption}
                        </p>
                      </div>

                      {/* Graphic tip */}
                      <div
                        style={{
                          background: "rgba(245,158,11,0.07)",
                          border: "1px solid rgba(245,158,11,0.2)",
                          borderRadius: 8,
                          padding: "8px 12px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "#fbbf24",
                            fontWeight: 600,
                            display: "block",
                            marginBottom: 4,
                          }}
                        >
                          🎨 Zadání pro grafiku
                        </span>
                        <p
                          style={{
                            fontSize: 12,
                            color: "#fde68a",
                            lineHeight: 1.55,
                            margin: 0,
                          }}
                        >
                          {post.graphic}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Card 3: Action plan ── */}
              <div
                className={`funnel-card-reveal${revealed ? " show" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "16px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(34,197,94,0.07)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 20 }}>🚀</span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#86efac",
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      Sekce 3
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>
                      Akční plán
                    </div>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  {result.action.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                        marginBottom: i < result.action.length - 1 ? 20 : 0,
                        paddingBottom: i < result.action.length - 1 ? 20 : 0,
                        borderBottom:
                          i < result.action.length - 1
                            ? "1px solid rgba(255,255,255,0.05)"
                            : "none",
                      }}
                    >
                      {/* Step number */}
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #16a34a, #059669)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#fff",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {step.n}
                      </div>

                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#e2e8f0",
                            margin: "0 0 6px 0",
                          }}
                        >
                          {step.title}
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: "#94a3b8",
                            lineHeight: 1.6,
                            margin: 0,
                          }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset button */}
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <button
                className="funnel-reset-btn"
                onClick={handleReset}
                style={{
                  padding: "12px 28px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                ← Vyzkoušet s jiným byznysem
              </button>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 12 }}>
                Texty jsou generovány algoritmem. Pro reálné kampaně doporučujeme osobní konzultaci.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
