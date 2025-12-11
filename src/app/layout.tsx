import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Manrope } from "next/font/google";
import SmoothScroll from '@/components/SmoothScroll'

const manrope = Manrope({
  weight: "600",
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joy ice creams",
  description: "Indulge in the creamiest flavors, crafted with love!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased`}
      >
      <SmoothScroll>
        {children}
      </SmoothScroll>
      </body>
    </html>
  );
}
