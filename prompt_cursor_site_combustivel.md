# PROMPT CURSOR — Site Combustível Marketing e Vendas (página única)

> Antes de colar: coloque o arquivo `index.html` de referência em `/reference/index.html` na raiz do projeto. Ele é a versão aprovada do site. O prompt abaixo descreve tudo, mas em caso de dúvida visual ou de comportamento, o `index.html` manda.

---

## PAPEL E OBJETIVO

Você é um engenheiro front-end sênior com olho de designer. Construa o site de **uma página só** da **Combustível Marketing e Vendas**, vertente de assessoria comercial para indústrias do **Mundo Pódium**.

O problema que o site resolve: as indústrias enxergam a Combustível como "empresa de marketing". Ela é uma **assessoria comercial** (inteligência de mercado, estratégia comercial, prospecção ativa) que usa o **marketing como ferramenta, por último**. Toda decisão de copy, ordem de dobras e interação deve reforçar isso.

Não é um site comum. Não pode parecer template, nem ser cheio de caixas e cards. É orgânico, interativo, atual e bonito. Cada dobra tem uma atmosfera própria.

## STACK

- Next.js 14+ (App Router) + TypeScript + Tailwind CSS. Página única em `app/page.tsx`, componentes por dobra em `components/`.
- Sem biblioteca de animação pesada. Use CSS, Canvas 2D e SVG. (Framer Motion só se realmente simplificar algo.)
- Fontes via `next/font/google`: **Sora** (títulos, 300/400/600/700/800), **IBM Plex Sans** (corpo, 300/400/500/600), **IBM Plex Mono** (rótulos, 400/500).
- Deploy-ready na Vercel. Sem backend.
- Variável de ambiente `NEXT_PUBLIC_WA_NUMBER` (apenas dígitos com DDI e DDD, ex.: `5531999999999`).

## TOKENS (CSS variables em `globals.css`)

```
--navy:#0B1E3F; --deep:#061229; --mid:#0F2A55; --yellow:#F5B301;
--paper:#F4F1EA; --mist:#93A9CC; --blue:#7FB0FF;
--gut: clamp(20px,5vw,72px);
```
- Tema único escuro (navy dominante). `color-scheme: dark`. Corpo 18px, peso 300, line-height 1.6.
- Títulos em Sora, `text-wrap: balance`, `letter-spacing` negativo, line-height ~1.08.
- Rótulos pequenos em Plex Mono, 12px, caixa alta, `letter-spacing:.14em`, cor `--mist`.
- Amarelo é energia: use só onde há ação ou ênfase. A única dobra com fundo amarelo é a última.
- Botão principal: pílula amarela, texto navy, Sora 700; hover sobe 3px com sombra amarela suave. Botão ghost: borda branca translúcida.
- Foco visível em tudo (outline amarelo 2px). Respeitar `prefers-reduced-motion` (desligar animações contínuas e mostrar estados finais).
- Mobile first. Gutter lateral mínimo de 16px. Nada de scroll horizontal.

## ESTRUTURA GERAL

- Nav fixa transparente com gradiente: logo à esquerda (gota/chama amarela em SVG + "COMBUSTÍVEL" em Sora 800 + legenda mono "Marketing e Vendas · Mundo Pódium"), links âncora (A ordem, Canal, Região, Método, Diagnóstico) e pílula amarela "Bate-papo de 20 min" apontando para `#cta`. No mobile, só a logo e a pílula.
- Nove dobras, cada uma com fundo próprio (`--bg`), separadas por **ondas SVG orgânicas** (altura 120px, `preserveAspectRatio="none"`, `fill: currentColor`, posicionadas em `top:-119px`, cada dobra com um path diferente). Padding vertical generoso (150–230px topo).
- Tudo visível em repouso: nada começa com opacity 0 esperando scroll.
- Sem cards em caixa. Estrutura por tipografia, linhas finas (`1px solid rgba(255,255,255,.13~.2)`) e formas.

## ESTADO GLOBAL

`segment` (ramo escolhido na dobra 6), `result` e `weak` (resultado e frente mais fraca do quiz). Os três alimentam a mensagem do WhatsApp (ver dobra 9).

---

## DOBRA 1 — HERO (`#hero`, fundo `--navy`)

