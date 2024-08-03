import React from 'react';
import './MovieItem.css';

function MovieItem({ movie, onMovieSelect }) {
  const handleClick = () => {
    console.log('Movie Clicked:', movie);
    onMovieSelect(movie);
  };

  return (
    <div className="movie-item">
      <button onClick={handleClick}>
        <img src={`./${movie.title}.png`} alt={movie.title} className="movie-image"/>
      </button>
    </div>
  );
}

export default MovieItem;
