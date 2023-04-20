import "./film.css"
import React from 'react';
import filmsJson from "../../data/db.json";
import noImg from "../../data/image/no-movie.png"

function Films (){

    const films = filmsJson.movies;

    return (
       <div class="conteneur">
            {films.map((film, index)=>{
                return(
                    <div class="cards">    
                        <a class="card" href={"/info?id="+ index}>

                            <h2 key={"title" + index}>{film.title}</h2>

                            <img src={film.posterUrl} 
                            
                            onError={(e) => {
                            e.target.onerror = null; // Prevents an infinite loop of fallback images
                            e.target.src = noImg;
                                    }} />

                            <p>{film.plot}</p>
                        </a>
                    </div> 
                )
            })}
       </div>
    );
}

export default Films; 