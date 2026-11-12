import { social } from "@/data/social";
import { waves } from "@/data/waves";
import { Wave } from "./Wave";

const facts = [
  { figure: "+7", label: "anos" },
  { figure: "180+", label: "lives" },
  { figure: "Vários", label: "treinamentos" }
] as const;

const channels = [
  {
    href: social.youtube,
    name: "YouTube do Rômulo",
    detail: "Canal Mundo Pódium · ligações ao vivo",
    icon: "youtube" as const
  },
  {
    href: social.instagram,
    name: "Instagram do Rômulo",
    detail: "@romulodebh",
    icon: "instagram" as const
  },
  {
    href: social.linkedin,
    name: "LinkedIn do Rômulo",
    detail: "Perfil profissional",
    icon: "linkedin" as const
  }
];

function ChannelIcon({ icon }: { icon: (typeof channels)[number]["icon"] }) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6a2.2 2.2 0 1 0 2.2 2.2A2.2 2.2 0 0 0 12 9.8zM17.35 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
        />
      </svg>
    );
  }
  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.7 9.3H2.9V21h2.8zM4.3 3A1.7 1.7 0 1 0 4.3 6.4 1.7 1.7 0 0 0 4.3 3zM21 21h-2.8v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H11.3V9.3h2.7v1.6h.1a2.9 2.9 0 0 1 2.6-1.5c2.8 0 3.3 1.8 3.3 4.2z"
      />
    </svg>
  );
}

export function Proprietario() {
  return (
    <section id="dono">
      <Wave d={waves.dono} />
      <div className="wrap owner">
        <figure className="portrait">
          <img src="/romulo-mentor-destrava.jpg" alt="Rômulo Freitas no estúdio, em uma ligação ao vivo" />
          <span className="portrait-mark tl" aria-hidden="true" />
          <span className="portrait-mark br" aria-hidden="true" />
          <figcaption>
            <span className="mono">Estúdio · ligação ao vivo</span>
          </figcaption>
        </figure>

        <div className="owner-copy">
          <p className="mono">Quem assina</p>
          <h2>Rômulo Freitas</h2>
          <p className="owner-role">Comercial de indústrias · Mundo Pódium</p>
          <p className="owner-lead">
            Há mais de sete anos no comercial de indústrias. Treina times comerciais e liga ao vivo no canal Mundo
            Pódium.
          </p>
          <ul className="owner-facts">
            {facts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.figure}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="owner-follow">
          <p className="mono">Onde acompanhar o Rômulo</p>
          <div className="owner-links">
            {channels.map((channel) => (
              <a key={channel.name} href={channel.href} target="_blank" rel="noopener noreferrer">
                <ChannelIcon icon={channel.icon} />
                <span>
                  <strong>{channel.name}</strong>
                  <em>{channel.detail}</em>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
