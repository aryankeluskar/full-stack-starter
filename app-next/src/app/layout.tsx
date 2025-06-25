import type { Metadata } from "next";
import { Solway } from "next/font/google";
import "./globals.css";

const solway = Solway({
  variable: "--font-solway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The [soy.run] Stack - Next.js + Hono on Vercel + Cloudflare",
  description: "Created by soy.run",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
