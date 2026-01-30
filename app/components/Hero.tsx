import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  whatsappText: string;
  phoneText: string;
  imageUrl?: string;
};

export default function Hero({ title, subtitle, whatsappText, phoneText, imageUrl }: HeroProps) {
  return (
    <section id="inicio" className="relative flex h-screen items-center justify-center overflow-hidden">
      {imageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Casas de alto padrão"
            fill
            priority
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="container relative z-10 mx-auto px-6 text-center text-white animate-on-scroll">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-200">O GROSSO DA OBRA</p>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl animate-fade-in">{title}</h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-200 md:text-xl">{subtitle}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5531999057269"
            className="rounded-lg bg-primary px-8 py-3 font-bold text-white transition duration-300 hover:bg-red-600"
          >
            {whatsappText}
          </a>
          <a
            href="tel:+5531999057269"
            className="rounded-lg border border-white/70 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            {phoneText}
          </a>
        </div>
      </div>
    </section>
  );
}
