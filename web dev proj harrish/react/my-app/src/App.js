// import React, { useState } from "react";
// import { useEffect } from "react";
// import './App.css'
// import MovieCard from "./MovieCard";

// //8d4ca90e
//  const API_URL='https://www.omdbapi.com/?i=tt3896198&apikey=8d4ca90e'
//  const movie1={
//     "Title": "Spiderman the Verse",
//     "Year": "2019",
//     "imdbID": "tt12122034",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
// }
// const App = () => {
//     const [movies,setMovies]=useState([]);
//     const searchMovies=async(title)=>{
//         const response=await fetch(`${API_URL}&s=${title}`)
//     const data=await response.json();
//    setMovies(data.Search);

// }

//     useEffect(()=>{searchMovies('Spiderman')})
//   return (
//     <div className="app"><h1>Movieland</h1>\
//     <div className="search">
//         <input placeholder="Serach for movies" value="superman" onChange={()=>{}}>
//             </input>
//             <img className="fa-fa-search" onClick={()=>{}}></img></div>
//             {
//                 movies?.length>0
//                 ?(
//                     <div className="container">

//                         {movies.map((movie)=>{<MovieCard movie1={movie}/>})}
//                     </div>
//                 ):(
//                     <div className="empty"><h2>No movies found</h2></div>
//                 )
//             }
//           </div>
//   )
// }

// export default App
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8d4ca90e";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src=""
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
