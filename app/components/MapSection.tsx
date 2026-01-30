export default function MapSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Como chegar
          </p>
          <h2 className="text-3xl font-bold text-secondary">Nosso endereço</h2>
          <p className="mt-2 text-zinc-600">Avenida Regent, 255 - Nova Lima, MG - 34018-000</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-lg animate-on-scroll">
          <iframe
            title="Mapa O Grosso da Obra"
            src="https://www.google.com/maps?q=Avenida%20Regent%20255%20Nova%20Lima%20MG%2034018000%20Brasil&output=embed"
            className="h-[70vh] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
