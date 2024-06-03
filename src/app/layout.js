import { Arvo } from "next/font/google";
import "./globals.css";
import BaseLayout from "../components/base-layout";
import logo from "../assets/logoformeta.png";

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
        <link rel="icon" href={logo.src} type="image/png" sizes="180x300" />
        <title>Empire Group Service</title>
        <meta
          name="keywords"
          content="EG Dispatch Service , EG Dispatch Service  dispatcher, logistic, logistic company, dispatcher service, load, amazon relay, Truck Dispatching, Professional Truck Dispatching, dry van,"
        />
        <meta property="og:title" content="EG Dispatch Service" />
        {/* <meta name="description" content={t("description")} /> */}
        {/* <meta property="og:description" content={t("description")}/> */}
        {/* <meta property="og:image" content={logo_image.src}/> */}
        {/* <meta property="og:image:type" content="image/png"/> */}
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="mrce-group" />
        <meta property="og:url" content="https://egdispatch.services/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Truck Dispatching & Freight Dispatching Services"
        />
        {/* <meta name="twitter:description" content={t("description")}/> */}
        {/* <meta name="twitter:image" content={logo_image.src}/> */}
        <meta property="twitter:image:alt" content="eg-dispatch-service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Qodirov Doston" />
        <meta name="application-name" content="eg-dispatch-service" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-image-preview:large" />
      </head>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
