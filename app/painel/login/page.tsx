import Image from "next/image";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <Image
            src="/site-images/hero.jpg"
            alt="O Grosso da Obra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Área privada
            </p>
            <h2 className="text-3xl font-bold">Painel O Grosso da Obra</h2>
            <p className="mt-2 max-w-md text-sm text-white/80">
              Gerencie o conteúdo da página inicial com segurança e rapidez.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Acesso
              </p>
              <h1 className="mt-2 text-3xl font-bold text-secondary dark:text-zinc-100">
                Entrar no painel
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Use seu email e senha cadastrados para continuar.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
