import React, {useState } from 'react'
import './App.css';
import Home from "./home"
import How from "./how"
import Cruise from "./cruise"
import Guide from "./guide"
import Noel from "./noel"
import Summer from "./summer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
       <Router>
      <Navvy/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/how">
          <How />
        </Route>  
        <Route path="/summer">
          <Summer />
        </Route>    
        <Route path="/cruise">
          <Cruise />
        </Route>    
        <Route path="/guides">
          <Guide />
        </Route>   
        <Route path="/noel">
          <Noel />
        </Route> 
      </Switch>
      </Router>
    
      </div>
  );
}


function Navvy(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;
  
  React.useEffect(() =>{
      window.addEventListener("resize", () => setWidth(window.innerWidth))
  })
  return width > breakpoint ? <DesktopNav /> : <MobileNav />
}

function DesktopNav(props) {

  return(
      <header class="row">
         <Link to="/"> <img src={require("./logo.png")} alt="elvis75 liscense plate" />  </Link>
          <div id="links">
              <Link to="/how"> How and Why </ Link>
              <Link to="/cruise"> Cruise Reports </Link>
              <Link to="/guides"> Survival Guides </Link>
              <Link to="/summer"> Summer of 1977</Link>
              <Link to="/noel" > Noelderado </Link>
          </div>
          
      </header>);
}

function MobileNav(props) {
  const[active, setActive] = useState(false);
  const setactive = () => setActive(true);
  const nonactive = () => setActive(false);
  return(
      <>
       <header class={active? "column" : "row"}>
       <div  id="tops"><Link to="/" > <img onClick={()=>{setActive(false);}} src={require("./logo.png")} alt="elvis75 liscense plate" /></Link>
  <div id="links">
     <img  src={active? require("./x.png") :require("./menu.png")} alt= "hamburger menu icon" onClick={
          active?nonactive:setactive
      }/>
      </div>
      
  </div>
  <div id="responsive-links" className={active?"open": "closed"}>
              <Link to="/how" onClick={()=>{setActive(false)}}> How and Why </ Link>
              <Link to="/cruise" onClick={()=>{setActive(false)}}> Cruise Reports </Link>
              <Link to="/guides"  onClick={()=>{setActive(false)}}> Survival Guides </Link>
              <Link to="/summer"  onClick={()=>{setActive(false)}}> Summer of 1977</Link>
              <Link to="/noel"   onClick={()=>{setActive(false)}}> Noelderado </Link>
      </div>
  </header>
 
      </>);
}
export default App;