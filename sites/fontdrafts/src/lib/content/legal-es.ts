// Spanish legal/info pages, populated with hand-written copy.
// Same claims as legal-en.ts; see that file for the reference.

import type { LegalBundle } from "./legal";
import { contentUpdated, contactEmail, siteName } from "../site";

export const legalEs: LegalBundle = {
  about: {
    navName: "Acerca de",
    h1: `Acerca de ${siteName}`,
    intro: [
      `${siteName} es una caja de herramientas de texto con estilo: convierte letras y números en caracteres Unicode estilizados y decora apodos con marcos de símbolos. Cada conversión corre en tu navegador — nada de lo que escribes llega a un servidor.`,
    ],
    sections: [
      {
        heading: "Cómo hacemos el contenido",
        paragraphs: [
          "Cada página de estilo, página de plataforma y guía se escribe a mano desde una misma base de hechos: la salida es texto ordinario; los glifos estilizados cubren solo letras latinas y dígitos; las reglas de las plataformas cambian sin previo aviso.",
          "Donde aparecen límites de plataforma, los marcamos como «aproximados» y remitimos al contador en vivo de la propia plataforma: no afirmamos lo que no podemos verificar ni hablamos en nombre de ninguna plataforma.",
        ],
      },
      {
        heading: "Etiquetas honestas",
        paragraphs: [
          "Los estilos que se ven mal en dispositivos viejos o fuentes poco comunes llevan una nota de riesgo ⚠ visible en la propia tarjeta, no escondida en una página de ayuda. Los orígenes de los símbolos, los límites de cobertura y las peculiaridades del conteo se explican en la página donde los usas.",
          "Este sitio es independiente y no está afiliado a ninguna plataforma, juego o app mencionada; todas las marcas pertenecen a sus dueños.",
        ],
      },
      {
        heading: "Notas técnicas",
        paragraphs: [
          "El sitio es completamente estático: sin cuentas, sin cookies de rastreo. Los favoritos y las copias recientes viven en el localStorage de tu navegador y pertenecen solo a tu dispositivo.",
          "¿Encontraste un error o quieres un estilo nuevo? La página de contacto tiene nuestro buzón.",
        ],
      },
    ],
  },
  contact: {
    navName: "Contacto",
    h1: "Contáctanos",
    intro: [
      `Un solo buzón llega al equipo: ${contactEmail}`,
      "Cuéntanos en qué página estabas, qué navegador o dispositivo usas y qué pasó — las capturas de pantalla ayudan. Solemos responder en menos de una semana.",
    ],
    sections: [
      {
        heading: "Lo que recibimos con gusto",
        paragraphs: [
          "Reportes de errores (estilos que se ven mal, páginas que fallan); pedidos de estilos y adornos; correcciones cuando cambian las reglas de una plataforma; consultas de alianzas — preséntanos a tu organización, por favor.",
        ],
      },
      {
        heading: "Lo que no atendemos",
        paragraphs: [
          "Apelaciones de cuentas: no estamos afiliados a ninguna plataforma y no podemos actuar sobre baneos. Espacios pagados: no se aceptan. Pedidos para «esquivar la validación de una plataforma»: esas validaciones existen para proteger a la gente y no vamos a responder.",
        ],
      },
    ],
  },
  privacy: {
    navName: "Privacidad",
    h1: "Política de privacidad",
    intro: [
      `Última actualización: ${contentUpdated}. La versión corta: tu texto se queda en tu dispositivo.`,
    ],
    sections: [
      {
        heading: "Qué procesamos",
        paragraphs: [
          "El texto que conviertes se procesa solo en la memoria de tu navegador. Nunca se envía, registra ni almacena en ningún servidor — las páginas no tienen backend que lo reciba.",
          "Los favoritos y las copias recientes se guardan en el localStorage de tu navegador, existen solo en tu dispositivo y desaparecen cuando borras los datos del navegador. No podemos acceder a ellos ni recuperarlos.",
        ],
      },
      {
        heading: "Qué no hacemos",
        paragraphs: [
          "Sin cookies de rastreo, sin analítica de terceros ni scripts de publicidad, sin sistema de cuentas, sin fingerprinting.",
          "Nuestro proveedor de hosting puede registrar bitácoras de acceso anónimas estándar (IP, marcas de tiempo) como parte de servir el sitio; ese conducto es ajeno a la conversión de texto, que nunca sale de la página.",
        ],
      },
      {
        heading: "Enlaces a terceros",
        paragraphs: [
          "Las guías mencionan plataformas por su nombre solo como contexto de compatibilidad; no incrustan recursos de terceros. Si eso cambia alguna vez, esta sección lo dirá.",
        ],
      },
      {
        heading: "Cambios",
        paragraphs: [
          "Los cambios importantes actualizan esta página y su fecha. Los cambios significativos se avisarán en la página principal durante al menos 14 días.",
        ],
      },
    ],
  },
  terms: {
    navName: "Términos",
    h1: "Términos de uso",
    intro: [`Última actualización: ${contentUpdated}. Al usar ${siteName} aceptas los términos siguientes.`],
    sections: [
      {
        heading: "Qué es este servicio",
        paragraphs: [
          "Una herramienta gratuita de conversión de texto Unicode, entregada «tal cual», sin garantía de comerciabilidad ni de aptitud para un fin en particular. La salida son caracteres de texto ordinarios: no reclamamos derechos sobre ella ni hacemos promesas sobre cómo la muestre cualquier plataforma o dispositivo.",
        ],
      },
      {
        heading: "Independencia",
        paragraphs: [
          "Este sitio no está afiliado a, respaldado por ni conectado con ninguna plataforma, juego o app mencionada en él. Los nombres y las marcas pertenecen a sus respectivos dueños y aparecen solo como contexto de compatibilidad.",
        ],
      },
      {
        heading: "Tus responsabilidades",
        paragraphs: [
          "El uso de la salida debe seguir los términos de la plataforma de destino y tu ley local. Usar caracteres con estilo para suplantar personas o autoridades, evadir filtros de contenido o tapar datos de pago o verificación está prohibido y corre por tu cuenta.",
          "Las reglas de compatibilidad las fijan las plataformas y cambian sin previo aviso; los valores «aproximados» de este sitio son solo referencia.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        paragraphs: [
          "Hasta el máximo que permita la ley, no somos responsables de ninguna pérdida directa o indirecta derivada del uso o la imposibilidad de uso de este servicio. Los cambios a estos términos actualizan la fecha de esta página.",
        ],
      },
    ],
  },
};
