import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PwaRegistration } from "@/components/PwaRegistration";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MCP Sharing Session",
  description: "Deck internal Divisi IT tentang Model Context Protocol, workflow AI, guardrails, demo, dan roadmap adopsi tim.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MCP Remote",
  },
  icons: {
    icon: "/remote-icon.svg",
    apple: "/remote-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.variable}>
        <PwaRegistration />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
