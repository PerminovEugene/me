import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header.component";
import Footer from "@/components/footer/footer.component";
import Main from "@/components/lib/main.component";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evgenii Perminov | Senior Software Engineer",
  description:
    "Personal website of Evgenii Perminov, a full-stack developer with expertise in TS, Node.js and React. Currently diving to Rust and blockchain. Sharing insights on programming, technology, and web development.",
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
  // openGraph: {
  //   title: "Evgenii Perminov | Senior Software Engineer",
  //   description:
  //     "Explore my personal website featuring projects, blog posts, and insights on web development, Rust, and blockchain technology.",
  //   url: "https://www.evgeniiperminov.dev",
  //   siteName: "Evgenii Perminov",
  //   images: [
  //     {
  //       url: "/files/meta-thumbnail.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Evgenii Perminov Personal Website Thumbnail",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Evgenii Perminov | Full-Stack Developer & Tech Enthusiast",
  //   description:
  //     "Check out my personal website for insights on TS, Rust and Solidity development.",
  //   images: ["/files/meta-thumbnail.jpg"],
  // },
  robots: {
    index: true,
    follow: true,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-PHWX53XBDH" />
    </html>
  );
}
