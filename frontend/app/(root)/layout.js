"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Footer from "@/components/Footer";
import Navbar  from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white  overflow-">
        <SessionProvider>
          <Navbar />
          {children}
         <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
