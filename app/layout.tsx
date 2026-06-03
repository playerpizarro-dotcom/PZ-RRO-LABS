import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PZ-RRO LABS",
  description: "Exclusive Drum Libraries & Sound Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}