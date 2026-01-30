export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5531999057269?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20a%20estrutura%20da%20minha%20obra."
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 float-gentle glow-pulse"
      aria-label="Falar no WhatsApp"
    >
      <i data-feather="message-circle" className="h-6 w-6"></i>
    </a>
  );
}
