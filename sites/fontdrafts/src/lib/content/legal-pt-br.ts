// Brazilian Portuguese legal/info pages, populated with hand-written copy.
// See legal-en.ts for the reference.

import type { LegalBundle } from "./legal";
import { contentUpdated, contactEmail, siteName } from "../site";

export const legalPtBr: LegalBundle = {
  about: {
    navName: "Sobre",
    h1: `Sobre o ${siteName}`,
    intro: [
      `${siteName} é um kit de ferramentas de texto estilizado: transforma letras e números em caracteres Unicode decorados e embrulha nicknames com molduras de símbolos. Toda conversão roda no seu navegador — nada do que você digita chega a um servidor.`,
    ],
    sections: [
      {
        heading: "Como produzimos o conteúdo",
        paragraphs: [
          "Cada página de estilo, página de plataforma e guia é escrito à mão a partir de uma base de fatos compartilhada: o resultado é texto comum; glifos estilizados cobrem apenas letras latinas e dígitos; as regras das plataformas mudam sem aviso.",
          "Onde quer que limites de plataforma apareçam, marcamos como “aproximados” e apontamos para o contador ao vivo da própria plataforma — não fazemos afirmações que não dá para verificar e não falamos em nome de nenhuma plataforma.",
        ],
      },
      {
        heading: "Rotulagem honesta",
        paragraphs: [
          "Estilos que renderizam mal em aparelhos antigos ou fontes raras carregam uma nota de risco ⚠ visível no próprio cartão — não escondida numa página de ajuda. A origem dos símbolos, os limites de cobertura e as peculiaridades de contagem são explicados na página onde você os usa.",
          "Este site é independente e não tem vínculo com nenhuma plataforma, jogo ou app mencionado; todas as marcas pertencem aos seus donos.",
        ],
      },
      {
        heading: "Notas técnicas",
        paragraphs: [
          "O site é totalmente estático: sem contas, sem cookies de rastreamento. Favoritos e cópias recentes vivem no localStorage do seu navegador e pertencem apenas ao seu aparelho.",
          "Achou um bug ou quer um estilo novo? A página de contato tem o nosso e-mail.",
        ],
      },
    ],
  },
  contact: {
    navName: "Contato",
    h1: "Fale com a gente",
    intro: [
      `Um único e-mail chega à equipe: ${contactEmail}`,
      "Conte em qual página você estava, seu navegador/aparelho e o que aconteceu — capturas de tela ajudam. Costumamos responder em até uma semana.",
    ],
    sections: [
      {
        heading: "O que recebemos com prazer",
        paragraphs: [
          "Relatos de bugs (estilos renderizando errado, páginas se comportando mal); pedidos de estilos e decorações; correções quando as regras das plataformas mudam; propostas de parceria — apresente a sua organização.",
        ],
      },
      {
        heading: "O que não atendemos",
        paragraphs: [
          "Recursos de conta: não temos vínculo com nenhuma plataforma e não podemos agir sobre bans. Publicidade paga: não aceitamos. Pedidos para “burlar a validação de uma plataforma”: elas existem para proteger as pessoas, e não vamos responder.",
        ],
      },
    ],
  },
  privacy: {
    navName: "Privacidade",
    h1: "Política de Privacidade",
    intro: [
      `Última atualização: ${contentUpdated}. A versão curta: seu texto fica no seu aparelho.`,
    ],
    sections: [
      {
        heading: "O que processamos",
        paragraphs: [
          "O texto que você converte é processado apenas na memória do seu navegador. Nunca é enviado, registrado ou armazenado em nenhum servidor — as páginas não têm backend para recebê-lo.",
          "Favoritos e cópias recentes são salvos no localStorage do seu navegador, existem só no seu aparelho e desaparecem quando você limpa os dados do navegador. Não temos como acessá-los nem recuperá-los.",
        ],
      },
      {
        heading: "O que não fazemos",
        paragraphs: [
          "Nenhum cookie de rastreamento, nenhuma análise de terceiros ou script de anúncios, nenhum sistema de contas, nenhuma coleta de impressão digital.",
          "Nosso provedor de hospedagem pode registrar logs de acesso anônimos padrão (IP, horários) como parte da entrega do site; esse fluxo é separado da conversão de texto, que nunca sai da página.",
        ],
      },
      {
        heading: "Links de terceiros",
        paragraphs: [
          "Os guias citam plataformas pelo nome apenas como contexto de compatibilidade; não incorporam recursos de terceiros. Se isso mudar um dia, esta seção dirá.",
        ],
      },
      {
        heading: "Mudanças",
        paragraphs: [
          "Mudanças relevantes atualizam esta página e a data dela. Mudanças significativas serão sinalizadas na página inicial por pelo menos 14 dias.",
        ],
      },
    ],
  },
  terms: {
    navName: "Termos",
    h1: "Termos de Uso",
    intro: [`Última atualização: ${contentUpdated}. Ao usar o ${siteName} você aceita os termos abaixo.`],
    sections: [
      {
        heading: "O que é este serviço",
        paragraphs: [
          "Uma ferramenta gratuita de conversão de texto Unicode, oferecida “no estado em que se encontra”, sem garantia de adequação comercial ou a uma finalidade específica. O resultado são caracteres de texto comuns; não reivindicamos direitos sobre ele e não fazemos promessas sobre como qualquer plataforma ou aparelho o exibe.",
        ],
      },
      {
        heading: "Independência",
        paragraphs: [
          "Este site não é afiliado, endossado nem conectado a nenhuma plataforma, jogo ou app mencionado nele. Nomes e marcas pertencem aos seus respectivos donos e aparecem só como contexto de compatibilidade.",
        ],
      },
      {
        heading: "Suas responsabilidades",
        paragraphs: [
          "O uso do resultado deve seguir os termos da plataforma de destino e a lei local. Usar caracteres estilizados para se passar por outras pessoas ou por autoridades, driblar filtros de conteúdo ou ocultar dados de pagamento/verificação é proibido e é por sua conta e risco.",
          "As regras de suporte das plataformas são definidas por elas e mudam sem aviso; os valores “aproximados” deste site são só referência.",
        ],
      },
      {
        heading: "Limitação de responsabilidade",
        paragraphs: [
          "Na máxima medida permitida pela lei, não somos responsáveis por qualquer perda direta ou indireta decorrente do uso ou da impossibilidade de uso deste serviço. Mudanças nestes termos atualizam a data desta página.",
        ],
      },
    ],
  },
};
