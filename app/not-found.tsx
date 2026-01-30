import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(193,57,43,0.2),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,116,144,0.18),transparent_60%)]"></div>

        <div className="relative flex min-h-screen items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-primary">
              O Grosso da Obra
            </p>
            <h1 className="text-6xl font-bold text-secondary dark:text-zinc-100 md:text-7xl">
              404
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A página que você tentou acessar não existe ou foi movida.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Voltar para o site
              </Link>
              <Link
                href="/painel/login"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Acessar painel
              </Link>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              Se você acredita que isso é um erro, entre em contato com nosso time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
