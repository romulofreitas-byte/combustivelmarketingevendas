"use client";

import { useEffect, useState } from "react";
import { diagnosisLabel, frontMax, frontNames, frontOrder, questions, type FrontId } from "@/data/quiz";
import { waves } from "@/data/waves";
import { useSite } from "./SiteProvider";
import { Wave } from "./Wave";

const letters = ["A", "B", "C"];

export function Diagnostico() {
  const { setDiagnosis, clearDiagnosis } = useSite();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [bar, setBar] = useState(0);
  const [grow, setGrow] = useState(false);
  const finished = answers.length === questions.length;

  useEffect(() => {
    if (finished) {
      setBar(100);
      return;
    }
    setBar((step / questions.length) * 100);
    const frame = requestAnimationFrame(() => setBar(((step + 1) / questions.length) * 100));
    return () => cancelAnimationFrame(frame);
  }, [step, finished]);

  useEffect(() => {
    if (!finished) {
      setGrow(false);
      return;
    }
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setGrow(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [finished, answers]);

  function answer(score: number) {
    setAnswers((current) => [...current, score]);
    setStep((current) => current + 1);
  }

  function redo() {
    setAnswers([]);
    setStep(0);
    setGrow(false);
    clearDiagnosis();
  }

  const scores = { mercado: 0, estrategia: 0, prospeccao: 0, marketing: 0 };
  let total = 0;
  answers.forEach((score, index) => {
    scores[questions[index].front] += score;
    total += score;
  });
  let weak: FrontId = frontOrder[0];
  let weakest = 2;
  if (finished) {
    frontOrder.forEach((front) => {
      const ratio = scores[front] / frontMax[front];
      if (ratio < weakest) {
        weakest = ratio;
        weak = front;
      }
    });
  }
  const label = diagnosisLabel(total);

  useEffect(() => {
    if (!finished) return;
    setDiagnosis(label.title, frontNames[weak]);
  }, [finished, label.title, weak, setDiagnosis]);

  const question = questions[step];

  return (
    <section id="diag">
      <Wave d={waves.diag} />
      <div className="wrap">
        <p className="mono">Diagnóstico em 2 minutos</p>
        <h2>
          Seu comercial tem desenho
          <br />
          ou tem sorte?
        </h2>
        <div className="quiz">
          {finished ? (
            <div className="result">
              <div className="qprog">
                <i style={{ width: "100%" }} />
              </div>
              <p className="mono">Seu retrato inicial</p>
              <h3>{label.title}</h3>
              <p className="lead">{label.text}</p>
              <div className="bars">
                {frontOrder.map((front) => {
                  const width = Math.max(4, Math.round((scores[front] / frontMax[front]) * 100));
                  return (
                    <div key={front} className={front === weak ? "bar weak" : "bar"}>
                      <span>{frontNames[front]}</span>
                      <i>
                        <b style={{ width: grow ? `${width}%` : 0 }} />
                      </i>
                    </div>
                  );
                })}
              </div>
              <p className="lead" style={{ marginBottom: 28 }}>
                Por onde começar: <b className="yel" style={{ fontWeight: 600 }}>{frontNames[weak]}</b>.
              </p>
              <a className="btn" href="#cta">
                Levar este resultado para o bate-papo <span aria-hidden="true">→</span>
              </a>
              <button className="again" type="button" onClick={redo}>
                Refazer
              </button>
            </div>
          ) : (
            <div className="q">
              <div className="qprog">
                <i style={{ width: `${bar}%` }} />
              </div>
              <p className="mono">
                Pergunta {step + 1} de {questions.length}
              </p>
              <h3>{question.title}</h3>
              <div className="opts">
                {question.options.map((option, index) => (
                  <button key={option} type="button" onClick={() => answer(index)}>
                    <em>{letters[index]}</em>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
