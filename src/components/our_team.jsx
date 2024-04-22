import React from "react";
import { aboutUs } from "../utils";
import Image from "next/image";
const iconsArr = ['https://mjdispatch.com/wp-content/uploads/2022/03/matt.jpg','https://mjdispatch.com/wp-content/uploads/2022/03/matt.jpg','https://mjdispatch.com/wp-content/uploads/2022/03/matt.jpg'];

const OurTeam = () => {
  return (
    <div className="xl:w-[80%] w-[95%] mx-auto xl:text-start text-center mt-5">
      <h1 className="text-gray-800 text-4xl">Our Team</h1>
      <div className='flex flex-wrap gap-5 items-center py-6'> 
        <p className="text-text-color text-md">
          Around the clock availability, decades of experience, passion and
          dedication to <br /> our clients. Empire Group Service Consulting & Training is here
          to exceed your expectations!
        </p>
        <a href='#serves'>
        <button className="text-white rounded-[22px] bg-primary duration-150 transition hover:bg-primary-dark font-medium text-lg xl:px-32 px-12 py-2.5 text-center">
          Learn more
        </button>
        </a>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto mt-3">
        {aboutUs.map((item, index) => {
          return (
            <div key={index} className="xl:m-2 m-2 flex justify-center">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 duration-500">
                  <Image
                    width={500}
                    height={500}
                    alt="hero img"
                    src={iconsArr[index]}
                    className="mb-3"
                  />
                <span className="font-mono text-gray-600 text-3xl font-bold">
                  {item.title}
                </span>
                <p className="text-text-color text-md py-3">
                  {item.paragrow}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
