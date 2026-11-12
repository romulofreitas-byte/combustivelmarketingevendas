"use client";

import { useEffect, useRef } from "react";
import { methodSteps } from "@/data/objections";
import { waves } from "@/data/waves";
import { Wave } from "./Wave";

export function Metodo() {
  const boxRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const base = baseRef.current;
    const fill = fillRef.current;
    if (!box || !base || !fill) return;
    const steps = [...box.querySelectorAll<HTMLElement>(".step")];
    let length = 1;

    const update = () => {
      const rect = box.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewport * 0.62 - rect.top) / rect.height));
      fill.style.strokeDashoffset = String(length * (1 - progress));
      steps.forEach((step) => {
        step.classList.toggle("on", step.getBoundingClientRect().top < viewport * 0.62);
      });
    };

    const build = () => {
      const height = box.offsetHeight;
      const narrow = window.matchMedia("(max-width: 860px)").matches;
      const spine = narrow ? 14 : 40;
      const left = narrow ? 6 : 10;
      const right = narrow ? 26 : 70;
      let path = `M${spine} 0`;
      const segments = Math.max(4, Math.round(height / (narrow ? 220 : 160)));
      for (let i = 1; i <= segments; i++) {
        const y = (height * i) / segments;
        const y0 = (height * (i - 1)) / segments;
        const sx = i % 2 ? left : right;
        path += ` C ${sx} ${y0 + (y - y0) * 0.35}, ${sx} ${y0 + (y - y0) * 0.65}, ${spine} ${y}`;
      }
      base.setAttribute("d", path);
      fill.setAttribute("d", path);
      length = fill.getTotalLength();
      fill.style.strokeDasharray = String(length);
      update();
    };

    let alive = true;
    build();
    window.addEventListener("resize", build);
    window.addEventListener("scroll", update, { passive: true });
    document.fonts?.ready.then(() => {
      if (alive) build();
    });
    return () => {
      alive = false;
      window.removeEventListener("resize", build);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <section id="metodo">
      <Wave d={waves.metodo} />
      <div className="wrap">
        <p className="mono">Como a Combustível trabalha</p>
        <h2>Quatro frentes, nesta ordem.</h2>
        <p className="lead">
          Cada frente prepara a seguinte. Pular uma é o que faz o dinheiro de marketing escorrer sem virar reunião.
        </p>
        <div className="veia" ref={boxRef}>
          <svg aria-hidden="true">
            <path ref={baseRef} fill="none" stroke="#ffffff22" strokeWidth="3" />
            <path ref={fillRef} fill="none" stroke="#F5B301" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {methodSteps.map((step) => (
            <div key={step.num} className={step.badge ? "step last" : "step"}>
              <span className="num">{step.num}</span>
              <h3>
                {step.title}
                {step.badge ? <small>{step.badge}</small> : null}
              </h3>
              <p>{step.text}</p>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="proof">
          <p>
            O método de prospecção vem de ligar ao vivo. O canal do Mundo Pódium tem mais de 170 lives e mais de 400
            horas de ligação real transmitida, com cliente de verdade do outro lado.
          </p>
          <p>
            Toda hipótese que ainda não virou dado fica rotulada como hipótese. Nada vai para a mesa do dono da
            indústria como fato antes de ser validado.
          </p>
        </div>
      </div>
    </section>
  );
}
