import React from "react";
import phoneIcon from "../assets/icons/phone.svg";
import note from "../assets/icons/note.svg";
import partner from "../assets/icons/partner.svg";
import flag from "../assets/icons/flag.svg";

import Image from "next/image";
import Card from "./card";
import { sikkl } from "../utils";

const iconsArr = [flag, note, partner];

const callUsToday = () => {
  const cards = [
    {
      img:
        "https://img.freepik.com/free-photo/night-trucking-delivers-cargo-steel-warehouse-generated-by-ai_188544-17396.jpg?t=st=1712141149~exp=1712144749~hmac=55cc7f41810207bb77ce03309933537c2db518fb1cf83276802ec2b7d61625c8&w=1060",
      title: "Dispatching",
      link: "#serves"
    },
    {
      img:
        "https://img.freepik.com/premium-psd/isolated-realistic-metallic-red-heavy-duty-semitrucks-car-from-left-front-angle-view_16145-44514.jpg?w=1060",
      title: "Factor Invoicing",
      link: "#serves"
    },
    {
      img:
        "https://mjdispatch.com/wp-content/uploads/2022/02/cropped-Semi5.jpg",
      title: "Insurance",
      link: "#serves"
    }
  ];
  return (
    <div>
      <div className="callus">
        <div className="xl:w-[80%] w-[95%] mx-auto">
          <div className="flex justify-between flex-wrap py-8">
            <div>
              <h1 className="text-white text-3xl font-bold">Call Us Today!</h1>
              <h5 className="text-white text-2xl font-bold">
                Nationwide Dispatching Services Available
              </h5>
            </div>
            <a
              className="xl:text-3xl text-xl font-bold cursor-pointer flex gap-3 items-center"
              href="tel:+1 540 440-9208"
            >
              <Image width={45} height={45} alt="hero img" src={phoneIcon} />
              <span className="text text-gray-300">+1(540) 440-9208</span>
            </a>
          </div>
        </div>
      </div>
      <div className="call">
        <div className="xl:w-[80%] w-[90%] mx-auto">
          <div className="grid xl:grid-cols-2 grid-cols-1">
            <div className="xl:-mt-14 -mt-6">
              <Card />
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mx-auto gap-3 items-center py-3">
              {cards.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      className="hover:scale-110 duration-500 h-[200px] object-cover"
                      width={500}
                      height={500}
                      alt="hero img"
                      src={item.img}
                    />
                    <p className="text-white text-xl py-4">
                      {item.title}
                    </p>
                    <a href={item.link}>
                    <button className="text-white rounded-[22px] border-2 border-white duration-150 transition hover:border-primary hover:text-primary  font-medium text-lg  px-5 py-2.5 text-center ">
                      Learn More
                    </button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-[80%] w-[90%] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto justify-center items-center mt-3">
        {sikkl.map((item, index) => {
          return (
            <div key={index} className=" xl:m-6 m-2 flex justify-center">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 duration-500">
                <div className=" flex justify-center mx-auto my-4">
                  <Image
                    className="bg-text-color rounded-full p-2 hover:scale-110 duration-500"
                    width={70}
                    height={70}
                    alt="hero img"
                    src={iconsArr[index]}
                  />
                </div>
                <span className="font-mono text-text-color text-2xl font-bold">
                  {item.title}
                </span>
                <p className="text-text-color text-md py-5">
                  {item.paragrow}
                </p>
                 <a href={item.link}>
                <button className="text-white rounded-[22px] mt-5 bg-primary duration-150 transition hover:bg-primary-dark font-medium text-lg px-10 py-2.5 text-center">
                  Learn more
                </button>
                 </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default callUsToday;
