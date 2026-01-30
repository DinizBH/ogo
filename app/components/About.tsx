import Image from "next/image";

const steps = [
  "Projeto estrutural completo.",
  "Terraplanagem, preparação do terreno.",
  "Execução das fundações.",
  "Estrutura: lajes nervuradas, pilares e vigas.",
];

export default function About() {
  return (
    <section id="empresa" className="bg-zinc-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center animate-on-scroll">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              FASE 01 - ESTRUTURA
            </p>
            <h2 className="mb-6 text-3xl font-bold text-secondary">Entenda nosso trabalho</h2>
            <p className="mb-6 text-lg text-zinc-600">
              Precisão e qualidade para sua construção, a partir das estruturas.
            </p>
            <p className="mb-6 text-zinc-600">
              A O GROSSO DA OBRA, há mais de 30 anos, prepara o terreno, faz o projeto e cuida das
              estruturas de concreto armado e lajes nervuradas para residências de alto padrão em
              Nova Lima e Belo Horizonte.
            </p>
            <div className="grid gap-3">
              {steps.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <i data-feather="check" className="h-5 w-5 text-primary"></i>
                  </div>
                  <span className="text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/site-images/about.jpg"
              alt="Equipe da O Grosso da Obra"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
