import React from 'react';
import blogHero from '../assets/Blog/blogHero.jpg';
import avatar from '../assets/Blog/avatar.png';
import ParaText from '../components/blog/ParaText';
function Blog() {
  return (
    <div className="mx-auto mb-10 mt-10 max-w-[80%]  md:max-w-[60%]">
      <h1 className="text-center text-xl font-black text-[#2C0707] md:text-2xl lg:text-3xl xl:text-4xl">
        Dans les coulisses : créer une illustration de mode
      </h1>
      <div className="mt-16 flex items-center gap-6">
        <img src={avatar} alt="Author avatar" className="w-16" />
        <div>
          <p className="text-xl font-bold">Nur Faitma</p>
          <p className="text-lg font-semibold">
            Publié: Avril 28, 2024 - 2 minutes de lecture
          </p>
        </div>
      </div>
      <img src={blogHero} alt="blog hero image" className="mt-8 w-full" />
      <div>
        <p className="mt-4 text-justify text-lg font-bold italic text-[#2C0707]">
          Bienvenue sur la première publication de mon blog! Aujourd'hui, je
          suis ravi de vous emmener derrière les scènes et partager le processus
          de création d'une de mes récentes créations de mode illustrations. En
          tant qu'aspirante illustratrice de mode, je suis passionnée de
          capturer la beauté et l'élégance des vêtements pour femmes à travers
          mon ouvrages d'art.
        </p>
        <ParaText
          heading="Inspiration"
          paragraph=" Chaque illustration commence par l'inspiration. Pour cette pièce, je
            me suis inspiré de la fluidité de la nature et du beauté délicate
            des fleurs en fleurs. Je voulais créer un design qui évoque un
            sentiment de beauté éthérée tout en incorporant des éléments de
            formes et de textures organiques."
        />
        <ParaText
          heading="Esquisse et développement de concepts"
          paragraph="Vient ensuite la phase de dessin. Je commence par esquisser les formes et les proportions de base, en me concentrant sur la capture de la silhouette générale et de l'ambiance du design. Lorsque je dessine, je porte une attention particulière à la fluidité du tissu et aux détails complexes des motifs floraux."
        />
      </div>
      <ParaText
        heading="Touches finales et présentation"
        paragraph="Les touches finales consistent à ajouter du polissage et du raffinement. Je revis l’illustration une dernière fois, peaufinant les détails et effectuant les ajustements nécessaires. Une fois satisfait du résultat, je monte soigneusement l'illustration et la prépare pour la présentation. Qu'il s'agisse de l'encadrer pour l'exposer ou de la photographier pour mon portfolio, je suis fier de présenter la pièce finie sous le meilleur jour possible."
      />
      <h2 className="text-xm my-16 border-l-4 border-stone-400 px-10  text-justify font-normal italic text-[#2c07078e]">
        "Chaque coup de pinceau raconte une histoire, chaque ligne sur la toile
        chuchote un secret. En tant qu'artiste créateur de dessins de vêtements
        pour filles, je tisse des rêves en réalité, créant des vêtements qui
        parlent de beauté, de grâce et des possibilités infinies du style" — Nur
        Fatima
      </h2>
      <h2 className="mt-4  text-justify font-medium  text-[#2C0707]">
        Et voilà un aperçu du processus créatif derrière l’une de mes
        illustrations de mode. J'espère que vous avez apprécié ce regard dans
        les coulisses et que vous avez acquis un aperçu du talent artistique et
        du savoir-faire qui entrent dans chacun de mes dessins. Restez à
        l'écoute pour d'autres articles de blog dans lesquels je continuerai à
        partager ma passion pour l'illustration de mode et la créativité !
      </h2>
    </div>
  );
}

export default Blog;
