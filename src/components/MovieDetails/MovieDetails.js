import React from 'react';
// import './MovieDetails.css';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
  if (!movie) return null;

  const isFavorite = favorites.some(fav => fav.episode_id === movie.episode_id);

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p><strong>Episode:</strong> {movie.episode_id}</p>
      <button onClick={() => onFavoriteToggle(movie)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default MovieDetails;
