import { prisma } from "@/lib/prisma";

export type HomeContentData = {
  hero: {
    title: string;
    subtitle: string;
    whatsappText: string;
    phoneText: string;
    imageId?: string | null;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraph1: string;
    paragraph2: string;
    steps: string[];
    imageId?: string | null;
  };
  video: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    videoUrl: string;
    imageId?: string | null;
  };
  services: {
    subtitle: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  podcasts: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      videoUrl: string;
      duration: string;
      imageId?: string | null;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappText: string;
    phoneText: string;
    address: string;
    hours: string;
  };
  map: {
    address: string;
    cep: string;
    query: string;
  };
};

export const defaultHomeContent: HomeContentData = {
  hero: {
    title: "Casas de Alto Padrão em Nova Lima e BH",
    subtitle: "Há mais de 30 anos ajudando pessoas a realizar o sonho de construir seu lar.",
    whatsappText: "Entrar em contato",
    phoneText: "(31) 99905-7269",
    imageId: null,
  },
  about: {
    eyebrow: "FASE 01 - ESTRUTURA",
    title: "Entenda nosso trabalho",
    intro: "Nosso trabalho se inicia na fase 01 da construção da residência do cliente.",
    paragraph1:
      "Toda construção começa após o terreno comprado e o projeto de arquitetura pronto, denominada de Estrutura de concreto armado.",
    paragraph2: "A mais de 30 anos nos somos especialistas em estruturas de concreto armado.",
    steps: [
      "Elaboração do projeto estrutural, devidamente compatibilizado com a arquitetura;",
      "Execução da terraplenagem e adequação do terreno;",
      "Execução de fundações;",
      "Execução das lajes dos pavimentos pisos da edificação, juntamente com pilares e vigas.",
    ],
    imageId: null,
  },
  video: {
    eyebrow: "ASSISTA AO VÍDEO",
    title: "Ligue o som e entenda como funciona",
    subtitle: "Conheça ainda mais o nosso trabalho e entenda como funciona a primeira fase da obra.",
    bullets: [
      "Estruturas de concreto para residências de alto padrão.",
      "Atuação em Nova Lima e Belo Horizonte.",
      "Mais de 30 anos de experiência em obras estruturais.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=rNSgtqkiI7A",
    imageId: null,
  },
  services: {
    subtitle: "ESCOLHA O GROSSO DA OBRA",
    items: [
      {
        icon: "layers",
        title: "Projeto Estrutural",
        description: "Executamos cálculo estrutural com maior desempenho e seguranço para sua obra.",
      },
      {
        icon: "box",
        title: "Estrutura de Concreto Armado",
        description:
          "\"Missão dada e missão cumprida\". Somos especialistas quando o assunto é execução de estruturas de concreto armado.",
      },
      {
        icon: "compass",
        title: "Terraplanagem",
        description:
          "Possuímos equipamentos própios de terraplanegem para adequar o seu terreno da melhor forma para implatação da sua obra.",
      },
      {
        icon: "anchor",
        title: "Fundações",
        description: "Soluções rápidas e modernas para execução das fundações da sua obra.",
      },
      {
        icon: "file-text",
        title: "Licenciamento de Projetos",
        description:
          "Aprovações e liberações de alvará, e processo de terraplanagem nas prefeituras de Nova Lima para ínicio da obra.",
      },
      {
        icon: "map-pin",
        title: "Locação de Obras por Coordenadas",
        description:
          "\"Pensamos no seu projeto\". Solução personalizadas para seu projeto garantindo a redução dos custos de implantação.",
      },
    ],
  },
  podcasts: {
    eyebrow: "Histórias dos Clientes",
    title: "Veja nossos Podcasts",
    subtitle: "Histórias dos Clientes",
    items: [
      {
        title: "Podcast - Saindo do Zero Para Construção de uma casa",
        description: "Debora e Alisson #001 | Projeto e construção",
        videoUrl: "https://www.youtube.com/watch?v=rNSgtqkiI7A",
        duration: "3:51:30",
        imageId: null,
      },
      {
        title: "Impermeabilização Muro de Arrimo",
        description: "Haras Jafet #002 | Projeto e construção",
        videoUrl: "https://www.youtube.com/watch?v=T5pjF-0z8dM",
        duration: "22:52",
        imageId: null,
      },
      {
        title: "Laje nervurada e rampa de VeÍculos",
        description: "Residência no Quintas do Morrro #001 | Projeto e Construção",
        videoUrl: "https://www.youtube.com/watch?v=ibH9Ltbykc4",
        duration: "42:57",
        imageId: null,
      },
    ],
  },
  contact: {
    title: "SOLICITE UM ORÇAMENTO",
    subtitle: "Clique no botão abaixo e solicite um orçamento com a nossa equipe.",
    whatsappText: "Falar no WhatsApp",
    phoneText: "(31) 99905-7269",
    address: "Avenida Regent, 255 - Nova Lima, MG - 34018-000",
    hours: "Segunda a Sexta, 8h às 18h",
  },
  map: {
    address: "Avenida Regent, 255 - Nova Lima, MG",
    cep: "34018-000",
    query: "Avenida Regent 255 Nova Lima MG 34018000 Brasil",
  },
};

export function getMediaUrl(id?: string | null) {
  return id ? `/api/media/${id}` : undefined;
}

export async function getHomeContent(): Promise<HomeContentData> {
  const record = await prisma.homeContent.findFirst();
  if (!record) return defaultHomeContent;

  const data = record.data as HomeContentData;
  return {
    ...defaultHomeContent,
    ...data,
    hero: { ...defaultHomeContent.hero, ...data.hero },
    about: { ...defaultHomeContent.about, ...data.about },
    video: { ...defaultHomeContent.video, ...data.video },
    services: { ...defaultHomeContent.services, ...data.services },
    podcasts: { ...defaultHomeContent.podcasts, ...data.podcasts },
    contact: { ...defaultHomeContent.contact, ...data.contact },
    map: { ...defaultHomeContent.map, ...data.map },
  };
}
