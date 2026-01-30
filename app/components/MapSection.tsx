type MapSectionProps = {
  address: string;
  cep: string;
  query: string;
};

export default function MapSection({ address, cep, query }: MapSectionProps) {
  const encoded = encodeURIComponent(query);

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Como chegar
          </p>
          <h2 className="text-3xl font-bold text-secondary dark:text-zinc-100">
            Nosso endereço
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            {address} - {cep}
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-lg animate-on-scroll bg-card">
          <iframe
            title="Mapa O Grosso da Obra"
            src={`https://www.google.com/maps?q=${encoded}&output=embed`}
            className="h-[70vh] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
