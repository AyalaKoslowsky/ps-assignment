import React from 'react';
import './MovieItem.css';

function MovieItem({ movie, onMovieSelect }) {
  return (
    <div key={movie.episode_id}>
      <button onClick={() => onMovieSelect()} className="movie-image">
        <img src={`./${movie.title}.png`} alt={movie.title} />
      </button>
    </div>
  );
}

export default MovieItem;