import { Arvo } from "next/font/google";
import "./globals.css";
import BaseLayout from "../components/base-layout";
import logo from "../assets/logoformeta.png";
import Head from "next/head";

const inter = Arvo({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

export default function RootLayout({ children }) {
  return (
    <html>
      {/* <head>
        <link rel="icon" href={logo.src} type="image/png" sizes="180x300" />
        <title>Empire Group Service</title>
        <meta
          name="keywords"
          content="EG Dispatch Service, EG Dispatch Service  dispatcher, logistic, logistic company, dispatcher service, load, amazon relay, Truck Dispatching, Professional Truck Dispatching, dry van,"
        />
        <meta property="og:title" content="EG Dispatch Service" />
        <meta property="og:image" content={logo.src}/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="mrce-group" />
        <meta property="og:url" content="https://egdispatch.services/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Truck Dispatching & Freight Dispatching Services"
        />
        <meta property="twitter:image:alt" content="eg-dispatch-service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Qodirov Doston" />
        <meta name="application-name" content="eg-dispatch-service" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-image-preview:large" />
      </head> */}

      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo.src} type="image/png" sizes="180x300" />
        <title>Empire Group Service</title>
        <meta
          name="description"
          content="EG Dispatch Service provides professional truck dispatching and freight dispatching services. We specialize in logistics and load management for dry vans and more."
        />
        <meta
          name="keywords"
          content="EG Dispatch Service, dispatcher, logistic company, dispatcher service, load management, amazon relay, Truck Dispatching, Professional Truck Dispatching, dry van"
        />
        <meta property="og:title" content="EG Dispatch Service" />
        <meta property="og:image" content={logo.src} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="mrce-group" />
        <meta property="og:url" content="https://egdispatch.services/" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Truck Dispatching & Freight Dispatching Services"
        />
        <meta property="twitter:image" content={logo.src} />
        <meta property="twitter:image:alt" content="eg-dispatch-service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Qodirov Doston" />
        <meta name="application-name" content="eg-dispatch-service" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://egdispatch.services/" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script>
        {/* <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "EG Dispatch Service",
              "url": "https://egdispatch.services/",
              "logo": "${logo.src}",
              "sameAs": [
                "https://t.me/EmpireGroupTeam",
                "https://www.instagram.com/empire_group_lm?igsh=amU2cGNtMWNmdDQ4&utm_source=qr",
                "https://api.whatsapp.com/message/ZV7PAIP47CGJN1?autoload=1&app_absent=0",
                "https://twitter.com/egdispatchservice",
              ]
            }
          `}
        </script> */}
      </head>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
