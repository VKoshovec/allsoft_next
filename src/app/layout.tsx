import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Roboto ({ subsets: ["cyrillic"], weight:['500']});

export const metadata: Metadata = {
  title: "AllSoft - BAS, KBS - Втсановлення, Розробка, Впровадження, Супровід",
  description: "Втсановлення, Розробка, Впровадження, Супровід бухгалтерського ПЗ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>{children}</body>
    </html>
  );
}
