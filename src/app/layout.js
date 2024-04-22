import { Arvo, Inter } from "next/font/google";
import "./globals.css";

import BaseLayout from "../components/base-layout";

// const inter = Inter({ subsets: ["latin"] });

const inter = Arvo({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Empire Group Service",
  description: "Truck Dispatching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
