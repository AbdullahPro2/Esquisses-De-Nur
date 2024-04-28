import React, { useEffect } from 'react';
import artist from '../../assets/Home/artist.jpg';
import ButtonP from '../buttons/ButtonP';
import Aos from 'aos';
function Intro() {
  // Aos.init();
  // Aos.refresh();
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <section className="flex flex-col gap-12 lg:flex-row">
      <div
        className="align-center order-2 flex flex-col justify-center  lg:order-1 "
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h1 className="text-center text-3xl font-bold italic text-stone-700  lg:text-5xl ">
          Salut, <br /> Je suis Nur Fatima
        </h1>
        <p className="mx-auto text-center text-sm italic md:text-base  ">
          <br />
          Bienvenue sur ma page d'accueil ! Je m'appelle Nur, une artiste
          profondément connectée à la nature et à un style de vie naturel. Ici,
          vous trouverez mon parcours créatif, où je suis constamment en
          apprentissage, en expérimentation et en puisant l'inspiration dans le
          monde qui m'entoure.
          <br />
          <br />
          Dans mon travail, je m'efforce de voir la beauté dans l'ordinaire,
          célébrant la magie de la vie quotidienne. À travers mon art, mon
          objectif est de créer un avenir meilleur, où l'appréciation de la
          nature et des joies simples qu'elle offre est centrale.
          <br />
          <br />
          Joignez-vous à moi pour explorer l'harmonie entre l'art et la nature,
          et ensemble, embarquons dans un voyage vers un monde plus beau et
          durable.
        </p>
        <ButtonP text="Entrer en contact &rarr;" to="/contact" />
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
