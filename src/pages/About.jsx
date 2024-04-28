import React from 'react';
import aboutHero from '../assets/About/hero.jpg';
import artist from '../assets/About/artist.jpg';
import Aos from 'aos';
function About() {
  Aos.init();
  Aos.refresh();
  return (
    <div className="mb-10">
      <div className="relative mx-auto  bg-[#c5b9fa] opacity-80 ">
        <img
          src={aboutHero}
          alt="About Me hero"
          className="mx-auto max-h-[60vh] "
        />
        <h1 className="absolute left-[10%] top-[35%]  text-2xl font-black uppercase italic  text-[#2C0707] md:text-5xl">
          Donc,
          <br /> qui <br /> suis_je ? <br />
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-4xl not-italic  md:text-9xl"
          >
            &darr;
          </span>
        </h1>
      </div>

      <div className="mt-10 flex flex-col justify-center   text-[#2C0707] md:mx-auto md:flex-row ">
        <img
          src={artist}
          alt="artist portrait"
          className="mx-4 rounded-t-2xl opacity-80 md:max-h-[700px] md:max-w-[50%]"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <div className="mx-4 mb-10 mt-4 md:max-w-[50%] lg:p-7 xl:p-10">
          <h2
            className="text-center text-lg font-black md:text-xl xl:text-2xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Je suis NUR FATIMA et je suis une artiste passionnée spécialisée
            dans les dessins de vêtements pour filles.
          </h2>
          <p
            className="text-center lg:text-lg "
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <br />
            Avec un amour pour la mode et un sens aiguisé du détail, je donne
            vie à ma vision unique à travers mes œuvres.À travers mes dessins et
            mes projets artistiques, je m'efforce de capturer la beauté du monde
            qui m'entoure et d'exprimer mes idées de manière visuelle.
            <br />
            <br />
            je dessine et explore le monde de la mode depuis 3 ans. Au fil des
            ans, j'ai affiné mes compétences grâce à la pratique, à
            l'expérimentation et à l'apprentissage continu. Mon portfolio
            présente une gamme diversifiée de dessins, chacun reflétant mon
            style évolutif et mon parcours créatif
            <br />
            <br />
            Mon objectif est de continuer à progresser en tant qu'artiste et
            d'élargir mes horizons artistiques. Je suis enthousiaste à l'idée
            d'explorer de nouvelles techniques, d'expérimenter avec différents
            médiums et de repousser les limites de ma créativité. En fin de
            compte, j'aspire à [mentionner vos aspirations artistiques à long
            terme ou vos objectifs de carrière].
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
