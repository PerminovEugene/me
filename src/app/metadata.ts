import { Metadata } from "next";

export const metadataBase: Metadata = {
  title: "Evgenii Perminov | Senior Software Engineer & Tech Enthusiast",
  description:
    "Software engineer specializing in TypeScript, Node.js, React, and blockchain development. Visit my portfolio, read articles on tech topics, or contact me for collaboration opportunities.",
  keywords: [
    "Evgenii Perminov",
    "Software Engineer",
    "Web Development",
    "Blockchain development",
    "Tech Enthusiast",
    "Hire Senior Developer",
    "Node.js",
    "React.js",
    "TypeScript",
    "Solidity",
    "Full Stack Developer",
    "Remote Developer",
  ],
  openGraph: {
    title: "Evgenii Perminov | Senior Software Engineer",
    description:
      "Software engineer specializing in TypeScript, Node.js, React, and blockchain development. Visit for portfolio, articles, and contact information.",
    url: "https://www.evgeniiperminov.dev", // Replace with your actual URL once available
    siteName: "Evgenii Perminov",
    images: [
      {
        url: "/files/design/me.jpg", // Using your profile image from homepage
        width: 800,
        height: 800,
        alt: "Evgenii Perminov - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evgenii Perminov | Senior Software Engineer",
    description: "Software engineer specializing in TypeScript, Node.js, React, and blockchain development.",
    images: ["/files/design/me.jpg"],
  },
  authors: [
    { name: "Evgenii Perminov", url: "https://www.evgeniiperminov.dev" },
  ],
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
