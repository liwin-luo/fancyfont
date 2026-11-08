// Brazilian Portuguese copy for the 11 multilingual style pages.
// Populated with hand-written PT-BR; see style-pages-en.ts for the reference.

import type { Locale } from "../i18n";
import type { StylePageCopy } from "../style-pages";

export const stylePagesPtBr: Record<string, { [L in Locale]?: StylePageCopy }> = {
  "cursive-fonts": {
    "pt-br": {
      navName: "Cursiva",
      h1: "Gerador de Fonte Cursiva",
      title: "Gerador de Letras Cursivas — script, negrito e adornos ♡",
      description:
        "Letras cursivas bonitas: script claro, script negrito e adornos com ♡ e ✧. Aparecem em tempo real ao digitar e copiam com um toque, para bios e nicknames.",
      intro: [
        "Digite um nome, uma palavra ou uma frase curta na caixa abaixo e as versões cursivas aparecem em todos os cartões na hora. Toque para copiar — sem instalar fonte, sem cadastro, sem limite.",
        "Essas “fontes cursivas” não são fontes de verdade: são caracteres Unicode do bloco de Símbolos Alfanuméricos Matemáticos que por acaso parecem escritos à mão. Como são texto comum, o estilo sobrevive a qualquer copiar e colar em nicknames, bios e assinaturas.",
      ],
      steps: [
        "Digite seu nome ou a frase favorita na caixa.",
        "Compare a cursiva leve com a cursiva negrito; as combinações com ♡ e ✧ já vêm com decoração.",
        "Toque em copiar na que ganhar, ou favorite algumas candidatas e decida depois.",
        "Cole no app e publique um teste antes de valer.",
      ],
      about: {
        heading: "Como o texto cursivo funciona",
        paragraphs: [
          "As letras estilizadas vêm do bloco de Símbolos Alfanuméricos Matemáticos do Unicode, criado em 2001 para diagramar fórmulas. Um gerador só faz uma coisa: trocar cada letra comum pelo caractere estilizado da mesma posição — ordem, comprimento e maiúsculas/minúsculas continuam idênticos.",
          "Como cada letra precisa de um glifo correspondente, a cursiva cobre apenas A–Z. Chinês, japonês e árabe não têm versões estilizadas no Unicode — nesses casos, a saída são molduras decorativas em volta do texto.",
        ],
      },
      faq: [
        {
          q: "Onde posso colar texto cursivo?",
          a: "Em qualquer campo que aceite texto simples: nomes de exibição, bios, assinaturas, nicknames de chat, IDs de jogo. Campos com validação rígida — @usuários, logins — costumam rejeitar caracteres estilizados.",
        },
        {
          q: "Por que algumas letras aparecem como quadradinhos em outros aparelhos?",
          a: "As fontes do aparelho que recebe não têm esses glifos — comum em sistemas antigos. Trocar para a cursiva negrito costuma resolver. Favorite duas candidatas para ter um plano B.",
        },
        {
          q: "Texto cursivo atrapalha a busca?",
          a: "Sim. Caracteres estilizados não são letras comuns, então buscar seu nickname exato pode falhar. Deixe o nome real em caracteres simples em algum lugar — decoração é para exibir, não para procurar.",
        },
      ],
    },
  },
  "bold-fonts": {
    "pt-br": {
      navName: "Negrito",
      h1: "Gerador de Texto em Negrito",
      title: "Gerador de Texto em Negrito — clássico, sans e itálico",
      description:
        "Negrito bonito de verdade em 4 pesos, números inclusos: renderiza ao digitar e copia com um toque; a ênfase sobrevive a qualquer colagem.",
      intro: [
        "A maioria dos chats e redes sociais não deixa negritar uma palavra — aqui os próprios caracteres já nascem em negrito, então a ênfase sobrevive a qualquer colagem.",
        "São quatro pesos para escolher: negrito clássico, sem serifa em negrito, negrito itálico e itálico. Os números também ganham versão em negrito, então datas e valores funcionam.",
      ],
      steps: [
        "Digite a palavra, a frase ou o número que você quer destacar.",
        "Compare os quatro pesos — negrito para títulos, itálico para toques.",
        "Copie e cole no chat, na assinatura ou no título.",
        "Se o app renderizar estranho, troque para o negrito sem serifa.",
      ],
      about: {
        heading: "Negrito no nível do caractere",
        paragraphs: [
          "Esse negrito é diferente do do editor de textos: não é uma marcação de formatação, é uma troca para o bloco de negritos matemáticos do Unicode. A espessura está gravada no próprio caractere, sem depender de nenhum motor de layout.",
          "O preço é a acessibilidade: leitores de tela podem anunciar 𝗕𝗼𝗹𝗱 como “B negrito matemático sem serifa…” — ruído para quem escuta. Use em frases curtas, nunca em parágrafos.",
        ],
      },
      faq: [
        {
          q: "Negrito funciona em apps de mensagem como WhatsApp ou Discord?",
          a: "Sim — o negrito faz parte dos caracteres, então as bolhas de mensagem mantêm o estilo sem nenhuma sintaxe de formatação.",
        },
        {
          q: "Posso misturar negrito com emoji?",
          a: "Pode. Emoji não tem versão em negrito e passa sem mudança enquanto as letras latinas ficam bold — texto misto funciona bem.",
        },
        {
          q: "Dá para usar negrito em hashtags?",
          a: "Melhor não. Hashtags casam com letras simples; uma #Bold estilizada não é indexada nem clicável. Deixe as hashtags em caracteres comuns.",
        },
      ],
    },
  },
  "gothic-fonts": {
    "pt-br": {
      navName: "Gótica",
      h1: "Gerador de Fonte Gótica",
      title: "Gerador de Fonte Gótica — blackletter Old English",
      description:
        "Letras góticas bonitas estilo Old English: dois pesos de fraktur, prévia em tempo real ao digitar e copiar com um toque, para nicknames dark e IDs de jogo.",
      intro: [
        "A gótica (fraktur/blackletter) é a letra dos jornais antigos e dos logos de bandas de metal. Digite uma palavra e os dois pesos aparecem ao vivo — toque em um cartão para copiar.",
        "Combine com decorações ☠ ou ⚔ e você tem um nickname dark pronto. Apenas letras latinas — outros alfabetos passam sem mudança.",
      ],
      steps: [
        "Digite seu nickname, o nome da banda ou uma frase curta.",
        "Compare os dois pesos — o negrito continua legível em tamanho pequeno.",
        "Copie, cole no campo de nome e publique um teste para conferir a renderização.",
        "Se aparecerem quadradinhos em aparelhos antigos, troque para o peso negrito ou para a cursiva.",
      ],
      about: {
        heading: "A letra dos jornais antigos virou Unicode",
        paragraphs: [
          "O bloco de Símbolos Alfanuméricos Matemáticos do Unicode inclui um fraktur A–Z. A legibilidade é naturalmente baixa, então limite-se a duas ou três palavras — nicknames e títulos, nunca frases inteiras.",
          "Algumas letras (C, H, I, R, Z) não têm ponto de código fraktur padrão, então entram os substitutos decorativos conhecidos — a mesma convenção que todo gerador segue.",
        ],
      },
      faq: [
        {
          q: "Posso usar texto gótico em jogos?",
          a: "A maioria dos jogos aceita nicknames Unicode, e o blackletter costuma passar. Jogos com validação por lista branca podem recusar — se aparecer erro de “caracteres inválidos”, só resta texto simples ali.",
        },
        {
          q: "Gótica é a mesma coisa que Old English?",
          a: "No dia a dia, sim — “fonte Old English” quase sempre quer dizer blackletter fraktur, e não a língua inglesa antiga de verdade.",
        },
        {
          q: "Por que algumas letras parecem diferentes?",
          a: "O Unicode só traz glifos fraktur para parte do alfabeto; C, H, I, R e Z usam substitutos decorativos. Todos os geradores produzem o mesmo resultado.",
        },
      ],
    },
  },
  "small-fonts": {
    "pt-br": {
      navName: "Versalete",
      h1: "Gerador de Texto Pequeno",
      title: "Gerador de Texto Pequeno — versalete, ˢᵘᵖ e ˢᵘᵇ",
      description:
        "Texto pequeno bonito: versalete, sobrescrito e subscrito renderizam ao digitar e copiam com um toque, discretos para bios e assinaturas.",
      intro: [
        "Precisa de uma segunda linha discreta na bio? O versalete transforma letras em maiúsculas em miniatura, o sobrescrito eleva o texto e o subscrito desce. Prévia ao vivo, toque para copiar.",
        "Os três estilos têm uma qualidade em comum: eles não gritam. Uma linha em versalete no meio de estilos chamativos cria hierarquia na hora.",
      ],
      steps: [
        "Digite a frase que você quer encolher.",
        "Versalete combina com linhas inteiras; sobrescrito e subscrito servem para uma ou duas palavras.",
        "Copie e cole na bio, na assinatura ou na anotação.",
        "Algumas maiúsculas não têm glifo em versalete e ficam como estão — é normal.",
      ],
      about: {
        heading: "Os limites de encolher",
        paragraphs: [
          "O conjunto de versalete do Unicode não tem X (e o Q usa um sósia), e a tabela de sobrescritos está sem várias maiúsculas. O motor é honesto: caracteres sem versão estilizada permanecem como digitados, em vez de serem falsificados.",
          "“Pequeno” aqui significa caracteres diferentes, não mudança de tamanho de fonte — altura de linha e espaçamento continuam sob controle da plataforma, e o texto segue legível em telas pequenas.",
        ],
      },
      faq: [
        {
          q: "Por que algumas letras não mudaram?",
          a: "O Unicode não tem glifos em versalete para todas as letras — o X não tem nenhum. Todos os geradores têm as mesmas lacunas.",
        },
        {
          q: "Para que servem os números sobrescritos?",
          a: "Selos de ano como ²⁰²⁶, notas de rodapé e piadas de fórmula — também combinam com texto normal como anotações.",
        },
        {
          q: "Texto pequeno é mais difícil de ler?",
          a: "As formas das letras são comuns; só o tamanho visual muda. Mas leitores de tela podem anunciar “sobrescrito” a cada caractere, então evite em tudo que precisa ser lido em voz alta.",
        },
      ],
    },
  },
  "aesthetic-fonts": {
    "pt-br": {
      navName: "Estético",
      h1: "Gerador de Fonte Estética",
      title: "Gerador de Fonte Estética — texto fullwidth ＡＥＳＴＨＥＴＩＣ",
      description:
        "Letras estéticas bonitas: fullwidth ＡＥＳＴＨＥＴＩＣ com molduras vaporwave ✧ ｡ﾟ. Aparecem ao digitar e copiam com um toque, o visual retrô para bios e legendas.",
      intro: [
        "ａｅｓｔｈｅｔｉｃ — trocar as letras comuns por formas fullwidth alarga tudo em um ritmo uniforme e sonhador. Adicione uma moldura com ✧ ou ｡ﾟ e o pacote vaporwave está completo. Toque para copiar.",
        "Os caracteres fullwidth foram criados para a diagramação CJK, e é exatamente por isso que qualquer palavra escrita neles ganha aquele clima inconfundível de manual japonês.",
      ],
      steps: [
        "Digite uma palavra ou frase curta — quanto mais curta, melhor fica.",
        "Use o corpo fullwidth puro ou sobreponha uma combinação ✧・｡ﾟ.",
        "Copie e cole na bio, na legenda ou na descrição do vídeo.",
        "Letras fullwidth são largas — confira o contador de caracteres da plataforma.",
      ],
      about: {
        heading: "Por que se chama estético",
        paragraphs: [
          "Fullwidth Forms é o alfabeto latino alargado do Unicode, criado para compatibilidade com terminais CJK antigos. Cada caractere ocupa uma célula ideográfica inteira, o que dá ao texto um espaçamento leve e intencional — o ingrediente central do visual vaporwave.",
          "As combinações decorativas usam caracteres da mesma família de largura, então o ritmo segue uniforme em vez de ficar ruidoso como emoji aleatórios.",
        ],
      },
      faq: [
        {
          q: "Quantos caracteres cada letra fullwidth conta?",
          a: "A maioria das plataformas conta um por caractere; algumas contam a largura de exibição como 2. Observe o contador da própria plataforma depois de colar.",
        },
        {
          q: "Fullwidth combina bem com texto misto?",
          a: "Perfeitamente — as letras fullwidth têm exatamente a mesma largura de caracteres CJK, então bios mistas mantêm o ritmo uniforme. É o melhor estilo latino para texto misto.",
        },
        {
          q: "Por que parece japonês?",
          a: "As formas fullwidth pertencem à tradição de diagramação CJK, que o japonês usa intensamente. Continuam sendo caracteres Unicode padrão, sem língua fixa.",
        },
      ],
    },
  },
  "cute-fonts": {
    "pt-br": {
      navName: "Fofo",
      h1: "Gerador de Fonte Fofa",
      title: "Gerador de Fonte Fofa — corações, laços e miudezas",
      description:
        "Letras fofas e bonitas: bolha, cursiva e circuladas com adornos de ♡ ୨୧ ✿. Aparecem ao digitar e copiam com um toque, modelos prontos para nomes combinando.",
      intro: [
        "Letras bolha, corações, laços e colchetes macios — o kit completo da fofura em uma página. Digite um nome e todos os estilos e combinações aparecem ao vivo; toque para copiar.",
        "As combinações decorativas embrulham o estilo vencedor em um par de símbolos — ♡querida♡. Salve várias versões e troque conforme o humor.",
      ],
      steps: [
        "Digite um nome ou uma frase curtinha e doce.",
        "Escolha a base: bolha é a mais redonda, cursiva é a mais suave.",
        "Sobreponha uma combinação decorativa — corações e laços são os favoritos do público.",
        "Favorite algumas candidatas e teste como renderizam na plataforma.",
      ],
      about: {
        heading: "A receita do fofo",
        paragraphs: [
          "A fofura vem de glifos redondos mais decorações simétricas. Letras bolha e circuladas carregam o formato arredondado; corações e flores dos dois lados criam um ritmo suave.",
          "Os símbolos decorativos variam em compatibilidade: ♡ e ✿ funcionam em quase todo lugar, enquanto ୨୧ pode virar quadradinho em aparelhos antigos. Publique um teste antes de valer — as notas de risco estão em todos os cartões.",
        ],
      },
      faq: [
        {
          q: "Como faço nomes combinando para casais ou melhores amigos?",
          a: "Envolva o mesmo nome em duas combinações diferentes — uma com ♡, outra com ୨୧. Favorite as duas para já estarem prontas para colar.",
        },
        {
          q: "As decorações gastam caracteres extras?",
          a: "As letras trocam uma por uma; cada decoração adiciona 1–2 símbolos por lado. Fique de olho no contador de caracteres da plataforma.",
        },
        {
          q: "O símbolo de laço aparece como quadradinho — e agora?",
          a: "O aparelho não tem esse glifo. Troque para ♡ ou ✿; as letras bolha em si têm compatibilidade alta.",
        },
      ],
    },
  },
  "bubble-fonts": {
    "pt-br": {
      navName: "Bolha",
      h1: "Gerador de Letras Bolha",
      title: "Gerador de Letras Bolha — ⓐ, quadradas e (parênteses)",
      description:
        "Letras bolha bonitas: ⓐ circuladas, quadradas, parênteses e bolhas cheias. Aparecem ao digitar e copiam com um toque, divertidas para nomes e numeração.",
      intro: [
        "Letras dentro de círculos e caixas: 🅑🅤🅑🅑🅛🅔 bolhas cheias, ⓑⓤⓑⓑⓛⓔ círculos finos, além das variantes entre parênteses e quadradas. Digite, veja a prévia, toque para copiar.",
        "As quatro molduras variam em peso: as bolhas são as mais pesadas, os círculos finos as mais leves, os parênteses as mais levinhas, os quadrados as mais parecidas com emblema (cuidado com a renderização em emoji).",
      ],
      steps: [
        "Digite uma palavra — de 2 a 6 letras funciona melhor.",
        "Compare as quatro molduras e escolha a densidade que combina com o contexto.",
        "Copie e cole em um nome, cartão de grupo ou lista numerada.",
        "Se os quadrados virarem emoji coloridos, troque para bolhas ou círculos.",
      ],
      about: {
        heading: "Duas famílias de letras delimitadas",
        paragraphs: [
          "As letras de círculo fino vêm do clássico Enclosed Alphanumerics do Unicode (vizinhos de ①②③), que também cobre dígitos circulados de 1 a 20; as bolhas cheias e os quadrados vêm do bloco Enclosed mais novo, onde alguns caracteres têm apresentação de emoji.",
          "É essa identidade de emoji que faz 🅱 às vezes aparecer em cores — uma dupla identidade, não um bug. Troque de estilo quando uma plataforma impõe a forma colorida.",
        ],
      },
      faq: [
        {
          q: "Os números também ganham moldura?",
          a: "Sim — bolhas e círculos cobrem 0–9, e os parênteses cobrem 1–20. Listas numeradas como ⓶⓪⓶ funcionam de cara.",
        },
        {
          q: "Por que minha letra quadrada ficou colorida?",
          a: "Caracteres como 🅱🅰 têm identidade de emoji e algumas plataformas preferem essa renderização. Use círculos finos quando quiser a forma simples em preto e branco.",
        },
        {
          q: "Letras bolha funcionam para frases longas?",
          a: "Não — caracteres delimitados são visualmente densos e ficam ruidosos rápido. Palavras soltas, números e palavras-chave são a dose certa.",
        },
      ],
    },
  },
  "strikethrough-text": {
    "pt-br": {
      navName: "Riscado",
      h1: "Gerador de Texto Riscado",
      title: "Gerador de Texto Riscado — sublinhado e barras",
      description:
        "Risque, sublinhe ou corte qualquer texto bonito, até emoji; renderiza ao digitar e copia com um toque. Atenção: a contagem de caracteres quase dobra.",
      intro: [
        "Apps de mensagem não deixam riscar uma palavra — aqui o traço já vem embutido nos caracteres, então sobrevive a qualquer colagem e funciona em qualquer texto.",
        "Riscado para piadas e correções, sublinhado para ênfase; seis variações, da linha única ao sublinhado duplo.",
      ],
      steps: [
        "Digite a palavra ou a frase que vai ganhar um traço.",
        "Riscado passa a ideia de “cortado”; sublinhado passa a ideia de ênfase.",
        "Copie e cole no chat, na bio ou em um comentário.",
        "O alinhamento da linha depende da fonte de quem lê — pequenos desalinhamentos são normais.",
      ],
      about: {
        heading: "Como as marcas de combinação desenham linhas",
        paragraphs: [
          "Os traços não são figuras — são marcas de combinação do Unicode (U+0336 e companhia) empilhadas sobre cada caractere. A renderização desenha a linha atravessando o glifo anterior, e é por isso que o truque funciona também em emoji.",
          "O custo: o texto copiado conta quase o dobro — cada caractere visível carrega uma marca invisível. Fique de olho no contador nos campos rígidos.",
        ],
      },
      faq: [
        {
          q: "Riscado funciona com qualquer texto?",
          a: "Sim — todo caractere ganha o traço também. Algumas fontes desenham o traço mais fino em certos glifos; o efeito varia por plataforma.",
        },
        {
          q: "Por que minha contagem de caracteres dobrou?",
          a: "Cada caractere visível carrega uma marca de combinação invisível que os contadores incluem. Texto riscado tem quase o dobro do tamanho aparente.",
        },
        {
          q: "Posso usar texto sublinhado como nome de jogo?",
          a: "Depende do jogo. A maioria aceita marcas de combinação; validações rígidas antifraude podem recusar. Teste na tela de renomear antes de gastar um cartão de mudança de nome.",
        },
      ],
    },
  },
  "fancy-numbers": {
    "pt-br": {
      navName: "Números",
      h1: "Gerador de Números Estilizados",
      title: "Gerador de Números Estilizados — ①𝟙➊ dígitos com estilo",
      description:
        "Números bonitos e estilosos: negrito, vazado, monoespaçado, circulado ① e bolha ➊. Renderizam ao digitar e copiam com um toque, para anos e listas.",
      intro: [
        "①②③ 𝟙𝟚𝟛 ➊➋➌ — todos os estilos de dígito que dá para digitar, em uma página. Digite um número, uma data ou o número de uma sala e os estilos aparecem ao vivo.",
        "Estilos de dígitos combinam bem com palavras: turma de 𝟐𝟎𝟐𝟕, ⓿ erros. A página também gera letras, então dá para copiar os rótulos junto com os números.",
      ],
      steps: [
        "Digite o número — unidades e letras são bem-vindas (tipo N.º1).",
        "Dígitos circulados servem para numerar listas; negrito serve para anos.",
        "Copie e cole em posts, títulos ou nicknames.",
        "Se aparecerem quadradinhos em aparelhos antigos, troque para negrito ou monoespaçado.",
      ],
      about: {
        heading: "Seis formas para dez dígitos",
        paragraphs: [
          "O Unicode dá aos dígitos 0–9 várias famílias estilizadas: negrito/vazado/monoespaçado no bloco matemático; dígitos circulados no bloco clássico de símbolos, ao lado de ①; bolhas cheias no bloco delimitado. A cobertura de fontes varia por família — sistemas antigos perdem os mais raros.",
          "Uma ordem aproximada de confiabilidade: negrito simples > monoespaçado > vazado > circulado > bolha. Ao enviar para aparelhos desconhecidos, prefira o topo da lista.",
        ],
      },
      faq: [
        {
          q: "Posso mandar número de telefone em dígitos estilosos?",
          a: "Melhor não. Códigos de verificação, números de pedido e telefones precisam ser reconhecidos como dígitos comuns — dígitos estilizados quebram o reconhecimento.",
        },
        {
          q: "Qual a diferença entre ① e ➊?",
          a: "① é um círculo fino do bloco clássico de símbolos; ➊ é uma bolha cheia do bloco delimitado — origens, aparências e cobertura de fontes diferentes. Troque um pelo outro quando um renderizar mal.",
        },
        {
          q: "Um ID com dígitos estilosos é pesquisável?",
          a: "Não. As pessoas não conseguem digitar dígitos estilizados para te achar. Mostre contatos em dígitos comuns ao lado de qualquer versão decorada.",
        },
      ],
    },
  },
  "zalgo-text": {
    "pt-br": {
      navName: "Zalgo",
      h1: "Gerador de Texto Zalgo",
      title: "Gerador de Texto Zalgo — glitch amaldiçoado e limpador",
      description:
        "Texto zalgo chamativo em 3 intensidades e limpador incluído: aparece ao digitar e copia com um toque; leitores de tela e contadores sofrem.",
      intro: [
        "Zalgo empilha marcas de combinação sobre os caracteres até o texto sangrar. Três intensidades, do levemente estranho ao totalmente amaldiçoado — digite, veja a prévia, copie.",
        "O limpador no fim da página fecha o ciclo: cole qualquer texto corrompido e remova todas as marcas até voltar ao original limpo.",
      ],
      steps: [
        "Digite uma frase — zalgo funciona em qualquer caractere, emoji incluído.",
        "Escolha a intensidade: leve combina com assinaturas; pesada é para trechos curtos de horror.",
        "Toque em copiar e cole em um nome, bio ou post assustador.",
        "Se arrependeu? Jogue o texto no limpador abaixo e recupere.",
      ],
      about: {
        heading: "Marcas de combinação levadas ao extremo",
        paragraphs: [
          "Letras e emoji são caracteres comuns — e o Unicode traz centenas de marcas de combinação sem largura própria, desenhadas empilhadas sobre o glifo anterior. O zalgo enfia de 2 a 8 delas depois de cada caractere.",
          "Quanto mais densa a pilha, mais os motores de layout sofrem: linhas cortadas, contadores explodindo e leitores de tela recitando cada marca. Zalgo pesado pertence apenas a trechos curtos — nunca em nada importante.",
        ],
      },
      faq: [
        {
          q: "Texto zalgo pode danificar minha conta?",
          a: "Não — é texto comum, sem código nenhum embutido. Os riscos são de exibição: layout quebrado, salvamento recusado em alguns jogos. Teste com intensidade leve primeiro; o limpador sempre restaura.",
        },
        {
          q: "Por que aparece como marquinhas ou quadradinhos em outro lugar?",
          a: "As fontes do aparelho não têm esses glifos de combinação. Uma intensidade menor costuma sobreviver; por isso a pesada é só para trechos curtos.",
        },
        {
          q: "Como limpo um zalgo que alguém me mandou?",
          a: "Cole tudo no limpador desta página — ele remove cada marca de combinação e seletor de variação, deixando só os caracteres base, tudo localmente no seu navegador.",
        },
      ],
    },
  },
  "upside-down-text": {
    "pt-br": {
      navName: "Invertido",
      h1: "Gerador de Texto Invertido",
      title: "Gerador de Texto Invertido — escreva amor, leia ɹoɯɐ",
      description:
        "Letras invertidas bonitas: glifos espelhados e ordem ao contrário, em tempo real ao digitar e copiar com um toque. A clássica assinatura de pegadinha.",
      intro: [
        "ʇı dᴉlℲ — espelhe cada letra, escreva ao contrário e a linha inteira fica de cabeça para baixo. Digite, veja a prévia, copie.",
        "Letras, dígitos de 1 a 9 e pontuação comum têm formas invertidas. Caracteres sem equivalente passam reto, então texto misto vira só pela metade — o que tem sua própria graça.",
      ],
      steps: [
        "Digite a frase que vai virar.",
        "Confira a prévia — a pontuação também vira.",
        "Copie e cole em uma assinatura ou comentário.",
        "Quer que a parte sem equivalente também pareça estranha? Adicione uma moldura ou um espaçamento.",
      ],
      about: {
        heading: "Não é rotação — é substituição",
        paragraphs: [
          "Texto invertido não é efeito gráfico: o gerador troca cada letra por um sósia do Unicode (a→ɐ, e→ǝ) e inverte a ordem, então a leitura corre da direita para a esquerda e a linha parece de cabeça para baixo.",
          "O mapa cobre maiúsculas e minúsculas, dígitos e pontuação comum; caracteres sem forma invertida ficam como estão. Continua sendo texto comum — copiar, colar e contadores se comportam normalmente.",
        ],
      },
      faq: [
        {
          q: "Texto invertido aparece bem em celulares?",
          a: "Sim — os caracteres espelhados são letras comuns cobertas pelas fontes dos principais sistemas. Algumas formas parecem um pouco estranhas por natureza.",
        },
        {
          q: "Por que parte do texto não virou?",
          a: "O Unicode não tem glifos espelhados para todos os caracteres, então o que não tem equivalente passa reto. Envolva em moldura ou dê espaçamento para o efeito “tem algo errado aqui”.",
        },
        {
          q: "Como leio o texto de volta?",
          a: "Cole de volta na caixa e inverta de novo — a transformação é o próprio inverso dela.",
        },
      ],
    },
  },
};
