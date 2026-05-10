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
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500' viewBox='0 0 600 500'%3E%3Cdefs%3E%3Cfilter id='watercolor'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008' numOctaves='4' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='15'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='600' height='500' fill='%23fefdfb'/%3E%3Cpath d='M 0 350 L 0 200 Q 75 120 150 180 Q 225 120 300 150 Q 375 100 450 170 Q 525 120 600 180 L 600 500 Z' fill='%239db89d' opacity='0.55' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 400 L 0 280 Q 100 200 200 250 Q 300 180 400 240 Q 500 190 600 250 L 600 500 Z' fill='%23d4a896' opacity='0.45' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 450 L 0 350 Q 80 310 160 340 Q 240 300 320 340 Q 400 310 480 340 Q 560 300 600 330 L 600 500 Z' fill='%239db89d' opacity='0.3' filter='url(%23watercolor)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#fefdfb'
        }}
      >
        <Header />
        <main className="flex-1 pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}