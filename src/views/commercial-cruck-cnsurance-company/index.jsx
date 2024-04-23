import React from "react";
import FormSendMesage from "../../components/FormSendMesage";
import ContactInfo from "../../components/contact-info";
import ButtonCom from "../../components/ButtonCom";
import Image from "next/image";

const CommercialTruckInsuranceCompanyPage = () => {
  const givemattlink = [
    { name: "Public Liability Insurance", link: "#" },
    { name: "General Liability Insurance" },
    { name: "Physical Damage Coverage" },
    { name: "Cargo Insurance" },
    { name: "Bobtail Insurance Coverage" },
    { name: "Uninsured/Underinsured Motorists" },
    { name: "Reefer Breakdown Coverage" },
    { name: "Trailer Interchange" },
    { name: "Non-Owned Trailer Interchange" }
  ];
  const img = [
    {
      num: "https://mjdispatch.com/wp-content/uploads/2022/03/number-1-200x200.png",
      text: "Let Us Explain Your Business Insurance Options"
    },
    {
      num: "https://mjdispatch.com/wp-content/uploads/2022/03/number-2-200x200.png",
      text: "Our Insurance Experts Will Help To Customize An Offer That Is Best For You"
    },
    {
      num: "https://mjdispatch.com/wp-content/uploads/2022/03/number-3-200x200.png",
      text: "Get On The Road…Where You Belong"
    }
  ];
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">
            Commercial Truck Insurance Company
          </h1>
        </div>
      </div>
      <div className="xl:w-[85%] w-[95%] mx-auto py-12">
        <div className="grid xl:grid-cols-3 grid-cols-1  xl:gap-5 gap-0">
          <div className="item1 xl:col-span-2 col-span-2 row-span-1">
            {/* <div className="grid xl:grid-cols-3 grid-cols-1 items-center">
              <div className="shadow-xl p-5 item1 xl:col-span-2 col-span-2 row-span-1">
                <h1 className="text-4xl text-green-700">
                  Getting Insured Has Never Been Easier
                </h1>
                <ButtonCom
                  link="tel:+998933213940"
                  text="CLICK HERE TO FACTOR"
                  addStyle="bg-green-700 mt-5"
                />
                <p className="text-text-color py-6 leading-10">
                  EG  Service has partnered with INSURANCEHUB to offer you the
                  most affordable quotes in the industry.
                </p>
              </div>
              <Image
                className="hover:scale-110 duration-500 item2 xl:row-span-2 col-span-1 row-span-2 -ml-8"
                width={600}
                height={600}
                alt="hero img"
                src="https://mjdispatch.com/wp-content/uploads/2022/03/Semi-Truck-Wallpaper-.jpg"
              />
            </div> */}

            <h1 className="font-bold text-3xl text-text-color py-5 mt-8">
              What Is Commercial Truck Insurance And What Coverage Do I Need?
            </h1>
            <p className="text-text-color py-3">
              Commercial truck insurance is a group of policies put together to
              cover all your trucking needs.
            </p>
            <p className="text-text-color py-3">
              Before you can get your truck on the road, FMCSA (trucking
              governing authority) requires you to obtain specific insurance and
              limits.
            </p>
            <Image
              className="item2 xl:row-span-2 col-span-1 row-span-2 mx-auto"
              width={600}
              height={600}
              alt="hero img"
              src="https://mjdispatch.com/wp-content/uploads/2022/03/Semi-Truck-Wallpaper-.jpg"
            />
            <p className="text-text-color py-3">
              Listed below are the required and optional coverage options.
            </p>
            <p className="text-text-color py-3">
              Give EG Dispatch Service  a call and he can help you with all your insurance
              needs!
            </p>
            <div className="mt-6 ml-8">
              <ul className="text-primary-dark">
                {givemattlink.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`font-bold flex gap-3 mt-3 ${
                        item.link ? "text-primary" : "text-text-color"
                      }`}
                    >
                      <div className="bg-blue-800 w-2 h-2 mt-2 rounded-full" />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="item2 xl:row-span-2 col-span-1 row-span-2 xl:-mt-20 -mt-12">
            <FormSendMesage />
            <ContactInfo />
          </div>
        </div>
        <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 py-5 text-center">
              <div className="p-6 px-8">
                <h5 className="mb-2 text-2xl  tracking-wide text-text-color">
                  GET STARTED TODAY
                </h5>
                <h2 className="text-5xl font-bold text-text-color">
                  The Process Is Easy!
                </h2>
              </div>
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-12 px-8">
                {img.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <Image
                        className="item2 xl:row-span-2 col-span-1 row-span-2 mx-auto shadow-5xl rounded-2xl"
                        width={130}
                        height={130}
                        alt="hero img"
                        src={item.num}
                      />
                      <p className="text-text-color text-xl leading-7 py-3">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          <h1 className="text-text-color text-4xl text-center py-5 font-medium">
            Ready To Get On The Road? Get A Quote Now!
          </h1>
          <div className="flex justify-center">
            <ButtonCom
              link="tel:+998933213940"
              text="GET A QUOTE"
              addStyle="bg-primary mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommercialTruckInsuranceCompanyPage;
