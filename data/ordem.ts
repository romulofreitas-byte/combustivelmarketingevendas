export const fronts = {
  mercado: {
    n: "Inteligência de mercado",
    a: "Quase nunca acontece.",
    b: "Onde a indústria vende, onde não vende, quem concorre."
  },
  estrategia: {
    n: "Estratégia comercial",
    a: "Se sobrar tempo.",
    b: "Canal, representante, região e o que cada elo precisa ouvir."
  },
  prospeccao: {
    n: "Prospecção ativa",
    a: "Esperar o lead aparecer.",
    b: "Ligar para o decisor certo e marcar reunião."
  },
  marketing: {
    n: "Marketing",
    a: "Post, site e anúncio no lugar de estratégia.",
    b: "Ferramenta que amplifica o que o comercial já definiu."
  }
} as const;

export type FrontKey = keyof typeof fronts;
export type OrderMode = "a" | "b";

export const orderA: FrontKey[] = ["marketing", "prospeccao", "estrategia", "mercado"];
export const orderB: FrontKey[] = ["mercado", "estrategia", "prospeccao", "marketing"];

export const verdicts: Record<OrderMode, string> = {
  a: "Resultado: visita, curtida e uma equipe de vendas sem saber o que fazer com isso.",
  b: "Resultado: reunião marcada com o decisor, na região que a estratégia escolheu."
};
