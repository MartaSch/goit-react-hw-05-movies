import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { fetchDetailsMovies } from 'services/api';
import { MovieCard } from './MovieCards';

export const MoviesDetails = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const [, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        const movies = await fetchDetailsMovies(movieId);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    getMoviesDetails();
  }, [movieId]);
  return (
    <div>
      <MovieCard movie={movies} />
      <Link to="Reviews" state={location.state}>
        Reviews
      </Link>
      <Link to="Cast" state={location.state}>
        Cast
      </Link>
    </div>
  );
};
