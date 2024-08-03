import React from 'react';
import MovieItem from '@/components/MovieItem/MovieItem';
import './FavoritesList.css';

function FavoritesList({ favorites, onMovieSelect, onFavoriteToggle }) {
  if (favorites.length === 0) {
    return <p>No favorites added yet.</p>;
  }

  return (
    <div className="favorites-list">
      {favorites.map(movie => (
        <div key={movie.episode_id} className="favorite-item">
          <MovieItem movie={movie} onMovieSelect={onMovieSelect} />
          <button onClick={() => onFavoriteToggle(movie)}>Remove from Favorites</button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;