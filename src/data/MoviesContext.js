import React, { createContext, useState, useContext } from 'react';
import { movies as initialMovies } from './Movies';

// Creamos el contexto
const MoviesContext = createContext();

// Proveedor del contexto
export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialMovies);

  // Funciones para gestionar películas
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(
      movies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  };

  const deleteMovie = (movieId) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  // Funciones para gestionar reseñas
  const addReview = (movieId, review) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              reviews: movie.reviews ? [...movie.reviews, review] : [review],
            }
          : movie
      );
      console.log('Películas actualizadas (addReview):', updatedMovies);
      return updatedMovies;
    });
  };

  const updateReview = (movieId, reviewIndex, updatedReview) => {
    setMovies(
      movies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              reviews: movie.reviews.map((review, index) =>
                index === reviewIndex ? updatedReview : review
              ),
            }
          : movie
      )
    );
  };

  const deleteReview = (movieId, reviewIndex) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              reviews: movie.reviews.filter((_, index) => index !== reviewIndex),
            }
          : movie
      );
      console.log('Películas actualizadas (deleteReview):', updatedMovies);
      return updatedMovies;
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addMovie,
        updateMovie,
        deleteMovie,
        addReview,
        updateReview,
        deleteReview,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

// Este hook permite acceder al contexto de películas en cualquier componente
// que este envuelto por el proveedor de contexto
export const useMovies = () => useContext(MoviesContext);