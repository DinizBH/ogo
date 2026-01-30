"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function RegisterForm({ allowRegistration }: { allowRegistration: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      setMessage("Cadastro criado com sucesso. Faça login.");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      const data = await response.json().catch(() => ({}));
      setMessage(data?.error ?? "Não foi possível criar o cadastro.");
    }
    setLoading(false);
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>Solicitar cadastro</CardTitle>
      </CardHeader>
      <CardContent>
        {!allowRegistration ? (
          <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            O cadastro está desativado. Entre em contato com o administrador do sistema.
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
              />
            </div>
            {message ? <p className="text-sm text-muted-foreground">{message}</p> : null}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Criar acesso"}
            </Button>
          </form>
        )}
        <div className="mt-4 text-center text-xs text-muted-foreground">
          Já tem conta?{" "}
          <Link className="font-semibold text-primary hover:underline" href="/painel/login">
            Entrar
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
