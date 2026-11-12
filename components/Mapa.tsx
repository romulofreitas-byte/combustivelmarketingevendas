"use client";

import { useRef } from "react";
import { levelWords, levels, regionReading } from "@/data/brazil";
import { waves } from "@/data/waves";
import { useBrazilMap } from "@/hooks/useBrazilMap";
import { Wave } from "./Wave";

export function Mapa() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { lens, setLens, selected } = useBrazilMap(canvasRef);
  const [vende, procura] = levels[selected];

  return (
    <section id="mapa">
      <Wave d={waves.mapa} />
      <div className="wrap">
        <p className="mono">Olhar macro por região</p>
        <h2>Cada região é um mercado diferente.</h2>
        <p className="lead">
          O painel de anúncios mostra onde há procura. As vendas mostram onde a indústria entrega. Cruzar os dois
          vira base de dados comercial. Toque em uma região.
        </p>
        <div className="mapgrid">
          <canvas ref={canvasRef} id="brmap" aria-label="Mapa ilustrativo do Brasil por regiões" />
          <div className="read" aria-live="polite">
            <div className="lens" role="group" aria-label="Lente do mapa">
              <button type="button" aria-pressed={lens === "v"} onClick={() => setLens("v")}>
                Onde vende
              </button>
              <button type="button" aria-pressed={lens === "p"} onClick={() => setLens("p")}>
                Onde procuram
              </button>
            </div>
            <h3>{selected}</h3>
            <div className="levels">
              <span>
                Vende: <b>{levelWords[vende]}</b>
              </span>
              <span>
                Procura: <b>{levelWords[procura]}</b>
              </span>
            </div>
            <p className="r">{regionReading(vende, procura)}</p>
            <p className="pin">
              Caso real, sem nome: uma indústria viu muito acesso vindo de Passos/MG, onde não vendia, e abriu ali
              uma frente nova de vendas. Procure o ponto azul no mapa.
            </p>
            <p className="note">
              Mapa ilustrativo. Os níveis mostrados são exemplos para explicar a leitura, não dados de cliente. Os
              dados reais saem do painel de anúncios e das vendas de cada indústria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