**Fundo:** canvas de campo de fluxo (flow field) ocupando a dobra inteira, atrás do conteúdo.
- Partículas em número `largura*altura/9000`. Cada frame: pinta `rgba(11,30,63,.07)` sobre tudo (rastro) e move cada partícula com ângulo `sin(x*.0032+t)*1.6 + cos(y*.0041-t*.8)*1.6 + (x/largura)*1.2`, velocidade 1.1. `t += .0022`.
- ~14% das partículas são amarelas (`rgba(245,179,1,.75)`, linha 1.4px); as outras `rgba(147,169,204,.35)`.
- O cursor repele as partículas num raio de 150px (empurra proporcional à proximidade).
- Reinicia partícula em posição aleatória ao sair da tela. Com `prefers-reduced-motion`, desenhar ~260 frames estáticos e parar.

**Conteúdo:**
- Rótulo mono: `Assessoria comercial para indústrias`
- H1 (Sora 800, `clamp(44px,8vw,116px)`, tracking -.035em, line-height 1): `Não somos uma agência de marketing.` com a palavra **marketing** em `--mist` e riscada por uma barra amarela que se desenha da esquerda para a direita em 1s (delay .5s), levemente inclinada (-2°). Segunda linha, em bloco, amarela: `Somos o comercial da indústria.`
- Lead: `Mercado, canal, prospecção ativa e reunião marcada com o decisor. O marketing entra por último, como ferramenta, para fazer o comercial render mais.`
- Botões: primário `Agendar bate-papo de 20 min →` (âncora `#cta`) e ghost `Fazer o diagnóstico` (âncora `#diag`).
- Ticker contínuo no rodapé da dobra (mono, caixa alta, pontos amarelos como separador, rola 40s linear infinito): Química · Alimentícia · Construção civil · Mineração · Metalurgia · Tratamento de água · Têxtil · Papel e celulose · Frigoríficos · Qualquer ramo industrial que venda para outra empresa.

## DOBRA 2 — A ORDEM (`#ordem`, fundo `--deep`)

- Rótulo: `O equívoco mais comum`. H2: `A ordem muda o resultado.`
- Lead: `Quando a indústria contrata marketing primeiro, ela recebe visibilidade e continua sem saber para quem vender. Mude a chave e veja a mesma lista na ordem em que a Combustível trabalha.`
- **Chave** (pílula com dois botões, `aria-pressed`): `Como a maioria contrata` (padrão) / `Como a Combustível trabalha`. O ativo fica amarelo com texto navy.
- Layout em duas colunas (empilha no mobile): à esquerda, lista de 4 itens **absolutamente posicionados** com `top = índice * altura` e `transition: top .8s cubic-bezier(.7,0,.2,1)`, para que **reordenem animando** quando a chave muda. Altura da linha 104px (118px no mobile). Cada item: borda superior fina, número grande Sora 300 (38px) e título + descrição. No modo "Combustível" os números ficam amarelos. O item Marketing tem título amarelo.
- Itens e descrições por modo (a = maioria / b = Combustível):
  - Inteligência de mercado — a: `Quase nunca acontece.` / b: `Onde a indústria vende, onde não vende, quem concorre.`
  - Estratégia comercial — a: `Se sobrar tempo.` / b: `Canal, representante, região e o que cada elo precisa ouvir.`
  - Prospecção ativa — a: `Esperar o lead aparecer.` / b: `Ligar para o decisor certo e marcar reunião.`
  - Marketing — a: `Post, site e anúncio no lugar de estratégia.` / b: `Ferramenta que amplifica o que o comercial já definiu.`
- Ordem a: Marketing, Prospecção, Estratégia, Mercado. Ordem b: Mercado, Estratégia, Prospecção, Marketing.
- À direita, "veredito" com borda esquerda amarela, texto em Sora 400, `aria-live="polite"`:
  - a: `Resultado: visita, curtida e uma equipe de vendas sem saber o que fazer com isso.`
  - b: `Resultado: reunião marcada com o decisor, na região que a estratégia escolheu.`
- Fecho gigante (Sora 800, `clamp(30px,6vw,84px)`): `Marketing é ferramenta,` quebra de linha `não solução.` com "ferramenta" em amarelo.

## DOBRA 3 — QUEM EMPURRA, QUEM PUXA (`#canal`, fundo `--mid`)

