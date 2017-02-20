import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index)=>{
        return(
            <div key={index}>
            <h3>{movie.title}</h3>
            <h4>Length: {movie.time}</h4>

            {movie.genres.map((genre)=>{
              return <p>{genre}</p>
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Movies;
