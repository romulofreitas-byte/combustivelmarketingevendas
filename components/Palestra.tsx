import { waves } from "@/data/waves";
import { Wave } from "./Wave";

const TALK_ID = "vqy8vGwi59U";

export function Palestra() {
  return (
    <section id="palestra">
      <Wave d={waves.palestra} />
      <div className="wrap">
        <p className="mono">Marketing Industrial que Funciona · Feira SIM</p>
        <h2>
          Marketing da indústria não é post. <em>É comercial.</em>
        </h2>
        <p className="lead">
          A palestra parte de uma regra: comunicação da indústria existe para fazer o comercial render. Post e
          vaidade não abrem porta. Canal, decisor e reunião marcada, sim.
        </p>
        <div className="yt">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${TALK_ID}`}
            title="Palestra Marketing Industrial que Funciona, apresentada na Feira SIM, em Belo Horizonte"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
