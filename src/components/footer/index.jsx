"use client";
import React from "react";
import Image from "next/image";
import arrowUp from "../../assets/icons/arrowUp.svg";
import insto from "../../assets/ijimoiyTarmoq/insto.svg";
import telegram from "../../assets/ijimoiyTarmoq/telegram.svg";
import facebook from "../../assets/ijimoiyTarmoq/facebook.svg";
import whatsapp from "../../assets/ijimoiyTarmoq/whatsapp.svg";
import gmail from "../../assets/ijimoiyTarmoq/gmail.svg";

import logo from '../../../public/logoPng.png'

const social = [
  { img: facebook, link: "https://www.facebook.com" },
  { img: telegram, link: "https://t.me/EmpireGroupTeam" },
  { img: insto, link: "https://www.instagram.com/empire_group_lm?igsh=amU2cGNtMWNmdDQ4&utm_source=qr" },
  { img: whatsapp, link: "https://wa.me/message/ZV7PAIP47CGJN1?src=qr" },
  { img: gmail, link: "mailto: empiregrouplm@gmail.com" }
];

const index = () => {
  const footerlink = [
    { name: "Dispatching", link: "/dispatch-services" },
    { name: "Factor Invoicing", link: "/factoring-company" },
    { name: "Broker Packets", link: "/broker-contact-form" },
    { name: "Commercial Insurance", link: "/commercial-cruck-cnsurance-company" },
    { name: "Dispatch Training", link: "/truck-dispatch-training" },
    { name: "Consulting", link: "/trucking-consulting" }
  ];
  return (
    <>
      <div className="footer">
        <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:w-[80%] w-[90%] mx-auto py-6 gap-x-48">
          <div>
            <Image
              width={350}
              height={350}
              alt="hero img"
              src={logo}
            />
            <p className="text-white ">
              EG Dispatch Service Consulting and Training is here for all your dispatch
              needs. We are here to help grow your business!
            </p>
          </div>
          <div className="mt-6">
            <ul className="text-primary-dark cursor-pointer">
              {footerlink.map((item, idx) => {
                return (
                  <a href={item.link} key={idx}>
                  <li  className="flex gap-2 item-center">
                    <div className="bg-blue-800 w-2 h-2 mt-2 rounded-full" />
                    {item.name}
                  </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-text-color py-1">
        <div className="w-[80%] mx-auto">
          <div className="mt-4">
            <div className="text-white flex gap-4 md:justify-end justify-start">
              {social.map((el) => (
                <a href={el.link} className="flex gap-2 item-center my-2 cursor-pointer">
                  <Image className="hover:scale-125 duration-500" width={25} height={25} alt="hero img" src={el.img} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <a
          href="#top"
          className="scroll-to-top fixed bottom-2 right-6 
                       bg-gray-800 text-white rounded-full 
                       transition duration-300 hover:bg-gray-700 
                       hover:text-gray-200"
        >
          <Image
            width={25}
            height={25}
            alt="hero"
            src={arrowUp}
            className="w-12 h-12 rounded-full bg-white hover:scale-125 duration-500"
          />
        </a>
      </div>
    </>
  );
};

export default index;
