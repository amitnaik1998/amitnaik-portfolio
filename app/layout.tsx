import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amitnaik.xyz"),
  title: {
    default: "Amit Naik · Full Stack Engineer",
    template: "%s · Amit Naik",
  },
  description:
    "Full Stack Engineer with 5+ years shipping production mobile and web apps. React Native, Next.js, Node.js. Sole mobile engineer behind GTR.Trade — a multi-chain DeFi trading platform on App Store and Google Play.",
  keywords: [
    "Amit Naik",
    "Amit Annappa Naik",
    "Full Stack Engineer",
    "React Native Developer",
    "Next.js Developer",
    "Node.js",
    "Web3 Developer",
    "DeFi Engineer",
    "Mobile Engineer Bangalore",
    "TypeScript",
    "Solana",
    "EVM",
    "GTR.Trade",
  ],
  authors: [{ name: "Amit Annappa Naik" }],
  creator: "Amit Annappa Naik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amitnaik.xyz",
    siteName: "Amit Naik",
    title: "Amit Naik · Full Stack Engineer",
    description:
      "Full Stack Engineer shipping production mobile and web apps. 5+ years. React Native, Next.js, Node.js, Web3.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amit Naik — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Naik · Full Stack Engineer",
    description:
      "Full Stack Engineer shipping production mobile and web apps. React Native, Next.js, Node.js, Web3.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Amit Annappa Naik",
              url: "https://amitnaik.xyz",
              jobTitle: "Full Stack Engineer",
              email: "gaamitnaik@gmail.com",
              telephone: "+91 9663741473",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "IN",
              },
              knowsAbout: [
                "React Native",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Web3",
                "DeFi",
                "Solana",
                "EVM",
                "MongoDB",
                "WebSockets",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "PESITM, Shimoga",
              },
            }),
          }}
        />
      </head>
      <body className="grain vignette">{children}</body>
    </html>
  );
}
