import Image from "next/image";

const stories = [
  {
    title: "Residência Vila da Serra",
    description:
      "O cliente Mauro Costa conta o processo completo da obra, da compra do lote até a estrutura pronta.",
    videoId: "rNSgtqkiI7A",
    duration: "3:51:30",
    thumbnail: "/site-images/podcast-1.png",
  },
  {
    title: "Residência Mirante do Vale",
    description:
      "O cliente Rogério Fernandes compartilha sua experiência em cada etapa da obra com a O Grosso da Obra.",
    videoId: "T5pjF-0z8dM",
    duration: "22:52",
    thumbnail: "/site-images/podcast-2.png",
  },
  {
    title: "Residência Jardins de Petrópolis",
    description:
      "O cliente Lindênio Barros conta como a O Grosso da Obra ajudou no planejamento da residência.",
    videoId: "ibH9Ltbykc4",
    duration: "42:57",
    thumbnail: "/site-images/podcast-3.png",
  },
];

export default function Podcasts() {
  return (
    <section id="clientes" className="bg-zinc-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary">Veja nossos Podcasts</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">
            Conheça os clientes e o processo de construção de cada residência.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-on-scroll">
          {stories.map(story => (
            <article key={story.videoId} className="rounded-2xl bg-white p-6 shadow-md">
              <div className="relative mb-5 aspect-video overflow-hidden rounded-xl">
                <Image
                  src={story.thumbnail}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${story.videoId}`}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Assistir ${story.title} no YouTube`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <i data-feather="play" className="h-6 w-6"></i>
                  </span>
                </a>
                <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  {story.duration}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary">{story.title}</h3>
              <p className="text-sm text-zinc-600">{story.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
