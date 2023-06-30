import { MovieList } from 'components/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <MovieList moviesList={movies} loading={loading} />
    </>
  );
};
