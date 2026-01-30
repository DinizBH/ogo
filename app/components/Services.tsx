type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

type ServicesProps = {
  subtitle: string;
  items: ServiceItem[];
};

export default function Services({ subtitle, items }: ServicesProps) {
  return (
    <section id="servicos" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary dark:text-zinc-100">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-on-scroll">
          {items.map(service => (
            <div
              key={service.title}
              className="rounded-xl bg-card p-8 transition duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <i data-feather={service.icon} className="h-8 w-8 text-primary"></i>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary dark:text-zinc-100">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
