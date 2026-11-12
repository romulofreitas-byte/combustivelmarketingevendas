export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#hero" aria-label="Combustível Marketing e Vendas">
        <img
          className="brand-logo"
          src="/Horizontal%20Branca.png"
          alt="Combustível Marketing e Vendas"
          width={1920}
          height={546}
        />
      </a>
      <nav>
        <a href="#ordem">A ordem</a>
        <a href="#canal">Canal</a>
        <a href="#mapa">Região</a>
        <a href="#metodo">Método</a>
        <a href="#diag">Diagnóstico</a>
        <a className="pill" href="#cta">
          <span className="pill-full">Bate-papo de 20 min</span>
          <span className="pill-short">Bate-papo</span>
        </a>
      </nav>
    </header>
  );
}
