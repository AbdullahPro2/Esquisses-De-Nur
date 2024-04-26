import React from 'react';
import Intro from '../components/Home/Intro';
import ZPattern from '../components/Home/ZPattern';
import Featured from '../components/Home/Featured';

function Home() {
  return (
    <div className="mx-auto mt-24 w-[70%]">
      <Intro />
      <ZPattern />
      <Featured />
    </div>
  );
}

export default Home;
