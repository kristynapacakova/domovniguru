export default function Disclaimer() {
  return (
    <div className="disclaimer-bar">
      <p>
        <strong>Upozornění:</strong> Veškerý obsah na tomto webu slouží pouze jako obecné informace a doporučení. Nejde o odborné poradenství. Před zahájením jakýchkoli prací si vždy ověřte aktuální předpisy, technické normy a bezpečnostní požadavky. Zejména elektrické práce provádějte výhradně v souladu s platnou legislativou (ČSN EN normy) nebo je svěřte kvalifikované osobě. Autor webu nenese žádnou odpovědnost za škody, zranění ani jiné následky vzniklé v přímé či nepřímé souvislosti s použitím zde uvedených informací. Veškeré práce provádíte na vlastní nebezpečí.
      </p>
      <style>{`
        .disclaimer-bar{background:#faf9f7;border-top:1px solid #e6e4de;padding:18px 0;margin-top:40px}
        .disclaimer-bar p{max-width:860px;margin:0 auto;font-size:12px;line-height:1.7;color:#888;font-weight:300;padding:0 16px;text-align:center}
        .disclaimer-bar strong{font-weight:600;color:#666}
      `}</style>
    </div>
  );
}
