import React from "react";
import FormSendMesage from "../components/FormSendMesage";
import dispatcherImg  from '../../public/dispatcher.jpg'
import Image from "next/image";
const Trucking_serves = () => {
  return (
    <div id='serves' className="max-w-[85%] mx-auto">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-32">
        {/* <div>
      <h1 className="text-center text-4xl my-5 font-semibold text-green-600">
      Trucking Services
      </h1>
      <div className="flex ">
      <div className="truck_serves ">
        <div className="py-5 px-4">
          <h1 className="text-4xl text-text-color">Dispatch Services</h1>
          <p className="text-md my-5 text-text-color font-bold w-[300px]">
            Our team of professional OTR dispatchers are experienced and ready
            to help you earn the money you deserve without the hassle. Let us
            help you reach your goals!
          </p>
          <button className="px-6 py-3 text-white font-semibold rounded-3xl bg-green-700">MORE INFO</button>
        </div>
      </div>
      
      <div className="truck_serves ">
        <div className="py-5 px-4">
          <h1 className="text-4xl text-text-color">Dispatch Services</h1>
          <p className="text-md my-5 text-text-color font-bold w-[300px]">
            Our team of professional OTR dispatchers are experienced and ready
            to help you earn the money you deserve without the hassle. Let us
            help you reach your goals!
          </p>
          <button className="px-6 py-3 text-white font-semibold rounded-3xl  bg-green-700">MORE INFO</button>
        </div>
      </div>
      </div>
      <div className="flex ">
      <div className="truck_serves ">
        <div className="py-5 px-4">
          <h1 className="text-4xl text-text-color">Dispatch Services</h1>
          <p className="text-md my-5 text-text-color font-bold w-[300px]">
            Our team of professional OTR dispatchers are experienced and ready
            to help you earn the money you deserve without the hassle. Let us
            help you reach your goals!
          </p>
          <button className="px-6 py-3 text-white font-semibold rounded-3xl bg-green-700">MORE INFO</button>
        </div>
      </div>
      
      <div className="truck_serves ">
        <div className="py-5 px-4">
          <h1 className="text-4xl text-text-color">Dispatch Services</h1>
          <p className="text-md my-5 text-text-color font-bold w-[300px]">
            Our team of professional OTR dispatchers are experienced and ready
            to help you earn the money you deserve without the hassle. Let us
            help you reach your goals!
          </p>
          <button className="px-6 py-3 text-white font-semibold rounded-3xl  bg-green-700">MORE INFO</button>
        </div>
      </div>
      </div>
      </div> */}
        {/* bu kerak boshqa page uchun */}

        <div>
          <h1 className="text-gray-600 text-3xl font-bold mt-12">
            Professional Truck Dispatching
          </h1>
          <h2 className="text-gray-600 text-3xl font-bold my-10">
            Dispatch Services, Training & Consulting Available!
          </h2>
          <p className="text-text-color mb-10">
            We at EG Dispatch Service, are a small business whose mission is to
            help trucking companies take their company to the next level. Our
            focus is trucking companies who have less than 10 trucks who are in
            need of finding freight at the best price. Our <a className='text-primary cursor-pointer' href="#">truck dispatchers </a>
            know the business better than anyone and are experts at finding the
            highest paying load helping you make the money you deserve. Our team
            of highly trained dispatchers will take care of all the paperwork,
            phone calls and payments so all you have to do is DRIVE.
          </p>
          <Image
                      // style={{width:'100%', height:'100%' ,maxHeight:'350px', marginTop:'30px'}}
                      src={dispatcherImg}
                      alt="arrow"
                    />
          {/* <iframe
            src="https://www.youtube.com/embed/TT6hyiDgzZQ?si=Wuz0wGg6yd5JUJPt&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          /> */}
        </div>
        <FormSendMesage />
      </div>
    </div>
  );
};

export default Trucking_serves;
