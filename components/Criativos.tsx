import { FingerMarquee } from "@/components/FingerMarquee";
import { waves } from "@/data/waves";
import { publicImages } from "@/lib/media";
import { Wave } from "./Wave";

export function Criativos() {
  const items = publicImages("Criativos").map((file) => {
    const num = file.name.match(/\d+/)?.[0] ?? file.name;
    return { src: file.src, alt: `Criativo para indústria ${num}` };
  });
  const sets = [items, items];

  return (
    <section id="criativos">
      <Wave d={waves.criativos} />
      <div className="wrap">
        <p className="mono">Peças feitas</p>
        <h2>Criativos para a indústria.</h2>
        <p className="criativos-lead">
          O visual é o que faz a comunicação chegar. Ele precisa ser bem feito: um trabalho construído para a
          marca ser vista como única. Essas peças não ficam só na mídia social. Elas apoiam a comunicação
          regional e o lançamento de novos produtos.
        </p>
      </div>
      <FingerMarquee className="criativos-marquee" trackClassName="criativos-track">
        {sets.map((set, index) => (
          <ul key={index} className="criativos-set" aria-hidden={index === 1 ? true : undefined}>
            {set.map((item) => (
              <li key={`${index}-${item.src}`} tabIndex={index === 0 ? 0 : undefined}>
                <img src={item.src} alt={index === 0 ? item.alt : ""} />
              </li>
            ))}
          </ul>
        ))}
      </FingerMarquee>
    </section>
  );
}
