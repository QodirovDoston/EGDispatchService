import React from "react";

const Card = () => {
  return (
    <div className="relative xl:m-16 m-2">
      <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border bg-primary text-white font-bold">
        NEW
      </button>
      <div className="purple_border xl:p-8 p-4 border border-black text-center bg-white">
        <h1 className="text-text-color text-3xl mt-8"> No Contract</h1>
        <span className="font-mono text-text-color text-2xl font-bold">
          Pricing Plans
        </span>
        <p className="text-text-color text-md py-5">
          We understand that finding a great OTR dispatcher is not an easy task.
          We offer NO CONTRACT pricing because we are 100% confident that you
          are going to love our services. You are more than just a driver, you
          are family!
        </p>
        <a href="tel:+1540 4409208">
        <button className="text-white rounded-[22px] mt-5 bg-primary duration-150 transition hover:bg-primary-dark font-medium text-lg px-10 py-2.5 text-center">
        Learn more
      </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
