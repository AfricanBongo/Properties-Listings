import type { Metadata } from "next";
import {Nunito_Sans} from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./globals.css";

const nunitoSans = Nunito_Sans({subsets: ["latin"], weight: "variable"})

export const metadata: Metadata = {
  title: "Property Listings",
  description: "Get the best property listings for real estate in Zimbabwe",
  keywords: ["property", "listing", "real estate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
