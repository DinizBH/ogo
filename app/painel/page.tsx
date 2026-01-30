import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { getHomeContent } from "@/lib/home-content";
import { redirect } from "next/navigation";
import PainelForm from "./painel-form";
import DashboardActions from "./dashboard-actions";
import PendingApprovals from "./pending-approvals";
import RegistrationSettings from "./registration-settings";

export default async function PainelPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/painel/login");
  }

  const content = await getHomeContent();

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 rounded-2xl border border-border bg-card px-8 py-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Área privada
              </p>
              <h1 className="text-3xl font-bold text-secondary dark:text-zinc-100">
                Painel O Grosso da Obra
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Dashboard de conteúdo. Atualize textos e imagens da página inicial.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <DashboardActions />
              <a
                href="/"
                className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-primary hover:text-primary"
              >
                Ver site
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Navegação
            </p>
            <div className="mt-4 space-y-2 text-sm font-semibold text-secondary dark:text-zinc-100">
              {[
                { label: "Hero", href: "#panel-hero" },
                { label: "Empresa", href: "#panel-about" },
                { label: "Vídeo", href: "#panel-video" },
                { label: "Serviços", href: "#panel-services" },
                { label: "Podcasts", href: "#panel-podcasts" },
                { label: "Contato e mapa", href: "#panel-contact" },
              ].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-border bg-muted/40 px-3 py-2 text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  <span>{item.label}</span>
                  <span className="text-xs">↗</span>
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-border bg-muted/30 p-4 text-xs text-muted-foreground">
              Dica: use o botão de salvar após editar as seções.
            </div>
          </aside>

          <section>
            <div className="mb-6">
              <RegistrationSettings />
            </div>
            <div className="mb-6">
              <PendingApprovals />
            </div>
            <PainelForm initialData={content} />
          </section>
        </div>
      </div>
    </main>
  );
}
