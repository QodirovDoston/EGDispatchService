'use client'
import React from "react";
import CaruselAbsolute from '../../components/caruselabsolute';
// import Insurance from "../../components/Insurance";
import { caruselBlogFordata } from "../../utils";
import { equipmentdata } from '../../utils/index';
const EquipmentDispatchPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[85%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Equipment Dispatch
          </h1>
        </div>
      </div>
      <div className="xl:w-[85%] w-[95%] mx-auto py-28 gap-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {equipmentdata.map((item, idx) => {
          return (
            <div key={idx}>
              <h1 className="text-black hover:text-primary font-bold duration-500 cursor-pointer text-2xl py-3">{item.title}
              </h1>
              <p className="text-gray-400 text-sm">{item.par}</p>
            </div>
          )
        })}
      </div>
      <CaruselAbsolute data={caruselBlogFordata} />
      {/* <Insurance /> */}
    </>
  );
};

export default EquipmentDispatchPage;
