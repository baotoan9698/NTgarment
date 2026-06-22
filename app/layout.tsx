import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NT Garment - Vietnam Clothing Wholesale & Retail",
  description:
    "Wholesale & Retail Men's Clothing: Streetwear vibes & Minimalism style in Viet Nam. High Quality, Latest Trends and Competitive Price. Accept small quantity. Overseas Shipping to Cambodia, Laos and Thailand.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={interTight.variable}>{children}</body>
    </html>
  );
}
