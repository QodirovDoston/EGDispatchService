import { Arvo } from "next/font/google";
import "./globals.css";
import BaseLayout from "../components/base-layout";
import logo from '../assets/logoformeta.png';


const inter = Arvo({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
         <link rel="icon" href={logo.src} type="image/png" sizes="180x300"/>
         <title>Empire Group Service</title>
      </head>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
