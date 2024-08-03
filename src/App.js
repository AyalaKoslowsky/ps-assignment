import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import FavoritesList from '@/components/FavoritesList/FavoritesList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import './App.css';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <img src="./home.png" alt="home" className="home-image"/>
      <MovieList onMovieSelect={handleMovieSelect} />
      <MovieDetails
        movie={selectedMovie}
        favorites={favorites}
        onFavoriteToggle={handleFavorite}
      />
      <h2>Favorites</h2>
      <FavoritesList 
        favorites={favorites} 
        onMovieSelect={handleMovieSelect} 
        onFavoriteToggle={handleFavorite}
      />
    </div>
  );
}

export default App;