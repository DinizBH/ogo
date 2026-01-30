"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function DashboardActions() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <Button
        type="button"
        variant="outline"
        className="border-border text-foreground hover:border-primary hover:text-primary"
        onClick={() => signOut({ callbackUrl: "/painel/login" })}
      >
        Sair
      </Button>
    </div>
  );
}
