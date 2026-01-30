type ContactProps = {
  title: string;
  subtitle: string;
  whatsappText: string;
  phoneText: string;
  address: string;
  hours: string;
};

export default function Contact({
  title,
  subtitle,
  whatsappText,
  phoneText,
  address,
  hours,
}: ContactProps) {
  return (
    <section id="contato" className="bg-primary py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center animate-on-scroll">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white">{title}</h2>
            <p className="mb-6 text-lg text-white/90">{subtitle}</p>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5531999057269"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-primary transition duration-300 hover:bg-zinc-100"
              >
                {whatsappText}
              </a>
              <a
                href="tel:+5531999057269"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {phoneText}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-white">Atuação</h3>
            <p className="mb-6 text-white/90">{address}</p>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start gap-3">
                <span className="text-primary">
                  <i data-feather="map-pin"></i>
                </span>
                <span>{address}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">
                  <i data-feather="clock"></i>
                </span>
                <span>{hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
