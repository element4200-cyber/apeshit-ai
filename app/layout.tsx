import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "APESHIT AI — The jungle has a verdict",
  description: "Feed the monkey a pump.fun token. Live market scans, banana-fueled verdicts, and absolute jungle chaos.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

