import Image from "next/image";

type AboutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  paragraph1: string;
  paragraph2: string;
  steps: string[];
  imageUrl?: string;
};

export default function About({
  eyebrow,
  title,
  intro,
  paragraph1,
  paragraph2,
  steps,
  imageUrl,
}: AboutProps) {
  return (
    <section id="empresa" className="bg-muted/40 py-20 text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center animate-on-scroll">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {eyebrow}
            </p>
            <h2 className="mb-6 text-3xl font-bold text-secondary dark:text-zinc-100">{title}</h2>
            <p className="mb-4 text-zinc-600 dark:text-zinc-300">{intro}</p>
            <p className="mb-4 text-zinc-600 dark:text-zinc-300">{paragraph1}</p>
            <p className="mb-6 text-zinc-600 dark:text-zinc-300">{paragraph2}</p>
            <div className="grid gap-3">
              {steps.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <i data-feather="check" className="h-5 w-5 text-primary"></i>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {imageUrl ? (
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-card">
              <Image
                src={imageUrl}
                alt="Equipe da O Grosso da Obra"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
