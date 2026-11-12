"use client";

import Link from "next/link";
import { waves } from "@/data/waves";
import { waMessage, waNumber } from "@/lib/whatsapp";
import { SocialLinks } from "./SocialLinks";
import { useSite } from "./SiteProvider";
import { Wave } from "./Wave";

export function Cta() {
  const { segment, result, weak } = useSite();
  const number = waNumber();
  const message = waMessage(segment, result, weak);
  const href = number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#cta";

  return (
    <section id="cta">
      <Wave d={waves.cta} />
      <div className="blob" aria-hidden="true" />
      <div className="wrap">
        <p className="mono">Próximo passo</p>
        <h2>Vamos falar do seu mercado.</h2>
        <p className="lead">Vinte minutos sobre concorrente, região e o planejamento do próximo ano da sua indústria.</p>
        <a
          className="btn"
          id="waMain"
          href={href}
          target={number ? "_blank" : undefined}
          rel={number ? "noopener noreferrer" : undefined}
          onClick={(event) => {
            if (number) return;
            event.preventDefault();
            navigator.clipboard?.writeText(message).catch(() => {});
          }}
        >
          Chamar no WhatsApp <span aria-hidden="true">→</span>
        </a>
        <p className="wanote">
          {number
            ? `A conversa abre com esta mensagem pronta: “${message}”`
            : `Número do WhatsApp ainda não configurado. Mensagem que será enviada: “${message}”`}
        </p>
        <footer>
          <span>Combustível Marketing e Vendas · uma vertente do Mundo Pódium</span>
          <span>Mundo Pódium LTDA · CNPJ 68.349.974/0001-19 · Belo Horizonte, MG</span>
          <span>Textos e imagens deste site pertencem à Mundo Pódium LTDA.</span>
          <span className="footer-links">
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos</Link>
          </span>
          <SocialLinks />
        </footer>
      </div>
    </section>
  );
}
