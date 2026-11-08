// Brazilian Portuguese copy for the six migration platform pages, adapted
// from the old site's platform-pages-more.ts (pt-br locale block), with COD
// rename-cost detail from cod-extra.ts. Six pages: facebook-fonts,
// youtube-fonts, adopt-me-fonts, berry-avenue-fonts, cod-name-generator,
// fortnite-name-generator.
// Limits are "about" values carried over from the old copy — the platform's
// own counter is always the source of truth.

import type { PlatformPageCopy } from "../platform-pages";

export const platformPagesMigrationPtBr: Record<string, { "pt-br": PlatformPageCopy }> = {
  "facebook-fonts": {
    "pt-br": {
      navName: "Facebook",
      h1: "Gerador de fontes para Facebook",
      title: "Fontes para Facebook – Nome e intro com estilo",
      description:
        "Fontes para o nome e a intro do Facebook — Unicode de verdade, com prévia e cópia em um toque. O nome cabe em ~50 caracteres; o @usuário fica simples.",
      platform: "Facebook",
      intro: [
        "O Facebook não tem seletor de fontes, mas o nome do perfil e a intro curta são texto simples — então estilos Unicode como 𝐄𝐦𝐢𝐥𝐲 𝐑𝐨𝐬𝐞 e ✧ ᴀᴜʀᴏʀᴀ ✧ aparecem direto no seu perfil. Digite abaixo, veja a prévia ao vivo e toque para copiar.",
        "O limite é o @usuário: só letras, números e pontos, e o Facebook ainda espera que o nome pareça um nome de verdade — pode recusar ou reverter caracteres incomuns. Ponha o estilo no nome e na intro, e deixe o @usuário simples.",
      ],
      limits: [
        { label: "Nome do perfil", value: "Cerca de 50 caracteres — caracteres enfeitados podem contar como mais de um" },
        { label: "Intro", value: "Cerca de 101 caracteres na linha curta da intro" },
        { label: "@usuário", value: "Só letras, números e pontos — nada de caracteres estilizados" },
        { label: "Contagem", value: "Alguns contadores tratam uma letra estilizada como vários caracteres — confie no contador do Facebook" },
      ],
      compat: [
        "Nome do perfil e intro: o texto estilizado costuma salvar e aparecer no desktop e no app",
        "O Facebook pode recusar ou reverter um nome que não pareça um nome — confira sempre o perfil salvo",
        "O @usuário e os @ de Página ficam simples — fontes nunca entram ali",
        "Posts, comentários e o Messenger renderizam os estilos Unicode como texto comum; glifos raros podem virar quadrados em aparelhos antigos",
      ],
      examples: ["𝐄𝐦𝐢𝐥𝐲 𝐑𝐨𝐬𝐞", "𝓙𝓮𝓷𝓷𝓲𝓯𝓮𝓻", "ᴍɪᴋᴇ ᴊᴏɴᴇs", "✧ ᴀᴜʀᴏʀᴀ ✧", "𝕁𝕒𝕪 𝕊𝕡𝕒𝕣𝕜𝕤", "☾ 𝐬𝐭𝐚𝐫𝐠𝐚𝐳𝐞𝐫 ☽", "𝓜𝓲𝓪 ✿"],
      steps: [
        "Estilize seu nome ou sua intro aqui e copie a versão que você gostar.",
        "Abra o Facebook → Editar perfil → cole em Nome ou na intro curta.",
        "Salve e abra seu perfil do jeito que um visitante vê — confirme que cada caractere apareceu.",
        "Se o Facebook reverter o nome, deixe a linha estilizada na intro e mantenha o nome simples.",
      ],
      faq: [
        {
          q: "Posso usar fontes no meu nome do Facebook?",
          a: "Você pode colar Unicode no nome do perfil e na intro. O Facebook pode recusar ou reverter — ele espera nomes que pareçam nomes de verdade. O @usuário não aceita fontes.",
        },
        {
          q: "Qual o tamanho da intro do Facebook?",
          a: "A intro curta fica em torno de 101 caracteres e o nome do perfil em torno de 50. Uma linha estilizada cabe; enfeite longo mais frase, muitas vezes não.",
        },
        {
          q: "Um nome enfeitado pode banir ou resetar minha conta?",
          a: "Caracteres estilizados são só texto, não uma violação por si. O risco realista é menor: o Facebook pode recusar o salvamento ou reverter o nome para uma versão simples. Nada do que você colar aqui suspende a conta.",
        },
        {
          q: "Caracteres enfeitados gastam mais do meu limite de 50/101?",
          a: "Podem. Muitas letras estilizadas ficam fora do alfabeto básico, e alguns contadores do Facebook as tratam como mais de um caractere. Deixe uma folga e confie no contador do Facebook em vez de qualquer estimativa.",
        },
        {
          q: "Como copio e colo, e por que fica diferente no meu celular?",
          a: "Toque numa linha para copiar, segure o campo do Facebook e cole. Se o estilo ficar estranho no seu aparelho, ele não tem o glifo — escolha um alfabeto mais simples, como negrito ou versalete, que renderiza em quase tudo.",
        },
        {
          q: "Esta é uma ferramenta oficial do Facebook?",
          a: "Não. O FancyFont é independente. Facebook e as marcas pertencem à Meta. Esta página só converte os caracteres no seu navegador.",
        },
      ],
    },
  },

  "youtube-fonts": {
    "pt-br": {
      navName: "YouTube",
      h1: "Gerador de fontes para YouTube",
      title: "Fontes para YouTube – Nome e descrição do canal",
      description:
        "Fontes para o nome e a descrição do canal do YouTube — estilize aqui, veja a prévia, copie e cole no YouTube Studio. O @usuário continua simples.",
      platform: "YouTube",
      intro: [
        "O YouTube não tem seletor de fontes, mas o nome do canal e a descrição são texto simples — estilos Unicode como 𝐆𝐚𝐦𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐌𝐚𝐱 e ★ Pixel Forge ★ aparecem na página do seu canal. Digite abaixo e toque para copiar.",
        "O limite é o @usuário: letras minúsculas, dígitos, sublinhados e pontos, só caracteres simples — um @ estilizado não resolve em buscas nem em menções. Ponha o estilo no nome do canal e na descrição.",
      ],
      limits: [
        { label: "Nome do canal", value: "Cerca de 100 caracteres — o campo que acaba primeiro" },
        { label: "@usuário", value: "Cerca de 30 caracteres, letras minúsculas/dígitos/sublinhados/pontos simples" },
        { label: "Descrição", value: "Cerca de 1.000 caracteres — um nome estilizado mais uma frase normal cabe fácil" },
        { label: "Contagem", value: "Alguns contadores tratam uma letra estilizada como vários caracteres — confie no contador do YouTube" },
      ],
      compat: [
        "Nome do canal: o texto estilizado costuma salvar; confirme na página pública do canal depois de publicar",
        "@usuário: sempre simples — fontes quebram menções e a correspondência de busca",
        "Descrição e Sobre: texto estilizado funciona, mas deixe palavras-chave e links em caracteres simples para a busca ler",
        "Comentários: os estilos Unicode renderizam; alguns aparelhos desenham quadrados para glifos raros",
      ],
      examples: ["𝐆𝐚𝐦𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐌𝐚𝐱", "𝓒𝓸𝓸𝓴𝓲𝓷𝓰 𝓒𝓸𝓻𝓷𝓮𝓻", "★ Pixel Forge ★", "ᴅᴀɪʟʏ ᴠʟᴏɢs", "𝕊𝕡𝕒𝕔𝕖 𝕂𝕚𝕥", "ミ★ lo-fi nights 彡★", "𝘚𝘩𝘰𝘳𝘵𝘴 𝘏𝘶𝘣"],
      steps: [
        "Estilize o nome do canal aqui e copie o favorito.",
        "Abra o YouTube Studio → Personalização → Informações básicas → cole em Nome do canal (e na Descrição, se quiser).",
        "Publique e abra a página pública do canal para confirmar que cada caractere apareceu.",
        "Deixe o @usuário intacto — ele é simples por design e nunca aceita estilos.",
      ],
      faq: [
        {
          q: "Meu @usuário do YouTube pode usar uma fonte?",
          a: "Não. O @usuário é um nome simples em minúsculas — letras, dígitos, sublinhados e pontos. Ponha o estilo no nome do canal e na descrição, que são campos separados.",
        },
        {
          q: "Onde colo um nome de canal estilizado?",
          a: "Copie aqui, abra o YouTube Studio → Personalização → Informações básicas, cole no nome do canal e publique. Confira a página pública depois de salvar.",
        },
        {
          q: "Um nome estilizado atrapalha meu canal na busca?",
          a: "Pode atrapalhar um pouco. A busca casa texto, e um nome todo estilizado é mais difícil de casar de forma exata. Padrão seguro: nome estilizado pela estética e o nome simples do canal uma vez na descrição, para a busca ler.",
        },
        {
          q: "Qual o tamanho do nome do canal e da descrição?",
          a: "Planeje com cerca de 100 caracteres no nome e cerca de 1.000 na descrição. Letras estilizadas podem contar como mais de um em alguns contadores, então deixe folga e confie no contador do YouTube.",
        },
        {
          q: "Por que meu nome estilizado vira quadrados em alguns aparelhos?",
          a: "O aparelho de quem vê não tem o glifo daquele caractere. Alfabetos comuns — negrito, versalete, full-width — renderizam em quase tudo; pilhas de símbolos exóticos são as que viram quadrados.",
        },
        {
          q: "Esta é uma ferramenta oficial do YouTube?",
          a: "Não. O FancyFont é independente. YouTube e as marcas pertencem ao Google. Esta página só converte os caracteres no seu navegador.",
        },
      ],
    },
  },

  "adopt-me-fonts": {
    "pt-br": {
      navName: "Adopt Me",
      h1: "Fontes para Adopt Me",
      title: "Fontes para Adopt Me que cabem – Nomes de exibição do Roblox",
      description:
        "Fontes para o Adopt Me que cabem no nome de exibição do Roblox — corações preppy e laços fofos perto dos ~20 caracteres. Prévia, cópia e salvar no Roblox.",
      platform: "Adopt Me!",
      intro: [
        "O Adopt Me mostra seu nome do Roblox acima do avatar — o @usuário fica em letras, dígitos e um sublinhado, e o nome de exibição que os outros jogadores veem fica em cerca de 20 caracteres. Linhas como 🤍 ᴍɪʟᴀ 🤍 e ♡ sᴋʏʟᴀʀ ♡ são o visual preppy, encurtadas para caber. Digite abaixo e toque para copiar.",
        "O Roblox filtra nomes de exibição e ainda pode recusar um símbolo, e as trocas de nome são limitadas — cerca de uma a cada 7 dias. Então decida aqui: veja a prévia, mantenha o nome dentro do limite e faça o teste de colar na tela do próprio Roblox antes de confirmar.",
      ],
      limits: [
        { label: "Nome de exibição", value: "Cerca de 20 caracteres (a Roblox anunciou 3–20) — cada coração conta" },
        { label: "@usuário", value: "3–20 caracteres, letras/dígitos/um sublinhado — só caracteres simples" },
        { label: "Trocas de nome", value: "Cerca de uma a cada 7 dias, pela ajuda da Roblox — não gaste uma sem conferir" },
        { label: "Contagem", value: "Alguns contadores tratam uma letra estilizada como vários caracteres — confie no campo do Roblox" },
      ],
      compat: [
        "Nome de exibição: estilos de glifo inteiro, como versalete e script, passam pelo filtro do Roblox com mais frequência",
        "Laços empilhados e símbolos raros são recusados primeiro — o Roblox pode resetar o nome para o seu @usuário",
        "@usuário: nunca aceita estilos, no Adopt Me nem em nenhum lugar do Roblox",
        "Chat: texto estilizado funciona, mas o filtro do Roblox pode transformar palavras bloqueadas em #### — mande a versão simples",
      ],
      examples: ["🤍 ᴍɪʟᴀ 🤍", "♥ ᴄʟᴏᴠᴇʀ", "♡ sᴋʏʟᴀʀ ♡", "୨୧ ʙᴜɴɴʏ", "☆ ᴘᴇᴀᴄʜʏ ☆", "𝒮𝓌𝑒𝑒𝑡𝑝𝑒𝑎", "🤍 ᴘʀɪɴᴄᴇss ᴋ"],
      steps: [
        "Rascunhe o nome de exibição aqui — mantenha em cerca de 20 caracteres, corações inclusos.",
        "Abra o Roblox → Configurações → Informações da conta → Nome de exibição (o Adopt Me usa seu nome do Roblox).",
        "Cole, acompanhe a prévia do próprio Roblox e salve só quando ele aceitar o nome.",
        "Se for recusado, troque para a próxima candidata em vez de ficar mexendo nos símbolos — as trocas são limitadas a cerca de uma a cada 7 dias.",
      ],
      faq: [
        {
          q: "Meu @usuário do Adopt Me pode usar essas fontes?",
          a: "Não. O @usuário é o nome de login do Roblox: letras, dígitos e um sublinhado. Ponha o estilo no nome de exibição — é o campo que os outros jogadores veem acima do avatar.",
        },
        {
          q: "Por que meu nome fancy do Adopt Me foi rejeitado?",
          a: "O Roblox filtra os nomes de exibição, e laços empilhados e símbolos raros falham primeiro. Tente as linhas de um coração só ou os versaletes puros, e confira a prévia do próprio jogo antes de salvar.",
        },
        {
          q: "Um nome estilizado pode banir minha conta?",
          a: "Não — os caracteres são texto comum, não trapaça nem exploit. O risco realista é o Roblox recusar o salvamento ou resetar o nome para o @usuário. Se passar por staff ou esconder palavras proibidas é outra violação, essa sim real.",
        },
        {
          q: "Qual o tamanho do nome de exibição do Adopt Me?",
          a: "Cerca de 20 caracteres, e o anúncio da Roblox coloca a faixa em 3–20. Corações, laços e letras estilizadas contam juntos, então um nome curto com uma marca cabe mais vezes do que uma moldura completa.",
        },
        {
          q: "Por que meu nome estilizado fica diferente no meu celular?",
          a: "Seu aparelho não tem o glifo daquele caractere e desenha um quadrado. Versalete e negrito renderizam em quase tudo; o lacinho (୨୧) é o campeão dos problemas. Confira o nome no aparelho em que você realmente joga.",
        },
        {
          q: "Como copio e colo o nome no Adopt Me?",
          a: "Toque numa linha para copiar. Abra o Roblox → Configurações → Informações da conta → Nome de exibição, cole e leia a prévia do próprio Roblox antes de salvar. O Adopt Me puxa o nome automaticamente — não existe campo de nome dentro do jogo.",
        },
      ],
    },
  },

  "berry-avenue-fonts": {
    "pt-br": {
      navName: "Berry Avenue",
      h1: "Gerador de fontes para Berry Avenue",
      title: "Fontes para Berry Avenue — copie grátis (~20 caracteres)",
      description:
        "Fontes grátis para Berry Avenue no nome de exibição do Roblox — laços, script e versalete perto dos ~20 caracteres. Veja, copie, cole. Não é para o @usuário.",
      platform: "Berry Avenue",
      intro: [
        "O Berry Avenue mostra seu nome de exibição do Roblox sobre o personagem — esse campo fica em cerca de 20 caracteres, e o @usuário continua simples. Linhas como 𝜗𝜚 𝑩𝒍𝒂𝒊𝒓 𝜗𝜚 e 𐙚 𝓡𝓸𝓼𝓲𝓮 𐙚 são o visual coquette, no tamanho que cabe. Digite abaixo e toque para copiar.",
        "São caracteres Unicode para colar, não uma fonte para instalar — então o filtro do Roblox e os glifos do seu aparelho decidem o visual final. Mantenha o nome de exibição dentro do limite, salve só quando a tela do Roblox aceitar, e deixe as linhas compridas para o chat ou para uma placa.",
      ],
      limits: [
        { label: "Nome de exibição", value: "Cerca de 20 caracteres (a Roblox anunciou 3–20) — laços e corações contam" },
        { label: "@usuário", value: "Letras/dígitos/um sublinhado simples — fontes não entram aqui" },
        { label: "Trocas de nome", value: "Cerca de uma a cada 7 dias, pela ajuda da Roblox" },
        { label: "Chat e placas", value: "Sem limite publicado do Berry Avenue para esses campos — teste no seu aparelho" },
      ],
      compat: [
        "Nome de exibição: versalete e script aguentam melhor; o lacinho (୨୧) pode virar quadrado em alguns aparelhos",
        "Falas de chat e placas da casa podem ser mais longas que o nome sobre a cabeça — confira se renderizam no seu aparelho primeiro",
        "@usuário: sempre simples — os jogadores ainda te encontram por esse @",
        "O filtro de chat do Roblox pode transformar palavras estilizadas em #### — guarde uma versão em texto simples para o que importa",
      ],
      examples: ["𝜗𝜚 𝑩𝒍𝒂𝒊𝒓 𝜗𝜚", "🎀 𝒮𝓀𝓎𝑒", "𐙚 𝓡𝓸𝓼𝓲𝓮 𐙚", "♡ 𝓔𝓵𝓵𝓲𝓮", "ᴊᴀᴅᴇ ᴠᴀʟᴇ", "꒰ 𝓝𝓲𝓬𝓸𝓵𝓮 ꒱", "𐙚 𝑫𝒂𝒚𝒍𝒆𝒆"],
      steps: [
        "Digite seu nome e copie uma linha que fique perto dos 20 caracteres.",
        "Abra o Roblox → Configurações → Informações da conta → Nome de exibição (o Berry Avenue mostra seu nome do Roblox).",
        "Cole, deixe a tela do Roblox validar o nome e salve.",
        "Linhas de RP mais longas vão no chat ou numa placa da casa — depois de ver se renderizam no seu aparelho.",
      ],
      faq: [
        {
          q: "Quais fontes servem para Berry Avenue?",
          a: "Comece com um nome de exibição de cerca de 20 caracteres. A linha quieta de versaletes não acrescenta símbolos. Some um laço só se a tela de nome do próprio Roblox ainda aceitar. São caracteres Unicode para colar, não um arquivo de fonte.",
        },
        {
          q: "Fontes de Berry Avenue entram no @usuário?",
          a: "Não. A Roblox trata o nome de exibição e o @usuário como campos diferentes. O nome de exibição é o que os outros veem sobre o personagem; o @usuário é o nome de login. Letras estilizadas vão só no nome de exibição, e a fala de RP mais longa fica no chat.",
        },
        {
          q: "Por que o Roblox rejeitou meu nome de Berry Avenue?",
          a: "Os nomes de exibição são filtrados, e um nome que fere as regras pode voltar a ser o seu @usuário. Tire os símbolos raros, mantenha o nome dentro dos 3–20 informados pela Roblox, deixe dados pessoais de fora e salve só depois que a tela da Roblox aceitar.",
        },
        {
          q: "Por que as fontes de Berry Avenue viram quadrados vazios?",
          a: "Uma letra estilizada é um caractere Unicode, e um aparelho sem o glifo dela desenha um quadrado (□). Esta página não instala fonte — seu celular ou computador decide o que consegue desenhar. Copie a linha de versalete simples e confira o nome no aparelho em que você joga.",
        },
        {
          q: "Como copio e colo meu nome de Berry Avenue?",
          a: "Toque numa linha para copiar, abra o Roblox → Configurações → Informações da conta → Nome de exibição e cole. O Berry Avenue puxa o nome do Roblox — não existe campo de nome dentro do jogo.",
        },
        {
          q: "Isto é um gerador de fontes para Berry Avenue?",
          a: "Ele rascunha um nome de exibição para copiar. Não é uma ferramenta oficial do Berry Avenue nem da Roblox, e nada aqui garante que o jogo aceite os caracteres — a tela do próprio Roblox é a conferência final.",
        },
      ],
    },
  },

  "cod-name-generator": {
    "pt-br": {
      navName: "COD",
      h1: "Gerador de nomes para Call of Duty",
      title: "Nomes para Call of Duty — copie o nome e a tag do clã",
      description:
        "Nomes estilosos para Call of Duty — o nome do jogador cabe em cerca de 16 caracteres e a tag do clã fica curta e simples. Veja a prévia, copie e teste no jogo.",
      platform: "Call of Duty",
      intro: [
        "Os nomes de jogador de Call of Duty ficam em cerca de 16 caracteres em muitos títulos, incluindo o Warzone e o Mobile — um campo que aparece em todo lobby e na tela de abate. Linhas como ꧁𝐕𝐄𝐍𝐎𝐌꧂ e 「ᴘʀᴇᴅᴀᴛᴏʀ」 já nascem no tamanho que cabe. Digite abaixo, veja a prévia e copie.",
        "A tag do clã é outro campo, de cerca de 2 a 4 caracteres, então nome decorado não entra ali — deixe a tag curta e simples. E como a troca de nome pode custar, leia o nome de volta na prévia do próprio jogo antes de confirmar qualquer coisa.",
      ],
      limits: [
        { label: "Nome do jogador", value: "Cerca de 16 caracteres em muitos títulos — o teto varia por jogo" },
        { label: "Tag do clã", value: "Cerca de 2–4 caracteres, texto simples — nome estilizado não cabe" },
        { label: "Custo da troca", value: "Mobile: 500 COD Points, uma vez a cada 3 dias · Títulos com ID Activision: rename tokens (1 a cada 6 meses, guarda até 2)" },
        { label: "Contagem", value: "Alguns contadores tratam uma letra estilizada como vários caracteres — confie no campo do jogo" },
      ],
      compat: [
        "Nome do jogador: negrito, versalete e molduras comuns (꧁꧂ 「」) costumam passar; marcas empilhadas pesadas falham primeiro",
        "Tag do clã: só texto simples — nunca cole o nome com moldura na tag",
        "Um nome que não passa no filtro do ID Activision pode ser substituído por anon mais dígitos (ex.: anon123456789012)",
        "A tela de abate e as listas de lobby renderizam os caracteres crus — confira que cada glifo aparece antes de pagar uma troca",
      ],
      examples: ["꧁𝐕𝐄𝐍𝐎𝐌꧂", "★彡𝐒𝐍𝐈𝐏𝐄𝐑彡★", "༺𝐆𝐇𝐎𝐒𝐓༻", "「ᴘʀᴇᴅᴀᴛᴏʀ」", "𝕿𝖔𝖝𝖎𝖈", "⚡𝐑𝐚𝐢𝐝𝐞𝐫", "♛𝐊𝐈𝐍𝐆♛", "𝗩𝗮𝗺𝗽𝗶𝗿𝗲"],
      steps: [
        "Rascunhe o nome do jogador aqui e mantenha em cerca de 16 caracteres.",
        "Abra a tela de troca de nome do jogo — Mobile: Perfil do Jogador → Editar; títulos com ID Activision: fluxo de rename token.",
        "Cole o nome e leia de volta na prévia do próprio jogo antes de confirmar.",
        "Deixe a tag do clã curta e simples — 2 a 4 caracteres, sem estilo.",
      ],
      faq: [
        {
          q: "Nomes para Call of Duty cabem na tag do clã?",
          a: "Não. A tag fica em torno de 2 a 4 caracteres — uma faixa para planejar, não um teto oficial — e aceita só texto simples. Deixe a tag curta e ponha o estilo no nome do jogador.",
        },
        {
          q: "Qual o tamanho de um nome no Call of Duty?",
          a: "Planeje com cerca de 16 caracteres. Warzone, Mobile e os títulos antigos não usam o mesmo teto, então o campo do jogo é o limite de verdade — os artigos de troca de nome da Activision não fixam um teto oficial.",
        },
        {
          q: "Um nome estilizado pode me banir?",
          a: "Não — os caracteres são texto, não trapaça. Os riscos realistas são práticos: o filtro recusa o salvamento, ou um nome que não passa no filtro do ID Activision é substituído por anon seguido de dígitos. Passar por staff ou usar ofensa é outra violação, essa sim real.",
        },
        {
          q: "Quanto custa trocar o nome no COD?",
          a: "No Call of Duty: Mobile, 500 COD Points por um Rename Card, uma vez a cada três dias. Em títulos com ID Activision, como o Warzone, a troca gasta rename tokens: você recebe um a cada seis meses e pode guardar no máximo dois. Uma troca forçada por caracteres inválidos pode devolver o token; uma por Código de Conduta, não.",
        },
        {
          q: "Por que meu nome estilizado vira quadrados no celular?",
          a: "Seu celular não tem o glifo daquele caractere. Negrito e versalete renderizam em quase tudo; pilhas de símbolos exóticos são as que viram quadrados. Cole e leia o nome no jogo antes de gastar uma troca.",
        },
        {
          q: "Esta é uma ferramenta oficial do Call of Duty?",
          a: "Não. O FancyFont é independente e não é afiliado à Activision. Esta página rascunha o nome e converte os caracteres no seu navegador — nada é enviado.",
        },
      ],
    },
  },

  "fortnite-name-generator": {
    "pt-br": {
      navName: "Fortnite",
      h1: "Gerador de nomes para Fortnite",
      title: "Gerador de nomes de Fortnite – nomes com estilo",
      description:
        "Nomes estilosos para Fortnite com molduras e estilos Unicode — o nome de exibição cabe em cerca de 16 caracteres. Veja, copie e salve pela conta Epic.",
      platform: "Fortnite",
      intro: [
        "O Fortnite mostra seu nome de exibição da Epic em todos os lobbies, telas de abate e replays — um campo, geralmente em torno de 16 caracteres. Linhas como ★彡𝐕𝐈𝐂𝐓𝐎𝐑彡★ e ༺𝐃𝐚𝐫𝐤𝐍𝐢𝐧𝐣𝐚༻ já nascem no tamanho que cabe. Digite abaixo, veja a prévia e copie.",
        "O nome é da conta: a troca fica nas configurações da sua conta Epic, e o filtro da Epic decide quais caracteres sobrevivem. Alfabetos de glifo inteiro, como negrito e versalete, aguentam mais que enfeites empilhados — favorite duas candidatas aqui antes de fechar.",
      ],
      limits: [
        { label: "Nome de exibição", value: "Cerca de 16 caracteres — o campo do jogo é o juiz final" },
        { label: "Trocas de nome", value: "Feitas pelas configurações da conta Epic; a Epic limita a frequência" },
        { label: "ID da conta Epic", value: "Um número — fica simples, sem estilo" },
        { label: "Contagem", value: "Alguns contadores tratam uma letra estilizada como vários caracteres — confie no campo da Epic" },
      ],
      compat: [
        "Nome de exibição: alfabetos de glifo inteiro (negrito, versalete) sobrevivem mais ao filtro da Epic que enfeites empilhados",
        "Se o lobby mostra quadrados, o filtro da Epic aparou ou recusou o estilo — escolha um mais simples",
        "A troca segue sua conta: o nome novo aparece em todas as plataformas em que você entra",
        "Listas de party e telas de abate renderizam o Unicode cru — aparelhos antigos podem perder glifos raros",
      ],
      examples: ["★彡𝐕𝐈𝐂𝐓𝐎𝐑彡★", "꧁𝐒𝐭𝐨𝐫𝐦𝐁𝐫𝐢𝐧𝐠𝐞𝐫꧂", "༺𝐃𝐚𝐫𝐤𝐍𝐢𝐧𝐣𝐚༻", "⚡ɢᴀʟᴀxʏ", "「𝐑𝐚𝐩𝐭𝐨𝐫」", "𝕭𝖑𝖆𝖟𝖊", "♛𝐋𝐨𝐨𝐭 𝐊𝐢𝐧𝐠♛", "彡𝐧𝐨𝐬𝐜𝐨𝐩𝐞彡"],
      steps: [
        "Rascunhe o nome de exibição aqui e favorite duas candidatas.",
        "Abra as configurações da sua conta Epic na web → Geral → Nome de Exibição (ou Conta nas configurações do jogo).",
        "Cole a primeira candidata, salve e confira o lobby e a tela de abate.",
        "Se virar quadrados ou for cortado, use a reserva mais simples em vez de brigar com o filtro.",
      ],
      faq: [
        {
          q: "Qual o tamanho de um nome no Fortnite?",
          a: "Planeje com cerca de 16 caracteres. A prévia conta os caracteres e avisa antes de copiar; o campo do jogo é o juiz final.",
        },
        {
          q: "Como mudo meu nome no Fortnite?",
          a: "Pelas configurações da sua conta Epic no site, ou na seção de conta no jogo. O nome de exibição é da conta, então a mudança te segue em todas as plataformas em que você joga.",
        },
        {
          q: "Posso colocar símbolos no meu nome do Fortnite?",
          a: "Caracteres Unicode estilizados geralmente são salvos, mas o filtro da Epic pode cortar ou recusar. Alfabetos mais simples — negrito, versalete — sobrevivem mais que enfeites pesados.",
        },
        {
          q: "Um nome estilizado pode me banir?",
          a: "Não — caracteres estilizados são texto comum, e um salvamento recusado é só um salvamento recusado. Bans miram comportamento e nomes ofensivos ou que passam por outras pessoas, não o alfabeto que você digitou.",
        },
        {
          q: "Como copio e colo o nome, e por que fica diferente no celular?",
          a: "Toque numa linha para copiar, cole no campo Nome de Exibição da Epic e salve. Se ficar estranho no celular e normal no PC, o celular não tem o glifo — escolha versalete ou negrito, que renderizam em quase tudo.",
        },
        {
          q: "Esta é uma ferramenta oficial do Fortnite?",
          a: "Não. O FancyFont é independente e não é afiliado à Epic Games nem ao Fortnite. Esta página rascunha o nome no seu navegador; a tela da própria Epic faz a troca.",
        },
      ],
    },
  },
};
