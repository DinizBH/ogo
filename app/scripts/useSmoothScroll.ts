"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href^='#']"));

    const handlers = anchors.map(anchor => {
      const handler = (event: MouseEvent) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      };

      anchor.addEventListener("click", handler);
      return { anchor, handler };
    });

    return () => {
      handlers.forEach(({ anchor, handler }) => {
        anchor.removeEventListener("click", handler);
      });
    };
  }, []);
}
