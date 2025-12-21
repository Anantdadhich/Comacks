import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});


export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
 
  metadataBase: new URL("https://www.comacks.com"), 

  title: {
    default: "Comacks | AI Automation & Growth Infrastructure for Clinics",
    template: "%s | Comacks",
  },
  description:
    "Scale your healthcare practice on autopilot.",
  
  icons: {
    icon: "/c.png",
    shortcut: "/c.png",
    apple: "/c.png",
  },
  
  keywords: [
    "Healthcare Marketing",
    "AI Automation for Clinics",
    "Patient Acquisition System",
    "Clinic Growth Strategy",
    "Medical CRM Automation",
    "Healthcare Digital Solutions",
    "Comacks",
  ],

  authors: [{ name: "Comacks Team" }],
  creator: "Comacks",
  publisher: "Comacks",
  

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


  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.comacks.com",
    title: "Comacks | AI Automation & Growth Infrastructure for Clinics",
    description: "Scale your healthcare practice on autopilot with AI-powered systems.",
    siteName: "Comacks",
    images: [
      {
        url: "/comlogo.jpg", 
        width: 1200,
        height: 630,
        alt: "Comacks - AI Growth for Clinics",
      },
    ],
  },

  
  twitter: {
    card: "summary_large_image",
    title: "Comacks | AI Automation for Clinics",
    description: "Scale your healthcare practice on autopilot with AI-powered systems.",
    images: ["/comlogo.jpg"], 
    creator: "@Comacksgrowth", 
  },

  
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-white font-sans`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}