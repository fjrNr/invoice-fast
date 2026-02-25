import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceFast - Buat Invoice dalam 30 Detik",
  description: "Platform invoice tercepat untuk bisnis Anda. Buat, bagikan, dan lacak invoice dengan mudah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