- Rótulo: `Cadeia de venda`. H2: `Quem empurra.` / `Quem puxa.`
- Lead: `A indústria vende para o canal, e o canal vende para o cliente final. São dois movimentos diferentes, e cada um pede uma ação diferente.`
- Três botões de modo (texto, sublinhado amarelo no ativo): `Sell-in: a fábrica empurra` (padrão) / `Sell-out: o cliente puxa` / `Uma ação, dois efeitos`.
- **SVG** `viewBox="0 0 1000 320"`: curva `M70 200C230 60 340 60 500 180S790 300 930 130` com stroke branco 18%. Três nós: Fábrica (70,200, amarelo), Representante ou distribuidor (500,180, branco), Cliente final (930,130, azul `--blue`), com rótulos em Sora 600 abaixo.
- **18 pontos animados** (raio 5) percorrendo a curva com `getPointAtLength`, `t += .0016` por frame, opacidade `.35 + .65*sin(u*π)`:
  - sell-in: todos amarelos, fábrica → cliente.
  - sell-out: todos azuis, sentido inverso.
  - "uma ação, dois efeitos": alternados (pares amarelos para frente, ímpares azuis para trás) e aparece um círculo tracejado amarelo no topo do nó central com o texto `Marca na região` / `tráfego regional`.
- Texto explicativo por modo (`aria-live`), 19px:
  - in: `Sell-in: a indústria vende para o canal. O trabalho é abrir distribuidores, revendas e representantes com prospecção ativa e reunião marcada. Quem empurra precisa saber exatamente para quem.`
  - out: `Sell-out: o canal vende para o cliente final. Se ninguém procura a marca na região, o produto fica na prateleira do distribuidor. Quem puxa cria a demanda que faz o canal comprar de novo.`
  - both: `Tráfego pago regionalizado: uma ação, dois efeitos. O cliente final conhece a marca e procura. O representante fecha, e deixa de abrir porta fria. A ação mira só onde a estratégia comercial mandou.`
- Bloco "Do campo" (rótulo mono à esquerda, texto à direita, borda superior): `Em treinamento com representantes de uma indústria de alimentos, as objeções se repetiram em três. Marca presente na região responde às três antes de o representante precisar argumentar.` e abaixo, em Sora 600 amarelo, lado a lado: `Falta de confiança na marca` · `Concorrência por espaço` · `Baixa demanda`.

## DOBRA 4 — MAPA POR REGIÃO (`#mapa`, fundo `#081832`)

- Rótulo: `Olhar macro por região`. H2: `Cada região é um mercado diferente.`
- Lead: `O painel de anúncios mostra onde há procura. As vendas mostram onde a indústria entrega. Cruzar os dois vira base de dados comercial. Toque em uma região.`
- Duas colunas: canvas quadrado do Brasil (máx. 560px) + painel de leitura.
- **Mapa em pontos (dot matrix):** gere uma grade com passo 0,72° de longitude de -74 a -34 e latitude de 5,3 a -34, mantendo só pontos dentro do polígono abaixo (ray casting). Projeção: `x=(lon+74)/40*W`, `y=(5.8-lat)/40*W`. Raio do ponto `W/110`.
- Polígono aproximado (lon, lat), nesta ordem:
  `(-51,4) (-50,1.5) (-48.5,-0.5) (-44.5,-2.2) (-40,-2.8) (-37,-4.8) (-34.9,-6.5) (-35.2,-9) (-37.2,-11.2) (-38.8,-13.5) (-39.1,-17.5) (-40,-20.3) (-41.5,-22.5) (-44,-23.2) (-46.5,-24.3) (-48.5,-26) (-48.8,-28.5) (-50.5,-30.5) (-53.4,-33.7) (-53.5,-33) (-57.6,-30.2) (-56,-28.2) (-54,-27) (-53.8,-25.5) (-54.6,-24) (-55.5,-22) (-57.6,-22) (-58.2,-20) (-57.8,-17.5) (-60.2,-16.2) (-61.5,-14) (-65,-11.5) (-68,-10.8) (-70.5,-11) (-73.5,-9) (-72.8,-7.5) (-70,-4.2) (-69.8,-1) (-70,1) (-67.5,2) (-66.8,1.2) (-64,1.8) (-62.5,3.8) (-60,5.2) (-57,2.5) (-54,2.3)`
