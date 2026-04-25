// src/app/layout.tsx
// Holds ALL shared head resources: fonts, Tailwind CDN, custom Tailwind config,
// and the Stitch-specific style overrides.
// This is the ONLY place these are loaded — no duplication in page files.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antaryatra",
  description: "Wellness Booking System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* ── Google Fonts ───────────────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Inter + Manrope — body & headline fonts used by Stitch */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols Outlined — icon font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* ── Tailwind CDN (forms + container-queries plugins) ────────── */}
        {/* Must load BEFORE the config script below */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />

        {/* ── Tailwind custom config ─────────────────────────────────── */}
        {/* Exact config extracted from Stitch HTML.
            Must execute AFTER the CDN script — order is guaranteed because
            both are in <head> with no async/defer. */}
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "on-tertiary-fixed-variant": "#3c475a",
                      "primary-fixed-dim": "#bbcbb9",
                      "on-error-container": "#93000a",
                      "surface-variant": "#e1e3e4",
                      "on-secondary-fixed": "#311300",
                      "surface-container-highest": "#e1e3e4",
                      "primary-container": "#9aa998",
                      "on-primary-container": "#313e31",
                      "on-tertiary-container": "#303b4d",
                      "on-tertiary-fixed": "#111c2c",
                      "on-surface-variant": "#444842",
                      "inverse-surface": "#2e3132",
                      "surface": "#f8f9fa",
                      "on-secondary": "#ffffff",
                      "primary-fixed": "#d7e7d4",
                      "secondary-container": "#ff9a55",
                      "on-secondary-container": "#713400",
                      "error-container": "#ffdad6",
                      "on-surface": "#191c1d",
                      "on-primary": "#ffffff",
                      "secondary": "#974802",
                      "outline": "#747872",
                      "on-secondary-fixed-variant": "#733500",
                      "background": "#f8f9fa",
                      "surface-container-low": "#f3f4f5",
                      "error": "#ba1a1a",
                      "inverse-on-surface": "#f0f1f2",
                      "surface-container-lowest": "#ffffff",
                      "inverse-primary": "#bbcbb9",
                      "tertiary": "#545f72",
                      "secondary-fixed": "#ffdbc7",
                      "on-primary-fixed-variant": "#3d4a3d",
                      "on-error": "#ffffff",
                      "on-background": "#191c1d",
                      "outline-variant": "#c4c8c0",
                      "primary": "#546253",
                      "secondary-fixed-dim": "#ffb689",
                      "tertiary-fixed": "#d8e3fa",
                      "surface-tint": "#546253",
                      "on-primary-fixed": "#121e13",
                      "tertiary-fixed-dim": "#bcc7dd",
                      "surface-bright": "#f8f9fa",
                      "tertiary-container": "#9aa5bb",
                      "on-tertiary": "#ffffff",
                      "surface-container": "#edeeef",
                      "surface-container-high": "#e7e8e9",
                      "surface-dim": "#d9dadb"
                    },
                    borderRadius: {
                      DEFAULT: "0.25rem",
                      lg: "0.5rem",
                      xl: "0.75rem",
                      full: "9999px"
                    },
                    fontFamily: {
                      headline: ["Manrope"],
                      body: ["Inter"],
                      label: ["Inter"]
                    }
                  }
                }
              };
            `,
          }}
        />

        {/* ── Stitch component styles ────────────────────────────────── */}
        {/* These are NOT expressible via Tailwind — must be raw CSS. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Material Symbols axis settings — matches Stitch default */
              .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              }

              /* Base typography — matches Stitch body and heading defaults */
              body { font-family: 'Inter', sans-serif; }
              h1, h2, h3 { font-family: 'Manrope', sans-serif; }

              /* Glass-effect utility used in sticky header backdrop-blur */
              .glass-effect {
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}