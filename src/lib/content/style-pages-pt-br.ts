// Brazilian Portuguese copy for the dedicated style generator pages.

import type { StylePageCopy } from "./style-pages-en";

export const stylePagesPtBr: Record<string, StylePageCopy> = {
  "cursive-text-generator": {
    navName: "Cursiva",
    h1: "Gerador de letras cursivas",
    description:
      "Transforme seu texto em letras cursivas Unicode na hora. Dois traços, prévia ao vivo e copie para a bio, nome ou chats.",
    intro:
      "Transforme seu texto em letras cursivas com caracteres Unicode — sem instalar fonte e sem cadastro. Digite abaixo, escolha o traço e copie.",
    howItWorks:
      "O texto cursivo usa as faixas Unicode Mathematical Script e Bold Script. Cada letra vira um caractere parecido desenhado com traços manuscritos conectados — e é por isso que o estilo sobrevive ao copiar e colar, coisa que uma fonte de verdade não consegue.",
    coverageNote:
      "Os dois estilos cursivos convertem A–Z e a–z. O Unicode não tem dígitos cursivos, então os números ficam como você digitou; letras com acento, emoji e outros alfabetos passam intactos. A cursiva em negrito é um alfabeto contínuo. A cursiva fina não tem forma matemática própria para e, g e o, então essas três letras usam outro traço (ℯ ℊ ℴ).",
    bestFor: [
      "Bios do Instagram e nomes visíveis com um toque manuscrito",
      "Perfis de beleza, casamento e lifestyle",
      "Frases curtas onde uma fonte cursiva cairia bem",
    ],
    sampleInputs: ["Seu Nome", "Chá Doce", "Sr & Sra"],
    platformTip:
      "As letras cursivas funcionam na maioria das bios e nomes do Instagram, TikTok e Discord. Alguns jogos recusam porque as fontes internas só cobrem o alfabeto básico — teste antes de decidir.",
    faq: [
      {
        q: "Texto cursivo é uma fonte de verdade?",
        a: "Não. São caracteres Unicode que parecem escrita à mão. É justamente por isso que dá para colar em apps que só aceitam texto simples.",
      },
      {
        q: "Por que aparecem quadradinhos em alguns aparelhos?",
        a: "O aparelho não tem fonte para esses caracteres. É comum em Androids antigos. Use a cursiva negrito ou troque de estilo se o seu público tiver esse problema.",
      },
      {
        q: "Posso usar cursiva no meu usuário do Instagram?",
        a: "Não — o usuário do Instagram aceita só letras, números, pontos e underline. A cursiva vai no nome visível e na bio.",
      },
    ],
  },
  "gothic-text-generator": {
    navName: "Gótica",
    h1: "Gerador de letras góticas",
    description:
      "Gerador de letras Fraktur e Old English, a gótica blackletter. Traços clássico e negrito, prévia ao vivo e cópia em um toque para nomes, bios e clãs.",
    intro:
      "Digite qualquer coisa e transforme em Fraktur, a blackletter Old English dos logos de metal, tags de clã e bios sombrias. Dois traços, copie em um clique.",
    howItWorks:
      "O texto gótico usa as faixas Unicode Mathematical Fraktur. O fraktur, que muita gente chama de Old English, é um estilo alemão histórico, e o Unicode traz um alfabeto inteiro de lookalikes — incluindo formas especiais para C, H, I, R e Z.",
    coverageNote:
      "Os dois estilos góticos convertem apenas A–Z e a–z. Dígitos, acentos e emoji ficam como estão, porque o Unicode não tem dígitos fraktur.",
    bestFor: [
      "Nomes de jogo e tags de clã com estética metal ou dark",
      "Bios de Halloween e divulgação de eventos",
      "Marcas de perfil com cara de banda",
    ],
    sampleInputs: ["Sombra", "Madrugada", "Corvo"],
    platformTip:
      "Os caracteres blackletter funcionam bem em celulares modernos, mas alguns aparelhos antigos mostram quadradinhos. Teste no app que você vai usar — principalmente em jogos.",
    faq: [
      {
        q: "Fraktur ou Old English é outro gerador, diferente do gótico?",
        a: "Não. Esta página cobre os três nomes. Fraktur e Old English são o mesmo alfabeto gótico, e «gótica» é como se busca esse texto. Não há um arquivo de fonte separado.",
      },
      {
        q: "Qual a diferença entre os dois estilos góticos?",
        a: "O primeiro é o fraktur clássico, de traço fino; o segundo é o peso negrito, que continua legível em tamanhos pequenos.",
      },
      {
        q: "Por que algumas letras parecem diferentes das outras?",
        a: "Letras como C, H, I, R e Z vêm de tipografias blackletter históricas em vez da faixa matemática, então o desenho muda um pouco. É parte autêntica do estilo.",
      },
      {
        q: "Funciona em nomes de Roblox ou Fortnite?",
        a: "Os dois jogos restringem o conjunto de caracteres, e muitos jogadores relatam recusa das letras góticas. Teste na tela de mudança de nome ou use combinações do Gerador de Nomes que deixam o nome base intacto.",
      },
    ],
  },
  "bold-text-generator": {
    navName: "Negrito",
    h1: "Gerador de letras em negrito",
    description:
      "Deixe seu texto em negrito onde só cabe texto simples. Pesos serif, sans e itálico — prévia e cópia em segundos.",
    intro:
      "Negrito de verdade que sobrevive ao copiar e colar — em status do WhatsApp, posts no X, apelidos do Discord e qualquer lugar sem botão de formatação.",
    howItWorks:
      "Os estilos em negrito vêm de três faixas Unicode: Mathematical Bold para o peso serif clássico, Mathematical Sans-Serif Bold para um visual mais limpo e Mathematical Bold Italic para ênfase extra. Cada letra é um caractere próprio, então o peso viaja junto com o texto.",
    coverageNote:
      "As negritos serif e sans convertem letras e dígitos. A negrito itálico cobre só letras — o Unicode não tem dígitos em negrito itálico — e qualquer coisa fora de A–Z, a–z e 0–9 fica como está.",
    bestFor: [
      "Destacar uma ou duas palavras em bios e legendas",
      "Avisos onde não existe formatação",
      "Tags de jogo fortes e legíveis",
    ],
    sampleInputs: ["Última hora", "Promo 50%", "GOAT"],
    platformTip:
      "O negrito Unicode funciona praticamente onde funciona texto simples. Em apps com formatação real, como as mensagens do Discord, prefira o negrito nativo — fica mais consistente.",
    faq: [
      {
        q: "Por que não usar só o botão de negrito?",
        a: "Muitos lugares — legendas do Instagram, bios do TikTok, a maioria dos jogos — não têm formatação. Os caracteres Unicode em negrito são o único jeito de conseguir peso ali.",
      },
      {
        q: "Letras em negrito prejudicam leitores de tela?",
        a: "Alguns leitores soletram as letras matemáticas uma por uma. Em parágrafos longos, formatação nativa é mais gentil; para um nome ou palavra, não há problema.",
      },
      {
        q: "Existe número em negrito?",
        a: "Sim — nos estilos serif e sans. O negrito itálico não tem dígitos, então os números passam sem mudança nele.",
      },
    ],
  },
  "italic-text-generator": {
    navName: "Itálico",
    h1: "Gerador de letras itálicas",
    description:
      "Escreva texto itálico que cola em qualquer lugar. Itálico serif clássico e sans limpo, com prévia instantânea.",
    intro:
      "Texto elegante e inclinado para colar em bios, legendas e chats — onde os apps esqueceram de te dar um botão de itálico.",
    howItWorks:
      "O estilo clássico usa a faixa Unicode Mathematical Italic, incluindo o histórico ℎ para a letra h. A variante sans itálico vem da faixa Mathematical Sans-Serif Italic, com uma inclinação mais limpa e moderna.",
    coverageNote:
      "Os dois estilos itálicos convertem apenas letras — o Unicode não define dígitos itálicos. Números, pontuação, emoji e outros alfabetos ficam exatamente como digitados.",
    bestFor: [
      "Legendas poéticas e bios de leitores",
      "Destacar títulos e frases em outros idiomas",
      "Um acento suave dentro de bios simples",
    ],
    sampleInputs: ["era uma vez", "modo: cozy", "parte 2"],
    platformTip:
      "O itálico Unicode é seguro em bios, nomes e mensagens nas grandes plataformas. Evite parágrafos longos — alguns leitores de tela tropeçam nas letras matemáticas e texto inclinado cansa na leitura.",
    faq: [
      {
        q: "Por que meus números não mudaram?",
        a: "O Unicode não tem dígitos itálicos — só letras. Seus números ficam no estilo normal, o que geralmente combina bem com letras itálicas.",
      },
      {
        q: "Qual itálico eu escolho?",
        a: "O serif tem cara clássica e literária; o sans fica mais limpo em tamanhos pequenos. Os dois copiam do mesmo jeito — teste nos dois no seu texto.",
      },
      {
        q: "Posso deixar a bio inteira do Instagram em itálico?",
        a: "Pode, mas não recomendamos: blocos longos de caracteres matemáticos ficam estranhos para tecnologias assistivas e cansam a leitura. Melhor itálico em uma palavra ou linha.",
      },
    ],
  },
  "bubble-letters-generator": {
    navName: "Bolha",
    h1: "Gerador de letras de bolha",
    description:
      "Coloque suas letras em bolhas cheias, anéis finos ou quadrados. Letras Unicode divertidas com prévia ao vivo e cópia em um toque.",
    intro:
      "Envolva cada letra na sua própria bolha. Três versões — bolhas cheias, anéis finos e quadrados bold — todas copiáveis como texto simples.",
    howItWorks:
      "O texto de bolha usa os blocos Unicode Enclosed Alphanumerics e Enclosed Alphanumeric Supplement: círculos cheios para o visual bolha, formas circulares finas para algo mais leve e quadrados negativos para a versão quadrada. Cada caractere é um único ponto de código Unicode.",
    coverageNote:
      "Os estilos bolha e circulado cobrem letras e dígitos, com um caractere especial para o zero. O quadrado é só de letras e costuma virar emoji colorido nos celulares — divertido, mas teste antes.",
    bestFor: [
      "Nomes divertidos e piadas internas com amigos",
      "Convites de festa infantil e posts casuais",
      "Destacar letras ou números soltos na bio",
    ],
    sampleInputs: ["Bolhas", "Festa 2026", "ABC"],
    platformTip:
      "Os caracteres delimitados funcionam muito bem em celulares, onde são mais usados. A exceção é o quadrado — muitos aparelhos renderizam como emoji, então veja como fica onde você vai colar.",
    faq: [
      {
        q: "Qual a diferença entre bolha e circulado?",
        a: "As letras de bolha ficam em círculos pretos cheios; as circuladas, em anéis finos. Bolha chama mais atenção; circulado é mais discreto.",
      },
      {
        q: "Por que o zero é diferente?",
        a: "O Unicode codifica o zero de forma diferente dos outros dígitos e dá a ele um caractere próprio. Os estilos bolha e circulado cobrem — só o entre parênteses pula o zero.",
      },
      {
        q: "Posso usar letras de bolha em nome de jogo?",
        a: "Alguns jogos aceitam caracteres delimitados, outros não. Copie uma combinação do Gerador de Nomes que mantém seu nome base limpo, para sempre ter um plano B.",
      },
    ],
  },
  "small-caps-generator": {
    navName: "Versalete",
    h1: "Gerador de versalete (small caps)",
    description:
      "Escreva em versalete — um visual discreto e premium para bios, nomes e legendas. Converta e copie na hora.",
    intro:
      "O versalete transforma seu texto em minúsculas-maiúsculas — o visual discreto e premium de bios limpas e perfis aesthetic. Digite, converta, copie.",
    howItWorks:
      "O versalete usa as Phonetic Extensions e Small Form Variants do Unicode: um conjunto de maiúsculas em miniatura que tipógrafos usam em notação acadêmica. Letras sem forma de versalete — como o x minúsculo — ficam como estão, e é por isso que o estilo continua lendo natural.",
    coverageNote:
      "O versalete converte A–Z e a–z. Dígitos e pontuação não mudam. Uma curiosidade: o x minúsculo não tem forma de versalete em nenhum lugar do Unicode, então continua minúsculo.",
    bestFor: [
      "Bios minimalistas e nomes aesthetic",
      "Títulos de seção e etiquetas em posts",
      "Um visual premium e discreto para frases curtas",
    ],
    sampleInputs: ["aesthetic", "Capítulo um", "mood"],
    platformTip:
      "O versalete está entre os caracteres estilizados mais seguros — renderiza em quase todo aparelho e é aceito em quase todo lugar, inclusive na maioria dos jogos.",
    faq: [
      {
        q: "Por que o x continua pequeno?",
        a: "O Unicode nunca definiu um versalete X, então não há substituto. Geradores que convertem o x usam outro caractere que pode não renderizar em todos os aparelhos.",
      },
      {
        q: "Versalete é o mesmo que minúscula?",
        a: "Não — são formas de maiúscula em tamanho menor, com desenho diferente das minúsculas. Copie um de cada e compare.",
      },
      {
        q: "Versalete funciona em nome de jogo?",
        a: "Normalmente sim — é um dos estilos mais aceitos. Jogos rigorosos ainda podem recusar, então veja antes na tela de troca de nome.",
      },
    ],
  },
  "strikethrough-text-generator": {
    navName: "Riscado",
    h1: "Gerador de texto riscado",
    description:
      "Risque texto com uma linha, uma barra ou negrito riscado. Copie o resultado em qualquer lugar que aceite texto simples.",
    intro:
      "Risque qualquer texto — para piadas, quedas de preço, sarcasmo e correções. Três versões de risco, todas coláveis em apps sem botão de formatação.",
    howItWorks:
      "O riscado não troca letras — ele acrescenta uma marca combinável depois de cada caractere. Seu texto original continua intacto por baixo, e é por isso que funciona igual com letras, dígitos, emoji e até caracteres chineses.",
    coverageNote:
      "Como o estilo adiciona marcas em vez de substituir caracteres, funciona com qualquer entrada. A contrapartida: leitores de tela podem ler o texto de baixo normalmente, e alguns apps espaçam as marcas de forma desigual.",
    bestFor: [
      "Correções engraçadas e piadas autoconscientes em bios e chats",
      "Preços riscados em posts de promoção",
      "Edições e retratações em grupos",
    ],
    sampleInputs: ["má ideia", "antes R$99", "deixa pra lá"],
    platformTip:
      "O riscado renderiza na maioria dos apps modernos. No Discord existe markdown de texto (~~assim~~) para mensagens — o risco Unicode é para bios, apelidos e todo lugar sem markdown.",
    faq: [
      {
        q: "Por que meu texto riscado fica desalinhado?",
        a: "Cada app desenha as marcas combináveis com suas próprias fontes, e algumas alinham mal. Se a linha parecer quebrada, o negrito riscado costuma alinhar melhor porque as letras são mais largas.",
      },
      {
        q: "Posso risar emoji?",
        a: "Sim — a marca entra depois do emoji e a linha o atravessa. O resultado varia um pouco por plataforma porque cada uma desenha emoji do seu jeito.",
      },
      {
        q: "O texto original continua ali embaixo?",
        a: "Sim. O risco é puramente visual — os caracteres não mudam, então copiar, buscar e leitores de tela continuam vendo o texto base.",
      },
    ],
  },
  "glitch-text-generator": {
    navName: "Glitch",
    h1: "Gerador de letras glitch (zalgo)",
    description:
      "Corrompa seu texto com marcas malditas — três intensidades de glitch, do sutil ao zalgo completo. Copie em um toque.",
    intro:
      "Infeste seu texto com marcas rastejantes. Escolha o nível de corrupção — de levemente errado a zalgo total — e cole o caos em qualquer lugar.",
    howItWorks:
      "O texto zalgo empilha marcas combináveis do Unicode acima e abaixo de cada caractere. Este gerador escolhe as marcas com um processo determinístico e semeado — a mesma entrada sempre produz o mesmo glitch, então a prévia é exatamente o que você copia.",
    coverageNote:
      "O glitch funciona com qualquer caractere — letras, dígitos, emoji — porque nada é substituído. As intensidades altas empilham muitas marcas por letra, e é dali que vem o visual de filme de terror.",
    bestFor: [
      "Nomes malditos e perfis de terror",
      "Memes e caos em grupos de conversa",
      "Bios de época de sustos e Halloween",
    ],
    sampleInputs: ["socorro", "não olhe", "olá"],
    platformTip:
      "O glitch é o estilo mais pesado que você pode colar. Alguns apps limitam o número de marcas, cortam ou renderizam em linha reta — sempre teste antes de renomear algo importante.",
    faq: [
      {
        q: "O que é zalgo?",
        a: "Uma lenda da internet nascida de um quadrinho de 2004: texto corrompido com diacríticos empilhados até parecer possuído. O nome colou como o do estilo.",
      },
      {
        q: "Por que meu glitch parece fraco em alguns apps?",
        a: "Os apps limitam ou normalizam as marcas combináveis para manter o texto renderizável. Nada está quebrado — o app está protegendo o próprio layout.",
      },
      {
        q: "Texto glitch é ruim para leitores de tela?",
        a: "Sim — as marcas empilhadas são lidas como dezenas de diacríticos ou puladas por completo. Reserve para nomes e piadas, nunca para informação importante.",
      },
    ],
  },
  "upside-down-text-generator": {
    navName: "De cabeça pra baixo",
    h1: "Gerador de letras de cabeça para baixo",
    description:
      "Vire seu texto de cabeça para baixo com letras e pontuação invertidas do Unicode. Digite, veja virar, copie e confunda todo mundo.",
    intro:
      "Vire tudo. Este gerador reescreve seu texto com formas de letra invertidas e inverte a ordem, para a linha inteira ler de ponta-cabeça (180°).",
    howItWorks:
      "Cada caractere é trocado por um parecido rotacionado — o a vira ɐ, o b vira q — e o resultado é invertido para a última letra vir primeiro. A pontuação também vira: o ponto de exclamação vira ¡ e o de interrogação vira ¿.",
    coverageNote:
      "Letras e dígitos convertem bem; algumas maiúsculas raras como K e Q não têm boa forma rotacionada e ficam como estão. Tudo que o mapa não consegue virar — incluindo emoji — passa sem mudança.",
    bestFor: [
      "Enigmas na bio e legendas de 'leia se conseguir'",
      "Zoeiras em respostas de grupo",
      "Nomes que fazem as pessoas entortar a cabeça",
    ],
    sampleInputs: ["olá", "me vira", "uau"],
    platformTip:
      "O texto invertido funciona bem em bios e mensagens. Detalhe: leitores de tela vão ler o texto invertido literalmente — mantenha curto e brincalhão.",
    faq: [
      {
        q: "Ele realmente rotaciona ou substitui letras?",
        a: "Substitui: o Unicode tem formas invertidas dedicadas como ɐ e ǝ. Essa substituição é o motivo de o texto sobreviver ao copiar e colar.",
      },
      {
        q: "Por que meu texto sai ao contrário?",
        a: "O texto rotacionado lê-se visualmente da direita para a esquerda, então inverter a ordem faz ele ler certo quando a página está de cabeça para baixo.",
      },
      {
        q: "Dá para virar emoji?",
        a: "Não — emoji não têm formas rotacionadas, então passam sem mudança e continuam para cima.",
      },
    ],
  },
  "tiny-text-generator": {
    navName: "Pequenas",
    h1: "Gerador de letras pequenas",
    description:
      "Encolha seu texto com sobrescrito e subscrito Unicode. Dois estilos tiny, prévia instantânea e cópia para qualquer lugar.",
    intro:
      "Encolha suas palavras até o tamanho de um sussurro. O sobrescrito flutua o texto acima da linha; o subscrito afunda abaixo. Os dois copiam como texto simples.",
    howItWorks:
      "O texto tiny usa letras modificadoras em sobrescrito e subscrito do Unicode — os mesmos caracteres de notas de rodapé e fórmulas químicas. Cada um é um lookalike compacto a uma fração do tamanho normal.",
    coverageNote:
      "É o estilo mais parcial do site: os sobrescritos minúsculos cobrem quase todas as letras menos o q, e os subscritos pulam b, c, d, f, g, q, w, y e z. O que não tem forma tiny — incluindo quase todas as maiúsculas — fica normal, então resultados misturados são o esperado.",
    bestFor: [
      "Notas de rodapé na bio ('ela/dela', créditos mini)",
      "Química e matemática invertidas em perfis de estudo",
      "Comentários discretos ao lado de texto mais forte",
    ],
    sampleInputs: ["sussurro", "H2O", "nota:"],
    platformTip:
      "O texto tiny renderiza bem em bios e mensagens, mas buracos onde falta letra podem aparecer. Se isso incomodar, o versalete dá uma sensação parecida com cobertura completa.",
    faq: [
      {
        q: "Por que algumas letras são grandes e outras pequenas?",
        a: "O Unicode não tem forma de sobrescrito ou subscrito para todas as letras. As que faltam ficam no tamanho normal — é uma limitação conhecida do estilo.",
      },
      {
        q: "Dá para escrever números tiny?",
        a: "Sim — os dígitos em sobrescrito e subscrito são completos, do ⁰ ao ⁹ e do ₀ ao ₉. Por isso o H₂O sai perfeito.",
      },
      {
        q: "Texto tiny dá para ler?",
        a: "Em tamanho de bio, quase. É melhor para uma ou duas palavras, não frases — e nunca para informação que precisa ser acessível.",
      },
    ],
  },
  "cute-font-generator": {
    navName: "Fofa",
    h1: "Gerador de letras fofas",
    description:
      "Letras fofas para copiar e colar: bolhas redondas com um coração, um laço ou uma flor. Grátis no navegador, sem instalar nada.",
    intro:
      "Digite um nome e veja letras bolha com um coração, o laço ୨୧ ou uma flor. Também chamam isso de kawaii ou soft. Uma linha cursiva fica embaixo se você quiser mais quieta. O script com fita está na página coquette. São caracteres para colar, não um arquivo de fonte.",
    howItWorks:
      "Letras bolha e circuladas são alfanuméricos fechados. A linha que flui é Mathematical Script. Corações, laços (୨୧), flores e colchetes suaves são símbolos separados, e só a linha bolha os usa — um par por vez, para o nome continuar legível.",
    coverageNote:
      "Bolha e circuladas convertem A–Z, a–z e dígitos. A cursiva converte só letras, então os números dessa linha ficam normais. Acentos, emoji e outros alfabetos passam direto. Os enfeites são caracteres extras em volta da palavra.",
    bestFor: [
      "Nomes de exibição e bios que devem parecer suaves",
      "Um nome curto com um coração ou um laço só",
      "Legendas, não frases inteiras",
    ],
    sampleInputs: ["Momo", "Doce", "Pêssego"],
    platformTip:
      "Essas letras funcionam na maioria dos nomes de exibição e bios do Instagram, TikTok e Discord. Usuários que só aceitam letras simples vão rejeitar. Se um laço ou colchete virar um quadrado vazio, copie a linha do coração.",
    faq: [
      {
        q: "Letra fofa é um arquivo para baixar?",
        a: "Não. O resultado são caracteres Unicode, e por isso cola em apps que só aceitam texto puro. Este site não oferece arquivos de fonte.",
      },
      {
        q: "Coquette ou kawaii é outro gerador?",
        a: "Kawaii fica nesta página: letras bolha com um coração, o laço ୨୧ ou uma flor. Coquette é a outra página, letras script com um laço de fita.",
      },
      {
        q: "Posso usar isso como usuário do Instagram?",
        a: "Não. O usuário do Instagram só aceita letras, números, pontos e underlines. Cole o nome fofo no nome de exibição ou na bio.",
      },
    ],
  },
  "cool-font-generator": {
    navName: "Cool",
    h1: "Gerador de letras cool",
    description:
      "Nomes cool para copiar e colar: letras grossas com um raio, estrelas ou uma asa de clã. Grátis, e fica no seu navegador.",
    intro:
      "Letras grossas, depois um raio, uma marca de estrela ou as asas de clã ꧁༒. Também buscam isso como texto stylish ou tag de clã. Aqui se monta um nome decorado. A lista de cada alfabeto, sem símbolos, está em Letras bonitas.",
    howItWorks:
      "As letras pesadas são Unicode Mathematical Bold. As versaletes são a segunda linha, mais quieta e sem enfeite, para comparar com a linha grossa decorada. Estrelas, raios e asas envolvem só a linha grossa.",
    coverageNote:
      "O negrito converte letras e dígitos. As versaletes convertem a maioria das letras e deixam algumas iguais quando o Unicode não tem forma versalete. Os enfeites contam no limite de caracteres do nome.",
    bestFor: [
      "Nomes do Discord e tags de jogo",
      "Um nome de clã com um par de asas",
      "Uma palavra que precise pesar mais que a cursiva",
    ],
    sampleInputs: ["Nova", "Ás", "Clã"],
    platformTip:
      "O negrito Unicode costuma sobreviver no Discord e nas bios. Jogos que só aceitam ASCII puro vão tirar. As asas falham primeiro em celulares antigos — se sumirem, copie a linha do raio.",
    faq: [
      {
        q: "É a mesma coisa que a página de letras bonitas?",
        a: "Não. Letras bonitas lista cada alfabeto e não põe enfeite. Esta página só monta o visual cool: negrito mais raio, estrelas ou asas de clã.",
      },
      {
        q: "O que é texto stylish aqui?",
        a: "Os mesmos nomes grossos decorados. Stylish, nesta página, são as linhas do raio, da estrela e das asas — não outro alfabeto.",
      },
      {
        q: "Uma tag de clã cabe num usuário de jogo?",
        a: "Muitas vezes o símbolo é a parte rejeitada. Se as asas sumirem na prévia do jogo, use a linha de negrito sem enfeite.",
      },
    ],
  },
  "dark-font-generator": {
    navName: "Sombria",
    h1: "Gerador de letras sombrias",
    description:
      "Nomes sombrios para copiar e colar: letra gótica com uma caveira, uma adaga ou uma lua. Para bios e nomes de exibição, não para baixar uma fonte.",
    intro:
      "Letra gótica com um símbolo sombrio — uma caveira, uma adaga ou uma lua. Letra emo é essa mistura. A página gótica é o alfabeto nu, sem caveiras. Esta é a versão decorada.",
    howItWorks:
      "As letras são Unicode Fraktur. O corte grosso vai decorado; o corte normal fica nu embaixo. Caveiras, adagas e luas são símbolos à parte, só na linha grossa.",
    coverageNote:
      "Os dois estilos fraktur convertem só A–Z e a–z. Os dígitos ficam como você digitou. A caveira é um símbolo e pode mudar de cara em cada celular. Acentos e outros alfabetos passam direto.",
    bestFor: [
      "Bios sombrias e nomes do Discord",
      "Nomes emo de uma palavra só",
      "Frases de Halloween que ainda precisam ser copiadas como texto",
    ],
    sampleInputs: ["Noite", "Emo", "Corvo"],
    platformTip:
      "O fraktur funciona em muitas bios e falha em jogos que exigem ASCII puro. Se a caveira virar um quadrado vazio, copie a linha da adaga ou da lua.",
    faq: [
      {
        q: "Texto emo é diferente de gótico?",
        a: "Gótico, neste site, é o alfabeto blackletter nu. Emo é esse alfabeto mais uma caveira, uma adaga ou uma lua — ou seja, esta página.",
      },
      {
        q: "Posso baixar uma fonte sombria?",
        a: "Não. Você copia caracteres. Um arquivo de fonte precisaria ser instalado, e aqui não se instala nada.",
      },
      {
        q: "Por que algumas letras parecem diferentes?",
        a: "O fraktur guarda formas históricas para C, H, I, R e Z. Esse desenho é o alfabeto, não uma falha.",
      },
    ],
  },
  "elegant-font-generator": {
    navName: "Elegante",
    h1: "Gerador de letras elegantes",
    description:
      "Cursiva elegante para copiar e colar, com uma coroa, uma flor-de-lis ou um coração floral. Para nomes, legendas e bios.",
    intro:
      "Cursiva grossa, depois uma coroa, uma flor-de-lis ou um coração floral. Nomes royal e de princesa são esse mesmo visual: letras que fluem e um símbolo formal, não bolhas redondas.",
    howItWorks:
      "As letras são Unicode Bold Script, com a cursiva fina como segunda linha nua. Coroas, flores-de-lis e corações florais envolvem só a cursiva grossa, então o enfeite fica um par por resultado.",
    coverageNote:
      "Os dois estilos de cursiva convertem só letras. Dígitos, acentos e emoji ficam como você digitou. Cada coroa ou flor-de-lis é um caractere extra daquele lado do nome.",
    bestFor: [
      "Nomes de casamento, beleza e perfis formais",
      "Um nome royal ou de princesa na bio",
      "Legendas curtas que devem parecer arrumadas",
    ],
    sampleInputs: ["Rosa", "Rainha", "Ada"],
    platformTip:
      "A cursiva funciona na maioria dos nomes de exibição e bios do Instagram, TikTok e Discord, não em usuários limitados a letras simples. Se a cursiva grossa virar quadrados, copie a linha fina.",
    faq: [
      {
        q: "Elegante é a mesma coisa que cursiva?",
        a: "A cursiva é o alfabeto script nu. Elegante usa a cursiva mais grossa e acrescenta um símbolo formal: coroa, flor-de-lis ou coração floral.",
      },
      {
        q: "Onde ficam as fontes royal e de princesa?",
        a: "Nesta página. Um nome de princesa ou royal aqui é cursiva mais uma coroa ou uma flor-de-lis, não um download separado.",
      },
      {
        q: "Isso é um arquivo de caligrafia?",
        a: "Não. Você copia caracteres. Arquivos de caligrafia se instalam, e este site não oferece isso.",
      },
    ],
  },
  "aesthetic-text-generator": {
    navName: "Aesthetic",
    h1: "Gerador de letras aesthetic",
    description:
      "Letras largas vaporwave com um brilho ou uma névoa de pontos de cada lado, e versaletes se quiser mais quieto. Copiar e colar, sem arquivo de fonte.",
    intro:
      "Letras largas full-width — o visual vaporwave — com uma névoa de pontos ou um brilho de cada lado. Os versaletes são a segunda linha quando as letras largas ficam altas demais.",
    howItWorks:
      "Os caracteres full-width vêm de codificações antigas onde texto CJK e latino dividiam grades de largura fixa, então as letras latinas ganharam caixas largas próprias. Os espaços também alargam, e dali vem o ritmo lento. A névoa de pontos e o brilho são símbolos em volta só dessa linha larga. Não fazem parte do alfabeto full-width.",
    coverageNote:
      "O full-width cobre letras, dígitos e espaços. Os versaletes cobrem a maioria das letras e deixam algumas iguais. A pontuação fica normal. Os enfeites acrescentam caracteres e deixam a linha ainda mais larga.",
    bestFor: [
      "Perfis vaporwave, lo-fi e retrô",
      "Uma bio de uma palavra larga com um pouco de brilho",
      "Posts retro-tech e dos anos 80/90",
    ],
    sampleInputs: ["aesthetic", "v a p o r", "sonho 1997"],
    platformTip:
      "O texto full-width aparece onde aparece texto CJK, ou seja, em quase tudo. É largo, e o brilho deixa mais largo — confira se a linha ainda cabe na bio. Se um brilho falhar, a linha larga nua ainda copia.",
    faq: [
      {
        q: "Por que o nome é texto vaporwave?",
        a: "Letras largas e espaçamento lento viraram a assinatura visual do vaporwave. O nome técnico das letras é texto full-width. O brilho é um símbolo separado de cada lado.",
      },
      {
        q: "O espaçamento largo também copia?",
        a: "Sim. O espaço largo é um caractere real, o espaço ideográfico, então o ritmo arejado sobrevive à colagem. Também usa mais do limite de caracteres.",
      },
      {
        q: "Os enfeites contam na minha bio?",
        a: "Sim. Cada letra full-width conta como uma, e cada brilho ou ponto também. Uma palavra curta é o tamanho confortável.",
      },
    ],
  },
  "coquette-font-generator": {
    navName: "Coquette",
    h1: "Gerador de letras coquette",
    description:
      "Texto coquette para copiar e colar: letras script com um laço de fita. Para o nome de exibição do Instagram e o apelido do Discord, não para baixar uma fonte.",
    intro:
      "Letras script e um laço só. As linhas são um laço pequeno, um par de fitas e o emoji de fita. O fofo deste site são as letras bolha. Esta página fica no laço.",
    howItWorks:
      "O laço envolve o script pesado, Unicode Bold Script, porque esse alfabeto tem e, g e o de verdade. O script fino fica embaixo, sem laço, e nessa linha e, g e o são substitutos, então um nome como Belle fica na linha pesada. Os laços e a fita são símbolos separados, só na linha pesada.",
    coverageNote:
      "O script converte A–Z e a–z. Os dígitos ficam como você digitou. O laço pequeno é um caractere raro e pode aparecer como um quadrado vazio. Se isso acontecer, copie a linha do emoji de fita. Os enfeites contam no limite do nome.",
    bestFor: [
      "Nomes de exibição e bios do Instagram",
      "Apelidos e status curtos do Discord",
      "Um nome de uma palavra com um laço só",
    ],
    sampleInputs: ["Mia", "Lila", "Belle"],
    platformTip:
      "Cole no nome de exibição do Instagram ou no apelido do Discord. Esses usuários só aceitam letras comuns, dígitos e algumas marcas, então o laço fica fora do usuário. O nome de exibição fica em torno de 30 caracteres no Instagram e o apelido em torno de 32 no Discord. Se o laço pequeno falhar, o emoji de fita ainda copia.",
    faq: [
      {
        q: "Coquette é uma fonte para baixar?",
        a: "Não. Você copia caracteres. Um arquivo de fonte precisaria ser instalado, e este site não oferece isso.",
      },
      {
        q: "Qual a diferença para as letras fofas?",
        a: "O fofo são letras bolha com um coração, o laço ୨୧ ou uma flor. Coquette é script com um laço de fita. As duas páginas não compartilham enfeites.",
      },
      {
        q: "Posso colocar um nome coquette no usuário do Instagram?",
        a: "Não. O usuário continua comum. Cole o nome estilizado no nome de exibição ou na bio.",
      },
    ],
  },
  "preppy-font-generator": {
    navName: "Preppy",
    h1: "Gerador de letras preppy",
    description:
      "Nomes preppy para copiar e colar: versaletes com um coração limpo. Curtos para testar num nome de exibição do Adopt Me.",
    intro:
      "Versaletes e um coração só: branco, de naipe ou virado. Sem laços e sem letras bolha. Esse visual mais barulhento está na outra página. Este fica limpo, que é o que os nomes preppy do Adopt Me costumam querer.",
    howItWorks:
      "Versaletes são letras modificadoras do Unicode que parecem maiúsculas mais baixas. O script é a segunda linha, sem enfeite. Cada coração é um símbolo só na linha de versaletes, um par ou um lado, para o nome continuar curto.",
    coverageNote:
      "Os versaletes cobrem a maioria das letras e deixam algumas iguais quando o Unicode não tem a forma. O script só converte letras, então os dígitos dessa linha ficam normais. Os corações são caracteres extras. O coração branco é um emoji e costuma ser o primeiro que o filtro de um jogo rejeita.",
    bestFor: [
      "Nomes de exibição curtos do Adopt Me",
      "Um nome limpo com um coração só",
      "Bios que devem parecer arrumadas, não redondas",
    ],
    sampleInputs: ["Mila", "Blair", "Tess"],
    platformTip:
      "O Adopt Me mostra seu nome de exibição do Roblox, em geral cerca de 20 caracteres, e o usuário não aceita fontes. Um nome curto em versaletes com um coração cabe nessa caixa mais vezes do que um laço dos dois lados. Cole na tela de nome do Roblox antes de confirmar a troca.",
    faq: [
      {
        q: "Preppy é a mesma coisa que coquette?",
        a: "Não. Coquette é script com um laço de fita. Preppy são versaletes com um coração limpo.",
      },
      {
        q: "Isso funciona como usuário do Adopt Me?",
        a: "O usuário do Roblox continua letras, dígitos e um sublinhado. Teste o nome estilizado como nome de exibição, e só depois que a prévia do próprio jogo aceitar.",
      },
      {
        q: "Por que os corações são tão simples?",
        a: "Uma pilha de laços come os 20 caracteres do nome de exibição e o filtro corta com mais frequência. Um coração é a marca preppy e ainda deixa espaço para o nome.",
      },
    ],
  },
  "heart-font-generator": {
    navName: "Coração",
    h1: "Gerador de letras com coração",
    description:
      "Texto com coração para copiar e colar: letras script e um coração diferente em cada uma de doze linhas. Grátis no navegador, sem instalar nada.",
    intro:
      "Letras script e um par de corações por linha: doze corações, e nenhuma linha repete o símbolo. Um coração nas letras bolha fica na página fofa. Um coração limpo nos versaletes fica na página preppy. Você copia caracteres. Não é um arquivo de fonte nem um desenho de letras.",
    howItWorks:
      "As linhas com coração envolvem o script pesado do Unicode, o alfabeto que tem e, g e o de verdade. O script fino fica embaixo, sem coração, e nessa linha e, g e o são substitutos, então um nome como Love ou Belle fica numa linha com coração. A bolha é a terceira linha e fica sem enfeite, para não repetir a página fofa. Cada coração é um símbolo separado, só na linha pesada.",
    coverageNote:
      "O script e o script pesado convertem A–Z e a–z. Os dígitos ficam como você digitou. A bolha converte letras e dígitos. Acentos, emoji e outros alfabetos passam sem mudança. Os corações são caracteres extras e contam no limite do nome. Os corações menores são raros e podem aparecer como um quadrado vazio: se um falhar, copie a linha do coração vermelho ou a do brilho.",
    bestFor: [
      "Nomes de exibição e bios do Instagram e do TikTok",
      "Um nome de uma palavra ou uma legenda curta",
      "Apelidos do Discord em que um coração de cada lado basta",
    ],
    sampleInputs: ["Love", "Mia", "Honey"],
    platformTip:
      "Cole o nome com coração no nome de exibição ou na bio do Instagram, na bio do TikTok ou no apelido do Discord. Usuários que só aceitam letras comuns rejeitam os corações. O nome de exibição fica em torno de 30 caracteres no Instagram e o apelido em torno de 32 no Discord, então um coração de cada lado de uma palavra curta cabe mais vezes do que uma pilha de símbolos.",
    faq: [
      {
        q: "A fonte de coração é um arquivo para baixar?",
        a: "Não. O resultado são caracteres Unicode, e é por isso que cola em apps que só aceitam texto puro. Este site não oferece arquivos de fonte e não desenha as letras numa imagem.",
      },
      {
        q: "Qual a diferença para as páginas fofa e preppy?",
        a: "O fofo são letras bolha com um coração, um laço ou uma flor. Preppy são versaletes com um coração limpo. Esta página é script com doze pares de coração diferentes, e esses corações não aparecem nas outras páginas.",
      },
      {
        q: "Posso usar um nome com coração como usuário do Instagram?",
        a: "Não. O usuário do Instagram só aceita letras, dígitos, pontos e sublinhados. Cole o nome com coração no nome de exibição ou na bio.",
      },
    ],
  },
  "chicano-font-generator": {
    navName: "Chicana",
    h1: "Gerador de letra chicana",
    description:
      "Texto no estilo chicano para copiar e colar: gótica com um enfeite por linha, mais uma linha script. Grátis no navegador. Não é um arquivo de fonte nem um estêncil de tatuagem.",
    intro:
      "Gótica clássica e um enfeite por linha: doze marcas, e nenhuma é a caveira ou a lua da página escura. A gótica sem enfeite está na página gothic. Você copia caracteres. Isto não é lettering chicano desenhado à mão, nem um estêncil.",
    howItWorks:
      "As linhas com enfeite envolvem o Fraktur do Unicode, a letra gótica que muita gente chama de Old English. A gótica pesada fica embaixo, sem enfeite, para o traço grosso continuar legível em tamanho pequeno. O script pesado é a terceira linha e fica sem enfeite: ocupa o lugar da metade cursiva do estilo, e as letras não são ligadas. Cada enfeite é um símbolo separado, só na linha gótica clássica.",
    coverageNote:
      "As duas góticas convertem só A–Z e a–z. Dígitos, letras com acento como á, é e ñ, e emoji ficam como você digitou, porque o Unicode não tem forma gótica para eles. O script pesado só converte letras. Os enfeites são caracteres extras e contam no limite do nome. Um enfeite raro pode aparecer como um quadrado vazio: se isso acontecer, copie a linha da cruz ou a gótica nua.",
    bestFor: [
      "Um nome curto ou um lema de uma palavra na bio",
      "Comparar gótica e script antes de passar o trabalho a um letrista",
      "Um nome de exibição que queira gótica sem as caveiras da página escura",
    ],
    sampleInputs: ["Rosa", "Luz", "Vida"],
    platformTip:
      "Cole num nome de exibição ou na bio e confira nesse app. Jogos que só aceitam letras comuns rejeitam a gótica. Estes caracteres não são um estêncil de tatuagem: os traços são glifos de texto, não um desenho no tamanho da pele.",
    faq: [
      {
        q: "Isto é uma fonte chicana para baixar?",
        a: "Não. Você copia caracteres Unicode. Este site não oferece um arquivo de fonte e não carrega as góticas ou scripts pagos que os geradores de imagem usam.",
      },
      {
        q: "É lettering chicano tradicional?",
        a: "Não. O lettering chicano é gótica e script desenhados à mão, do trabalho gráfico mexicano-americano: murais, carros e tatuagens. Estas linhas só se aproximam do visual gótico, mais um alfabeto script. Não são um estêncil nem substituem um artista.",
      },
      {
        q: "Por que ñ e as letras com acento ficam normais?",
        a: "O fraktur do Unicode não tem forma para elas, então passam iguais e o resto das letras ainda converte.",
      },
    ],
  },
};
