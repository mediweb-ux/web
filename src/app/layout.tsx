import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/cookiebanner';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediWeb Solutions",
  description: "Hjemmeside for MediWeb Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <Suspense fallback={null}>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-KL3W8PNX4X' />
      </Suspense>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
