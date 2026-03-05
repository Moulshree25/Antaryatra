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
      <body className="antialiased font-sans">
        <div className="pb-24">
          {children}
        </div>

        <MobileCTA />
      </body>
    </html>
  );
}