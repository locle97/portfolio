import { useState, useEffect, useMemo } from 'react';
import React from "react";

import AnimatedCursor from "react-animated-cursor"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { particlesOptions } from './config';

import MainApp from './MainApp';
import './App.css'

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => { };

  const options = useMemo(
    () => (particlesOptions.dots),
    [],
  );

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        color='0, 0, 0'
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#333'
        }}
        outerStyle={{
          border: '3px solid #333'
        }} />
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options} />
      <MainApp />
    </>
  )
}

export default App;
