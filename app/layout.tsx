import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Time Leak Detector – Find Where Billable Hours Disappear",
  description: "Analyze your time tracking data to identify non-billable activities eating into productive time. Connect Toggl, Harvest, or RescueTime and get AI-powered insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="49d0ff0a-8b2e-4324-941e-45372b8fc750"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
