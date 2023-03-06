import React, { useState, useEffect } from "react";
//  247c4828
import './App.css';
import SearchIcons from './search.svg';

import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=247c4828";


const movie1 = {
  "Poster": 
"N/A",
"Title":"Batman v Superman: Dawn of Justice",
"Type": "movie",
"Year": "2016",
"imdbID": "tt2975590"
}


const App = () =>{
  
 const [movies,setMovies] = useState([]);
 const [searchTerm,setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

 useEffect(() =>{
  searchMovies('batman')
 },[])


    return (
   <div className="app">
    <h1>MoiveHub</h1>

    <div className="search">
    <input placeholder="Search for the Moive "
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />

    <img src={SearchIcons}
    onClick={() => searchMovies(searchTerm)}
    alt="search"/>
    </div>
  {
    movies?.length >0
    ?(
   <div className="container">
    {movies.map((movie) =>(
      <MovieCard movie = {movie}/>
    ))}
   </div>
    ):(
      <div className="empty">
  <h2>No movies found</h2>
        </div>
    )
  }


    </div>
    );
};

export default App;

