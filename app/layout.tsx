import type { Metadata } from "next";
import { Poppins, League_Spartan } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: "Adeptos | AI Revenue System for Growing Businesses",
  description: "Launch, monitor, and improve every AI workflow without switching tools. Book your free AI audit today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
