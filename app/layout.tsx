import "./globals.css";

import type { Metadata } from "next";
import { Inter_Tight as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Header from "./header";

import { cn } from "@/lib/utils";
import Footer from "./footer";

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TagShop - AI-Driven Video Ads for E-commerce",
  description: "AI-Driven Video Ads for E-commerce",
  metadataBase: new URL("https://tagshop.ai"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased bg-black", font.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}