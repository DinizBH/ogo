"use client";

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (elementPosition < screenPosition) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);
}
