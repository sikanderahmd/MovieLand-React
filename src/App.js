import React from "react";
import { useEffect, useState } from 'react';
import './App.css';
import Moviecard from "./Moviecard.jsx";
import SearchIcon from './search.svg';


const api_url = 'http://www.omdbapi.com/?i=tt3896198&apikey=60d2893b'

const App = () => {

    //initialise an empty movie array name movieList
    //setMovies is a setter function that populates the movieList with movie objects
    const [movieList, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    //async function that fetches the movie data.
    const movies = async (title) => {
        const response = await fetch(`${api_url}&s=${title}`)

        if (response.ok) {
            console.log("Movies received")
            const data = await response.json()
            console.log(data)
            setMovies(data.Search);
        }
        else {
            console.log("movies not received")
        }
    }

    //get movie data at every reload;
    useEffect(() => {
        movies()
    }, [])

    return (
        <>
            <div className="app">
                <h1>Movie Land</h1>

                <div className="search">
                    <input placeholder='Search for Movies' type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                    <img src={SearchIcon} alt="Search button" onClick={() => movies(searchTerm)} />
                </div>

                <div className="container">
                    {movieList.map(movie => {
                        return <Moviecard movie = {movie} />
                    })}
                </div>
            </div>
        </>
    )
}


export default App;