- Regra de região por ponto, nesta ordem de precedência:
  1. **Sul:** `lat < -25.5` ou (`lat < -23.5` e `-58 < lon < -49`)
  2. **Sudeste:** `-25.5 <= lat < -18` e `lon > -53.5`
  3. **Nordeste:** (`lat > -18` e `lon > -46.5`) ou (`lat > -10` e `lon > -47.5`)
  4. **Centro-Oeste:** `-61.5 < lon < -46`, `-24 < lat < -10`
  5. **Norte:** o resto
- Níveis **ilustrativos** [vende, procura] (0 baixo, 1 médio, 2 alto): Sul [2,1], Sudeste [2,2], Nordeste [0,2], Centro-Oeste [1,1], Norte [0,0].
- Duas "lentes" (botões pílula, ativa em branco com texto navy): `Onde vende` (pontos amarelos) e `Onde procuram` (pontos `--blue`). Opacidade do ponto por nível: 0 → .16, 1 → .5, 2 → 1. Região selecionada tem pontos 25% maiores; hover clareia a região (+.25 de alfa). Clique/toque seleciona a região.
- **Pin de Passos/MG** (lon -46,6, lat -20,7): ponto azul sólido com anel pulsando (`sin`), mais forte na lente "Onde procuram".
- Painel: nome da região (Sora 700, grande), `Vende: baixo|médio|alto` e `Procura: ...`, e a leitura (`aria-live`):
  - vende alto + procura alta: `Mantém. A marca vende onde é procurada. Proteger o canal e acompanhar o concorrente de perto.`
  - vende baixo + procura alta: `Procura sem atendimento. Abrir frente nova: representante ou distribuidor na região, com prospecção ativa.`
  - vende alto + procura baixa/média: `Vende pela carteira que já existe. Descobrir se é relacionamento antigo ou se há espaço para crescer.`
  - vende baixo + procura baixa: `Mercado frio. Decidir com dado se vale ação regional agora ou se a região não é prioridade.`
  - demais: `Meio-termo. Ação regional guiada pela estratégia comercial, sem espalhar verba.`
- Caso real (anônimo), com bolinha azul antes: `Caso real, sem nome: uma indústria viu muito acesso vindo de Passos/MG, onde não vendia, e abriu ali uma frente nova de vendas. Procure o ponto azul no mapa.`
- Aviso obrigatório, pequeno: `Mapa ilustrativo. Os níveis mostrados são exemplos para explicar a leitura, não dados de cliente. Os dados reais saem do painel de anúncios e das vendas de cada indústria.`
- Estado inicial: região Sudeste selecionada, lente "Onde vende".

## DOBRA 5 — MÉTODO (`#metodo`, fundo `--navy`)

- Rótulo: `Como a Combustível trabalha`. H2: `Quatro frentes, nesta ordem.`
- Lead: `Cada frente prepara a seguinte. Pular uma é o que faz o dinheiro de marketing escorrer sem virar reunião.`
- **Veia que acende:** um SVG à esquerda com um caminho sinuoso (curvas alternando x=10 e x=70, ancoradas em x=40, um segmento a cada ~160px de altura), traço base branco 13% e traço de preenchimento amarelo (3px, `stroke-linecap: round`) cujo `stroke-dashoffset` acompanha o progresso do scroll (`(vh*.62 - top)/altura`, limitado de 0 a 1). Recalcular no resize e quando as fontes carregarem. Cada passo fica "ligado" (`.on`: número amarelo, título branco) quando seu topo passa de 62% da viewport; desligado, título em `#9FB0CC`.
- Quatro passos (rótulo mono `FRENTE n`, título Sora 700 grande, parágrafo 19px, lista com setas amarelas):
  1. **Inteligência de mercado** — `Antes de ligar ou anunciar, entender mercado, concorrência e região. Onde a indústria vende, onde não vende e onde existe procura sem atendimento.` Lista: Estudo de mercado e concorrência · Leitura por região · Mapa de empresas e decisores
  2. **Estratégia comercial** — `Desenhar a cadeia de venda: fábrica, representante, distribuidor, revenda ou licitação. O que cada elo precisa ouvir, e como a marca responde às objeções do representante.` Lista: Desenho de canal · Sell-in e sell-out por região · Argumentos para o representante
  3. **Prospecção ativa** — `Ligação para o sócio-administrador, passando pelo gatekeeper, com follow-up por telefone e reunião qualificada na agenda da indústria.` Lista: Lista qualificada de empresas e decisores · Cold call · Reuniões agendadas
  4. **Marketing como ferramenta** + etiqueta amarela `por último` — `Tráfego pago regionalizado, site e marca entram para sustentar o comercial. O cliente final procura, o representante fecha, e ninguém precisa abrir porta fria.` Lista: Campanhas por região · Painel de cliques como dado comercial · Site e identidade
