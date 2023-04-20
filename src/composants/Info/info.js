import React from "react";
import filmsJson from "../../data/db.json";
import noImg from "../../data/image/no-movie.png"
import { useSearchParams } from "react-router-dom";
import "./info.css";

function Info(){

    const [id, setId]=useSearchParams();
    const film = filmsJson.movies[id.get("id")];

    console.log(id.get("id"));

return (

    <div class="content">    

        <p className="titleInfo" key={"title"}>{film.title}</p>

        <img className="imgInfo" src={film.posterUrl} 
        
        onError={(e) => {
        e.target.onerror = null; // Prevents an infinite loop of fallback images
        e.target.src = noImg;
                }} />

        <p className="year">{film.year}</p>

        <p className="plot">{film.plot}</p>

        <p className="genres">{film.genres+" "}</p>

        <p className="director">{film.director}</p>

        <p className="actor">{film.actors}</p>

    </div> 

);
}

export default Info;