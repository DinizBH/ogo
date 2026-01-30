import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="bg-zinc-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row animate-on-scroll">
          <div className="lg:w-1/2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              ASSISTA AO VÍDEO
            </p>
            <h2 className="mb-6 text-3xl font-bold">Ligue o som e aperte o play.</h2>
            <p className="mb-8 text-zinc-300">
              Conheça ainda mais o nosso trabalho e entenda como funciona a primeira fase da obra.
            </p>
            <div className="flex flex-col gap-4 text-zinc-300">
              <span>Estruturas de concreto para residências de alto padrão.</span>
              <span>Atuação em Nova Lima e Belo Horizonte.</span>
              <span>Mais de 30 anos de experiência em obras estruturais.</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/site-images/video.jpg"
                alt="Vídeo institucional"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="video-play-button rounded-full bg-primary p-4 shadow-lg transition duration-300 hover:scale-110 hover:bg-red-600">
                  <i data-feather="play" className="h-10 w-10 text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
