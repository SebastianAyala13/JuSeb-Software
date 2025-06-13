import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ju-seb-software.vercel.app"),
  title: 'JuSeb SOFTWARE - Soluciones Tecnológicas Innovadoras',
  description: 'Desarrollo de software a medida, aplicaciones web, móviles y sistemas empresariales. Expertos en tecnologías modernas y soluciones innovadoras.',
  keywords: "desarrollo web, software, aplicaciones móviles, tecnología, Pereira, Colombia",
  authors: [{ name: 'Juan Sebastian Ayala Martin' }],
  openGraph: {
    title: "JuSeb SOFTWARE",
    description: "Desarrollo de software a medida, aplicaciones web, móviles y soluciones tecnológicas innovadoras",
    url: "https://ju-seb-software.vercel.app",
    siteName: "JuSeb SOFTWARE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JuSeb SOFTWARE",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
