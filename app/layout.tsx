import type { Metadata } from "next";
import "./globals.css";
import { miriam_libre } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Solbyt",
  description: "Especializados en soluciónes digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${miriam_libre.className}`}>{children}</body>
    </html>
  );
}
