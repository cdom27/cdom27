import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cristian Dominguez | Product-focused Engineer and Designer",
  description:
    "Cristian Dominguez is a design-forward Frontend Engineer based in San Diego, CA, shipping clean, responsive user interfaces with production-grade systems. Typically uses React (Next.js), Typescript, Node.js, Go, and PostgreSQL for custom solutions or CMS and site builders like Wordpress or Webflow",

  openGraph: {
    title: "Cristian Dominguez | Product-focused Engineer and Designer",
    description:
      "Cristian Dominguez is a design-forward Frontend Engineer based in San Diego, CA, shipping clean, responsive user interfaces with production-grade systems. Typically uses React (Next.js), Typescript, Node.js, Go, and PostgreSQL for custom solutions or CMS and site builders like Wordpress or Webflow",
    url: "https://cidominguez.com",
    siteName: "Cristian Dominguez | Frontend Engineer",
    images: [
      {
        url: "https://cidominguez.com/thumb.png",
        width: 1100,
        height: 450,
        alt: "Cristian Dominguez - Frontend Engineer",
        type: "website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cristian Dominguez | Product-focused Engineer and Designer",
    description: "Design-forward Frontend Engineer based in San Diego, CA",
    images: ["https://cidominguez.com/thumb.png"],
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

  metadataBase: new URL("https://cidominguez.com"),
  alternates: {
    canonical: "/",
  },

  authors: [{ name: "Cristian Dominguez" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cristian Dominguez",
  url: "https://cidominguez.com",
  jobTitle: "Product-focused Frontend Engineer",
  image: "https://cidominguez.com/thumb.png",
  sameAs: ["https://github.com/cdom27", "https://linkedin.com/in/cdom27"],
  description:
    "Cristian Dominguez is a design-forward Frontend Engineer based in San Diego, CA, shipping clean, responsive user interfaces with production-grade systems. Typically uses React (Next.js), Typescript, Node.js, Go, and PostgreSQL for custom solutions or CMS and site builders like Wordpress or Webflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth font-inter">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4N7VY0P7LM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-4N7VY0P7LM');
                  `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen px-4 sm:px-12 pt-6 selection:bg-indigo-100 selection:text-indigo-600">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
