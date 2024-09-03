import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomMenu from "@/components/BottomMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "A simple chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex flex-col h-full">
          <main className="flex-grow overflow-y-auto">
            {children}
          </main>
          <BottomMenu />
        </div>
      </body>
    </html>
  );
}
