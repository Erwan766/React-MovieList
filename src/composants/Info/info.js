import React from "react";
import "./info.css";
import filmsJson from "../../data/db.json";
import noImg from "../../data/image/no-movie.png"
import { useSearchParams } from "react-router-dom";

function Info(){

    const [id, setId]=useSearchParams();
    const film = filmsJson.movies[id.get("id")];

    console.log(id.get("id"));

return (
    <div class="infos">
        <div class="content">    

        <h1 className="titleInfo" key={"title"}>{film.title}</h1>

        <img className="imgInfo" src={film.posterUrl} 
        
        onError={(e) => {
        e.target.onerror = null; // Prevents an infinite loop of fallback images
        e.target.src = noImg;
                }} />

        <h2>{film.year}</h2>
        <h3>{film.plot}</h3>
        <h4>{film.genres}</h4>
        <h4>{film.director}</h4>
        <h4>{film.actors}</h4>

    </div> 
</div>
);
}

export default Info;