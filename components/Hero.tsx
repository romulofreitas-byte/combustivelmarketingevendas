import { tickerItems } from "@/data/objections";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap">
        <p className="mono">Assessoria comercial para indústrias</p>
        <h1>
          Não somos uma agência de <span className="strike">marketing</span>.
          <em>Somos um ativo do comercial da indústria.</em>
        </h1>
        <p className="lead">
          Mercado, canal, prospecção ativa e reunião marcada com o decisor. O marketing entra por último, como
          ferramenta, para fazer o comercial render mais.
        </p>
        <div className="ctas">
          <a className="btn" href="#cta">
            Agendar bate-papo de 20 min <span aria-hidden="true">→</span>
          </a>
          <a className="btn ghost" href="#diag">
            Fazer o diagnóstico
          </a>
        </div>
      </div>
      <div className="ticker mono" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy}>
              {[0, 1, 2].map((repeat) =>
                tickerItems.map((item) => (
                  <span key={`${copy}-${repeat}-${item}`}>{item}</span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
