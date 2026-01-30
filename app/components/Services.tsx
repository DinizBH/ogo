const services = [
  {
    icon: "layers",
    title: "Projeto Estrutural",
    description:
      "Criamos o projeto estrutural de sua casa, alinhado ao projeto arquitetônico e às características do solo.",
  },
  {
    icon: "box",
    title: "Estrutura de Concreto Armado",
    description:
      "Realizamos a estrutura de concreto, deixando a sua casa preparada para a fase de acabamentos.",
  },
  {
    icon: "compass",
    title: "Terraplanagem",
    description: "Preparamos e nivelamos o terreno com equipamentos modernos e equipe especializada.",
  },
  {
    icon: "anchor",
    title: "Fundações",
    description:
      "Cálculo estrutural para identificar as condições do solo e o tipo de fundação mais indicado.",
  },
  {
    icon: "file-text",
    title: "Licenciamento de Projetos",
    description: "Serviços de licenciamento e aprovação de projetos em prefeitura.",
  },
  {
    icon: "map-pin",
    title: "Locação de Obras por Coordenadas",
    description:
      "Após aprovação do projeto e alvará, fazemos a locação da obra seguindo as coordenadas técnicas.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary">Nossos Serviços</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600">
            Serviços especializados em estruturas de concreto para residências de alto padrão.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-on-scroll">
          {services.map(service => (
            <div
              key={service.title}
              className="rounded-xl bg-zinc-50 p-8 transition duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <i data-feather={service.icon} className="h-8 w-8 text-primary"></i>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">{service.title}</h3>
              <p className="text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
