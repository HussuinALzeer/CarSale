import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbare } from "@/components";



export const metadata: Metadata = {
  title: "Care rental",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbare/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
