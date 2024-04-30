import React from 'react';
import PortfolioItem from '../components/Portfolio/PortfolioItem';
import photo_1 from '../assets/Portfolio/photo_1.jpg';
import photo_2 from '../assets/Portfolio/photo_2.jpg';
import photo_3 from '../assets/Portfolio/photo_3.jpg';
import photo_4 from '../assets/Portfolio/photo_4.jpg';
import photo_5 from '../assets/Portfolio/photo_5.jpg';
import photo_6 from '../assets/Portfolio/photo_6.jpg';
import photo_7 from '../assets/Portfolio/photo_7.jpg';
import photo_8 from '../assets/Portfolio/photo_8.jpg';
import photo_9 from '../assets/Portfolio/photo_9.jpg';
import photo_10 from '../assets/Portfolio/photo_10.jpg';
import photo_11 from '../assets/Portfolio/photo_11.jpg';

function Portfolio() {
  return (
    <div className="mb-10 mt-20  ">
      <div>
        <h1
          className=" px-1 text-center text-xl font-semibold text-stone-700 md:flex-row md:text-2xl lg:px-12 lg:text-3xl xl:text-4xl xl:font-bold
        "
        >
          Portfolio
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-stone-800 "></div>
      </div>
      <div className="container mx-auto mt-10  columns-2 lg:columns-3 xl:columns-4">
        <div>
          <PortfolioItem
            text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement.
"
            image={photo_1}
            heading="Aesthetic Coban Skirt"
          />
        </div>
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_2}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_3}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_4}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_5}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_6}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_7}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement"
          image={photo_8}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement"
          image={photo_9}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_10}
          heading="Aesthetic Coban Skirt"
        />
        <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_11}
          heading="Aesthetic Coban Skirt"
        />
        {/* <PortfolioItem
          text="Experience the meticulous craftsmanship behind each of my clothing design drawings. With a keen eye for detail, I meticulously render every stitch, fold, and fabric texture to perfection. Through careful observation and precision, I ensure that every aspect of my designs exudes quality and refinement."
          image={photo_12}
          heading="Aesthetic Coban Skirt"
        /> */}
      </div>
    </div>
  );
}

export default Portfolio;
