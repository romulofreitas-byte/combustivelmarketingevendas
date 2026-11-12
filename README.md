# Combustível Marketing e Vendas

Página única da assessoria comercial para indústrias.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## WhatsApp

O botão da última dobra usa `NEXT_PUBLIC_WA_NUMBER` (só dígitos, com DDI e DDD).

1. Copie `.env.example` para `.env.local`.
2. Preencha o número, por exemplo `5531994293099`.
3. Reinicie o `npm run dev`.

Sem a variável, o clique copia a mensagem e o texto abaixo do botão avisa que o número ainda não foi configurado.

A mensagem inclui o ramo escolhido e, se o diagnóstico foi feito, o resultado e a frente mais fraca.

## Onde editar a copy

- `data/ordem.ts` — a chave da ordem de trabalho
- `data/canal.ts` — sell-in, sell-out e os dois efeitos
- `data/segments.ts` — ramos industriais
- `data/quiz.ts` — perguntas e faixas do diagnóstico
- `data/objections.ts` — objeções, método e ticker
- `data/brazil.ts` — polígono, regiões e leituras do mapa

A referência visual aprovada está em `reference/index.html`.
