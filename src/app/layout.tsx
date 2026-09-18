import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "../styles/animations.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAAC — Museo",
  description: "Museo MAAC. Historia, exposiciones y visitas.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`h-full antialiased ${montserrat.variable}`}>
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}