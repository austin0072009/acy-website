
import "./style.css"
import { useState } from "react";
import { SpaceLoader } from ".";
import HappyFarm from "./HappyFarm";


const DualSlidingPanel2 = () => {



    return(
    
    <div class="overflow">
    <section class="panels2">
      <article class="panels2__side panels2__side--left">
        <div class="panels2__side panels2__side--inner-left">
          {/* <p>"Changes and progress very rarely are gifts from above. They come out of struggles from below."</p> */}
          <SpaceLoader></SpaceLoader>
        </div>
        <div class="panels2__side panels2__side--inner flex-col">
          <h1 class="panels2__headline">Crypto Traders</h1>  
          <p>Enable traders to get the optimal output</p>    
          <svg class="arrow arrow--left" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24h-24z" fill="none"/><path d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z"/></svg>
          
        </div>
      </article>
      <article class="panels2__side panels2__side--right">
        <div class="panels2__side panels2__side--inner flex-col">
          <h1 class="panels2__headline">Liquidity Provider</h1>
          <p>Enable LPs to earn more transaction fees</p>
          <svg class="arrow arrow--right" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24h-24z" fill="none"/><path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z"/></svg>
        </div>
        <div class="panels2__side panels2__side--inner-right">
          {/* <p>"The biggest benefit of Apollo was the inspiration it gave to a growing generation to get into science and aerospace."</p> */}
          <HappyFarm></HappyFarm>
              </div>
      </article>
    </section>
  </div>
  
  )
}

export default DualSlidingPanel2;