import React from 'react';
import FeaturedItem from './FeaturedItem';
import creativeFeatured from '../../assets/Home/creativeFeatured.jpg';
import detailsFeatured from '../../assets/Home/detailsFeatured.jpg';
import personalFeatured from '../../assets/Home/personalFeatured.jpg';
import Aos from 'aos';

import ButtonP from '../buttons/ButtonP';
function Featured() {
  Aos.init();
  Aos.refresh();
  return (
    <div className="mb-10 mt-20  ">
      <div>
        <h1
          className=" px-1 text-center text-xl font-semibold text-stone-700 md:flex-row md:text-2xl lg:px-12 lg:text-3xl xl:text-4xl xl:font-bold
        "
        >
          Featured Work
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-stone-800 "></div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <FeaturedItem
          image={creativeFeatured}
          data_aos="fade-right"
          data_aos_duration="1000"
        />
        <FeaturedItem image={detailsFeatured} />
        <FeaturedItem
          image={personalFeatured}
          data_aos="fade-left"
          data_aos-duration="1000"
        />
      </div>
      <ButtonP
        text="Explore my collection &rarr;"
        to="/EsquissesDeNur/portfolio"
        styles="mx-auto"
      />
    </div>
  );
}

export default Featured;
