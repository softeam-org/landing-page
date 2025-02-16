import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Softeam",
  description: "Generated by create next app",
};

export const poppins = Poppins({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
