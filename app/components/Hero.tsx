import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/site-images/hero.jpg"
          alt="Casas de alto padrão"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="container relative z-10 mx-auto px-6 text-center text-white animate-on-scroll">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-200">O GROSSO DA OBRA</p>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl animate-fade-in">
          Casas de Alto Padrão em Nova Lima e BH
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-200 md:text-xl">
          Há mais de 30 anos ajudando pessoas a realizar o sonho de construir seu lar.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5531999057269"
            className="rounded-lg bg-primary px-8 py-3 font-bold text-white transition duration-300 hover:bg-red-600"
          >
            Entrar em contato
          </a>
          <a
            href="tel:+5531999057269"
            className="rounded-lg border border-white/70 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            (31) 99905-7269
          </a>
        </div>
      </div>
    </section>
  );
}
