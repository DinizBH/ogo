"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function RegistrationSettings() {
  const [allowRegistration, setAllowRegistration] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch("/api/admin/settings");
    const data = await res.json();
    setAllowRegistration(Boolean(data.allowRegistration));
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    setSaving(true);
    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ allowRegistration }),
    });
    setSaving(false);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Cadastro
          </p>
          <h3 className="mt-2 text-lg font-semibold text-secondary dark:text-zinc-100">
            Liberação de novos cadastros
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Ative para permitir novos cadastros. Desative para bloquear solicitações.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            checked={allowRegistration}
            onCheckedChange={checked => setAllowRegistration(checked)}
            disabled={loading}
          />
          <Button variant="outline" onClick={save} disabled={saving || loading}>
            {saving ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
