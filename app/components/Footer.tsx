export default function Footer() {
  return (
    <footer className="bg-secondary text-white dark:bg-zinc-950">
      <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#inicio" className="mb-4 inline-flex text-xl font-bold">
            O Grosso da Obra
          </a>
          <p className="mb-4 text-zinc-300 dark:text-zinc-400">
            Soluções em estruturas. Cálculo e execução de concreto armado e aço.
          </p>
          <p className="mb-6 text-zinc-400 dark:text-zinc-500">
            Há mais de 30 anos estruturando sonhos.
          </p>
          <div className="flex gap-3">
            {[
              { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
              { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
              { icon: "message-circle", label: "WhatsApp", href: "https://wa.me/5531999057269" },
            ].map(item => (
              <a
                key={item.icon}
                href={item.href}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-primary"
              >
                <i data-feather={item.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">Empresa</h3>
          <div className="flex flex-col gap-3 text-zinc-300 dark:text-zinc-400">
            <a className="transition hover:text-primary" href="#empresa">
              Quem somos
            </a>
            <a className="transition hover:text-primary" href="#servicos">
              Serviços
            </a>
            <a className="transition hover:text-primary" href="#clientes">
              Clientes
            </a>
            <a className="transition hover:text-primary" href="#contato">
              Contato
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">Serviços</h3>
          <div className="flex flex-col gap-3 text-zinc-300 dark:text-zinc-400">
            <a className="transition hover:text-primary" href="#servicos">
              Estruturas em Concreto Armado
            </a>
            <a className="transition hover:text-primary" href="#servicos">
              Lajes Nervuradas
            </a>
            <a className="transition hover:text-primary" href="#servicos">
              Arrimo Verde
            </a>
            <a className="transition hover:text-primary" href="#servicos">
              Licenciamento e Locação
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">Contato</h3>
          <div className="flex flex-col gap-4 text-zinc-300 dark:text-zinc-400">
            <div className="flex items-start gap-3">
              <span className="text-primary">
                <i data-feather="phone"></i>
              </span>
              <span>(31) 99905-7269</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary">
                <i data-feather="map-pin"></i>
              </span>
              <span>Nova Lima - MG</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 py-6 text-center text-sm text-zinc-400 dark:text-zinc-500">
        &copy; {new Date().getFullYear()} O Grosso da Obra. Todos os direitos reservados.
      </div>
    </footer>
  );
}