- Rodapé da dobra, duas colunas com borda superior: `O método de prospecção vem de ligar ao vivo. O canal do Mundo Pódium tem mais de 170 lives e mais de 400 horas de ligação real transmitida, com cliente de verdade do outro lado.` e `Toda hipótese que ainda não virou dado fica rotulada como hipótese. Nada vai para a mesa do dono da indústria como fato antes de ser validado.`

## DOBRA 6 — RAMOS (`#ind`, fundo `--mid`)

- Rótulo: `Qualquer ramo industrial`. H2: `Escolha o seu ramo.`
- Chips (pílulas com borda, ativo amarelo): Química (padrão), Alimentícia, Construção civil, Mineração, Metalurgia, Tratamento de água, Têxtil, Papel e celulose, Frigoríficos, Outro ramo.
- Ao escolher: título `Na indústria {ramo em minúsculas}, o comercial costuma ter este desenho.` (para "Outro ramo": `Qualquer indústria que venda para outra empresa tem o mesmo ponto de partida.`) e três colunas com borda superior e rótulo mono amarelo: `Quem compra` · `Como vende` · `Onde costuma travar`. Define `segment` no estado global ("Outro ramo" limpa o segmento).
- Conteúdo (quem compra / como vende / onde trava):
  - **Química:** outras indústrias, formuladores e revendas técnicas, com decisão ligada a especificação e confiança no fornecedor / representante técnico e distribuidor por região, ciclo mais longo, com amostra e homologação / a marca não é conhecida fora da carteira atual e o representante começa a conversa do zero.
  - **Alimentícia:** atacado, distribuidores, redes e food service, cada um com lógica de compra própria / representantes por região e distribuidores, com disputa constante por espaço na prateleira / baixa demanda local e concorrência por espaço, as objeções que o representante mais escuta.
  - **Construção civil:** construtoras, revendas de materiais e profissionais que prescrevem o produto / revendas e distribuidores por praça, com influência do prescritor na especificação / a revenda de cada cidade decide sozinha o que empurrar, sem a marca presente na região.
  - **Mineração:** grandes operações, fornecedores de insumos e empresas de serviços ligadas à cadeia / relacionamento direto e licitações, com poucas contas de peso e decisão em mais de uma área / mapear quem decide em cada conta e entrar antes de o fornecedor atual renovar.
  - **Metalurgia:** indústrias de transformação, distribuidores de aço e metal e projetos sob encomenda / cotação, representante e carteira recorrente, com preço e prazo pesando muito / a venda depende de cotações que chegam, e não de mercado e região escolhidos.
  - **Tratamento de água:** indústrias com efluente e afluente, frigoríficos, têxteis, papel e alimentos, além de órgãos públicos por licitação / solução sob medida, por representantes no privado e por licitação no público / site e presença desatualizados para quem pesquisa antes de ligar, e venda constante sem estratégia regional.
  - **Têxtil:** confecções, atacadistas e outras indústrias da cadeia / representantes e carteira, com forte influência de moda, preço e prazo / depender de poucas contas e não saber em quais regiões existe procura sem atendimento.
  - **Papel e celulose:** gráficas, embalagens, distribuidores e outras indústrias, em volume / contratos e distribuidores, com muita atenção a custo logístico por região / a distância define a venda, então a região certa pesa mais do que o volume total.
  - **Frigoríficos:** atacado, redes, food service e exportação, cada um com prazo e exigência diferentes / carteira de compradores recorrentes e representantes por praça / concentração em poucos compradores e pouca visibilidade de onde ainda não se vende.
  - **Outro ramo:** outras empresas, distribuidores, revendas ou órgãos públicos / por representantes, distribuidores, licitação ou carteira própria / normalmente na mesma raiz, a venda existe, mas o desenho do comercial não.
- Nota obrigatória: `Leitura inicial de como o comercial costuma funcionar em cada ramo. Tudo isso é hipótese a validar no diagnóstico com a sua indústria.`

## DOBRA 7 — DIAGNÓSTICO (`#diag`, fundo `--deep`)

