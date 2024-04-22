import React from "react";
import Image from "next/image";

import img from "../../public/photo_2024-04-17_11-50-32.jpg";
import img1 from "../../public/tanker.jpg";
import img2 from "../../public/dryvan.jpg";
import img3 from "../../public/flatbeds.jpg";

const types_for_Truck = () => {
  const catalog = [img2, img, img1, img3];

  return (
    <div className="xl:py-20 py-5">
      <h1 className="text-center text-3xl text-gray-400 mb-12 mt-10">
        We service the following trailer types for Truck Dispatch:
      </h1>
      <div className="flex 2x:justify-between justify-center xl:px-12 lg:px-5 px-2 flex-wrap py-4 gap-10">
        {catalog.map((item, idx) => {
          return (
            <div key={idx} className="cursor-pointer">
              <Image width={600} height={600} alt="hero img" src={item} />
            </div>
          );
        })}
      </div>
      <div className="xl:w-[80%] w-[90%] mx-auto text-center">
        <p className="text-center text-md text-text-color">
          At EG Dispatch Service, we specialize in giving trucking companies
          a competitive edge. We understand the need for specialized attention
          and are dedicated to helping owner/operators with up to 10 trucks
          maximize their profits by finding them the best-paying loads on offer.
          Our experienced dispatchers take care of all paperwork, phone calls
          and payments so that drivers can concentrate solely on getting from A
          to B – securely, safely and efficiently! Let us help you make your
          business dreams come true today! Contact us now for more information
          on our services. Thank you for considering{" "}
          <a href="#serves" className="text-primary cursor-pointer">
            {" "}
            EG Dispatch Service!
          </a>{" "}
          We look forward to hearing from you soon.
        </p>
        <a href="tel:+1540 4409208">
          <button className="text-white rounded-[22px] mt-5 border-2 flex gap-2 bg-primary duration-150 transition hover:border-gray-400 font-medium text-md  px-5 py-2.5 text-center">
            Submit
          </button>
        </a>
      </div>
    </div>
  );
};

export default types_for_Truck;
