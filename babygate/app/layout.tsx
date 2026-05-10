import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peaceful PlayGate | Premium Safety Gates for Urban Families",
  description: "A beautifully designed, premium play gate for modern urban parents. Create safe, peaceful spaces for your child.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div
          className="fixed inset-0 z-0"
          style={{
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1200' viewBox='0 0 1920 1200'%3E%3Cdefs%3E%3Cfilter id='watercolor'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='5' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='30'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='1920' height='1200' fill='%23faf9f7'/%3E%3Cpath d='M 0 1000 Q 150 850 300 900 T 650 750 T 1000 850 T 1350 800 T 1700 900 T 2100 850 L 2100 1200 L 0 1200 Z' fill='%239db89d' opacity='0.4' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1050 Q 200 900 400 950 T 800 850 T 1200 920 T 1600 900 T 2000 1000 L 2000 1200 L 0 1200 Z' fill='%239db89d' opacity='0.3' filter='url(%23watercolor)'/%3E%3Cpath d='M 50 950 Q 250 750 500 820 T 1000 650 T 1500 800 T 2000 750 L 2000 1200 L 50 1200 Z' fill='%23d4a896' opacity='0.35' filter='url(%23watercolor)'/%3E%3Cpath d='M 100 1100 Q 300 950 550 1000 T 1100 900 T 1650 1050 T 2000 1100 L 2000 1200 L 100 1200 Z' fill='%23d4a896' opacity='0.25' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 850 Q 180 650 380 750 T 850 550 T 1350 750 T 1800 650 T 2200 800 L 2200 1200 L 0 1200 Z' fill='%239db89d' opacity='0.2' filter='url(%23watercolor)'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="relative z-10 flex flex-col min-h-full">
          <Header />
          <main className="flex-1 pt-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}