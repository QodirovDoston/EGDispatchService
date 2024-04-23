import React from "react";
import { accardion } from "../utils/index";
import Dropdown from "./Dropdown";
import Image from "next/image";
import imdDispatcher from '../../public/dispatchgirl.jpg'

const DispatchServices = () => {
  return (
    <div className="bg-gray-100 pb-8 pt-16 path">
      <div className="xl:w-[80%] w-[95%] mx-auto">
        <h1 className="text-gray-600 text-3xl text-center font-bold xl:mt-12 md:mt-32 mt-4"> 
          We save you time and make you money with our
          EG Dispatch Service content.
        </h1>
        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-text-color">
              We are the best in the industry at negotiating the highest paying
              rates and finding the best loads to meet your needs. Let our
              dedicated and experienced dispatchers save you time and make you
              money so all you have to do is DRIVE!
            </p>
            <Image
            className="mt-5"
            // width={250}
            // height={250}
            alt="hero img"
            src={imdDispatcher}
            />
            {/* <iframe
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "350px",
                marginTop: "30px"
              }}
              src="https://www.youtube.com/embed/TT6hyiDgzZQ?si=Wuz0wGg6yd5JUJPt&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            /> */}
          </div>
          <div className="">
            <div className="max-w-screen-xl mx-auto xl:px-5 px-1 min-h-sceen xl:mt-1 md:mt-32 mt-6">
              <Dropdown accardion={accardion} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatchServices;
