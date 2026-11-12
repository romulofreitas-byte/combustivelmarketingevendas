export type ChainMode = "in" | "out" | "both";

export const chainModes: { id: ChainMode; label: string }[] = [
  { id: "in", label: "Sell-in: a fábrica vende ao canal" },
  { id: "out", label: "Sell-out: o cliente procura a marca" },
  { id: "both", label: "Uma ação, dois efeitos" }
];

export const chainCopy: Record<ChainMode, string> = {
  in: "Sell-in: a indústria vende para o canal. O trabalho é abrir varejo e distribuidores com prospecção ativa e reunião marcada. Quem vende ao canal precisa saber exatamente para quem.",
  out: "Sell-out: o canal vende para o cliente final. Se ninguém procura a marca na região, o produto fica na prateleira do distribuidor. Quem cria a procura faz o canal comprar de novo.",
  both: "Tráfego pago regionalizado: uma ação, dois efeitos. O cliente final conhece a marca e procura. O representante fecha, e deixa de abrir porta fria. A ação mira só onde a estratégia comercial mandou."
};
