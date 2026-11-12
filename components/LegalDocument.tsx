import Link from "next/link";
import type { ReactNode } from "react";

export function LegalDocument({
  kicker,
  title,
  updated,
  children
}: {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="legal">
      <p className="mono">{kicker}</p>
      <h1>{title}</h1>
      <p className="legal-updated">Atualizado em {updated}.</p>
      {children}
      <p className="legal-back">
        <Link href="/">Voltar ao site</Link>
      </p>
    </article>
  );
}
