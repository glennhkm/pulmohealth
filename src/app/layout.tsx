import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: "PulmoHealth",
  description: "Sistem pakar berbasis web untuk diagnosa penyakit paru-paru",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} overflow-x-hidden antialiased bg-[#151515]`}>
        {children}
        <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              background: '#151515',
              color: 'white',
              borderRadius: '8px',
              border: '0.2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 1)',
            },
          }}
        />
      </body>
    </html>
  );
}
