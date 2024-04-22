import React from 'react'
import FormSendMesage from "../../components/FormSendMesage";
import ContactInfo from "../../components/contact-info";
import Dropdown from '../../components/Dropdown';
import {accardionPersonal} from '../../utils/index';
import ButtonCom from '../../components/ButtonCom';

const FactoringCompanyPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Factoring Company
          </h1>
        </div>
      </div>
      <div className="xl:w-[85%] w-[95%] mx-auto py-12">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
          <div className="item1 xl:col-span-2 col-span-2 row-span-1 ">
            <h1 className='text-4xl text-primary'>IMPROVE YOUR CASH FLOW</h1>
            <p className='text-text-color py-6 leading-10'>
              <span className='font-bold text-lg'>What is Factoring?</span> Let’s be honest, the idea of factoring can be confusing and scary but once you understand it and make use of it, it can be the best thing you do for your business. A factoring company is a third party or financial company that purchases your invoice after you drop a load. The factoring company pays you for the invoice (minus a small factoring fee) and you get paid within 1 to 2 days instead of 30-60 days. It then becomes the responsibility of the “factor” or financial company to get paid on the invoice. You will be able to better manage your trucking business because you got paid faster and are not waiting for a check in the mail.</p>

            <h1 className='text-bold text-3xl text-center text-text-color'>Factoring Frequently Asked Questions</h1>
            <p className='text-bold text-2xl text-center py-5'>All the information you need to know</p>
            <Dropdown accardion={accardionPersonal} />
            <ButtonCom
              link="tel:+998933213940"
              text="CLICK HERE TO FACTOR"
              addStyle="bg-primary mt-5"
            />
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
          <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:-mt-20 -mt-12">
            <FormSendMesage />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>

  )
}

export default FactoringCompanyPage
