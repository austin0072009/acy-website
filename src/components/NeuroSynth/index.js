// ——————————————————————————————————————————————————
// Dependencies
// ——————————————————————————————————————————————————

import { autoDetectRenderer } from 'pixi.js';
import Config from './config';
import Brain from './scene/brain';
import GUI from './ui/gui';

// ——————————————————————————————————————————————————
// Bootstrap
// ——————————————————————————————————————————————————

const NeuroSynth = () => {
  
  let clock, dt;
  //  const gui = new GUI();
  const width = window.innerWidth* 0.8;
  const height = window.innerHeight* 0.8;
  // const width = 887;
  // const height = 1920;
  const brain = new Brain(width, height);
  const renderer = new autoDetectRenderer(width, height, {
    backgroundColor: Config.colors.background,
    resolution: window.devicePixelRatio || 1,
    antialias: true
  });
  const update = (ellapsed) => {
    requestAnimationFrame(update);
    dt = Math.min(100, ellapsed - clock || 0);
    clock = ellapsed;
    brain.update(dt);
    renderer.render(brain);
  };
  const resize = () => {
    const width = window.innerWidth* 0.8;
    const height = window.innerHeight* 0.8;
    // const width = 887;
    // const height = 1920;
    renderer.view.style.height = height + 'px';
    renderer.view.style.width = width + 'px';
    renderer.resize(width, height);
    brain.resize(width, height);
  };

  window.onload = () => {
  const element = document.getElementById("Neuro");
  element.appendChild(renderer.view);
  // document.body.appendChild(renderer.view);
  }


  window.addEventListener('resize', resize);
  resize();
  update();
};

// if (document.readyState === 'complete') init();
// else window.addEventListener('click', init);

// if (document.readyState === 'complete') NeuroSynth();
// else window.addEventListener('load', NeuroSynth());

export default NeuroSynth;