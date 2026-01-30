"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useHeaderScroll } from "../scripts/useHeaderScroll";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const isScrolled = useHeaderScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className={`flex items-center gap-3 text-xl font-bold tracking-tight transition-colors ${
            isScrolled ? "text-secondary" : "text-white"
          }`}
        >
          <Image
            src="/site-images/OGORounded.svg"
            alt="O Grosso da Obra"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span>O Grosso da Obra</span>
        </a>

        <nav className="flex items-center gap-6">
          <button
            className={`md:hidden ${isScrolled ? "text-secondary" : "text-white"}`}
            aria-label="Abrir menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className={`relative transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full ${
                  isScrolled ? "text-secondary" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5531999057269"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isScrolled
                  ? "bg-primary text-white hover:bg-red-600"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              (31) 99905-7269
            </a>
            <a
              href="/painel"
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isScrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-white"
                  : "border-white/70 text-white hover:bg-white/10"
              }`}
            >
              Painel privado
            </a>
          </div>
        </nav>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      ></div>
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5">
          <div className="flex items-center gap-3 text-base font-semibold text-secondary">
            <Image
              src="/site-images/OGORounded.svg"
              alt="O Grosso da Obra"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span>Menu</span>
          </div>
          <button
            className="text-zinc-600 transition hover:text-primary"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm font-semibold text-secondary">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between rounded-lg bg-zinc-50 px-4 py-3 transition hover:bg-zinc-100 ${
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.label}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-primary"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
          <a
            href="https://wa.me/5531999057269"
            className={`mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-600 ${
              isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 70}ms` }}
            onClick={() => setIsMenuOpen(false)}
          >
            WhatsApp (31) 99905-7269
          </a>
          <a
            href="/painel"
            className={`rounded-lg border border-primary px-4 py-3 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-white ${
              isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: `${(navItems.length + 1) * 70}ms` }}
            onClick={() => setIsMenuOpen(false)}
          >
            Painel privado
          </a>
        </div>
      </aside>
    </header>
  );
}
