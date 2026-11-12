export const brazilPoly: [number, number][] = [
  [-51, 4],
  [-50, 1.5],
  [-48.5, -0.5],
  [-44.5, -2.2],
  [-40, -2.8],
  [-37, -4.8],
  [-34.9, -6.5],
  [-35.2, -9],
  [-37.2, -11.2],
  [-38.8, -13.5],
  [-39.1, -17.5],
  [-40, -20.3],
  [-41.5, -22.5],
  [-44, -23.2],
  [-46.5, -24.3],
  [-48.5, -26],
  [-48.8, -28.5],
  [-50.5, -30.5],
  [-53.4, -33.7],
  [-53.5, -33],
  [-57.6, -30.2],
  [-56, -28.2],
  [-54, -27],
  [-53.8, -25.5],
  [-54.6, -24],
  [-55.5, -22],
  [-57.6, -22],
  [-58.2, -20],
  [-57.8, -17.5],
  [-60.2, -16.2],
  [-61.5, -14],
  [-65, -11.5],
  [-68, -10.8],
  [-70.5, -11],
  [-73.5, -9],
  [-72.8, -7.5],
  [-70, -4.2],
  [-69.8, -1],
  [-70, 1],
  [-67.5, 2],
  [-66.8, 1.2],
  [-64, 1.8],
  [-62.5, 3.8],
  [-60, 5.2],
  [-57, 2.5],
  [-54, 2.3]
];

export type RegionName = "Sul" | "Sudeste" | "Nordeste" | "Centro-Oeste" | "Norte";

export function insideBrazil(lo: number, la: number) {
  let inside = false;
  for (let i = 0, j = brazilPoly.length - 1; i < brazilPoly.length; j = i++) {
    const [xi, yi] = brazilPoly[i];
    const [xj, yj] = brazilPoly[j];
    if (yi > la !== yj > la && lo < ((xj - xi) * (la - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

export function regionOf(lo: number, la: number): RegionName {
  if (la < -25.5 || (la < -23.5 && lo < -49 && lo > -58)) return "Sul";
  if (la < -18 && la >= -25.5 && lo > -53.5) return "Sudeste";
  if ((la > -18 && lo > -46.5) || (la > -10 && lo > -47.5)) return "Nordeste";
  if (lo > -61.5 && lo < -46 && la < -10 && la > -24) return "Centro-Oeste";
  return "Norte";
}

export const levels: Record<RegionName, [number, number]> = {
  Sul: [2, 1],
  Sudeste: [2, 2],
  Nordeste: [0, 2],
  "Centro-Oeste": [1, 1],
  Norte: [0, 0]
};

export const levelWords = ["baixo", "médio", "alto"] as const;

export function regionReading(vende: number, procura: number) {
  if (vende >= 2 && procura >= 2) {
    return "Mantém. A marca vende onde é procurada. Proteger o canal e acompanhar o concorrente de perto.";
  }
  if (vende <= 0 && procura >= 2) {
    return "Procura sem atendimento. Abrir frente nova: representante ou distribuidor na região, com prospecção ativa.";
  }
  if (vende >= 2 && procura <= 1) {
    return "Vende pela carteira que já existe. Descobrir se é relacionamento antigo ou se há espaço para crescer.";
  }
  if (vende <= 0 && procura <= 0) {
    return "Mercado frio. Decidir com dado se vale ação regional agora ou se a região não é prioridade.";
  }
  return "Meio-termo. Ação regional guiada pela estratégia comercial, sem espalhar verba.";
}

export type MapDot = { lo: number; la: number; r: RegionName };

export function buildBrazilDots() {
  const dots: MapDot[] = [];
  const step = 0.72;
  for (let lo = -74; lo < -34; lo += step) {
    for (let la = 5.3; la > -34; la -= step) {
      if (insideBrazil(lo, la)) dots.push({ lo, la, r: regionOf(lo, la) });
    }
  }
  return dots;
}

export const passos = { lo: -46.6, la: -20.7 };

export type MapLens = "v" | "p";
