import React from 'react'
import { directors } from '../data'

const Directors = () => {
    return (
        <div>
            {/* code goes here */}
            <h1>Directors Page</h1>
            {directors.map((director, key) => {
              return(<div key={key}>
                <h3>{director.name}</h3>
                <label>Movies:</label>
                <ul>
                {director.movies.map((movie, i) => {
                  return <li key={i}>{movie}</li>
                })}
                </ul>
              </div>)
            })}
        </div>
    )
}

module.exports = Directors
