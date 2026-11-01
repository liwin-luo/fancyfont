// Brazilian Portuguese copy for the platform preset pages.

import type { PlatformPageCopy } from "./platform-pages-en";

export const platformPagesPtBr: Record<string, PlatformPageCopy> = {
  "instagram-fonts": {
    navName: "Instagram",
    h1: "Fontes para Instagram",
    title: "Fontes para Instagram – letras bonitas para bio e nome",
    description:
      "Letras Unicode estilosas para a bio e o nome do seu Instagram — veja como cada estilo fica e copie em um toque.",
    intro:
      "O Instagram não tem seletor de fontes. O rascunho abaixo é para a bio, e as quebras de linha já estão nele. O nome visível é o campo curto, cerca de 30 caracteres, e o usuário fica simples.",
    defaultText: "Instagram",
    bios: [
      { id: "name", label: "Nome e símbolos", text: "Alex\n\n♡ ✦ ♡" },
      { id: "line", label: "Uma linha sobre você", text: "café e caminhadas\n\n✦" },
      { id: "note", label: "Nome e uma nota", text: "Alex\n\nchegando agora" },
    ],
    presets: [
      { label: "Moldura suave", left: "✦ ", right: " ✦", transform: "script" },
      { label: "Espaçamento aesthetic", left: "", right: "", transform: "fullwidth" },
      { label: "Lacinhos fofos", left: "୨୧ ", right: " ୨୧", transform: "smallCaps" },
      { label: "Intro em negrito", left: "「 ", right: " 」", transform: "sansBold" },
    ],
    guidance: [
      {
        label: "Nome",
        body: "Cerca de 30 caracteres. Texto estilizado funciona aqui e é onde as fontes brilham mais — aparece nos comentários e no feed dos seguidores.",
      },
      {
        label: "Bio",
        body: "Cerca de 150 caracteres. Fontes, símbolos e combinações decorativas funcionam, e as quebras de linha são mantidas — o lugar perfeito para um nome estilizado ou uma linha de destaque.",
      },
      {
        label: "Usuário",
        body: "Só letras, números, pontos e underline. Nada de fontes Unicode aqui — deixe o @ simples e ponha o estilo no nome.",
      },
    ],
    compatNote:
      "São caracteres Unicode, não um recurso do Instagram — o Instagram pode mudar como os renderiza a qualquer momento. Hoje eles seguram bem em bios e nomes, mas sempre cole e confira na sua própria conta primeiro.",
    faq: [
      {
        q: "Como coloco essas fontes na minha bio do Instagram?",
        a: "Converta seu texto acima e copie. No Instagram, vá em Editar perfil, cole no campo Bio ou Nome e salve. Confira o resultado no app e na versão web.",
      },
      {
        q: "Posso ser banido por usar fontes na bio?",
        a: "Texto estilizado no nome ou na bio é conteúdo normal de perfil, não uma violação conhecida. Mantenha fora do usuário, siga as regras do Instagram e você está igual a milhões de perfis.",
      },
      {
        q: "Por que alguns seguidores veem quadradinhos?",
        a: "O aparelho ou a versão do Instagram da pessoa não tem o glifo. Ficar nos estilos populares como cursiva, versalete e negrito mantém esse risco baixo.",
      },
    ],
  },
  "tiktok-fonts": {
    navName: "TikTok",
    h1: "Fontes para TikTok",
    title: "Fontes para TikTok – apelidos e bio estilizados",
    description:
      "Letras Unicode estilosas para o apelido e a bio do seu TikTok — prévia, cópia e cole no seu perfil em segundos.",
    intro:
      "As opções de texto do TikTok param no editor de vídeo. O apelido e a bio aceitam Unicode — escolha um estilo abaixo e cole no seu perfil.",
    defaultText: "TikTok",
    bios: [
      { id: "name", label: "Nome e uma marca", text: "Alex\n\n♪" },
      { id: "line", label: "O que você posta", text: "clipes diários\n\n★" },
      { id: "note", label: "Nome e uma nota", text: "Alex\npelos edits" },
    ],
    presets: [
      { label: "Moldura de clã", left: "꧁༒ ", right: " ༒꧂", transform: "boldScript" },
      { label: "Brilho sparkle", left: "⋆｡˚ ", right: " ˚｡⋆", transform: "smallCaps" },
      { label: "Vibe larga", left: "", right: "", transform: "fullwidth" },
      { label: "Moldura de coração", left: "♡ ", right: " ♡", transform: "script" },
    ],
    guidance: [
      {
        label: "Apelido",
        body: "Cerca de 24 caracteres, e o texto estilizado mais visível do seu perfil — aparece em todos os vídeos. Caracteres estilizados funcionam aqui.",
      },
      {
        label: "Bio",
        body: "Cerca de 80 caracteres — curta. Uma linha com nome estilizado mais uma combinação compacta costuma caber; texto largo come o limite rápido.",
      },
      {
        label: "Usuário",
        body: "Só letras, números, pontos e underline. O usuário nunca aceita fontes estilizadas — estilize o apelido em vez disso.",
      },
    ],
    compatNote:
      "São caracteres Unicode, não um recurso do TikTok, e é o TikTok que controla a renderização. Hoje apelidos e bios seguram texto estilizado — teste na sua conta e lembre que as regras do perfil podem mudar.",
    faq: [
      {
        q: "Como mudo meu apelido do TikTok para uma fonte estilizada?",
        a: "Copie o nome estilizado acima, abra TikTok → Perfil → Editar perfil → Nome, cole e salve. Seu apelido atualiza em todo lugar onde seus vídeos aparecem.",
      },
      {
        q: "Fontes funcionam nos comentários e legendas do TikTok?",
        a: "Sim — comentários e legendas aceitam caracteres Unicode. O texto estilizado brilha mais no apelido, que aparece em todos os vídeos.",
      },
      {
        q: "Por que parte da minha bio estilizada sumiu?",
        a: "O limite da bio é curto e algumas plataformas cortam caracteres incomuns. Tente um estilo mais simples ou encurte o texto em volta.",
      },
    ],
  },
  "discord-fonts": {
    navName: "Discord",
    h1: "Fontes para Discord",
    title: "Fontes para Discord – estilos para apelidos e status",
    description:
      "Letras Unicode estilosas para apelidos e status do Discord — com notas honestas sobre onde o markdown de verdade do Discord se aplica.",
    intro:
      "Apelidos e status personalizados do Discord não têm botões de formatação — o Unicode preenche essa lacuna. Escolha um estilo, copie e cole no seu perfil.",
    defaultText: "Discord",
    bios: [
      { id: "name", label: "Nome e status", text: "Alex\n\nouvindo" },
      { id: "line", label: "O que você está fazendo", text: "numa chamada\n\n✦" },
      { id: "note", label: "Nota curta", text: "Alex\nausente" },
    ],
    presets: [
      { label: "Tag de servidor", left: "『", right: "』", transform: "monospace" },
      { label: "Modo mod", left: "† ", right: " †", transform: "fraktur" },
      { label: "Flex discreto", left: "", right: "", transform: "smallCaps" },
      { label: "Acento de status", left: "✦ ", right: "", transform: "bold" },
    ],
    guidance: [
      {
        label: "Apelido / nome",
        body: "Cerca de 32 caracteres, por servidor. O Unicode estilizado funciona — é onde as fontes brilham, principalmente com tags de servidor tipo 『tag』.",
      },
      {
        label: "Status personalizado",
        body: "Cerca de 128 caracteres. Texto estilizado e símbolos funcionam; mantenha curto o bastante para ler na lista de membros.",
      },
      {
        label: "Usuário",
        body: "Letras, números, pontos e underline, em minúsculas. Nada de fontes estilizadas — o Discord é rigoroso aqui.",
      },
      {
        label: "Mensagens",
        body: "As mensagens do Discord têm markdown de verdade: **negrito**, *itálico*, __sublinhado__ e ~~riscado~~. Prefira markdown no chat — os estilos Unicode são para o que o markdown não alcança.",
      },
      {
        label: "Molduras de perfil vs. texto",
        body: "A loja do Discord vende Molduras de Perfil — bordas pagas que enfeitam a aparência do perfil inteiro. Elas não mexem no seu texto: o apelido, o status personalizado e o Sobre mim continuam aceitando apenas caracteres comuns, então os estilos Unicode seguem sendo a única forma de deixar esses campos em negrito ou cursivo.",
      },
    ],
    compatNote:
      "São caracteres Unicode, não um recurso do Discord. Donos de servidor também podem mudar as permissões de apelido a qualquer momento. Hoje os estilos funcionam em apelidos e status — cole e confira no seu servidor primeiro.",
    faq: [
      {
        q: "Como mudo meu apelido do Discord para uma fonte estilizada?",
        a: "Copie o texto estilizado acima, clique com o botão direito no ícone do servidor → Editar perfil do servidor (ou seu perfil de usuário), cole no campo do apelido e salve. Trocar apelido no servidor inteiro precisa da permissão certa.",
      },
      {
        q: "Por que usar fontes Unicode se o Discord tem markdown?",
        a: "O markdown só formata mensagens. Apelido, status e Sobre mim não têm opções de formatação — os estilos Unicode são o único negrito ou cursiva que esses campos podem ter.",
      },
      {
        q: "Por que meu apelido estilizado volta ao normal em alguns servidores?",
        a: "Donos e bots podem resetar ou moderar apelidos. Se muda em um servidor só, a causa são as regras daquele servidor — não os caracteres.",
      },
    ],
  },
  "roblox-name-generator": {
    navName: "Roblox",
    h1: "Gerador de nomes para Roblox",
    title: "Gerador de nomes para Roblox – nomes estilosos e limites reais",
    description:
      "Gere ideias de nomes para Roblox com símbolos e estilos — e entenda a diferença entre usuário e nome de exibição.",
    intro:
      "Decore seu nome do Roblox com símbolos e estilos — e saiba exatamente onde cada tipo de nome pode ser usado, porque o Roblox separa usuário de nome de exibição.",
    defaultText: "ShadowHero",
    presets: [
      { label: "Moldura de arena", left: "꧁ ", right: " ꧂", transform: "bold" },
      { label: "Tag pro", left: "✪ ", right: "", transform: "smallCaps" },
      { label: "Envolve estrela", left: "★ ", right: " ★", transform: "identity" },
      { label: "Colchetes", left: "『", right: "』", transform: "bold" },
    ],
    guidance: [
      {
        label: "Usuário",
        body: "Seu login: 3–20 caracteres, letras, números e um underline. Aplicado à risca — sem símbolos, espaços ou caracteres estilizados, nunca.",
      },
      {
        label: "Nome de exibição",
        body: "O nome que os outros jogadores veem, trocável nas configurações. Mais flexível que o usuário, mas ainda passa por filtros — estilos decorados podem ser recusados ou alterados. Teste antes de gastar uma troca.",
      },
      {
        label: "Onde os estilos cabem",
        body: "Mantenha o nome base limpo e adicione decoração que dá para tirar: se um jogo ou atualização recusar símbolos, você ainda tem um nome limpo por baixo.",
      },
    ],
    compatNote:
      "O Roblox aplica filtros próprios aos nomes e os atualiza com o tempo. Nada aqui garante que um nome decorado será aceito — gere, copie e teste na tela de troca de nome do próprio Roblox antes de decidir.",
    faq: [
      {
        q: "Meu usuário do Roblox pode ter símbolos ou fontes?",
        a: "Não. Os usuários ficam limitados a letras, números e um underline. Estilos decorados só valem no nome de exibição — e mesmo lá, quem decide são os filtros do Roblox.",
      },
      {
        q: "Por que meu nome de exibição foi alterado?",
        a: "O Roblox passa os nomes de exibição por filtros automáticos, e nomes com muitos símbolos são alvo frequente. Uma combinação mais simples, ou o nome base com um símbolo só, sobrevive mais vezes.",
      },
      {
        q: "Esse gerador tem ligação com o Roblox?",
        a: "Não — o FancyFont é uma ferramenta independente. Roblox e marcas relacionadas pertencem à Roblox Corporation; esta página só ajuda você a escolher um nome dentro das regras.",
      },
    ],
  },
};
