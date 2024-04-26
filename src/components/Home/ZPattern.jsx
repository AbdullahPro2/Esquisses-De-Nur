import React from 'react';
import ZItem from './ZItem';
import creativeImage from '../../assets/Home/creative.png';
import detailImage from '../../assets/Home/details.png';
import personalImage from '../../assets/Home/personal.png';
function ZPattern() {
  return (
    <div className="mb-10 mt-20 ">
      <div>
        <h1
          className=" px-1 text-center text-xl font-semibold text-stone-700 md:flex-row md:text-2xl lg:px-12 lg:text-3xl xl:text-4xl xl:font-bold
        "
        >
          Design Philosophy Showcase
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-stone-800 "></div>
      </div>
      <div>
        <ZItem
          heading="Creative Design"
          text="Explore a world of boundless imagination with my creative designs. As a passionate student of clothing design, I infuse each piece with originality and innovation. From whimsical patterns to daring silhouettes, my designs reflect a fresh perspective and a fearless approach to fashion."
          image={creativeImage}
          icon
          imageFirst={false}
        />
        <ZItem
          heading="Attention to Detail"
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={detailImage}
          icon
          imageFirst
        />
        <ZItem
          heading="Personal Style"
          text="Discover the unique essence of my personal style woven into every clothing design drawing. As a student of fashion, I embrace my individuality and express it through my distinct design aesthetic. Whether it's through vibrant color palettes, intricate embellishments, or unexpected design elements, my creations embody the essence of who I am as an artist."
          image={personalImage}
          icon
          imageFirst={false}
        />
      </div>
    </div>
  );
}

export default ZPattern;
