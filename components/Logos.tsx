import { logoAlt, publicImages } from "@/lib/media";

export function Logos() {
  const logos = publicImages("Logos");
  const sets = [logos, logos];

  return (
    <section id="clientes" aria-label="Clientes atendidos">
      <p className="mono logo-kicker">Clientes atendidos</p>
      <div className="logo-marquee">
        <div className="logo-track">
          {sets.map((set, index) => (
            <ul key={index} className="logo-set" aria-hidden={index === 1 ? true : undefined}>
              {set.map((logo) => (
                <li key={`${index}-${logo.name}`}>
                  <img src={logo.src} alt={index === 0 ? logoAlt(logo.name) : ""} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
