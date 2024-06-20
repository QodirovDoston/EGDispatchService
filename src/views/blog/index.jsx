import React from "react";
// import Insurance from "../../components/Insurance";
import Image from "next/image";
import phoneIcon from "../../assets/icons/phone.svg";

const BlogPage = () => {
  // const data = [
  //   {
  //     img: "https://mjdispatch.com/wp-content/uploads/2023/04/asian-male-dispatcher-checking-packages-while-usin-2022-11-25-16-57-19-utc1-700x441.png",
  //     title:
  //       "Understanding the Importance of Trailer Leasing and Dispatching with  EG Dispatch Service",
  //     date: "July 3rd, 2023",
  //     paragrow:
  //       "In the vast, ever-evolving logistics and transportation landscape, efficiency and scalability are key. Whether you're a startup business or an established enterprise, understanding the intricacies of trailer leasing and dispatching can be a game-changer.  EG Dispatching Service is a beacon in this realm, offering valuable insights and solutions. Let's delve into the importance of these services and highlight the unique benefits of 52' trailers for"
  //   },
  //   {
  //     img: "https://mjdispatch.com/wp-content/uploads/2023/04/asian-male-dispatcher-checking-packages-while-usin-2022-11-25-16-57-19-utc1-700x441.png",
  //     title: "How to Get the Most Out of Your Freight Dispatching Services?",
  //     date: "June 1st, 2023",
  //     paragrow:
  //       "In the fast-paced world of logistics and transportation, the right freight dispatching service is the linchpin to a successful, streamlined operation. The selection of this vital service significantly impacts your business's efficiency, cost management, and overall reliability. As a trusted partner in this arena,  EG Service offers exceptional freight dispatching services, setting the standard for others in the industry. Read on to discover how to"
  //   },
  //   {
  //     img: "https://mjdispatch.com/wp-content/uploads/2023/04/asian-male-dispatcher-checking-packages-while-usin-2022-11-25-16-57-19-utc1-700x441.png",
  //     title: "How EG Service Can Help You Get the Job Done?",
  //     date: "March 6th, 2023",
  //     paragrow:
  //       "EG Service is a logistics and transportation company that specializes in providing high-quality dispatch services to businesses in the trucking industry. Along with Trailer Leasing this company also provides truck dispatching services. We understand the challenges that come with managing a fleet of trucks, and we're here to help you get the job done efficiently and effectively. Managing a fleet of trucks can be a"
  //   },
  //   {
  //     img: "https://mjdispatch.com/wp-content/uploads/2023/04/asian-male-dispatcher-checking-packages-while-usin-2022-11-25-16-57-19-utc1-700x441.png",
  //     title:
  //       "EG Service Your Trusted Partner for 53′ Dry Van Trailer Leases for 3, 6, or 12 months!",
  //     date: "March 1st, 2023|Comments Off",
  //     paragrow:
  //       "Are you searching for reliable 53' trailers for lease? Check out  EG Service! Our dedicated"
  //   },
  //   {
  //     img: "https://mjdispatch.com/wp-content/uploads/2023/04/asian-male-dispatcher-checking-packages-while-usin-2022-11-25-16-57-19-utc1-700x441.png",
  //     title:
  //       "Make Way for EG Service Services: Unlock The Benefits of Invoice Factoring & Get Paid Quicker!",
  //     date: "February 1st, 2023|Comments Off",
  //     paragrow:
  //       "When it comes to running a trucking or freight business, it’s important to have a"
  //   },
  //   {
  //     img: "https://mjdispatch.com/wp-content/uploads/2023/04/asian-male-dispatcher-checking-packages-while-usin-2022-11-25-16-57-19-utc1-700x441.png",
  //     title: "Benefits of Insurance Savings with  EG Service and InsuranceHub",
  //     date: "November 1st, 2022|Comments Off",
  //     paragrow:
  //       "Truck drivers who work for themselves and companies that use trucks in their everyday work"
  //   }
  // ];
  return (
    <>
      <div className="home">
        <div className="xl:w-[85%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-5xl text-3xl font-bold">Blog</h1>
        </div>
      </div>
      {/* head */}
      {/* Truckers Blog */}

      <div className="xl:w-[80%] w-[95%] mx-auto py-8">
        <h1 className="text-text-color xl:text-5xl text-3xl font-bold text-center">
          Truckers Blog
        </h1>
        <div className="text-text-color gap-10 py-8">
          <p className="">
            Welcome to <span className="text-primary">  EG Dispatch Service</span>, Blog! Here, you’ll find a wealth of valuable insights, tips, and
            resources tailored to small trucking companies like yours.
          </p>
          <p className="py-4">
            Our mission is to empower you with the knowledge you need to take
            your business to the next level.
          </p>
          <p>
            Feel free to explore our archive and discover a treasure trove of
            information that can help you navigate the trucking industry with
            confidence.
          </p>
        </div>
        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="text-center">
                <Image
                  width={400}
                  height={400}
                  alt="hero img"
                  className="hover:scale-110 duration-500"
                  src={item.img}
                />
                <h1 className="text-primary font-bold py-5 text-2xl">
                  {item.title}
                </h1>
                <span className="text-xs text-gray-700 mb-2">{item.date}</span>
                <p className="text-text-color leading-9">{item.paragrow}</p>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="callus py-5">
        <div className="xl:w-[80%] w-[95%] mx-auto">
          <div className="flex justify-between flex-wrap py-8">
            <div>
              <h1 className="text-white text-3xl font-bold">Call Us Today!</h1>
              <h5 className="text-white text-2xl font-bold">
                Nationwide Dispatching Services Available
              </h5>
            </div>
            <a
              className="xl:text-3xl text-xl font-bold cursor-pointer flex gap-3 items-center"
              href="tel:+1 540 440-9208"
            >
              <Image width={45} height={45} alt="hero img" src={phoneIcon} />
              <span className="text text-gray-300">+1(540) 440-9208</span>
            </a>
          </div>
        </div>
      </div>
      {/* <Insurance /> */}
    </>
  );
};

export default BlogPage;
