// Brazilian Portuguese guides, populated with hand-written copy.
// See guides-en.ts for the reference; guide path prefix for pt-br is /guia/.
// Platform limits use "about" wording; the platform's own counter rules.
// relatedTools hrefs only reference pages available in pt-br.

import type { GuideDef } from "../guides";

export const guidesPtBr: GuideDef[] = [
  {
    locale: "pt-br",
    slug: "what-are-unicode-fonts",
    navName: "O que são fontes Unicode?",
    h1: "O Que São Fontes Unicode? O Princípio em Palavras Simples",
    title: "O Que São Fontes Unicode? Como o Texto Estilizado Funciona",
    description:
      "Fontes fancy não são arquivos de fonte: são caracteres Unicode estilizados. O princípio, onde funcionam, onde falham e o que as torna diferentes.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Toda “fonte estilizada” que você já viu — 𝓱𝓮𝓵𝓵𝓸, ꧁ace꧂ — não é uma fonte. São caracteres comuns da tabela Unicode, exatamente como as letras desta frase: texto, não formatação.",
      "Depois que você fixa esse único fato, a maioria dos mistérios se resolve sozinha: por que o estilo sobrevive à colagem, por que alguns aparelhos mostram quadradinhos, por que a busca não acha nomes estilizados e por que @s recusam esses caracteres.",
    ],
    sections: [
      {
        heading: "Um segundo alfabeto dentro da tabela de caracteres",
        paragraphs: [
          "O Unicode é o catálogo global que dá um número a cada caractere de cada sistema de escrita. Por volta de 2001, ele adicionou um conjunto completo de letras latinas estilizadas para diagramação matemática — negrito, itálico, cursiva, vazado e gótica ganharam A–Z e a–z, seguidos depois pelas decorações de bolha, círculo e quadrado.",
          "Aquelas letras nasceram para fórmulas, mas como parecem uma tipografia diferente, foram emprestadas para o texto pessoal. Um gerador faz exatamente uma coisa: trocar cada letra comum pelo caractere estilizado da mesma posição. O texto é o mesmo; só os glifos mudam.",
        ],
      },
      {
        heading: "Por que o estilo sobrevive a qualquer colagem",
        paragraphs: [
          "Negrito num editor de textos é um sinalizador de formatação — desaparece quando o destino não suporta. Uma letra estilizada simplesmente É [negrito](/pt-br/bold-fonts/): a espessura é propriedade do caractere, não do ambiente. Todo lugar que aceita o texto aceita o estilo.",
          "Também explica a contagem: uma letra estilizada continua sendo um caractere (exceto riscado/zalgo, onde as marcas de combinação invisíveis entram na conta).",
        ],
      },
      {
        heading: "Onde ficam os limites",
        bullets: [
          "Cobertura limitada: glifos estilizados existem só para letras latinas e dígitos. Outros alfabetos não têm segunda forma — nicknames nesses casos dependem de molduras decorativas.",
          "Busca não casa: caracteres estilizados não são letras simples; busca exata, @menções e hashtags podem falhar.",
          "Exibição depende das fontes: um aparelho sem o glifo mostra um quadradinho — veja o guia dos quadradinhos.",
          "Custo de acessibilidade: leitores de tela podem soletrar o nome completo dos caracteres. Nunca use para informação essencial.",
        ],
      },
    ],
    faq: [
      {
        q: "Quem lê precisa instalar algo?",
        a: "Nada para instalar — mas a biblioteca de fontes da pessoa precisa conter os glifos. Sistemas principais cobrem os estilos populares; os símbolos exóticos são a origem dos quadradinhos.",
      },
      {
        q: "Outros alfabetos vão ganhar formas estilizadas?",
        a: "O Unicode poderia adicioná-las, mas para alfabetos grandes o trabalho nunca saiu do papel. Molduras e decorações em volta do texto são o caminho prático.",
      },
    ],
    relatedTools: [
      { href: "/pt-br/cursive-fonts/", title: "Gerador de cursiva", description: "Experimente a substituição de caracteres você mesmo." },
      { href: "/pt-br/bold-fonts/", title: "Gerador de negrito", description: "Veja o negrito no nível do caractere em ação." },
      { href: "/pt-br/cool-font-generator/", title: "Cool", description: "Abra e experimente enquanto lê." },
    ],
    appearOn: ["cursive-fonts", "bold-fonts", "fancy-numbers", "upside-down-text", "italic-text-generator", "tiny-text-generator", "cool-font-generator", "elegant-font-generator"],
  },
  {
    locale: "pt-br",
    slug: "why-boxes-appear",
    navName: "Por que aparecem quadradinhos",
    h1: "Por Que Texto Estilizado Vira Quadradinhos (□) em Alguns Aparelhos",
    title: "Texto Estilizado Vira Quadradinhos (□): Como Resolver",
    description:
      "Quadradinhos (□) significam que o receptor não tem o glifo: a cópia não veio quebrada. O mecanismo, estilos de risco e como resolver.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Na sua tela está tudo certo, mas chega como uma fila de quadradinhos □ no celular antigo — a falha clássica do texto estilizado. Quadradinhos não são corrupção e nada se perdeu na cópia: o outro aparelho simplesmente não tem o desenho daquele caractere.",
      "Este guia cobre o mecanismo, quais estilos são arriscados, quais são quase infalíveis e a ordem de recuperação.",
    ],
    sections: [
      {
        heading: "Glifo faltando, não dado faltando",
        paragraphs: [
          "Para exibir um caractere, a biblioteca de fontes do aparelho precisa de um desenho para ele. O Unicode cataloga dezenas de milhares de caracteres e nenhum aparelho vem com o desenho de todos. O caractere chegou inteiro — o aparelho é que não consegue pintá-lo, então desenha uma caixa de espaço reservado dizendo “tem um caractere aqui que eu não sei desenhar”.",
          "Por isso os quadradinhos são sempre um problema do lado de quem recebe: você vê certo, eles veem quadradinhos — suas fontes cobrem, as deles não.",
        ],
      },
      {
        heading: "Estilos de alto risco contra baixo risco",
        bullets: [
          "Decorações de escritas exóticas: ꧁ ꧇ ᨳ, do javanês e do lontara — energia gamer ótima, taxa alta de quadradinhos em aparelhos antigos.",
          "Caracteres com apresentação de emoji: 🅱 ⚜ viram emoji coloridos à força em algumas plataformas — não é o visual que você escolheu.",
          "Marcas de combinação densas: o zalgo empilha dezenas de marcas; renderizadores antigos engasgam.",
          "Escolhas de baixo risco: letras fullwidth (item carimbado do CJK), dígitos circulados ① e símbolos básicos ♡ ★ ✿ — cobertura quase universal.",
        ],
      },
      {
        heading: "A ordem de recuperação",
        paragraphs: [
          "Primeiro troque o estilo — toda intenção tem um [irmão mais seguro](/pt-br/cute-fonts/) (꧁꧂ → 『』, 🅱 → 𝗕). Depois troque o símbolo — decorações exóticas → básicos ♡ ★. Por fim aceite o limite — num aparelho de dez anos qualquer coisa estilizada pode falhar, então mantenha mensagens importantes simples.",
          "O seguro mais barato: veja seu próprio post em um segundo aparelho antes de valer.",
        ],
      },
    ],
    faq: [
      {
        q: "A outra pessoa consegue copiar o texto quadradinho corretamente?",
        a: "Sim — o quadradinho é só um substituto de exibição; o dado está intacto. Encaminhado para um aparelho com fontes melhores, aparece perfeito.",
      },
      {
        q: "Existe um estilo que aparece em todo lugar?",
        a: "Letras fullwidth, dígitos circulados e símbolos básicos chegam perto — mas nada é 100%. Escolha com a expectativa de “funciona em quase tudo”.",
      },
    ],
    relatedTools: [
      { href: "/pt-br/zalgo-text/", title: "Limpador de zalgo", description: "Remova as marcas empilhadas de um texto quebrado." },
      { href: "/pt-br/cute-fonts/", title: "Fontes fofas", description: "Decorações com nota de compatibilidade em cada cartão." },
      { href: "/pt-br/dark-font-generator/", title: "Sombria", description: "Abra e experimente enquanto lê." },
    ],
    appearOn: ["zalgo-text", "cute-fonts", "crazy-font-generator", "dark-font-generator", "bubble-fonts"],
  },
  {
    locale: "pt-br",
    slug: "name-length-limits",
    navName: "Limites de caracteres",
    h1: "Limites de Caracteres para Nomes, Plataforma por Plataforma",
    title: "Limites de Caracteres por Plataforma: TikTok, IG e mais",
    description:
      "Limites de nick e bio no Instagram, TikTok, Discord, WhatsApp, Roblox e Free Fire: como os caracteres contam e o que fazer no limite.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "Caracteres estilizados não aumentam o comprimento visível (uma letra troca por um caractere), mas molduras decorativas aumentam — 1–2 símbolos por lado. Plataformas apertadas pedem um plano de decoração que caiba no teto.",
      "A tabela abaixo reúne os valores mais comuns. As regras mudam com o tempo, os números são “aproximados” e o contador ao vivo da caixa de texto é sempre o juiz final.",
    ],
    sections: [
      {
        heading: "A consulta rápida",
        table: {
          head: ["Plataforma", "Limite do nome (aprox.)", "Dica de decoração"],
          rows: [
            ["Instagram", "Nome 30 / Bio 150", "Nome para o estilo, Bio para uma linha de busca em texto simples"],
            ["WhatsApp", "Cerca de 25 (Recado ~139)", "Molduras finas ━ ✧ cabem no campo apertado"],
            ["TikTok", "Cerca de 24 (Bio ~80)", "Molduras de um símbolo só ✧ ⋆ deixam espaço para o texto"],
            ["Discord", "Cerca de 32 (nome de exibição)", "Espaço para molduras duplas ꧁༺༻꧂"],
            ["Roblox", "3–20 no nome de exibição", "A validação é rígida — glifos simples passam mais vezes"],
            ["Free Fire", "Aprox. 6–12", "IDs de duas letras + ꧁꧂ encaixam perfeito; conte antes"],
            ["Shooters em geral", "Cerca de 5–16", "Conte primeiro; a moldura consome quase metade do teto"],
            ["Telegram", "Cerca de 64", "O mais generoso — cabe qualquer coisa"],
          ],
        },
      },
      {
        heading: "Duas pegadinhas de contagem",
        bullets: [
          "Marcas de combinação contam: riscado/zalgo adicionam 1–4 símbolos invisíveis por caractere visível — o contador dobra e campos rígidos estouram.",
          "A contagem de fullwidth varia: a maioria das plataformas conta um por letra, algumas contam a largura de exibição como dois — observe o contador depois de colar.",
        ],
      },
      {
        heading: "Quando você estoura o limite",
        paragraphs: [
          "Encurte o texto, não a decoração — a moldura é o coração do estilo. Um ꧁starlight꧂ que não cabe vira ꧁star꧂, o que é melhor do que cair no texto simples.",
          "Quer um nome igual em todas as plataformas? Projete para o [jogo mais rígido](/pt-br/free-fire-name-generator/) que você joga e os outros se encaixam sozinhos.",
        ],
      },
    ],
    faq: [
      {
        q: "Onde estão os números oficiais?",
        a: "Na central de ajuda de cada plataforma. Esta tabela reúne valores “aproximados” mantidos pela comunidade — o contador da caixa de texto nunca mente.",
      },
      {
        q: "Por que minha contagem difere da de um amigo?",
        a: "A contagem de marcas de combinação varia: algumas plataformas contam cada marca, outras agrupam em clusters. Confie no contador onde você colar.",
      },
    ],
    relatedTools: [
      { href: "/pt-br/fancy-numbers/", title: "Números estilizados", description: "Decorações numeradas e curtas." },
      { href: "/pt-br/strikethrough-text/", title: "Texto riscado", description: "Veja como marcas invisíveis dobram a contagem." },
      { href: "/pt-br/fortnite-name-generator/", title: "Fortnite", description: "Abra e experimente enquanto lê." },
    ],
    appearOn: ["instagram-fonts", "tiktok-fonts", "whatsapp-fonts", "fortnite-name-generator", "facebook-fonts", "youtube-fonts", "adopt-me-fonts", "fancy-numbers", "strikethrough-text"],
  },
  {
    locale: "pt-br",
    slug: "account-safety",
    navName: "Risco de ban",
    h1: "Nome Estilizado Dá Ban? As Regras de Verdade",
    title: "Nome Estilizado Dá Ban? Regras das Plataformas, Explicadas",
    description:
      "Nomes estilizados são texto comum — não disparam ban. Onde as plataformas realmente traçam a linha: listas brancas, busca que não casa e falsificação.",
    published: "2026-11-07",
    updated: "2026-11-07",
    intro: [
      "“Nome estilizado dá ban?” é a pergunta mais feita. Resposta: caracteres estilizados são texto comum, sem código nenhum dentro — nenhuma plataforma bane pelos caracteres em si.",
      "As restrições reais se agrupam em três tipos: lista branca de caracteres (alguns jogos), busca que não casa (a busca falha) e falsificação (texto estilizado fingindo ser oficial). Só a última é um risco de ban de verdade.",
    ],
    sections: [
      {
        heading: "Os três formatos das regras de plataforma",
        bullets: [
          "Abertas: WhatsApp, Telegram e a maioria das bios aceitam caracteres estilizados; a checagem olha o conteúdo, não o estilo do glifo.",
          "Validação por lista branca: alguns jogos aceitam só um conjunto conhecido de caracteres — “caracteres inválidos” significa salvamento recusado, não ban.",
          "Sensíveis ao contexto: o nome em si é legal, mas estilizá-lo para se passar por staff ou driblar filtros é tratado como a violação que é.",
        ],
      },
      {
        heading: "As três coisas que merecem preocupação",
        paragraphs: [
          "Falsificação: estilizar “Suporte Oficial” para parecer conta verificada é violação clara — o motivo do ban é a falsificação, não os glifos.",
          "Evasão: escrever ofensas ou anúncios em caracteres estilizados para passar pelos filtros é punido como evasão de filtro.",
          "Contextos de golpe: caracteres estilizados em dados de pagamento ou códigos de verificação — nunca faça isso, e ensine a família a não confiar em “avisos oficiais” escritos em texto estilizado.",
        ],
      },
      {
        heading: "O checklist do uso seguro",
        bullets: [
          "Nicknames, bios, assinaturas: decore à vontade — é expressão de identidade.",
          "Informação crítica (contatos, IDs, valores): sempre em caracteres simples.",
          "Erro de “caracteres inválidos”: troque os caracteres ou de plataforma; não saia procurando burlar.",
          "Depois de trocar de nome, publique um teste: confirme que exibição e busca continuam funcionando.",
        ],
      },
    ],
    faq: [
      {
        q: "Alguém disse que um nickname estilizado derrubou seu alcance — é real?",
        a: "Limitação de alcance mira conteúdo e comportamento, não a forma dos glifos. A coincidência de horário é fácil de culpar no nome novo; confira o post que foi limitado de verdade.",
      },
      {
        q: "Caracteres estilizados interferem nas checagens de segurança da conta?",
        a: "Não — segurança se liga à verificação por telefone/e-mail/ID. Nomes de exibição são só exibição e nunca entram em fluxos de segurança.",
      },
    ],
    relatedTools: [
      { href: "/pt-br/roblox-name-generator/", title: "Nomes do Roblox", description: "Estratégia para o filtro de nomes." },
      { href: "/pt-br/free-fire-name-generator/", title: "Nomes do Free Fire", description: "Estilos amigáveis da lista branca." },
      { href: "/pt-br/cod-name-generator/", title: "COD", description: "Abra e experimente enquanto lê." },
    ],
    appearOn: ["roblox-name-generator", "tiktok-fonts", "free-fire-name-generator", "cod-name-generator", "berry-avenue-fonts"],
  },
];
