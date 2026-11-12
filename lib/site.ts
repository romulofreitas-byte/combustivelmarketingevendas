export const siteUrl = "https://combustivelmv.com";

export const brandName = "Combustível Marketing e Vendas";

export const brandTitle = `${brandName} | Assessoria comercial para indústrias`;

export const brandDescription =
  "Assessoria comercial para indústrias: inteligência de mercado, estratégia comercial, prospecção ativa e reunião com o decisor. O marketing entra por último, como ferramenta.";

export const company = {
  legalName: "Mundo Pódium LTDA",
  cnpj: "68.349.974/0001-19",
  city: "Belo Horizonte",
  state: "MG"
} as const;

export const legalUpdated = "12 de novembro de 2026";

/**
 * Fora deste repositório, antes de considerar o site no ar:
 * 1. Na Vercel, definir NEXT_PUBLIC_WA_NUMBER (só dígitos, com DDI e DDD).
 *    Sem essa variável, o botão não abre o WhatsApp.
 * 2. Na HostGator, apontar o DNS de combustivelmv.com para a Vercel:
 *    o apex e o www, com www redirecionando para o apex. O domínio
 *    continua registrado na HostGator. HTTPS fica na Vercel.
 * 3. Google Search Console só depois que https://combustivelmv.com responder.
 */
