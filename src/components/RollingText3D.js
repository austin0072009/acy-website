
import "./RollingText3D.css"
import "./RollingText.css";
import $ from "jquery";

import { useEffect } from "react";


const RollingText3D = ()=> {

useEffect(() => {

  let increment = 0;
  const carousel = $('#carousel');
  
  setInterval(() => {
    increment++;
    carousel.css({
      '-webkit-transform': 'rotateX(' + (increment * -60) + 'deg)'
    })
    carousel.attr('data-state', (increment % 6) + 1);
  }, 2000)},[])





    return(
        




<div className="main rolling-title flex flex-col font-bold rolling-text">
			<h1 className="">ACY PROTOCOL</h1>
			<h2>The Most Profitable Decentralized Crypto Trading Protocol</h2>
      <div className = 'roller'>
        <div id="carousel-wrapper">
        <div id="carousel" data-state="1" style={ {transform: "rotateX(0deg)"} }>
          {/* <figure className="orange text-white capitalize md:uppercase">Optimal Output <span className = "smalllabel" >IN EXCHANGE</span> </figure>
					<figure className="green text-white capitalize md:uppercase">Extra Income <span className = "smalllabel" >IN LIQUIDITY</span> </figure>
					<figure className="blue text-white capitalize md:uppercase">Stable Return <span className = "smalllabel" >IN FARM</span></figure>
          <figure className="orange text-white capitalize md:uppercase">Optimal Output <span className = "smalllabel" >IN EXCHANGE</span> </figure>
					<figure className="green text-white capitalize md:uppercase">Extra Income <span className = "smalllabel" >IN LIQUIDITY</span></figure>
          <figure className="red text-white capitalize md:uppercase">Amazing Profit <span className = "smalllabel" >IN LAUNCH</span></figure> */}

          <figure className="orange text-white capitalize md:uppercase">Optimal Output
           {/* <span className = "smalllabel" >IN EXCHANGE</span>  */}
           </figure>
					<figure className="green text-white capitalize md:uppercase">Extra Income
           {/* <span className = "smalllabel" >IN LIQUIDITY</span> */}
            </figure>
					<figure className="blue text-white capitalize md:uppercase">Stable Return
           {/* <span className = "smalllabel" >IN FARM</span> */}
           </figure>
          <figure className="orange text-white capitalize md:uppercase">Optimal Output
           {/* <span className = "smalllabel" >IN EXCHANGE</span> */}
            </figure>
					<figure className="green text-white capitalize md:uppercase">Extra Income
           {/* <span className = "smalllabel" >IN LIQUIDITY</span> */}
           </figure>
          <figure className="red text-white capitalize md:uppercase">Amazing Profit
          {/* Amazing Profit <span className = "smalllabel" >IN LAUNCH</span> */}
          </figure>

        </div>
      </div>
      </div>
		</div>
    )
}


export default RollingText3D;