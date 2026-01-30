export default function Contact() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center animate-on-scroll">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-secondary">Solicite um orçamento</h2>
            <p className="mb-6 text-lg text-zinc-600">
              Clique no botão abaixo e solicite um orçamento com a nossa equipe.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5531999057269"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-bold text-white transition duration-300 hover:bg-red-600"
              >
                Falar no WhatsApp
              </a>
              <a
                href="tel:+5531999057269"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-primary hover:text-primary"
              >
                (31) 99905-7269
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-8 shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-secondary">Atuação</h3>
            <p className="mb-6 text-zinc-600">
              Estruturas de concreto para residências de alto padrão em Nova Lima e Belo Horizonte.
            </p>
            <div className="space-y-4 text-zinc-600">
              <div className="flex items-start gap-3">
                <span className="text-primary">
                  <i data-feather="map-pin"></i>
                </span>
                <span>Nova Lima - MG</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">
                  <i data-feather="clock"></i>
                </span>
                <span>Segunda a Sexta, 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
