export default function Header() {
  return (
    <div className="nav">
      <div className="container navInner">
        <a href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
          DomovniGuru
        </a>

        <div className="links">
          <a href="/kalkulacky">Kalkulačky</a>
          <a href="/navody">Návody</a>
          <a href="/o-nas">O webu</a>
        </div>
      </div>
    </div>
  );
}