export type SegmentCopy = {
  name: string;
  who: string;
  how: string;
  stuck: string;
};

export const segments: SegmentCopy[] = [
  {
    name: "Química",
    who: "outras indústrias, formuladores e revendas técnicas, com decisão ligada a especificação e confiança no fornecedor",
    how: "representante técnico e distribuidor por região, ciclo mais longo, com amostra e homologação",
    stuck: "a marca não é conhecida fora da carteira atual e o representante começa a conversa do zero"
  },
  {
    name: "Alimentícia",
    who: "atacado, distribuidores, redes e food service, cada um com lógica de compra própria",
    how: "representantes por região e distribuidores, com disputa constante por espaço na prateleira",
    stuck: "baixa demanda local e concorrência por espaço, as objeções que o representante mais escuta"
  },
  {
    name: "Construção civil",
    who: "construtoras, revendas de materiais e profissionais que prescrevem o produto",
    how: "revendas e distribuidores por praça, com influência do prescritor na especificação",
    stuck: "a revenda de cada cidade decide sozinha o que empurrar, sem a marca presente na região"
  },
  {
    name: "Mineração",
    who: "grandes operações, fornecedores de insumos e empresas de serviços ligadas à cadeia",
    how: "relacionamento direto e licitações, com poucas contas de peso e decisão em mais de uma área",
    stuck: "mapear quem decide em cada conta e entrar antes de o fornecedor atual renovar"
  },
  {
    name: "Metalurgia",
    who: "indústrias de transformação, distribuidores de aço e metal e projetos sob encomenda",
    how: "cotação, representante e carteira recorrente, com preço e prazo pesando muito",
    stuck: "a venda depende de cotações que chegam, e não de mercado e região escolhidos"
  },
  {
    name: "Tratamento de água",
    who: "indústrias com efluente e afluente, frigoríficos, têxteis, papel e alimentos, além de órgãos públicos por licitação",
    how: "solução sob medida, por representantes no privado e por licitação no público",
    stuck: "site e presença desatualizados para quem pesquisa antes de ligar, e venda constante sem estratégia regional"
  },
  {
    name: "Têxtil",
    who: "confecções, atacadistas e outras indústrias da cadeia",
    how: "representantes e carteira, com forte influência de moda, preço e prazo",
    stuck: "depender de poucas contas e não saber em quais regiões existe procura sem atendimento"
  },
  {
    name: "Papel e celulose",
    who: "gráficas, embalagens, distribuidores e outras indústrias, em volume",
    how: "contratos e distribuidores, com muita atenção a custo logístico por região",
    stuck: "a distância define a venda, então a região certa pesa mais do que o volume total"
  },
  {
    name: "Frigoríficos",
    who: "atacado, redes, food service e exportação, cada um com prazo e exigência diferentes",
    how: "carteira de compradores recorrentes e representantes por praça",
    stuck: "concentração em poucos compradores e pouca visibilidade de onde ainda não se vende"
  },
  {
    name: "Outro ramo",
    who: "outras empresas, distribuidores, revendas ou órgãos públicos",
    how: "por representantes, distribuidores, licitação ou carteira própria",
    stuck: "normalmente na mesma raiz, a venda existe, mas o desenho do comercial não"
  }
];

export const segmentHeads = ["Quem compra", "Como vende", "Onde costuma travar"] as const;
