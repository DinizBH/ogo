"use client";

import Script from "next/script";
import { useContactForm } from "./useContactForm";
import { useFeather } from "./useFeather";
import { useScrollAnimation } from "./useScrollAnimation";
import { useSmoothScroll } from "./useSmoothScroll";
import { useVideoPlay } from "./useVideoPlay";

export default function ClientScripts() {
  useFeather();
  useSmoothScroll();
  useVideoPlay();
  useContactForm();
  useScrollAnimation();

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === "undefined") return;
        const feather = (window as typeof window & { feather?: { replace?: () => void } }).feather;
        if (feather?.replace) feather.replace();
      }}
    />
  );
}
