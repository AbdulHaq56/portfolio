import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";  
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Next.js',
  weight: ["900","100","500","700"],
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Typescript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Abdul-Haq' }],
  creator: 'Abdul-Haq',
  publisher: 'Abdul-Haq',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: 'Abdul-Haq Portfolio',
description: 'Explore the portfolio of Abdul-Haq, a skilled web developer with expertise in Next.js, React, JavaScript, and TypeScript. Discover a collection of innovative and high-performance web applications, demonstrating a commitment to quality and cutting-edge technologies. From dynamic websites to robust applications, see how Abdul-Haq brings creativity and technical proficiency to every project.'

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
         color="#2f22dd"
         initialPosition={0.08}
         height={2}
         speed={400}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
