import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsMovies } from 'services/api';
import { CastCard } from './CastCard';
export const Cast = () => {
  const [casts, setCast] = useState([]);
  const { id } = useParams();
  const [, setError] = useState(null);

  useEffect(() => {
    const getMoviesCast = async () => {
      try {
        const { cast } = await fetchCreditsMovies(id);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      }
    };
    getMoviesCast();
  }, [id]);

  return (
    <>
      <ul>
        {casts.map(item => {
          return (
            <li key={item.id}>
              <CastCard cast={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
