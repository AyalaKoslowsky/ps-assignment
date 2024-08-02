import React from 'react';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    return (
      <div>
        <h2>{movie.title}</h2>
        <button onClick={() => onFavoriteToggle(movie)}>
          {favorites.some(fav => fav.episode_id === movie.episode_id) ? "Dislike" : "Like"}
        </button>
        <p><strong>Episode:</strong> {movie.episode_id}</p>
      </div>
    );
  }

export default MovieDetails;