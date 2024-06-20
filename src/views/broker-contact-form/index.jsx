import React from 'react'
import BrokerPacketForm from "../../components/broker-packet-form";
import FormSendMesage from "../../components/FormSendMesage";

import ContactInfo from "../../components/contact-info";

const BrokerContactFormpage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[85%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
          Broker Contact Form
          </h1>
        </div>
      </div>
      <div className="xl:w-[85%] w-[95%] mx-auto py-12">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
          <div className="item1 xl:col-span-2 col-span-2 row-span-1 ">
        <BrokerPacketForm/>
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
  )
}

export default BrokerContactFormpage;