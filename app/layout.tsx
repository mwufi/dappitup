import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from '@/components/TopBar';
import BottomNav from '@/components/BottomNav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playground V0",
  description: "make your ideas come to life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <main className="flex-grow">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
