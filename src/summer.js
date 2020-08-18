import React, {useState} from 'react'

function Summer(props) {
    const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;
  
    React.useEffect(() =>{
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    })

  return <div class={width > breakpoint? "home":"home-mobile"}>
    <div class="col" id="summer">
      <img src={require("./img/steve.jpg")} alt="side view"/>
      <img src={require("./img/mom-dad.jpg")} alt="front view"/>
      <img src={require("./img/dad-phil.jpg")} alt="front view"/>
  </div>
  <div class="col">
      <h1> The Summer of 1977 on The New Jersey Shore </h1>
      <ul>
          <li>
              Pinball
          </li>
          <li>
              Disco
          </li>
          <li>
                Pong
          </li>
        </ul>
      <h2> & The 1975 Elderado Convertible </h2>

      <p>
      My dad borrowed a cherry 1975 convertible from his doctor friend who was out of town for the summer.  We had a blast in it.  It had power everything: windows, locks, climate control, antenna and roof.  It had an 8 track stereo and a 40-channel CB radio.  This is back when CB was cool, mind you.  The gas mileage was an atrocious 10 mpg while the OPEC oil embargo was in full swing, pushing gas over $1/gallon for the first time ever.  Despite the prohibitive operational costs, we drove that baby.  And it was fun.  She was a real head turner.
    <br />
Yours truly at the tender age of 9 is in the back seat, and dad is on the CB.  "Breaker, breaker, this is 20-foot-caddy coming at you: wall-to-wall, and treetop-tall."  Note the magnetic-mount aftermarket CB antenna on the trunk lid.  
<br/>
I was hooked.  This was *the* car.  Someday I would own one.  Little did I know that I REALLY WOULD.... someday.
<br/>
It seems like the car color was "Lido Green Poly."  The source photos here are from 110 film and the prints are 24 years old.  The color needs help.  My photoshop-geek friends promise to try to retouch these photos for me someday.  
</p>



  </div>

</div>
}

export default Summer