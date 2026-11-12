"use client";

import { useRef, useState } from "react";
import { chainCopy, chainModes, type ChainMode } from "@/data/canal";
import { waves } from "@/data/waves";
import { useChainDots } from "@/hooks/useChainDots";
import { Wave } from "./Wave";

export function Canal() {
  const [mode, setMode] = useState<ChainMode>("in");
  const pathRef = useRef<SVGPathElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  useChainDots(pathRef, groupRef, mode);

  return (
    <section id="canal">
      <Wave d={waves.canal} />
      <div className="wrap">
        <p className="mono">Cadeia de venda</p>
        <h2>
          Quem empurra.
          <br />
          Quem puxa.
        </h2>
        <p className="lead">
          A indústria vende para o canal, e o canal vende para o cliente final. São dois movimentos diferentes, e
          cada um pede uma ação diferente.
        </p>
        <div className="modes" role="group" aria-label="Movimento">
          {chainModes.map((item) => (
            <button key={item.id} type="button" aria-pressed={mode === item.id} onClick={() => setMode(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <svg
          id="chain"
          viewBox="0 0 1000 320"
          role="img"
          aria-label="Fábrica, varejo ou distribuidor e cliente final ligados por uma linha com pontos em movimento"
        >
          <path
            ref={pathRef}
            d="M70 200C230 60 340 60 500 180S790 300 930 130"
            fill="none"
            stroke="#ffffff2e"
            strokeWidth="2"
          />
          <g ref={groupRef} />
          <g opacity={mode === "both" ? 1 : 0} style={{ transition: "opacity .6s" }}>
            <circle cx="500" cy="62" r="46" fill="#F5B30122" stroke="#F5B301" strokeDasharray="3 6" />
            <text x="500" y="58" textAnchor="middle" fontSize="14" fontWeight="600" fill="#F5B301">
              Marca na região
            </text>
            <text x="500" y="76" textAnchor="middle" fontSize="11" fill="#93A9CC">
              tráfego regional
            </text>
          </g>
          <g fontSize="17" fontWeight="600">
            <circle cx="70" cy="200" r="13" fill="#F5B301" />
            <text x="70" y="248" textAnchor="middle">
              Fábrica
            </text>
            <circle cx="500" cy="180" r="13" fill="#F4F1EA" />
            <text x="500" y="228" textAnchor="middle">
              Varejo ou distribuidor
            </text>
            <circle cx="930" cy="130" r="13" fill="#7FB0FF" />
            <text x="930" y="178" textAnchor="middle">
              Cliente final
            </text>
          </g>
        </svg>
        <ol className="chain-mobile">
          <li>
            <span className="chain-dot factory" aria-hidden="true" />
            Fábrica
          </li>
          <li>
            <span className="chain-dot channel" aria-hidden="true" />
            <span>
              Varejo ou distribuidor
              {mode === "both" ? <span className="chain-note">Marca na região · tráfego regional</span> : null}
            </span>
          </li>
          <li>
            <span className="chain-dot client" aria-hidden="true" />
            Cliente final
          </li>
        </ol>
        <p className="chaintxt" aria-live="polite">
          {chainCopy[mode]}
        </p>
        <div className="field">
          <span className="mono">Do campo</span>
          <div>
            <p>
              Em treinamento com representantes de uma indústria de alimentos, as objeções se repetiram em três.
              Marca presente na região responde às três antes de o representante precisar argumentar.
            </p>
            <div className="trio">
              <span>Falta de confiança na marca</span>
              <span>Concorrência por espaço</span>
              <span>Baixa demanda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
