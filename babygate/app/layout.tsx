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
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='2000' viewBox='0 0 600 2000'%3E%3Cdefs%3E%3Cfilter id='watercolor'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008' numOctaves='4' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='15'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='600' height='2000' fill='%23fefdfb'/%3E%3Cpath d='M 0 350 L 0 200 Q 75 120 150 180 Q 225 120 300 150 Q 375 100 450 170 Q 525 120 600 180 L 600 500 Z' fill='%239db89d' opacity='0.55' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 400 L 0 280 Q 100 200 200 250 Q 300 180 400 240 Q 500 190 600 250 L 600 500 Z' fill='%23d4a896' opacity='0.45' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 450 L 0 350 Q 80 310 160 340 Q 240 300 320 340 Q 400 310 480 340 Q 560 300 600 330 L 600 500 Z' fill='%239db89d' opacity='0.3' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 850 L 0 700 Q 75 620 150 680 Q 225 620 300 650 Q 375 600 450 670 Q 525 620 600 680 L 600 1000 Z' fill='%239db89d' opacity='0.55' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 900 L 0 780 Q 100 700 200 750 Q 300 680 400 740 Q 500 690 600 750 L 600 1000 Z' fill='%23d4a896' opacity='0.45' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 950 L 0 850 Q 80 810 160 840 Q 240 800 320 840 Q 400 810 480 840 Q 560 800 600 830 L 600 1000 Z' fill='%239db89d' opacity='0.3' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1350 L 0 1200 Q 75 1120 150 1180 Q 225 1120 300 1150 Q 375 1100 450 1170 Q 525 1120 600 1180 L 600 1500 Z' fill='%239db89d' opacity='0.55' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1400 L 0 1280 Q 100 1200 200 1250 Q 300 1180 400 1240 Q 500 1190 600 1250 L 600 1500 Z' fill='%23d4a896' opacity='0.45' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1450 L 0 1350 Q 80 1310 160 1340 Q 240 1300 320 1340 Q 400 1310 480 1340 Q 560 1300 600 1330 L 600 1500 Z' fill='%239db89d' opacity='0.3' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1850 L 0 1700 Q 75 1620 150 1680 Q 225 1620 300 1650 Q 375 1600 450 1670 Q 525 1620 600 1680 L 600 2000 Z' fill='%239db89d' opacity='0.55' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1900 L 0 1780 Q 100 1700 200 1750 Q 300 1680 400 1740 Q 500 1690 600 1750 L 600 2000 Z' fill='%23d4a896' opacity='0.45' filter='url(%23watercolor)'/%3E%3Cpath d='M 0 1950 L 0 1850 Q 80 1810 160 1840 Q 240 1800 320 1840 Q 400 1810 480 1840 Q 560 1800 600 1830 L 600 2000 Z' fill='%239db89d' opacity='0.3' filter='url(%23watercolor)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundColor: '#fefdfb'
        }}
      >
        <Header />
        <main className="flex-1 pt-48">{children}</main>
        <Footer />
      </body>
    </html>
  );
}