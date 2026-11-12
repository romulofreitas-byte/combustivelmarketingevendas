"use client";

import { useState } from "react";
import { objections } from "@/data/objections";
import { waves } from "@/data/waves";
import { Wave } from "./Wave";

const starts = [
  {
    title: "Bate-papo de 20 minutos",
    text: "Conversa sobre concorrente, mercado e região, no momento do planejamento estratégico do próximo ano."
  },
  {
    title: "Diagnóstico",
    text: "Perguntas sobre situação, problema, impacto e necessidade. Estudo de mercado e o método aplicado ao seu caso."
  },
  {
    title: "Plano de ação",
    text: "Cada parte da solução amarrada a uma dor que você mesmo confirmou na conversa."
  }
];

export function Conversa() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="conversa">
      <Wave d={waves.conversa} />
      <div className="wrap talk">
        <div>
          <p className="mono">Como começa</p>
          <h2>
            Vinte minutos,
            <br />
            sem proposta.
          </h2>
          <ol className="steps3">
            {starts.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="mono">Objeções que a gente escuta</p>
          <div className="obj">
            {objections.map((item, index) => {
              const expanded = open === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    {item.q}
                  </button>
                  <div className="ans" style={{ maxHeight: expanded ? 240 : 0 }}>
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
