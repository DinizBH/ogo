export default function PainelPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-20">
      <div className="container mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow-lg">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Área privada
        </p>
        <h1 className="mb-4 text-3xl font-bold text-secondary">Painel O Grosso da Obra</h1>
        <p className="text-zinc-600">
          Esta área será usada para integrações com Google Workspace (e-mail e Drive) e APIs internas.
        </p>
        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-600">
          Em breve: autenticação, dashboards e automações.
        </div>
      </div>
    </main>
  );
}
