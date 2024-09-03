import React from 'react'
import BottomMenu from '@/components/BottomMenu'
import "./globals.css";

export const metadata = {
  title: 'Dating App',
  description: 'A modern dating app with events and notifications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="pb-16">
          {children}
        </main>
        <BottomMenu />
      </body>
    </html>
  );
}
