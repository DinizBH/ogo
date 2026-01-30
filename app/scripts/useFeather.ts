"use client";

import { useEffect } from "react";

export function useFeather() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const feather = (window as typeof window & { feather?: { replace?: () => void } })
      .feather;
    if (feather && typeof feather.replace === "function") {
      feather.replace();
    }
  }, []);
}
