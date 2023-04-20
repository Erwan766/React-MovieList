import React from "react"; 
import "./navBar.css";
import { useLocation } from "react-router-dom";
import logo from "../../data/image/logo.png";

function NavBar() {

    const locate = useLocation();

    return (
        <div class="nav">
            
            <img class="png1" src={logo}/>

            <h1>Best Movies</h1>

            {locate.pathname ==="/" ? <h4>Retrouvez vos films préférés</h4> : null}
            
            { locate.pathname!="/" ? <a class="back" href="/">Retour à la liste</a> : null}

            <img class="png2" src={logo}/>

        </div>  
    );
}
 
export default NavBar;