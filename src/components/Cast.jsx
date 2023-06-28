import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsMovies } from 'services/api';
import { CastCard } from './CastCard';
export const Reviews = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [, setError] = useState(null);

  useEffect(() => {
    const getMoviesCast = async () => {
      try {
        const cast = await fetchCreditsMovies(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      }
    };
    getMoviesCast();
  }, [movieId]);

  return (
    <>
      <CastCard cast={cast} />
    </>
  );
};
