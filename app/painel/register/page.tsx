import Image from "next/image";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  const allowRegistration = true;

  return (
    <main className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <Image
            src="/site-images/about.jpg"
            alt="O Grosso da Obra"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Cadastro
            </p>
            <h2 className="text-3xl font-bold">Solicitação de acesso</h2>
            <p className="mt-2 max-w-md text-sm text-white/80">
              Defina quem pode acessar o painel ativando ou desativando o cadastro.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">
            <RegisterForm allowRegistration={allowRegistration} />
          </div>
        </div>
      </div>
    </main>
  );
}
