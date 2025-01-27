import React from "react";
import { useEffect, useState } from "react";

import './App.css';
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";


//514fe5c6

 const API_URL = 'http://www.omdbapi.com/?apikey=514fe5c6';


const App = () => {
    const [movies, setMovies] = useState ([]);
    const [ searchTerm, setSearchTerm ] = useState ("");

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`); //this calls the API
        const data = await response.json(); //this fetches the data from the response
        
        setMovies(data.Search);
    }

    useEffect (() => {
        searchMovies('Superman');
    }, []);

    return(
        <div className="app">
            <h1>MovieHub</h1>


            <div className="search">
                <input 
                    placeholder="Search for Movies"
                    value= {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                
                />

                <img 
                    src= {searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            { movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie= {movie} />
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )}
        </div>
    );
            
};

           
        
    


export default App;