import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";

export const metadata: Metadata = {
  title: "Cristian Dominguez | Product-focused Engineer and Designer",
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
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