- Rótulo: `Diagnóstico em 2 minutos`. H2: `Seu comercial tem desenho` / `ou tem sorte?`
- Quiz de 6 perguntas, uma por vez, barra de progresso fina amarela no topo, opções como linhas largas separadas por linhas finas (sem caixas; no hover a linha recua para a direita e fica amarela), letras A/B/C em mono. Pontuação 0, 1, 2 por resposta (A, B, C). Frente de cada pergunta entre parênteses:
  1. (estratégia) `Como a indústria vende hoje?` Carteira antiga e indicação / Representantes, sem regra clara por região / Cadeia definida, com metas por região
  2. (mercado) `Você sabe onde a marca é procurada e ainda não vende?` Não sei / Tenho uma ideia, sem dado / Sei, com dado de anúncios e vendas
  3. (prospecção) `Quem abre porta nova?` Ninguém, o cliente vem sozinho / O representante, quando consegue / Alguém liga com lista qualificada e agenda reunião
  4. (marketing) `Como o marketing é usado hoje?` Posts e site / Anúncios sem ligação com o comercial / Anúncios por região, guiados pelo comercial
  5. (estratégia) `O que acontece com quem pediu proposta?` Fica a critério de cada vendedor / Tem follow-up às vezes / Tem processo e próximo passo registrado
  6. (mercado) `Mercado e concorrente: como você acompanha?` Não acompanho / Olho de vez em quando / Tenho estudo atualizado
- Resultado pelo total (0–12): ≤4 `Comercial por inércia`; 5–8 `Comercial em construção`; ≥9 `Comercial pronto para escalar`. Título gigante amarelo (Sora 800) + texto:
  - inércia: `A venda acontece, mas sem desenho. Carteira, indicação e sorte fazem o trabalho. O primeiro ganho vem de organizar o que já existe.`
  - construção: `Há partes funcionando e partes soltas. O ganho está em ligar canal, região e prospecção na mesma estratégia.`
  - escalar: `A base existe. O próximo passo é usar dado por região para decidir onde investir e prospecção ativa para abrir porta nova.`
- Quatro barras horizontais finas (animam de 0 ao valor): inteligência de mercado (máx. 4), estratégia comercial (máx. 4), prospecção ativa (máx. 2), marketing como ferramenta (máx. 2). A de menor percentual (empate: a primeira na ordem listada) fica amarela. Linha: `Por onde começar: {frente mais fraca}.`
- Botão `Levar este resultado para o bate-papo →` (âncora `#cta`) e link discreto `Refazer`. Grava `result` e `weak` no estado global.

## DOBRA 8 — COMO COMEÇA E OBJEÇÕES (`#conversa`, fundo `--navy`)

- Duas colunas.
- Esquerda: rótulo `Como começa`, H2 `Vinte minutos,` / `sem proposta.`, lista numerada (01, 02, 03 em Sora 300 amarelo, linhas finas):
  1. `Bate-papo de 20 minutos` — `Conversa sobre concorrente, mercado e região, no momento do planejamento estratégico do próximo ano.`
  2. `Diagnóstico` — `Perguntas sobre situação, problema, impacto e necessidade. Estudo de mercado e o método aplicado ao seu caso.`
  3. `Plano de ação` — `Cada parte da solução amarrada a uma dor que você mesmo confirmou na conversa.`
- Direita: rótulo `Objeções que a gente escuta` e acordeão (um aberto por vez, `+` amarelo que gira 45° ao abrir, `aria-expanded`, altura animada por `max-height`):
  - `“A gente não vende para o consumidor final.”` → `É exatamente esse o trabalho. Vender para indústria, distribuidor e revenda pede sell-in e sell-out regionais, e não campanha de varejo.`
  - `“Já temos agência de marketing.”` → `Ótimo, quer dizer que a marca já é cuidada. A Combustível entra no comercial: quem compra, em qual região e quem liga para fechar a reunião. Os dois lados se completam.`
  - `“Nossa venda é por representantes.”` → `Então o representante é o elo mais importante da cadeia. A estratégia dá a ele marca presente na região e conversa já aberta, para que ele não comece pela porta fria.`
  - `“Já vendemos bem, sem estratégia.”` → `Vender bem sem desenho costuma ser carteira antiga e relacionamento. Funciona até o dia em que o cliente muda. O desenho protege o que já existe e mostra onde há mais.`

