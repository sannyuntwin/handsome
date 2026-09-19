import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saw San Nyunt Win | Full-Stack, IoT & AI Developer",
  description: "Portfolio of Saw San Nyunt Win, a developer building practical web, IoT, and AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/spacekit/assets/skybox/nasa_tycho.jpg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
