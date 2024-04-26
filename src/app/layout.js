"use client";
import { Arvo } from "next/font/google";
import "./globals.css";

import BaseLayout from "../components/base-layout";
import { Head } from "next/document";

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
  image: "../../public/forLogo1.png"
  // openGraph: {
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="LpD47DppgiI8Vi3yEnsTy8omH-fncRCSMT1fohZJI8c" />
        <meta
          property="og:image"
          content="https://eg-dispatch-service.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEGDispatch.9d6e346c.png&w=256&q=75"
        />
      </Head>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
