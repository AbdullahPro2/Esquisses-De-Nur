import React from 'react';

import aboutHero from '../assets/About/hero.jpg';
function About() {
  return (
    <div>
      <div className="container mx-auto border-2 ">
        <img src={aboutHero} alt="About Me hero" className=" mx-auto" />
      </div>
    </div>
  );
}

export default About;
