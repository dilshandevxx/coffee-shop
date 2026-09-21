import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brew Haven | Artisan Coffee",
  description: "Discover the finest artisan coffee. Freshly roasted beans, expertly crafted drinks, and a warm atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-coffee-50 text-coffee-950">
        {children}
      </body>
    </html>
  );
}
