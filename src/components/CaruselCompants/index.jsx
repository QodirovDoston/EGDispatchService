import Slider from "react-slick";
import React from "react";
import { cruseldata } from "../../utils";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue",borderRadius:100 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" ,borderRadius:100 }}
        onClick={onClick}
      />
    );
  }
const CarouselCom = () => {


  var settings = {
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
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
    <div className="bg-blue-100">
      <Slider {...settings} a>
        {cruseldata.map((item, index) => {
          return (
            <div key={index} className="text-center px-10">
              <h1 className="text-2xl font-extrabold py-6">
                {item.title}
              </h1>
              <p className="text-lg font-sans py-4">
                {item.paragrow}
              </p>

              <h1 className="text-lg font-bold">
                {item.name}
              </h1>
              <p className="text-2xl mb-12">
                {item.discrabe}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );    
};

export default CarouselCom;
