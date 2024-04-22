'use client'
import Slider from "react-slick";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none"
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none"
      }}
      onClick={onClick}
    />
  );
}
const CaruselAbsolute = ({data}) => {
  var settings = {
    infinite: true,
    useCSS: false,
    useTransform: true,
    dots: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,

  };
  return (
    <div className="bg-blue-100 pb-10 my-3">
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div className="relative">
              <img src={item.src} alt={item.alt} className="object-cover xl:h-[430px] md:h-[480px] h-[590px] sm:h-[390px] w-full" />
              <div
                key={index}
                className="text-center xl:px-48 md:px-28 px-4 absolute top-0 z-10"
              >
                <h1 className="text-3xl font-extrabold lg:pt-12 pt-4 xl:pb-7 pb-1">
                  {item.title}
                </h1>
                <p className="xl:text-2xl md:text-xl text-md font-sans py-4 text-text-color">
                  {item.paragrow}
                </p>
                <p className="text-2xl xl:my-2 my-0 text-text-color">
                  {item.discrabe}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CaruselAbsolute;
