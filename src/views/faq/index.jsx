import React from "react";
import truck from "../../assets/for_card_icons/truck.svg";
import Image from "next/image";
import { data } from '../../utils/index';

const FaqPage = () => {

  return (
    <>
      <div className="home">
        <div className="xl:w-[85%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">FAQ</h1>
        </div>
      </div>
      <div className=" py-12">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="mx-7 group bg-gray-300 flex items-start gap-10 mt-5 py-14 cursor-pointer">
              <div className='xl:w-[80%] w-[95%] mx-auto flex gap-10'>
                <div className="relative inline-flex">
                  <div className="w-24 h-24 bg-black rounded-full"> </div>
                  <div className="w-24 h-24 bg-blue-500 rounded-full absolute top-0 left-0 group-hover:animate-ping"> </div>
                  <div className="w-24 h-24 bg-blue-500 rounded-full absolute top-0 left-0 group-hover:animate-pulse">
                    <Image
                      className="bg-text-color rounded-full p-4"
                      width={100}
                      height={100}
                      alt="hero img"
                      src={truck}
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-black text-3xl font-bold pb-5">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 text-md font-medium">{item.paragrow}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FaqPage;
