import React from 'react';
import artist from '../../assets/Home/artist.jpg';
import ButtonP from '../buttons/ButtonP';
import Aos from 'aos';
function Intro() {
  Aos.init();
  Aos.refresh();
  return (
    <section className="flex flex-col gap-12 lg:flex-row">
      <div
        className="align-center order-2 flex flex-col justify-center  lg:order-1 "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="text-center text-3xl font-bold italic text-stone-700  lg:text-5xl ">
          Hi, <br /> i'am Nur Fatima
        </h1>
        <p className="mx-auto text-center text-sm italic md:text-base  ">
          <br />
          Welcome to my homepage! I'm Nur, an artist deeply connected to nature
          and a natural lifestyle. Here, you'll find my creative journey, where
          l'm constantly learning, experimenting, and drawing inspiration from
          the world around me.
          <br />
          <br />
          In my work, I strive to see beauty in the ordinary, celebrating the
          magic of everyday life. Through my art, I aim torreate a better
          future, one where appreciation for nature and the simple joys it
          offers is central.
          <br />
          <br />
          Join me as t explore the harmony between art and nature, and together,
          let's embark on a journey towards a more beautiful and sustainable
          world.
        </p>
        <ButtonP text="Get in touch &rarr;" to="/EsquissesDeNur/contact" />
      </div>
      <img
        src={artist}
        alt="artist"
        className="mx-auto md:w-[70%] lg:order-1 lg:h-[600px] lg:w-[100%] "
        data-aos="fade-left"
        data-aos-duration="2000"
      />
    </section>
  );
}

export default Intro;
