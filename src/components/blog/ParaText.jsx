import React from 'react';
import Aos from 'aos';

function ParaText({ heading, paragraph }) {
  Aos.init();
  Aos.refresh();
  return (
    <div data-aos="fade-left" data-aos-duration="1000">
      <h2 className=" mt-8 text-xl font-bold text-[#2C0707] underline underline-offset-[6px]">
        {heading}
      </h2>
      <p
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" mt-4 text-justify font-normal text-[#2C0707]"
      >
        {paragraph}
      </p>
    </div>
  );
}

export default ParaText;
