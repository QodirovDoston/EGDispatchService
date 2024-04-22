import React from "react";
import ButtonCom from '../../components/ButtonCom';
import FormSendMesage from '../../components/FormSendMesage'
import ContactInfo from "../../components/contact-info";
import ForWeDoCard from '../../components/for-we-do-card';
import { dispachCarddata } from "../../utils";


const TruckingConsultingPage = () => {
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Trucking Consulting Services
          </h1>
        </div>
      </div>
      <div className="xl:w-[85%] w-[95%] mx-auto py-12">
      <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
        <div className="item1 xl:col-span-2 col-span-2 row-span-1 ">
          <div className='shadow-xl border border-gray-300 p-4'>
          <h1 className="text-primary text-4xl">Dispatch Consulting</h1>
          <p className="text-text-color py-10 leading-100">
            Let us help you establish a new business or strengthen a current
            one. We want to empower you to not only be successful in the
            industry but also to reach every goal you{" "}
            <span className="text-primary cursor-pointer"> set for your business </span>.
            Message us today for a free 30 minute consult.
          </p>
          <ButtonCom
            link="tel:+998933213940"
            text="SCHEDULE A CONSULT"
            addStyle="bg-primary"
          />
        </div>
          <ForWeDoCard data={dispachCarddata} sty=' mt-12'/>
        </div>
        <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:-mt-20 -mt-12">
          <FormSendMesage />
          <ContactInfo/>
        </div>
      </div>
      {/* <div>
            <h1 className="text-gray-700 text-3xl text-center py-5 font-medium">Some Of The States We Serve</h1>
            <p classNamme='text-text-color'>
              <span className='text-green-700'> Georgia Truck Dispatch Consulting</span> | <span className='text-green-700'> North Carolina Truck Dispatch Consulting </span>  | South Carolina Truck Dispatch Consulting |  <span className='text-green-700'>New York Truck Dispatch Consulting | Indiana Truck Dispatch Consulting  </span> | <span className='text-green-700'> Virginia Truck Dispatch Consulting </span >| California Truck Dispatch Consulting | Florida Truck Dispatch Consulting | Illinois Truck Dispatch Consulting | Missouri Truck Dispatch Consulting</p>
          </div> */}
      </div>
    </>
  );
};

export default TruckingConsultingPage;
