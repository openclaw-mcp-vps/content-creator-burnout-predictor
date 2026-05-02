import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Burnout Predictor — Know Before You Crash",
  description: "Predict creator burnout 2-4 weeks early. Track posting frequency, engagement drops, and content quality metrics automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5d1bc318-6c0c-46e1-b4da-58f25fb9e7d1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
