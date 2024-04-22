import React from "react";

const ContactInfo = () => {
  return (
    <div className="item2 xl:row-span-2 col-span-1 xl:text-start text-center row-span-2 mt-5">
      <p className="text-2xl font-bold">Contact Info</p>
      <p className="text-sm  text-text-color ">
        <a href="tel:+1 540 440-9208">
        Phone:{" "}
        <span className="text-sm text-primary py-4"> +1(540) 440-9208
 </span>
        </a>
      </p>
      <p className="text-sm  text-text-color ">
        Email:<span className="text-sm text-primary py-4">
          {" "}empiregrouplm@gmail.com
        </span>
      </p>
      <p className="text-xl font-bold py-4">Testimonials</p>
      <p className="text-2xl font-bold text-gray-400">
        Great People Great Company
      </p>

      <p className="text-sm text-text-color py-4">
        I’ve been using their services for 5 months and its one of the best
        companies I’ve worked with by far. EG team are always
        available to help and always find a way to get you out of any situation
        you might run across.
      </p>
    </div>
  );
};

export default ContactInfo;
