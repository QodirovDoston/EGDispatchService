import Image from "next/image";
import React from "react";
import {news} from '../utils'

const LatestNews = () => {

 
  return (
    <div className='coverBg'>
    <div className="xl:w-[80%] w-[90%] py-5 mx-auto">
      <div className="m-2 flex justify-center">
        <div className="clip_custom pt-10 xl:pb-10 pb-20 px-5 bg-gray-100 border rounded-lg border-gray-200 shadow-2xl">
          <div className="grid xl:grid-cols-2 grid-cols-1">
            {news.map((item, idx) => {
              return (
                <div key={idx} className="px-6 w-full text-center">
                  <div className="overflow-hidden mx-auto">
                    <Image
                      width={500}
                      height={500}
                      alt="hero img"
                      src={item.img}
                      className="mb-3 hover:scale-105 duration-300 transition-all"
                    />
                  </div>
                  <span className="font-mono text-gray-600 text-3xl font-bold">
                    {item.title}
                  </span>
                  <br />
                  <p className="text-text-color text-lg py-3">
                    {item.disc}
                  </p>
                </div>
              );
            })}
          </div>
          <a className='flex justify-center' href="tel:+998500033940">
          <button className="text-white rounded-[22px] bg-primary duration-500 transition hover:bg-primary-dark font-medium text-lg xl:px-32 px-12 py-2.5 text-center xl:mt-1 mb-12 hover:scale-105">
          Learn more
        </button>
          </a>
        </div>
      </div>
    </div>
 </div>
  );
};

export default LatestNews;
