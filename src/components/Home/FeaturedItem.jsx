import React from 'react';

function FeaturedItem({ image, data_aos, data_aos_duration }) {
  return (
    <div
      className="my-5 "
      data-aos={data_aos}
      data-aos-duration={data_aos_duration}
    >
      <img
        src={image}
        alt="Featured works"
        className="relative mx-auto max-h-[500px] w-[400px] overflow-hidden hover:shadow-2xl lg:h-full lg:w-full"
        style={{ transition: 'filter 0.3s' }}
        onMouseEnter={(e) => (e.target.style.filter = 'brightness(0.7)')}
        onMouseLeave={(e) => (e.target.style.filter = 'brightness(1)')}
      />
    </div>
  );
}

export default FeaturedItem;
