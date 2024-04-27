import React from 'react';
import Aos from 'aos';

function ZItem({ heading, text, image, icon, imageFirst }) {
  // Aos.init();
  // Aos.refresh();
  return (
    <div className="my-10 flex flex-col  px-5 md:flex-row lg:px-12 ">
      <div
        className={`${imageFirst ? 'md:order-2' : ''} flex flex-col justify-center  md:w-1/2`}
      >
        <h1 className="mb-2 text-center text-lg font-semibold md:text-lg md:font-semibold lg:text-xl xl:text-2xl">
          {heading}
        </h1>
        <p className="mb-2  text-center text-sm md:text-base lg:text-lg ">
          {text}
        </p>
      </div>
      {imageFirst && (
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={image}
          alt="Z patterns"
          className="border-2=lg:w-72  mx-auto w-64 xl:w-80"
        />
      )}
      {!imageFirst && (
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          src={image}
          alt="Z patterns"
          className="mx-auto w-64  lg:w-72 xl:w-80"
        />
      )}
    </div>
  );
}

export default ZItem;
