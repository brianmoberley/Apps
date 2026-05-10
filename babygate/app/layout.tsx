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
          background: 'linear-gradient(180deg, #fefdfb 0%, #faf8f4 25%, #f5f0e8 50%, #faf8f4 75%, #fefdfb 100%)',
          backgroundColor: '#fefdfb'
        }}
      >
        <Header />
        <main className="flex-1" style={{ paddingTop: '12rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}