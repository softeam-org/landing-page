import type { Metadata } from "next";
import React from "react";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
