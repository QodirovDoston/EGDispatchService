import Image from "next/image";
import React from "react";


const ForWeDoCard = ({ data, sty }) => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
      {data.map((item, idx) => {
        return (
          <div key={idx} className="w-full">
            <Image
              className={`rounded-full my-4 hover:scale-110 duration-500 bg-text-color p-3 ${sty}`}
              width={100}
              height={100}
              alt="hero img"
              src={item.img}
            />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-sm mt-4 leading-7 text-gray-800">{item.parag}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ForWeDoCard;
