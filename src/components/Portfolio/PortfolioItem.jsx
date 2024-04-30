import React, { useState } from 'react';
import zoom from '../../assets/Portfolio/zoom.png';
import SeeMore from './SeeMore';
import Aos from 'aos';
function PortfolioItem({ image, text, heading }) {
  Aos.init();
  Aos.refresh();
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="relative mb-4 rounded-md">
      <img
        src={image}
        className="w-full rounded-md"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-stone-700 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 ">
        <button>
          <img
            src={zoom}
            alt="zoom icon"
            onClick={() => setSeeMore((e) => !e)}
            className="w-12 opacity-80 "
          />
        </button>
      </div>
      {seeMore && (
        <SeeMore
          image={image}
          text={text}
          setShowModal={setSeeMore}
          heading={heading}
        />
      )}
    </div>
  );
}

export default PortfolioItem;
