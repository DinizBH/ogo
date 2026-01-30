"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type PendingUser = {
  id: string;
  name: string | null;
  email: string | null;
  createdAt: string;
};

export default function PendingApprovals() {
  const [users, setUsers] = useState<PendingUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/users");
      if (!res.ok) throw new Error("Erro ao carregar");
      const data = (await res.json()) as PendingUser[];
      setUsers(data);
    } catch (err) {
      setError("Não foi possível carregar os cadastros pendentes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const approve = async (userId: string) => {
    await fetch("/api/admin/users/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    await load();
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Cadastros pendentes
          </p>
          <h3 className="mt-2 text-lg font-semibold text-secondary dark:text-zinc-100">
            Aprovação manual
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Aprove ou bloqueie novos cadastros criados pelo formulário.
          </p>
        </div>
        <Button variant="outline" onClick={load} disabled={loading}>
          Atualizar
        </Button>
      </div>

      <div className="mt-4 space-y-3">
        {loading ? (
          <p className="text-sm text-muted-foreground">Carregando...</p>
        ) : error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : users.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhum cadastro pendente.</p>
        ) : (
          users.map(user => (
            <div
              key={user.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-secondary dark:text-zinc-100">
                  {user.name || "Sem nome"}
                </p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <Button onClick={() => approve(user.id)}>Aprovar</Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
