"use client";
import React from "react";
import CarouselCom from "../../components/CaruselCompants/index";
import FormSendMesage from "../../components/FormSendMesage/index";
import AllDataSendForm from "../../components/AllDataSendForm/index";
import ContactInfo from '../../components/contact-info';

const TestimonialsPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Testimonials
          </h1>
        </div>
      </div>
      <div className="xl:w-[80%] w-[95%] mx-auto pt-28">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
          <div className="item1 xl:col-span-2 col-span-2 row-span-1">
            <h1 className="text-primary xl:text-5xl text-3xl font-bold text-center">
              Dispatch Testimonials
            </h1>
            <h1 className="text-text-color xl:text-5xl text-3xl font-medium my-5 text-center">
              Check out what our customers are saying about us!
            </h1>
            <CarouselCom />
          </div>
          <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:-mt-20 -mt-12">
            <FormSendMesage />
          </div>
        </div>
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
        <div className="item1 xl:col-span-2 col-span-2 row-span-1">
        <AllDataSendForm/>
        </div>
       <ContactInfo/>
        </div>
      </div>
      <div className='xl:w-[80%] w-[95%] mx-auto py-12'>
      <CarouselCom />
      </div>
    </>
  );
};

export default TestimonialsPage;
