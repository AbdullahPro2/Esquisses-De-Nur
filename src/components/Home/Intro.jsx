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
          Salut, <br /> Je suis Nour Ben Salah
        </h1>
        <p className="mx-auto text-center text-sm italic md:text-base  ">
          <br />
          Bienvenue sur ma page d'accueil de mon projet de devenir styliste de
          mode ! Je m'appelle Nour, je suis passionnée par l'univers de la mode
          depuis toujours. Je suis ravi de partager avec vous mon parcours et
          mon design. Mon amour pour la mode m'a conduit à explorer le demaine
          du design de mode et à exprimer ma créativité à travers des croquis et
          des concept de vêtement.
          <br />
          <br />
          En tant que debutante , Je suis pleinement consciente de la necessite
          d'apprendre et de développer mes compétences dans ce domaine
          passionnant. À travers mon art, mon objectif est de créer un avenir
          meilleur, où je pourrais fusionner mes talents artistiques avec ma
          connaissance en design.
          <br />
          <br />
          Joignez-vous à moi pour explorer l'harmonie dans l'art, ensemble,
          embarquons dans un voyage vers un monde plus beau et durable.
        </p>
        <ButtonP text="Explorez Ma Collection &rarr;" to="/portfolio" />
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
