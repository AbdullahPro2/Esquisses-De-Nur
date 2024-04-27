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
          Philosophie Derrière Mes Créations
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 bg-stone-800 "></div>
      </div>
      <div>
        <ZItem
          heading="Conception Créative"
          text="Explorez un monde d'imagination sans limites avec mes créations originales. En tant qu'étudiant passionné en design vestimentaire, j'insuffle à chaque pièce de l'originalité et de l'innovation. Des motifs fantaisistes aux silhouettes audacieuses, mes créations reflètent une perspective fraîche et une approche intrépide de la mode."
          image={creativeImage}
          icon
          imageFirst={false}
        />
        <ZItem
          heading="Attention aux Détails"
          text="Découvrez le travail méticuleux derrière chacun de mes dessins de design vestimentaire. Avec un œil attentif pour les détails, je rends méticuleusement chaque point, pli et texture de tissu à la perfection. Grâce à une observation minutieuse et une précision, je m'assure que chaque aspect de mes créations respire la qualité et le raffinement."
          image={detailImage}
          icon
          imageFirst
        />
        <ZItem
          heading="Style Personnel"
          text="Découvrez l'essence unique de mon style personnel tissée dans chaque dessin de design vestimentaire. En tant qu'étudiant en mode, j'embrasse mon individualité et l'exprime à travers mon esthétique de design distincte. Que ce soit à travers des palettes de couleurs vibrantes, des embellissements complexes ou des éléments de design inattendus, mes créations incarnent l'essence de qui je suis en tant qu'artiste."
          image={personalImage}
          icon
          imageFirst={false}
        />
      </div>
    </div>
  );
}

export default ZPattern;
