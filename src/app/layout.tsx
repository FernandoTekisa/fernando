
import type { Metadata } from "next";
import ThemeProvider from "@/providers/ThemeProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Tekisa",
  description: "my portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
