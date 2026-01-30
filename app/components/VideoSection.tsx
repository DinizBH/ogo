"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type VideoSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  videoUrl: string;
  imageUrl?: string;
};

const getEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    return url;
  } catch {
    return url;
  }
};

export default function VideoSection({
  eyebrow,
  title,
  subtitle,
  bullets,
  videoUrl,
  imageUrl,
}: VideoSectionProps) {
  const [open, setOpen] = useState(false);
  const embedUrl = useMemo(() => getEmbedUrl(videoUrl), [videoUrl]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <section className="bg-zinc-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row animate-on-scroll">
          <div className="lg:w-1/2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {eyebrow}
            </p>
            <h2 className="mb-6 text-3xl font-bold">{title}</h2>
            <p className="mb-8 text-zinc-300">{subtitle}</p>
            <div className="flex flex-col gap-4 text-zinc-300">
              {bullets.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
              {imageUrl ? (
                <Image src={imageUrl} alt="Vídeo institucional" fill className="object-cover" />
              ) : null}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="video-play-button rounded-full bg-primary p-4 shadow-lg transition duration-300 hover:scale-110 hover:bg-red-600"
                >
                  <i data-feather="play" className="h-10 w-10 text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              onClick={() => setOpen(false)}
              aria-label="Fechar vídeo"
            >
              ✕
            </button>
            <div className="relative aspect-video">
              <iframe
                src={`${embedUrl}?autoplay=1`}
                title="Vídeo institucional"
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
