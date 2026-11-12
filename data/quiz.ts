export type FrontId = "mercado" | "estrategia" | "prospeccao" | "marketing";

export type QuizQuestion = {
  title: string;
  front: FrontId;
  options: [string, string, string];
};

export const questions: QuizQuestion[] = [
  {
    title: "Como a indústria vende hoje?",
    front: "estrategia",
    options: [
      "Carteira antiga e indicação",
      "Representantes, sem regra clara por região",
      "Cadeia definida, com metas por região"
    ]
  },
  {
    title: "Você sabe onde a marca é procurada e ainda não vende?",
    front: "mercado",
    options: ["Não sei", "Tenho uma ideia, sem dado", "Sei, com dado de anúncios e vendas"]
  },
  {
    title: "Quem abre porta nova?",
    front: "prospeccao",
    options: [
      "Ninguém, o cliente vem sozinho",
      "O representante, quando consegue",
      "Alguém liga com lista qualificada e agenda reunião"
    ]
  },
  {
    title: "Como o marketing é usado hoje?",
    front: "marketing",
    options: ["Posts e site", "Anúncios sem ligação com o comercial", "Anúncios por região, guiados pelo comercial"]
  },
  {
    title: "O que acontece com quem pediu proposta?",
    front: "estrategia",
    options: ["Fica a critério de cada vendedor", "Tem follow-up às vezes", "Tem processo e próximo passo registrado"]
  },
  {
    title: "Mercado e concorrente: como você acompanha?",
    front: "mercado",
    options: ["Não acompanho", "Olho de vez em quando", "Tenho estudo atualizado"]
  }
];

export const frontOrder: FrontId[] = ["mercado", "estrategia", "prospeccao", "marketing"];

export const frontNames: Record<FrontId, string> = {
  mercado: "inteligência de mercado",
  estrategia: "estratégia comercial",
  prospeccao: "prospecção ativa",
  marketing: "marketing como ferramenta"
};

export const frontMax: Record<FrontId, number> = {
  mercado: 4,
  estrategia: 4,
  prospeccao: 2,
  marketing: 2
};

export function diagnosisLabel(total: number) {
  if (total <= 4) {
    return {
      title: "Comercial por inércia",
      text: "A venda acontece, mas sem desenho. Carteira, indicação e sorte fazem o trabalho. O primeiro ganho vem de organizar o que já existe."
    };
  }
  if (total <= 8) {
    return {
      title: "Comercial em construção",
      text: "Há partes funcionando e partes soltas. O ganho está em ligar canal, região e prospecção na mesma estratégia."
    };
  }
  return {
    title: "Comercial pronto para escalar",
    text: "A base existe. O próximo passo é usar dado por região para decidir onde investir e prospecção ativa para abrir porta nova."
  };
}
