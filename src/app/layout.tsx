import type { Metadata } from "next";
import { Volkhov} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: ["400","700"],
})

export const metadata: Metadata = {
  title: "Travels App",
  description: "The best travel app in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
