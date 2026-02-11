import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Sidebar from "@/components/ui/sidebar";
import ClientProvider from "@/providers/client.provider";
import { ToastContainer } from "@/components/ui/toast/toast-container";
import { CartHydration } from "@/providers/cart.provider";

const BeatriceDeck = localFont({
  src: [
    {
      path: "../public/fonts/beatrice/BeatriceDeckTRIAL-Extrabold-BF64829e8ed31e6.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/beatrice/BeatriceDeckTRIAL-Medium-BF64829e8e8d71a.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/beatrice/BeatriceDeckTRIAL-Regular-BF64829e8e41476.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-beatrice-deck",
  display: "swap",
});

const Beatrice = localFont({
  src: [
    {
      path: "../public/fonts/beatrice/BeatriceTRIAL-Medium-BF64829e8ac35f2.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/beatrice/BeatriceTRIAL-Regular-BF64829e8a62240.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-beatrice",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina",
  description: "Store fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mdl-js">
      <body
        className={`${BeatriceDeck.variable} ${Beatrice.variable} antialiased tracking-widest bg-gray-50`}
      >
        <Header />
        <main>
          <ClientProvider>
            {children}
            <CartHydration/>
          </ClientProvider>
        </main>
        <Footer />
        <Sidebar />
        <ToastContainer/>
      </body>
    </html>
  );
}
