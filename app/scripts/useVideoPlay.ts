"use client";

import { useEffect } from "react";

export function useVideoPlay() {
  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>(".video-play-button");
    if (!button) return;

    const handler = () => {
      alert("Video playback would start here in a real implementation.");
    };

    button.addEventListener("click", handler);
    return () => button.removeEventListener("click", handler);
  }, []);
}
