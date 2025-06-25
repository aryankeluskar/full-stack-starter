import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next + Hono = Vercel + Cloudflare | The [soy.run] Stack",
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
