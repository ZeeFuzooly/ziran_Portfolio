import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import ScrollProgress from "@/components/scroll-progress";
import PageLoader from "@/components/page-loader";
import FloatingShapes from "@/components/floating-shapes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ziran-portfolio.vercel.app"),
  title: {
    default: "Ziran Fuzooly | Software Engineer Portfolio",
    template: "%s | Ziran Fuzooly",
  },
  description:
    "Ziran Fuzooly is a Software Engineer with 4 years of experience specializing in full-stack development, React, Next.js, and modern web technologies.",
  keywords: [
    "Ziran Fuzooly",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ziran Fuzooly" }],
  creator: "Ziran Fuzooly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziran-portfolio.vercel.app",
    siteName: "Ziran Fuzooly Portfolio",
    title: "Ziran Fuzooly | Software Engineer Portfolio",
    description:
      "Ziran Fuzooly is a Software Engineer with 4 years of experience specializing in full-stack development, React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ziran Fuzooly – Lead Engineer, Product Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziran Fuzooly | Software Engineer Portfolio",
    description:
      "Ziran Fuzooly is a Software Engineer with 4 years of experience specializing in full-stack development.",
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
  verification: {
    google: "googlec2a7c7695a31a5b6",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ziran-portfolio.vercel.app/#person",
      name: "Ziran Fuzooly",
      url: "https://ziran-portfolio.vercel.app",
      image: "https://ziran-portfolio.vercel.app/images/ziran-profile.png",
      jobTitle: "Lead Engineer - Product Experience",
      worksFor: {
        "@type": "Organization",
        name: "SimHealth AI",
        url: "https://simhealth.co.uk/",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Moratuwa",
        },
      ],
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "Frontend Architecture",
        "Design Systems",
        "Team Leadership",
      ],
      sameAs: [
        "https://www.linkedin.com/in/ziranfuzooly/",
        "https://github.com/ZeeFuzooly",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ziran-portfolio.vercel.app/#website",
      url: "https://ziran-portfolio.vercel.app",
      name: "Ziran Fuzooly Portfolio",
      publisher: { "@id": "https://ziran-portfolio.vercel.app/#person" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-24 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <PageLoader />
            <FloatingShapes />
            <ScrollProgress />
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
