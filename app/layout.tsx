import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-host-grotesk',
});

export const metadata: Metadata = {
  title: "Martin Tejeda - Product Designer & Strategist",
  description: "Martin Tejeda is a product designer and strategist based in San Francisco who loves finding the human side of tech. He is fascinated by the advances in technology & often finds himself tinkering with new tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${hostGrotesk.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
