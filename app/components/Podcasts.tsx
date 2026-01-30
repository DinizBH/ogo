import Image from "next/image";

type PodcastItem = {
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  imageUrl?: string;
};

type PodcastsProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: PodcastItem[];
};

export default function Podcasts({ eyebrow, title, subtitle, items }: PodcastsProps) {
  return (
    <section id="clientes" className="bg-muted/40 py-20 text-foreground">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-secondary dark:text-zinc-100">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-on-scroll">
          {items.map(item => (
            <article key={item.title} className="rounded-2xl bg-card p-6 shadow-md">
              <div className="relative mb-5 aspect-video overflow-hidden rounded-xl">
                {item.imageUrl ? (
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                ) : null}
                <a
                  href={item.videoUrl}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Assistir ${item.title} no YouTube`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <i data-feather="play" className="h-6 w-6"></i>
                  </span>
                </a>
                <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  {item.duration}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-secondary dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
