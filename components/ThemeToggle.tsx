"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-300">
      <span>Modo escuro</span>
      <Switch
        checked={mounted ? isDark : false}
        onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
        aria-label="Alternar modo escuro"
      />
    </div>
  );
}
