import React from 'react';

function ParaText({ heading, paragraph }) {
  return (
    <div>
      <h2 className=" mt-8 text-xl font-bold text-[#2C0707] underline underline-offset-[6px]">
        {heading}
      </h2>
      <p className=" mt-4 text-justify font-bold text-[#2C0707]">{paragraph}</p>
    </div>
  );
}

export default ParaText;
