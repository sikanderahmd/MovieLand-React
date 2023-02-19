import React from "react";



const Moviecard = (props) => {

    return (
        <div className="movie">
            <div>
                <p>{props.movie.Year}</p>
            </div>
            <div>
                <img src={props.movie.Poster} alt="movie poster" />
            </div>

            <div>
                <span>{props.movie.Type}</span>
                <h3>{props.movie.Title}</h3>
            </div>
        </div>
    )

}

export default Moviecard;