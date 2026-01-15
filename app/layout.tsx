import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
// VideoBackground buradan kaldırıldı, her sayfa kendi içinde çağırıyor.

export const metadata: Metadata = {
  title: "Mirai Media",
  description: "Yaratıcı medya ve dijital çözümler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 relative">
        <Navbar />
        <div className="min-h-screen relative z-10">{children}</div>
      </body>
    </html>
  );
}
