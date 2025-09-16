import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nanosofttech.ca'),
  title: {
    default: "Nanosoft Technologies - AI & Cloud Solutions for Canadian Businesses",
    template: "%s | Nanosoft Technologies"
  },
  description: "Leading Canadian software development company specializing in AI integration, cloud migration, .NET modernization, and digital transformation. Custom solutions for startups and growing businesses.",
  keywords: [
    "software development",
    "AI integration",
    "cloud migration", 
    ".NET modernization",
    "digital transformation",
    "Canadian software company",
    "Toronto software development",
    "custom software solutions",
    "startup technology partner",
    "enterprise software development"
  ],
  authors: [{ name: "Nanosoft Technologies" }],
  creator: "Nanosoft Technologies",
  publisher: "Nanosoft Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://nanosofttech.ca',
    siteName: 'Nanosoft Technologies',
    title: 'Nanosoft Technologies - AI & Cloud Solutions for Canadian Businesses',
    description: 'Leading Canadian software development company specializing in AI integration, cloud migration, .NET modernization, and digital transformation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nanosoft Technologies - Custom Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanosoft Technologies - AI & Cloud Solutions',
    description: 'Leading Canadian software development company specializing in AI integration, cloud migration, and digital transformation.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://nanosofttech.ca',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <meta name="google-site-verification" content="your-google-verification-code" />
        <link rel="canonical" href="https://nanosofttech.ca" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
