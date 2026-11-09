// Brazilian Portuguese platform pages, populated with hand-written copy.
// Instagram, WhatsApp, TikTok, Roblox and Free Fire. Limits are "about"
// values — the platform's own counter is always the source of truth.
// See platform-pages-en.ts for the reference.

import type { Locale } from "../i18n";
import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesPtBr: Record<string, { [L in Locale]?: PlatformPageCopy }> = {
  "instagram-fonts": {
    "pt-br": {
      navName: "Fontes do Instagram",
      h1: "Gerador de Fontes para Instagram",
      title: "Gerador de Fontes para Instagram — nome 30 e bio 150",
      description:
        "Fontes bonitas para o Instagram: 𝓈𝓊𝓃𝓈ℯ𝓉, ｖａｐｏｒｗａｖｅ e mais aparecem ao digitar; copie com um toque. Nome de 30 e bio de 150 caracteres; o @ fica simples.",
      platform: "Instagram",
      intro: [
        "O nome de exibição e a bio do Instagram aceitam caracteres Unicode estilizados — 𝓈𝓊𝓃𝓈ℯ𝓉 e ｖａｐｏｒｗａｖｅ são clássicos da IG. Digite abaixo, veja a prévia ao vivo, toque para copiar.",
        "O limite é o seu @: o nome de usuário aceita só letras, números, pontos e sublinhados — caracteres estilizados são rejeitados. Deixe os estilos para o nome e a bio; @ e hashtags ficam simples.",
      ],
      limits: [
        { label: "Nome de exibição", value: "30 caracteres, símbolos estilizados contam" },
        { label: "Bio", value: "150 caracteres, aceita quebras de linha e caracteres estilizados" },
        { label: "@usuário", value: "Só letras/números/pontos/sublinhados — nada de caracteres estilizados" },
      ],
      compat: [
        "Nome de exibição: cursiva, fullwidth e molduras todas funcionam",
        "Bio: caracteres estilizados aceitos; combine com quebras de linha para montar o layout",
        "Texto em Stories/Reels: usa o sistema de fontes do app — não tem a ver com estilos de caractere",
        "Hashtags: caracteres estilizados quebram a correspondência — deixe as tags simples",
      ],
      examples: ["𝓈𝓊𝓃𝓈ℯ𝓉", "ｖａｐｏｒｗａｖｅ", "୨୧melody୨୧", "♡verão♡", "ᴍɪʟᴋ ᴛᴇᴀ"],
      steps: [
        "Abra o Instagram → Editar perfil → Nome ou Bio.",
        "Gere as candidatas aqui — cursiva e fullwidth são os clássicos da IG.",
        "Cole e confira os contadores de 30/150 caracteres.",
        "Depois de salvar, faça uma busca por você mesmo — mantenha uma versão simples na bio para ser encontrado.",
      ],
      faq: [
        {
          q: "Nome e @usuário — qual a diferença?",
          a: "O @usuário é o seu login e o seu identificador de busca, só com caracteres simples. O Nome é a linha de exibição, 30 caracteres com estilos permitidos. Fontes estilizadas valem só para o Nome e a Bio.",
        },
        {
          q: "Riscado funciona na bio?",
          a: "Os caracteres colam normalmente, mas a renderização da IG pode desalinhar marcas de combinação. Para layout de bio prefira estilos de glifo inteiro, como cursiva e fullwidth.",
        },
        {
          q: "Um nome estilizado atrapalha as marcações?",
          a: "Não — as @menções casam com o @usuário, que não muda quando o nome de exibição é estilizado.",
        },
        {
          q: "Caracteres estilizados gastam mais rápido os meus 30/150 caracteres?",
          a: "Em geral não — letras em cursiva, negrito e fullwidth contam uma a uma, igual às letras comuns. Alguns símbolos pesados podem contar como largura de exibição 2, então confira o contador da própria IG depois de colar.",
        },
        {
          q: "Fontes estilizadas funcionam em Stories ou Reels?",
          a: "Não como estilos de caractere — o texto de Stories e Reels usa o menu de fontes do próprio Instagram, separado do que você cola. O Unicode estilizado pertence ao Nome e à Bio; nos Stories, escolha entre os estilos nativos.",
        },
        {
          q: "Essa ferramenta de fontes para Instagram é grátis?",
          a: "Sim — grátis, sem cadastro, e nada é instalado ou conectado à sua conta. Você copia os caracteres aqui e cola você mesmo no Instagram.",
        },
      ],
    },
  },
  "whatsapp-fonts": {
    "pt-br": {
      navName: "Fontes do WhatsApp",
      h1: "Gerador de Fontes para WhatsApp",
      title: "Gerador de Fontes para WhatsApp — nome ~25 e recado ~139",
      description:
        "Fontes bonitas para o WhatsApp: nome com cerca de 25 e recado com cerca de 139; renderiza ao digitar e copia com um toque. As mensagens mantêm o estilo.",
      platform: "WhatsApp",
      intro: [
        "O nome do perfil e o recado do WhatsApp aceitam caracteres Unicode estilizados, e as mensagens mantêm o estilo de ponta a ponta porque tudo é texto comum. Digite abaixo, toque para copiar.",
        "Decore com moderação — o WhatsApp é onde moram sua família e seus colegas de trabalho. Molduras finas e versalete envelhecem melhor do que pilhas gamer pesadas.",
      ],
      limits: [
        { label: "Nome do perfil", value: "Cerca de 25 caracteres" },
        { label: "Recado", value: "Cerca de 139 caracteres" },
        { label: "Mensagens", value: "Cerca de 65.536 caracteres — texto estilizado conta normalmente" },
      ],
      compat: [
        "Nome do perfil: caracteres estilizados aceitos",
        "Recado: aceito, aparece no seu cartão de contato",
        "Mensagens: o estilo sobrevive até o fim — o caractere é o estilo",
        "Grupos: seu nome aparece em cada grupo; mantenha-o reconhecível nos grupos de trabalho",
      ],
      examples: ["𝓈𝓊𝓃𝓈ℯ𝓉", "★彡drifter彡★", "✧foco✧", "⋆o n l i n e⋆", "『modo tranquilo』"],
      steps: [
        "Abra o WhatsApp → Configurações → seu perfil → Nome (ou Recado).",
        "Gere as candidatas aqui e copie uma.",
        "Cole no campo e salve.",
        "Pergunte a um contato como ficou — Androids antigos são os campeões dos quadradinhos.",
      ],
      faq: [
        {
          q: "Fontes estilizadas funcionam nas mensagens do WhatsApp?",
          a: "Sim — melhor que na maioria dos apps, porque o estilo está nos próprios caracteres. A sintaxe nativa do WhatsApp (*negrito* _itálico_) é outra camada e continua funcionando sem conflito.",
        },
        {
          q: "Um nome estilizado confunde meus contatos?",
          a: "Pode — as pessoas procuram contatos pelo nome, e um nome decorado pode não ser encontrado. Deixe seu nome real localizável no recado.",
        },
        {
          q: "E nos grupos de família e de trabalho?",
          a: "Vale a mesma dica para todos os grupos: no trabalho, prefira o nome real com um toque leve (versalete ou moldura fina) para ser reconhecido de cara; guarde os visuais mais chamativos para os grupos de amigos.",
        },
        {
          q: "Misturar caracteres estilizados com a formatação nativa dá conflito?",
          a: "Não — *negrito* e _itálico_ são sintaxe em volta de texto comum, e os caracteres estilizados não interferem nela. Dá para combinar os dois na mesma mensagem sem problema.",
        },
        {
          q: "Por que meu nome aparece como quadradinhos para alguns contatos?",
          a: "O celular deles não tem as fontes para esses glifos — Androids antigos são os campeões. Pergunte a um contato como ficou antes de valer e mantenha uma versão mais simples favoritada como reserva.",
        },
        {
          q: "Leitores de tela leem nomes estilizados do WhatsApp?",
          a: "Eles tentam, mas 𝓂𝒾𝓁𝓀 𝓉𝑒𝒶 pode sair como uma lista de letras “cursivas”. Reserve os estilos para o nome do perfil e o recado; escreva mensagens que precisam ser entendidas em texto comum.",
        },
      ],
    },
  },
  "tiktok-fonts": {
    "pt-br": {
      navName: "Fontes do TikTok",
      h1: "Gerador de Fontes para TikTok",
      title: "Gerador de Fontes para TikTok — nickname ~24 e bio ~80",
      description:
        "Fontes bonitas para o TikTok: ꧁molduras꧂ e mais aparecem ao digitar, copie com um toque. Nickname com cerca de 24 e bio com cerca de 80; o @ fica simples.",
      platform: "TikTok",
      intro: [
        "Nicknames do TikTok aceitam caracteres Unicode estilizados, e a bio aceita a maioria dos estilos. Digite seu nickname abaixo — molduras gamer, cursiva, fullwidth — e toque para copiar.",
        "Fique de olho no limite: o seu @ só aceita caracteres simples, e hashtags com caracteres estilizados não são encontradas. Os estilos pertencem ao nickname e à bio.",
      ],
      limits: [
        { label: "Nickname", value: "Cerca de 24 caracteres — confie no contador da tela de edição" },
        { label: "Bio", value: "Cerca de 80 caracteres, símbolos estilizados contam" },
        { label: "@", value: "Só letras/números/pontos/sublinhados — nada de caracteres estilizados" },
      ],
      compat: [
        "Nickname: caracteres estilizados funcionam; a edição de nickname tem limite de frequência",
        "Bio: a maioria dos estilos ok; marcas de combinação pesadas podem quebrar em Androids antigos",
        "Comentários: aceitos, mas paredes de símbolos podem ser recolhidas",
        "Busca: nicknames estilizados podem não casar na busca exata — deixe um apelido simples na bio",
      ],
      examples: ["꧁estrela꧂", "ｖａｐｏｒｗａｖｅ", "𝓈𝓊𝓃𝓈ℯ𝓉", "★彡hype彡★", "♡mel♡"],
      steps: [
        "Abra o TikTok → Perfil → Editar perfil → Nome.",
        "Gere as candidatas aqui e favorite duas ou três.",
        "Cole no campo de nome e acompanhe o contador.",
        "Salve e abra seu perfil em outro aparelho para conferir a renderização.",
      ],
      faq: [
        {
          q: "Um nickname estilizado derruba meu alcance?",
          a: "Não — caracteres estilizados são texto comum; alcance depende do conteúdo. O preço real é a busca: um nickname estilizado pode não casar na busca exata, então coloque uma versão simples na bio.",
        },
        {
          q: "Posso usar fontes estilizadas nas legendas?",
          a: "Pode, as legendas aceitam os caracteres. Mas as hashtags precisam ficar simples, senão a tag não é resolvida.",
        },
        {
          q: "Por que meu nome não salvou?",
          a: "O TikTok valida nicknames com uma lista de bloqueio, e alguns símbolos exóticos a ativam. Troque a decoração por uma mais segura (♡ ★ 『』) e tente de novo.",
        },
        {
          q: "Por que meu nickname aparece com quadradinhos em Androids antigos?",
          a: "Esses aparelhos não têm fontes para os estilos mais pesados — marcas de combinação e pilhas raras falham primeiro. Cursiva, negrito e molduras comuns (꧁꧂ ★ ♡) sobrevivem na maior variedade de celulares.",
        },
        {
          q: "Caracteres estilizados contam mais no limite do nickname ou da bio?",
          a: "Normalmente um cada — mas alguns símbolos pesados contam como largura de exibição 2. Com cerca de 24 caracteres de nome, acompanhe o contador da tela de edição antes de salvar.",
        },
        {
          q: "De quanto em quanto tempo posso trocar meu nickname no TikTok?",
          a: "A edição de nickname tem limite de frequência, então um salvamento que falha pode te deixar esperando por um tempo. Decida aqui primeiro, favorite duas candidatas e cole só a que você mais confia.",
        },
      ],
    },
  },
  "roblox-name-generator": {
    "pt-br": {
      navName: "Nomes do Roblox",
      h1: "Gerador de Nomes para Roblox",
      title: "Gerador de Nomes para Roblox — exibição 3–20 e @ 3–20",
      description:
        "Nomes bonitos para o Roblox: negrito, cursiva e vazado no nome de exibição (3–20). Renderiza ao digitar e copia com um toque; o @usuário continua simples.",
      platform: "Roblox",
      intro: [
        "O Roblox tem dois nomes: o @usuário (caracteres simples, único) e o nome de exibição (o que os outros veem). Os caracteres estilizados vão no nome de exibição — digite abaixo e toque para copiar.",
        "O Roblox valida nomes com um filtro, e os caracteres estilizados passam de forma irregular. Sempre cole um teste na tela de configurações antes de confirmar a troca.",
      ],
      limits: [
        { label: "Nome de exibição", value: "3–20 caracteres; trocas podem ter limite de frequência" },
        { label: "@usuário", value: "3–20 caracteres, só letras/números/sublinhado" },
        { label: "Validação", value: "O Roblox filtra nomes — caracteres estilizados podem ser recusados" },
      ],
      compat: [
        "Nome de exibição: negrito/cursiva/vazado costumam passar na validação",
        "Marcas de combinação (riscado, zalgo): costumam ser recusadas — evite no nome principal",
        "@usuário: só caracteres simples, nunca aceita estilos",
        "Busca: amigos te encontram pelo @usuário exato — mantenha-o fácil de compartilhar",
      ],
      examples: ["𝐒𝐡𝐚𝐝𝐨𝐰", "ᴘʀᴏxʏ", "⚡Blitz⚡", "꧁ACE꧂", "𝕊𝕡𝕒𝕣𝕜"],
      steps: [
        "Abra o Roblox → Configurações → Informações da conta → Nome de exibição.",
        "Gere as candidatas aqui; mantenha 2–3 favoritas de reserva.",
        "Cole, passe no filtro, salve.",
        "Se recusar, passe para a próxima candidata em vez de fuçar nos símbolos.",
      ],
      faq: [
        {
          q: "Por que meu nome estilizado foi rejeitado?",
          a: "O Roblox passa os nomes por um filtro que rejeita caracteres fora do conjunto permitido — marcas de combinação são as vítimas mais comuns. Estilos de glifo inteiro (negrito, cursiva) passam com mais frequência.",
        },
        {
          q: "Meu @usuário é afetado?",
          a: "Nunca — @usuários são simples por definição. Estilos só vão no nome de exibição.",
        },
        {
          q: "Com que frequência posso trocar o nome de exibição?",
          a: "O Roblox limita a frequência das trocas de nome de exibição, então decida aqui primeiro e gaste uma tentativa na sua favorita.",
        },
        {
          q: "Caracteres estilizados gastam os 20 caracteres do nome de exibição?",
          a: "Sim — letras estilizadas contam uma a uma no limite de 3–20, igual às simples. Uma moldura como ⚡…⚡ adiciona 2, então planeje as decorações dentro do total.",
        },
        {
          q: "Meus amigos continuam me encontrando com o nome de exibição estilizado?",
          a: "Sim — a busca e os pedidos de amizade casam com o @usuário, que continua simples. O nome de exibição é só o que as pessoas veem; compartilhe o @usuário, não a versão estilizada.",
        },
        {
          q: "Essa ferramenta pede meu login do Roblox?",
          a: "Não — nunca pede credenciais e não se conecta a nada. Você gera e copia os nomes aqui e cola você mesmo na tela de configurações do Roblox.",
        },
      ],
    },
  },
  "free-fire-name-generator": {
    "pt-br": {
      navName: "Nomes do Free Fire",
      h1: "Gerador de Nome para Free Fire",
      title: "Nomes para Free Fire — gerador, aprox. 6–12 caracteres",
      description:
        "Nomes bonitos para o Free Fire: molduras ꧁꧂, negrito e vazado, que aparecem ao digitar e copiam com um toque. O nickname aceita aprox. 6–12 caracteres.",
      platform: "Free Fire",
      intro: [
        "꧁ACE꧂, ★彡sniper彡★, 𝐒𝐡𝐚𝐝𝐨𝐰 — molduras gamer são o idioma comum dos IDs de shooter, e o Free Fire não é exceção. Digite seu nome, veja os estilos, copie para a tela de renomear.",
        "Trocar de nome custa moeda do jogo, então decida aqui: favorite duas ou três candidatas e gaste uma tentativa só na que passar na validação.",
      ],
      limits: [
        { label: "Nickname", value: "Aprox. 6–12 caracteres" },
        { label: "Custo da troca", value: "Moeda do jogo / diamantes — veja a prévia antes de gastar" },
        { label: "Validação", value: "Lista branca de caracteres; falhas avisam “caracteres inválidos”" },
      ],
      compat: [
        "Molduras comuns ꧁꧂ ★彡彡★ costumam passar na validação",
        "Marcas de combinação (riscado/zalgo): recusadas — evite",
        "Nome curto rende mais: com 6–12 caracteres, duas letras + ꧁꧂ encaixam perfeito",
        "Busca de amigos: IDs estilizados dificultam a busca exata — compartilhe sua string de ID",
      ],
      examples: ["꧁ACE꧂", "★彡sniper彡★", "𝐒𝐡𝐚𝐝𝐨𝐰", "꧁Líder꧂", "『elite』"],
      steps: [
        "Gere as candidatas aqui e favorite as duas melhores.",
        "Abra o jogo → perfil → trocar nome → digite o novo nome.",
        "Cole a primeira candidata; se o filtro recusar, use a reserva.",
        "Entre na squad e peça para um colega conferir seu nome na lista.",
      ],
      faq: [
        {
          q: "Nome estilizado dá ban?",
          a: "Não — os caracteres são texto, não trapaça. Bans miram comportamento e palavras ofensivas; falha de validação só recusa o salvamento.",
        },
        {
          q: "Por que deu “caracteres inválidos”?",
          a: "O jogo só aceita caracteres de uma lista branca, e o seu símbolo não está nela. Escolha uma moldura mais comum ou solte as decorações.",
        },
        {
          q: "A troca de nome custa mesmo diamantes?",
          a: "A troca usa moeda do jogo, então veja a prévia aqui antes de gastar e leve uma candidata reserva para não queimar a tentativa.",
        },
      ],
    },
  },

  "game-name-generator": {
    "pt-br": {
      navName: "Nomes para jogos",
      h1: "Gerador de nomes para jogos",
      title: "Nomes para jogos — gerador com molduras e símbolos",
      description:
        "Nicks gamer com molduras ꧁꧂, estilos Unicode e símbolos para qualquer jogo — o campo costuma pedir de 6 a 16 caracteres. Prévia ao digitar, cópia em um toque.",
      platform: "Jogos",
      intro: [
        "꧁ACE꧂, ♛ʀᴇʏ♛, 𝗦𝗧𝗢𝗥𝗠 — a gramática universal do nick gamer, igual em shooters, MOBAs e gacha. Digite seu nome, escolha um estilo e copie na tela de troca de nome.",
        "O suporte varia por jogo: a maioria aceita molduras comuns e as whitelists recusam as exóticas. Trocar de nome costuma custar moedas ou cartas — salve candidatas aqui antes de gastar.",
      ],
      limits: [
        { label: "Nick típico", value: "De 6 a 16 caracteres por jogo — o contador do jogo manda" },
        { label: "Custo da troca", value: "Cartas ou moeda na maioria; teste aqui antes de gastar" },
        { label: "Validação", value: "Whitelist em alguns títulos; a recusa avisa «caracteres inválidos»" },
      ],
      compat: [
        "Shooters e MOBAs: molduras comuns ꧁꧂ ༺༻ ★彡彡★ quase sempre aceitas",
        "Jogos de anime: os símbolos passam, mas molduras suaves combinam melhor com a arte",
        "Contas de competição: só letras e números simples, por regra de torneio",
        "Busca de amigos: IDs estilizados são difíceis de achar — compartilhe o código de jogador",
      ],
      examples: ["꧁ᴀᴄᴇ꧂", "♛ʀᴇʏ♛", "𝗦𝗡𝗜𝗣𝗘𝗥", "⚡ᴛᴏʀʙᴇɴ⚡", "꧔꧇1v5꧇꧕"],
      steps: [
        "Digite seu nome de jogo e favorite 2–3 candidatas.",
        "Abra a tela de troca de nome e cole a primeira.",
        "Se o filtro recusar, teste a próxima — não brigue com a whitelist.",
        "Peça para um companheiro conferir como seu ID aparece na lista.",
      ],
      faq: [
        {
          q: "Por que alguns jogos recusam nomes estilizados?",
          a: "Filtros anti-personificação usam whitelist de caracteres permitidos; todo o resto é recusado. É uma trava de salvamento, não um ban — volte a caracteres simples.",
        },
        {
          q: "Um nome estilizado pode parecer de admin e dar problema?",
          a: "Personificar administradores ou moderadores é infração por si só — os caracteres estilizados não te protegem. Nunca decore um nome para parecer oficial.",
        },
        {
          q: "Um nome para muitos jogos — como escolher?",
          a: "Desenhe para o jogo mais rigoroso que você joga (limite mais curto, whitelist mais dura); nos outros ele entra automaticamente.",
        },
        {
          q: "Os enfeites contam no limite de 6–16 caracteres?",
          a: "Sim — cada símbolo é um caractere, então ꧁ACE꧂ custa 7, não 3. Monte o nome base primeiro e só acrescente moldura se o contador do jogo tiver espaço.",
        },
        {
          q: "O gerador é grátis? Preciso de conta?",
          a: "Grátis, sem conta e sem instalar nada — nomes estilizados são caracteres Unicode que você mesmo copia e cola. O que custa dinheiro fica dentro do jogo, como as cartas de troca de nome.",
        },
        {
          q: "Quais estilos combinam com jogos de anime ou fofos?",
          a: "Molduras suaves — ♡nome♡, ✿nome✿, versalete — combinam melhor com essa arte do que as pilhas pesadas de shooter. Validam igual a qualquer outro caractere; a diferença é puramente estética.",
        },
      ],
    },
  },
};
