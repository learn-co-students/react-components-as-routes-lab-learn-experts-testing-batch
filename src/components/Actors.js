import React from 'react'
import { actors } from '../data'

const Actors = () => {
    return (
        <div>
            {/* code goes here */}
            <h1>Actors Page</h1>
            {actors.map((actor, key) => {
              return(<div key={key}>
                <h3>{actor.name}</h3>
                <label>Movies:</label>
                <ul>
                {actor.movies.map((movie, i) => {
                  return <li key={i}>{movie}</li>
                })}
                </ul>
              </div>)
            })}
        </div>
    )
}

module.exports = Actors
