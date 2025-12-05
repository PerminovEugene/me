import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header.component";
import Footer from "@/components/footer/footer.component";
import Main from "@/components/lib/main.component";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieConsentBanner from "@/components/ga/cookie-consent-banner";
import GAComponent from "@/components/ga/ga.component";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evgenii Perminov | Senior Software Engineer",
  description:
    "Personal website of Evgenii Perminov, a full-stack developer with expertise in TS, Node.js and React. Currently diving into Rust and blockchain. Sharing insights on programming, technology, and web development.",
  keywords: [
    "Evgenii Perminov",
    "full-stack developer",
    "JavaScript",
    "TypeScript",
    "Rust",
    "Next.js",
    "Solidity",
    "blockchain",
    "software engineer",
    "web development",
  ],
  authors: [
    { name: "Evgenii Perminov", url: "https://www.evgeniiperminov.dev" },
  ],
  openGraph: {
    title: "Evgenii Perminov | Senior Software Engineer",
    description:
      "Explore my personal website featuring projects, blog posts, and insights on web development, Rust, and blockchain technology.",
    url: "https://www.evgeniiperminov.dev",
    siteName: "Evgenii Perminov",
    images: [
      {
        url: "/files/design/me.jpg",
        width: 800,
        height: 800,
        alt: "Evgenii Perminov - Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evgenii Perminov | Full-Stack Developer & Tech Enthusiast",
    description:
      "Check out my personal website for insights on TypeScript, Rust and Solidity development.",
    images: ["/files/design/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://www.evgeniiperminov.dev',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <Script id="person-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Evgenii Perminov",
            url: "https://www.evgeniiperminov.dev",
            jobTitle: "Senior Software Engineer",
            knowsAbout: [
              "Full Stack Development",
              "TypeScript",
              "Node.js",
              "React",
              "Rust",
              "Blockchain",
              "Solidity"
            ],
            sameAs: [
              "https://github.com/Eugene-Lek",
              "https://www.linkedin.com/in/eugene-lek"
            ]
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
        <CookieConsentBanner />
        <SpeedInsights />
        <GAComponent />
      </body>
    </html>
  );
}
