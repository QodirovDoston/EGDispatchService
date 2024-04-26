import { Arvo } from "next/font/google";
import "./globals.css";

import BaseLayout from "../components/base-layout";
import Head from "next/head";

const inter = Arvo({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Empire Group Service",
  description: "Truck Dispatching"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
      <link rel="apple-touch-icon" href="../../public/EGDispatch.png" sizes="180x180" type="image/png"/>
      </Head>

      {/* <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          type="image/png"
        />
      </head> */}
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
