import { Inter } from "next/font/google";
import "../globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Footer from "@/components/Footer";
import Navbar  from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body >
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
