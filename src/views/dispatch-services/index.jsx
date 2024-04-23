import DruckDispatch from "../../components/truck-dispatch";
import ContactInfo from "../../components/contact-info";
import WhatWeDo from "../../components/what-we-do";
import Nontract from "../../components/no-contract";
import FormSendMesage from "../../components/FormSendMesage/index";
import PriceCard from "../../components/PriceCard";
import calendaCheck from "../../assets/icons/calendaCheck.svg";
import Image from "next/image";

export const DispatchServicesPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Dispatch Services
          </h1>
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-12 gap-0  xl:w-[90%] w-[95%] mx-auto">
        <div className="item1 xl:col-span-2 col-span-2 row-span-1">
          <DruckDispatch />
          <div className="py-5">
            <WhatWeDo />
          </div>
        </div>
        <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:mt-12 -mt-12">
          <FormSendMesage />
          <ContactInfo />
        </div>
      </div>
      {/* <Nontract /> */}
      {/* <PriceCard /> */}
      <div>
        <div className="callus">
          <div className="text-white text-center py-10 xl:w-[80%] w-[95%] mx-auto">
            <h4 className="text-3xl">
              GIVE US A CALL, WE CAN ANSWER ALL YOUR QUESTIONS AND MORE!
            </h4>
            <h1 className="text-5xl py-3">+1(540) 440-9208</h1>
            <h3 className="text-3xl">Get Started Today!</h3>
            <a href="" className="flex justify-center">
              <button
                className={`text-white rounded-[22px] mt-5 border-2 flex gap-2 bg-primary duration-150 transition hover:border-gray-400 font-medium text-md  px-5 py-2.5 text-center hover:scale-105`}
              >
                <Image
                  className="hover:scale-110 duration-500"
                  width={30}
                  height={30}
                  alt="hero img"
                  src={calendaCheck}
                />
                SIGN UP TODAY!
              </button>
            </a>
          </div>
        </div>
        {/* <div className="xl:w-[85%] w-[90%] mx-auto py-8">
          <h1 className="text-3xl text-center py-5">
            Some Of The States We Serve
          </h1>
          <p className="text-text-color leading-8">
            {" "}
            <span className="text-green-700">
              Georgia Truck Dispatching | North Carolina Truck Dispatching{" "}
            </span>
            | South Carolina Truck Dispatching |
            <span className="text-green-700"> New York Truck Dispatching </span>
            | Indiana Truck Dispatching |{" "}
            <span className="text-green-700">Virginia Truck Dispatching </span>|
            California Truck Dispatching | Florida Truck Dispatching | Illinois
            Truck Dispatching | Missouri Truck Dispatching
          </p>
        </div> */}
        {/* <ButtonCom
        link="tel:+998933213940"
        text="SIGN UP TODAY!"
        addStyle='bg-green-700'
      /> */}
      </div>
    </>
  );
};
