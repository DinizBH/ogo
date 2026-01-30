const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

dotenv.config({ path: ".env.local" });

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

const IMAGE_DIR = path.join(process.cwd(), "public", "site-images");

async function upsertMedia(filename) {
  const filePath = path.join(IMAGE_DIR, filename);
  if (!fs.existsSync(filePath)) return null;

  const data = fs.readFileSync(filePath);
  const mimeType = filename.endsWith(".png")
    ? "image/png"
    : filename.endsWith(".svg")
      ? "image/svg+xml"
      : "image/jpeg";

  const existing = await prisma.media.findFirst({ where: { filename } });
  if (existing) {
    return existing;
  }

  return prisma.media.create({
    data: {
      filename,
      mimeType,
      data,
    },
  });
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    return;
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    if (!existing.approved) {
      await prisma.user.update({
        where: { email },
        data: { approved: true },
      });
    }
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.create({
    data: {
      email,
      name: "Admin",
      passwordHash,
      approved: true,
    },
  });
}

async function seedContent() {
  const heroImage = await upsertMedia("hero.jpg");
  const aboutImage = await upsertMedia("about.jpg");
  const videoImage = await upsertMedia("video.jpg");
  const podcast1 = await upsertMedia("podcast-1.png");
  const podcast2 = await upsertMedia("podcast-2.png");
  const podcast3 = await upsertMedia("podcast-3.png");

  const data = {
    hero: {
      title: "Casas de Alto Padrão em Nova Lima e BH",
      subtitle: "Há mais de 30 anos ajudando pessoas a realizar o sonho de construir seu lar.",
      whatsappText: "Entrar em contato",
      phoneText: "(31) 99905-7269",
      imageId: heroImage?.id ?? null,
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
      imageId: aboutImage?.id ?? null,
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
      imageId: videoImage?.id ?? null,
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
            "Possuímos equipamentos própios de terraplenagem para adequar o seu terreno da melhor forma para implatação da sua obra.",
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
            "Aprovações e liberações de alvará, e processo de terraplenagem nas prefeituras de Nova Lima para ínicio da obra.",
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
          imageId: podcast1?.id ?? null,
        },
        {
          title: "Impermeabilização Muro de Arrimo",
          description: "Haras Jafet #002 | Projeto e construção",
          videoUrl: "https://www.youtube.com/watch?v=T5pjF-0z8dM",
          duration: "22:52",
          imageId: podcast2?.id ?? null,
        },
        {
          title: "Laje nervurada e rampa de Veículos",
          description: "Residência no Quintas do Morrro #001 | Projeto e Construção",
          videoUrl: "https://www.youtube.com/watch?v=ibH9Ltbykc4",
          duration: "42:57",
          imageId: podcast3?.id ?? null,
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

  const existing = await prisma.homeContent.findFirst();
  if (existing) {
    await prisma.homeContent.update({ where: { id: existing.id }, data: { data } });
  } else {
    await prisma.homeContent.create({ data: { data } });
  }
}

async function main() {
  await seedAdmin();
  await seedContent();
}

main()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
