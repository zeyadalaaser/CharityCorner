import type { Metadata } from "next";
import { Inter } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

import { StoreProvider } from "@/state/store";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charity Corner",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
