"use client";

import { useState } from "react";
import { segmentHeads, segments } from "@/data/segments";
import { waves } from "@/data/waves";
import { useSite } from "./SiteProvider";
import { Wave } from "./Wave";

export function Ramos() {
  const { setSegment } = useSite();
  const [name, setName] = useState(segments[0].name);
  const current = segments.find((item) => item.name === name) ?? segments[0];
  const columns = [current.who, current.how, current.stuck];

  function pick(next: string) {
    setName(next);
    setSegment(next === "Outro ramo" ? "" : next);
  }

  return (
    <section id="ind">
      <Wave d={waves.ind} />
      <div className="wrap">
        <p className="mono">Qualquer ramo industrial</p>
        <h2>Escolha o seu ramo.</h2>
        <div className="chips" role="group" aria-label="Ramo da indústria">
          {segments.map((item) => (
            <button
              key={item.name}
              type="button"
              data-label={item.name}
              aria-pressed={item.name === name}
              onClick={() => pick(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <p className="seg-h">
          {name === "Outro ramo"
            ? "Qualquer indústria que venda para outra empresa tem o mesmo ponto de partida."
            : `Na indústria ${name.toLowerCase()}, o comercial costuma ter este desenho.`}
        </p>
        <div className="seg">
          {columns.map((text, index) => (
            <div key={segmentHeads[index]}>
              <h4>{segmentHeads[index]}</h4>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="note" style={{ maxWidth: "60ch", marginTop: 30 }}>
          Leitura inicial de como o comercial costuma funcionar em cada ramo. Tudo isso é hipótese a validar no
          diagnóstico com a sua indústria.
        </p>
      </div>
    </section>
  );
}
