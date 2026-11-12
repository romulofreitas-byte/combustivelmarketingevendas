"use client";

import { useState } from "react";
import { waves } from "@/data/waves";
import { Wave } from "./Wave";

type Clip = {
  id: string;
  who: string;
  where: string;
  text: string;
};

const groups: { label: string; items: Clip[] }[] = [
  {
    label: "Depoimentos",
    items: [
      {
        id: "oXX2A1UhcWY",
        who: "Roberto",
        where: "Produtos Marina",
        text: "Na reunião de representantes, em Itaúna: o que o representante espera da indústria.",
      },
      {
        id: "IySWQWYgFOE",
        who: "Thiago Guimarães",
        where: "Produtos Marina",
        text: "Representantes comerciais e a estratégia comercial da indústria.",
      },
      {
        id: "rDR_VRnFvKQ",
        who: "Gabriel Gelape",
        where: "Axus Engenharia",
        text: "Depoimento de cliente sobre a assessoria de marketing e vendas.",
      },
      {
        id: "vJowH_D8BhA",
        who: "Gabriel Gelape",
        where: "Engenheiro civil",
        text: "Para quem projeta e vende: o que mudou no comercial depois da assessoria.",
      },
    ],
  },
  {
    label: "Conversa e treinamento",
    items: [
      {
        id: "SPzPYzpa4F4",
        who: "Múcio Silveira",
        where: "Podcast Combustível",
        text: "Tráfego pago regionalizado e o representante comercial na indústria.",
      },
      {
        id: "y2HajE_jdZM",
        who: "Natupeixe",
        where: "Caratinga",
        text: "Treinamento de vendas para representantes comerciais e o call center.",
      },
    ],
  },
];

function Player({ clip }: { clip: Clip }) {
  const [play, setPlay] = useState(false);
  const label = `${clip.who}, ${clip.where}`;

  return (
    <div className="yt">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${clip.id}?autoplay=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" aria-label={`Assistir ${label}`} onClick={() => setPlay(true)}>
          <img src={`https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`} alt="" />
          <span className="play" />
        </button>
      )}
    </div>
  );
}

export function Provas() {
  return (
    <section id="provas">
      <Wave d={waves.provas} />
      <div className="wrap">
        <p className="mono">Mundo Pódium</p>
        <h2>Na voz de quem compra e de quem vende.</h2>
        <p className="lead">
          Cliente da indústria, dono que opera com representante, a conversa sobre tráfego pago regionalizado e um
          treinamento de vendas dado ao time comercial.
        </p>
        {groups.map((group) => (
          <div className="prova-block" key={group.label}>
            <p className="mono">{group.label}</p>
            <div className="prova-grid">
              {group.items.map((clip) => (
                <figure className="prova-card" key={clip.id}>
                  <Player clip={clip} />
                  <figcaption>
                    <strong>{clip.who}</strong>
                    <em>{clip.where}</em>
                    <p>{clip.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
