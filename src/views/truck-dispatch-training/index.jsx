import React from "react";
import FormSendMesage from "../../components/FormSendMesage";
import ContactInfo from "../../components/contact-info";
import Image from "next/image";
import calendaCheck from "../../assets/icons/calendaCheck.svg";

const data = [
  { title:"How to Book a Load", pagr:"You will learn step by step instructions on load booking, terminology (rate con, factoring, etc.), how to perform a credit check and much more!"},
  { title:"Load Boards", pagr:"What is a load board and why do we use them? Which is the best? How much do they cost? You will learn how to use a load board effectively."},
  { title:"Game Map", pagr:"Where can I safely run my truck to make the most money? What regions should I book and during what seasons? You will get a free PDF copy of our Game Map."},
  { title:"How to Make a Broker Call", pagr:"Telephone etiquette, what to ask and why we ask it. How you communicate over the phone is key to obtaining a successful load."},
  { title:"How to Negotiate a Rate", pagr:"You will learn what techniques we use to get the highest payout possible for a load. There is always a way to get more money for a load."},
  { title:"How to Complete a Packet", pagr:"You will learn what information is needed to complete a broker packet and how to complete it."},
  { title:"Route Planning", pagr:"How to route your truck consistently, be home for the week-ends and maintain continuous revenue."},
  { title:"Networking", pagr:"How to build relationships with brokers, factoring companies and insurance companies. What are the benefits of networking?"},
  { title:"Marketing", pagr:"The how, why and where to market effectively."}]
const TruckDispatchTrainingPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[85%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Truck Dispatch Training
          </h1>
        </div>
      </div>
      <div className="xl:w-[85%] w-[95%] mx-auto py-12">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
          <div className="item1 xl:col-span-2 col-span-2 row-span-1 ">
            <h1 className="text-gray-700 text-4xl text-center">What will you learn?</h1>
            <a href="" className="flex justify-center py-5">
              <button
                className={`text-white rounded-[22px] mt-5 border-2 flex gap-2 bg-primary hover:bg-text-color duration-500 transition hover:border-gray-400 font-medium text-md  px-5 py-2.5 text-center hover:scale-105`}
              >
                <Image
                  className="hover:scale-110 duration-500"
                  width={20}
                  height={20}
                  alt="hero img"
                  src={calendaCheck}
                />
                SIGN UP TODAY!
              </button>
            </a>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 pb-5 gap-8">
              {data.map((elem, idx) => {
                return (
                  <div key={idx} className="text-center">
                    <h2 className="text-2xl font-bold py-4">{elem.title}</h2>
                    <hr className="h-[1px] my-1 bg-primary border-0" />
                    <p className="leading-10">
                    {elem.pagr}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="callus">
        <div className="text-white text-center py-10 xl:w-[80%] w-[95%] mx-auto">
      <h4 className='text-3xl'>GIVE US A CALL, WE CAN ANSWER ALL YOUR QUESTIONS AND MORE!</h4>
      <h1 className='text-5xl py-3'>+1(540) 440-9208</h1>
      <h3 className='text-3xl'>Get Started Today!</h3>
      <a href="" className="flex justify-center">
        <button
          className={`text-white rounded-[22px] mt-5 border-2 flex gap-2 bg-primary duration-500 transition hover:border-gray-400 font-medium text-md  px-5 py-2.5 text-center hover:scale-105`}
        >
          <Image
            className="hover:scale-110 duration-500"
            width={20}
            height={20}
            alt="hero img"
            src={calendaCheck}
          />
          SIGN UP TODAY!
        </button>
      </a>
        </div>
      </div>
           
          </div>
          <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:-mt-20 -mt-12">
            <FormSendMesage />
            <ContactInfo />
          </div>
        </div>
        {/* <div>
          <h1 className="text-gray-700 text-3xl text-center py-5 font-medium">
            Some Of The States We Serve
          </h1>
          <p classNamme="text-text-color">
            <span className="text-green-700">
              {" "}
              Georgia Truck Dispatch Consulting
            </span>{" "}
            |{" "}
            <span className="text-green-700">
              {" "}
              North Carolina Truck Dispatch Consulting{" "}
            </span>{" "}
            | South Carolina Truck Dispatch Consulting |{" "}
            <span className="text-green-700">
              New York Truck Dispatch Consulting | Indiana Truck Dispatch
              Consulting{" "}
            </span>{" "}
            |{" "}
            <span className="text-green-700">
              {" "}
              Virginia Truck Dispatch Consulting{" "}
            </span>
            | California Truck Dispatch Consulting | Florida Truck Dispatch
            Consulting | Illinois Truck Dispatch Consulting | Missouri Truck
            Dispatch Consulting
          </p>
        </div> */}
      </div>
    </>
  );
};

export default TruckDispatchTrainingPage;
