"use client";
import Image from "next/image";
import React from "react";
import phoneIcon from "../../assets/icons/phone.svg";
import CaruselAbsolute from "../../components/caruselabsolute";
import { caruselBlogFordata } from "../../utils";
import iqro from "../../../public/iqro.png";
import partnor from "../../../public/OurPart1.jpg";
import EGDispatch from "../../../public/EGDispatch.png";
import aboutUs from "../../../public/aboutus.jpg";
import Slider from "react-slick";

const PartnersPage = () => {
  const img = [
    {
      img: "https://owneroperatorleaseon.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.95f90d56.jpg&w=750&q=75",
      link: "https://owneroperatorleaseon.com/"
    },
    { img: partnor },
    { img: iqro, link: "https://iqro.agency/#services" },
    { img: EGDispatch }
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  return (
    <>
      <div className="home">
        <div className="xl:w-[80%] w-[95%] mx-auto py-28">
          <h1 className="text-white xl:text-7xl text-4xl font-bold flex">
            About us
          </h1>
        </div>
      </div>
      <div className="xl:w-[80%] w-[95%] mx-auto">
        <div>
          <h1 className="text-primary text-3xl text-center font-bold my-10">
            EG Dispatch Service
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
            <Image width={500} height={500} alt="hero img" src={aboutUs} />
            <ul className="text-gray-800 text-lg leading-9 lg:mt-0 mt-6">
              <li>⭐️ Working with Amazon, DAT, UPS hot loads</li>
              <li>
                ⭐️ Finding the right load that fits your expectations perfectly
              </li>
              <li>⭐️Negotiating rates and take care of the paperwork</li>
              <li>
                ⭐️Assigning loads and help managing drivers on their trip
              </li>
              <li>⭐️Providing customer care</li>
              <li>⭐️Detention, TONU, layover assistance</li>
              <li>⭐️5 years of experience</li>
              <li>⭐️Handling billing paperwork, collection and all others</li>
              <li>
                ⭐️Helping you plan for and deal with weather delays, traffic
                congestion
              </li>
              <li>
                ⭐️All will be under your MC or for owner operators for our MC
              </li>
              <li>⭐️Strong sense of responsibility</li>
              <li>⭐️Professional solutions for any problems</li>
            </ul>
          </div>
        </div>
        <h1 className="text-primary text-3xl text-center font-bold my-10">
          Our Partners
        </h1>
        <p className="text-xl text-text-color">
          We have an extensive list of reputable partners that will help meet
          all your trucking needs. Give us a call today so we can direct you to
          the right path.
        </p>
        <div className='my-8'>
          <Slider {...settings}>
            {img.map((item, idx) => {
              return (
                <a
                className="border border-gray-500 rounded-xl flex justify-center items-center px-8"
                href={item.link}
                key={idx}
              >
                <div className="w-40 h-40 flex items-center justify-center object-contain"> 
                  <Image
                    className="flex items-center w-full ml-8"
                    width={300}
                    height={300}
                    alt="hero img"
                    src={item.img}
                  />
                </div>
              </a>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="callus">
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
      <CaruselAbsolute data={caruselBlogFordata} />
      {/* <Insurance /> */}
    </>
  );
};

export default PartnersPage;
