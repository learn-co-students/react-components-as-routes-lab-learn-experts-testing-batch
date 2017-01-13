import React from 'react'
import { movies } from '../data'

const Movies = () => {
    return (
        <div>
            {/* code goes here */}
            <h1>Movies Page</h1>
            {movies.map((movie, index) => {
              return(
                <div key={index}>
                  <h3>Title: {movie.title}</h3>
                  <p>Time: {movie.time}</p>
                  <label>Genres:</label>
                  <ul>
                    {movie.genres.map((genre, i) => {
                      return <li key={i}>{genre}</li>
                    })}
                  </ul>
                  <p>Meta Score: {movie.metascore}</p>
                </div>
              )
            })}
        </div>
    )
}

module.exports = Movies
