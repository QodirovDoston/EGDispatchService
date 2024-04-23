import Image from "next/image";
import React from "react";

const Insurance = () => {
  const data = [
    "Public Liability Insurance",
    "General Liability Insurance",
    "Physical Damage Coverage",
    "Cargo Insurance",
    "Bobtail Insurance Coverage",
    "Uninsured/Underinsured Motorists",
    "Reefer Breakdown Coverage",
    "Trailer Interchange",
    "Non Owned Trailer Interchange"
  ];
  return (
    <div className="bg-blue-100">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div className="relative xl:m-16 m-2">
            <button className="absolute py-1 px-4 -left-6 -top-1 -rotate-[45deg] border border-gray-200 bg-primary text-white font-bold hover:scale-105">
              NEW
            </button>
            <div className="purple_border xl:p-8 p-4 border shadow rounded-xl border-gray-300 text-center bg-white">
              <h1 className="text-text-color text-3xl mt-8 mb-3 font-bold">
                {" "}Commercial Insurance
              </h1>
              <h1 className="text-text-color text-2xl">
                Getting Insured Has Never Been Easier
              </h1>
              <p className="text-text-color text-md py-5 xl:px-11 px-11">
                Commercial truck insurance is a group of policies put together
                to cover all your trucking needs. Before you can get your truck
                on the road, FMCSA (trucking governing authority) requires you
                to obtain specific insurance and limits.
              </p>
              <button className="text-white rounded-[22px] mt-5 bg-primary duration-150 transition hover:bg-text-color font-medium text-lg px-10 py-2.5 text-center hover:scale-105">
                GET A QUOTE
              </button>
            </div>
          </div>
          <div>
            <div className="mt-1 py-2 xl:px-1 px-2">
              <Image className="mx-auto my-12"
                width={300}
                height={300}
                alt="hero img"
                src="https://mjdispatch.com/wp-content/uploads/2022/02/insurance-hub-1.png"
              />
              <p className="text-blue-800">
                Listed below are the required and optional coverage options.
                Give EG Service  a call and he can help you with all your insurance
                needs!
              </p>
              <div className="mt-6">
                <ul className="text-blue-800">
                  {data.map((item, idx) => {
                    return (
                      <li key={idx} className="flex gap-2 item-center">
                        <div className="bg-blue-800 w-2 h-2 mt-2 rounded-full" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
