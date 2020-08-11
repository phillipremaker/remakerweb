import React, { useState } from 'react';
import Hamburger from 'react-hamburgers';

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
        <header>
            <img src={require("./logo.png")} alt="elvis75 liscense plate" />
            <div id="links">
                <p> How and Why </p>
                <p> Cruise Reports </p>
                <p> Survival Guides </p>
                <p> Summer of 1977</p>
                <p> Noelderado </p>
            </div>
        </header>);
}

function MobileNav(props) {
    const[active, setActive] = useState(false);
    const setactive = () => setActive(true);
    const nonactive = () => setActive(false);
    return(
        <>
         <header>
    <img src={require("./logo.png")} alt="elvis75 liscense plate" />
    <div id="links">
        <img src={active? require("./x.png") :require("./menu.png")} alt= "hamburger menu icon" onClick={
            active?nonactive:setactive
        }/>
        
    </div>
    </header>
    <div id="responsive-links" className={active?"open": "closed"}>
        <p> How and Why </p>
                <p> Cruise Reports </p>
                <p> Survival Guides </p>
                <p> Summer of 1977</p>
                <p> Noelderado </p>
        </div>
        </>);
}

export default Navvy;