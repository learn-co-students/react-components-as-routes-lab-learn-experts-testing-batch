import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>{
        return(
          <div key={index}>
          <h4>{actor.name}</h4>
          {actor.movies.map((movie)=>{
            return <p>{movie}</p>
          })}
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
