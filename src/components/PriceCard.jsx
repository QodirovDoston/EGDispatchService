import React from "react";

const PriceCard = () => {
  const data = [
    {
      title: "DISPATCHING",
      price: "4",
      didline: "/ per week (per truck)",
      list: [
        "Personal Dispatcher",
        "Negotiate high paying loads",
        "Back Office Support",
        "24/7 Support (Drivers Only)",
        "No Forced Dispatching",
        "You set your schedule",
        "New Authorities are Welcome!"
      ]
    },
    {
      title: "DISPATCHING",
      price: "3",
      didline: "/ per week (per truck)",
      list: [
        "Personal Dispatcher",
        "Negotiate high paying loads",
        "Back Office Support",
        "24/7 Support (Drivers Only)",
        "No Forced Dispatching",
        "You set your schedule",
        "New Authorities are Welcome!"
      ]
    },
    {
      title: "DISPATCHING",
      price: "2",
      didline: "/ per week (per truck)",
      list: [
        "Personal Dispatcher",
        "Negotiate high paying loads",
        "Back Office Support",
        "24/7 Support (Drivers Only)",
        "No Forced Dispatching",
        "You set your schedule",
        "New Authorities are Welcome!"
      ]
    },
    // {
    //   title: "FACTOR INVOICING",
    //   price: "75",
    //   didline: "/ week (max 4 trucks)",
    //   list: [
    //     "Paid in 1-2 business days",
    //     "Invoice creation",
    //     "Send in all paperwork",
    //     "Track Payments",
    //     "24/7 Support",
    //     "We do all the work",
    //     "We invoice all factoring companies!"
    //   ]
    // },
    // {
    //   title: "BROKER PACKETS",
    //   price: "75",
    //   didline: "/ per week (max 4 trucks)",
    //   list: [
    //     "You book your own loads",
    //     "All Carriers Accepted",
    //     "Completion of all broker packets",
    //     "Complete Carrier Set-Up",
    //     "24/7 Support",
    //     "Consultation Available",
    //     "Networking",
    //     "No dispatching required for this service!"
    //   ]
    // }
  ];
  return (
    <div>
      <section className="bg-white ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-3 md:grid-cols-2 sm:gap-6 xl:gap-4+ lg:space-y-0">
            {data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow xl:p-3"
                >
                  <h3 className="mb-4 text-2xl font-semibold bg-primary text-white py-7">
                    {item.title}
                  </h3>
                  <div className="flex items-end justify-center my-8">
                    <p className="items-start flex text-3xl font-extrabold">
                      ${" "}
                      <span className="text-6xl text-primary">
                        {item.price}
                      </span>
                    </p>
                    <p className="text-gray-500 text-xl font-bold">
                      {item.didline}
                    </p>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    {item.list.map((el, idx) => {
                      return (
                        <li key={idx} className="flex items-center space-x-3">
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-primary-dark"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span>{el}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <a
                    href="#"
                    className="border-2 bottom-0 duration-500 border-white hover:border-text-color text-text-color focus:ring-blue-200 font-medium rounded-lg text-md px-5 py-2.5 text-center uppercase"
                  >
                    Learn More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PriceCard;
