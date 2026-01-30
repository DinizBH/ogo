"use client";

import { useEffect } from "react";

export function useContactForm() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("#contact form");
    if (!form) return;

    const handler = (event: SubmitEvent) => {
      event.preventDefault();
      alert("Thank you for your message! We will contact you soon.");
      form.reset();
    };

    form.addEventListener("submit", handler);
    return () => form.removeEventListener("submit", handler);
  }, []);
}
