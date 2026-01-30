import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O Grosso da Obra - Especialistas em Estruturas de Concreto",
  description:
    "Mais de 30 anos de experiência em projetos estruturais e execução de obras com precisão técnica.",
  icons: {
    icon: "/site-images/OGORounded.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased bg-white text-zinc-800`}>
        {children}
      </body>
    </html>
  );
}
