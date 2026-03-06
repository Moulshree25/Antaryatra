import type { Metadata } from "next";
import "./globals.css";
import MobileCTA from "../components/MobileCTA";

export const metadata: Metadata = {
  title: "Antaryatra | Awaken Your Inner Energy",
  description: "Yoga & Meditation for Body, Mind & Balance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <link
href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
rel="stylesheet"
/>

        {/* Fonts used in the design */}
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Material icons used throughout the UI */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

      </head>

      <body className="antialiased font-sans">

        <div className="pb-24">
          {children}
        </div>

        <MobileCTA />

      </body>
    </html>
  );
}