import React, {useState} from 'react'

function Home(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;
  
  React.useEffect(() =>{
      window.addEventListener("resize", () => setWidth(window.innerWidth))
  })
   
    return <div class={width > breakpoint? "home":"home-mobile"}>
          <div class="col">
            <img src={require("./img/caddy1.jpg")} alt="side view"/>
            <img src={require("./img/caddy2.jpg")} alt="front view"/>
        </div>
        <div class="col">
            <h1> The 1975 Elderado Convertible</h1>
            <ul>
                <li>
                    500 Cubic Inch (That’s 8.2 liter, for you metric folks) 190HP engine
                </li>
                <li>
                    "Gossamer Blue Metallic Firemist" exterior 
                </li>
                <li>
                    "Light Antique Blue" interior
                </li>
                <li>
                    White Top
                </li>
                <li>
                    Power everything: top, windows, steering, 6-way power 50/50 seats with armrest,
                </li>
                <li>
                    Delco factory AM/FM 8-track deck
                </li>
                <li>
                    Class III towing package                
                </li>
                <li>
                    Obligatory fuzzy dice on rearview mirror                
                </li>
                <li>
                    Outside temperature gauge on drivers side mirror                
                </li>
                <li>
                    Vanity plates read "ELVIS 75"                
                </li>
                <li>
                    225 inches long                
                </li>
                <li>
                    126.3 inch wheelbase.                
                </li>
                <li>
                    Curb weight of 5,167 pounds (2,343 kg)               
                </li>
                <li>
                    One of 8950 produced.                
                </li>
            </ul>
            <h2> A car of superaltives</h2>
        </div>
      
    </div>
}

export default Home