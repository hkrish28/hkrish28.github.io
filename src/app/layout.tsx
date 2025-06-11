import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hari's Portfolio",
  description: "Work Experience, Projects, and Skills of Harikrishnan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute inset-0 -z-10 fixed">
          <ShootingStars />
          <StarsBackground />
        </div>
                {/* Content Layer (Scrollable, takes up available space, on top of background) */}
                <div className="relative z-0 flex-grow overflow-y-auto">
          {children}
        </div>
        {/* {children} */}
      </body>
    </html>
  );
}
