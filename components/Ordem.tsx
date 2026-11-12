"use client";

import { useState } from "react";
import { fronts, orderA, orderB, verdicts, type FrontKey, type OrderMode } from "@/data/ordem";
import { waves } from "@/data/waves";
import { Wave } from "./Wave";

export function Ordem() {
  const [mode, setMode] = useState<OrderMode>("a");
  const order = mode === "a" ? orderA : orderB;
  const indexOf = (key: FrontKey) => order.indexOf(key);

  return (
    <section id="ordem">
      <Wave d={waves.ordem} />
      <div className="wrap">
        <p className="mono">O equívoco mais comum</p>
        <h2>A ordem muda o resultado.</h2>
        <p className="lead">
          Quando a indústria contrata marketing primeiro, ela recebe visibilidade e continua sem saber para quem
          vender. Mude a chave e veja a mesma lista na ordem em que a Combustível trabalha.
        </p>
        <div className="switch" role="group" aria-label="Ordem de trabalho">
          <button type="button" aria-pressed={mode === "a"} onClick={() => setMode("a")}>
            Como a maioria contrata
          </button>
          <button type="button" aria-pressed={mode === "b"} onClick={() => setMode("b")}>
            Como a Combustível trabalha
          </button>
        </div>
        <div className="order" data-mode={mode}>
          <div className="list">
            {(Object.keys(fronts) as FrontKey[]).map((key) => (
              <div
                key={key}
                className={key === "marketing" ? "item mk" : "item"}
                style={{ ["--i" as string]: indexOf(key) }}
              >
                <b>{indexOf(key) + 1}</b>
                <div>
                  <h3>{fronts[key].n}</h3>
                  <p>{fronts[key][mode]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="verdict" aria-live="polite">
            <p>{verdicts[mode]}</p>
          </div>
        </div>
        <p className="big-quote">
          Marketing é <span>ferramenta</span>,<br />
          não solução.
        </p>
      </div>
    </section>
  );
}