## DOBRA 9 — CTA (`#cta`, fundo `--yellow`, texto navy)

- Única dobra amarela. Blob orgânico `#ffcd45` à direita, `border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%`, animação `morph` de 14s (alterna o radius e gira 18°).
- Rótulo `Próximo passo`. H2 gigante (Sora 800, `clamp(40px,8vw,118px)`, tracking -.035em, line-height .98, máx. 14ch): `Vamos falar do seu mercado.`
- Lead: `Vinte minutos sobre concorrente, região e o planejamento do próximo ano da sua indústria.`
- Botão navy `Chamar no WhatsApp →`.
- **Mensagem do WhatsApp** montada assim:
  `Olá, vim pelo site da Combustível. Sou de uma indústria` + (se houver ramo: ` do ramo {ramo em minúsculas}`) + ` e quero agendar o bate-papo de 20 minutos.` + (se houver resultado do quiz: ` No diagnóstico do site, o resultado foi "{result}" e a frente mais fraca é {weak}.`)
  - Se `NEXT_PUBLIC_WA_NUMBER` existe: `href = https://wa.me/{número}?text={encodeURIComponent(mensagem)}`, `target=_blank`, `rel=noopener`, e um texto pequeno mostrando a mensagem que será enviada.
  - Se não existe: o clique copia a mensagem e o texto pequeno avisa que o número ainda não foi configurado.
  - Recalcular o link sempre que `segment`, `result` ou `weak` mudar. Todos os CTAs do site (nav, hero, resultado do quiz) levam a `#cta`, onde está o botão real.
- Rodapé (borda superior navy 20%): `Combustível Marketing e Vendas · uma vertente do Mundo Pódium` e `Mundo Pódium LTDA · CNPJ 68.349.974/0001-19 · Belo Horizonte, MG`.

---

## REGRAS INEGOCIÁVEIS DE CONTEÚDO

1. **Sem preço, valor ou faixa de investimento** em nenhum lugar.
2. **Não mostrar CNPJ da Combustível.** A empresa ativa é o Mundo Pódium LTDA (CNPJ acima); Combustível é só o nome da marca da vertente.
3. **Não inventar número, case ou cliente.** Os únicos casos permitidos são os dois anônimos já no texto (Passos/MG e representantes de indústria de alimentos). Os níveis do mapa são ilustrativos e o aviso deve permanecer.
4. Números de autoridade permitidos: 170+ lives e 400+ horas de ligação real (somente na dobra 5).
5. Não usar a história do orelhão, "venda não é dom", jargão corporativo vazio, superlativo vago ("incrível", "sensacional") nem promessa sem processo ("triplique suas vendas").
6. Não criticar fornecedor ou agência atual do prospect. Complementar, sem desmerecer.
7. Hipótese aparece rotulada como hipótese.
8. Não vender WDL, Acelerador, Elite ou Casa neste site. São públicos e promessas diferentes.
9. Tom: consultivo e direto, frases curtas, sem jargão de F1 forçado.

## ACESSIBILIDADE E QUALIDADE

- HTML semântico (`header`, `nav`, `section`, `h1` único), `aria-pressed` nos botões de alternância, `aria-expanded` no acordeão, `aria-live="polite"` nas áreas que mudam de texto, `aria-label` nos canvas e SVG informativos.
- Contraste AA. Alvo de toque mínimo 44px no mobile.
- Canvas com `devicePixelRatio` limitado a 2 e tratamento de `resize`. Pausar animações fora da viewport (IntersectionObserver) para economizar bateria.
- Lighthouse: Performance e Acessibilidade acima de 90.
- Metadados: `<title>` "Combustível Marketing e Vendas", description sobre assessoria comercial para indústrias, Open Graph com o mesmo texto.

## ENTREGA

1. Projeto Next.js rodando com `npm run dev`, sem erros de TypeScript ou ESLint.
2. Um componente por dobra, hooks separados para as animações em canvas (`useFlowField`, `useChainDots`, `useBrazilMap`) e dados (copy dos ramos, quiz, pontos do polígono) em `data/`.
3. Compare visualmente com `/reference/index.html` lado a lado e corrija qualquer diferença de comportamento ou de aparência antes de concluir.
4. `README.md` curto com: como rodar, como configurar `NEXT_PUBLIC_WA_NUMBER`, onde editar a copy.
