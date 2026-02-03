import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SharedHeader from "@/components/SharedHeader";

const manrope = Manrope({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Best audio gear available",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased
        bg-[#fafafa]`}
      >
        <SharedHeader />
        {children}
      </body>
    </html>
  );
}
