import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Customs/Footer";
import Header from "./Components/Customs/Header";
import { ReactNode } from "react";
import Head from "next/head";
// import Script from 'next/script';
// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata-based SEO
export const metadata: Metadata = {
  title: "Zure Insurance - Strong Roots. True Protection.",
  description:
    "TrueOak Insurance provides true protection with strong roots in Montana, serving families and businesses nationwide. Experience genuine insurance solutions built on trust and integrity.",
  themeColor: "#065F46",
  openGraph: {
    type: "website",
    url: "https://zureinsurance.com",
    title: "Zure Insurance - Strong Roots. True Protection.",
    description:
      "Zure Insurance provides true protection with strong roots in Montana, serving families and businesses nationwide.",
    images: [
      {
        url: "zureinsurance/true-logo.jpg",
        alt: "Zure Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zure Insurance - Strong Roots. True Protection.",
    description:
      "Zure Insurance provides true protection with strong roots in Montana, serving families and businesses nationwide.",
    images: ["zureinsurance/true-logo.jpg"],
  },
  icons: {
    icon: [
      { url: "zureinsurance/true-logo.jpg", sizes: "16x16", type: "image/png" },
      { url: "zureinsurance/true-logo.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: "zureinsurance/true-logo.jpg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* This part is only needed for things not supported by `metadata` */}
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/x-icon"
          href="zureinsurance/true-logo.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="zureinsurance/true-logo.jpg"
        />
        {/* <link
          rel="stylesheet"
          href="/assets/index-D2lAX6l4.css"
          crossOrigin=""
        /> */}
       {/* <Script src="/some-library.js" strategy="lazyOnload" /> */}
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
