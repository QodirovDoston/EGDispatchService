"use client";
import React from "react";
// import Insurance from "../../components/Insurance";
import FormSendMesage from "../../components/FormSendMesage/index";
import CaruselAbsolute from "../../components/caruselabsolute";
import { caruselBlogFordata } from "../../utils";
const ContactUsPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[85%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="xl:w-[80%] w-[95%] mx-auto">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0 py-8">
          <div className="item1 xl:col-span-1 col-span-2 row-span-1 leading-10 ">
            <h1 className="text-text-color text-3xl py-8">
              WE’RE READY. LET’S TALK.
            </h1>
            <h2 className="text-primary text-3xl">(540) 440-9208</h2>
            <hr className="h-[1px] bg-gray-700 border-2 my-4" />
            <p className="text-text-color text-2xl">Send us an email</p>
            <p className="text-primary text-lg">empiregrouplm@gmail.com</p>
          </div>
          <div className="item2 xl:row-span-2 col-span-2 row-span-2 xl:-mt-20 -mt-12">
            <FormSendMesage />
          </div>
        </div>
      </div>
      <CaruselAbsolute data={caruselBlogFordata} />
      {/* <Insurance /> */}
    </>
  );
};

export default ContactUsPage;
