import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsMovies } from 'services/api';
import { CastCard } from './CastCard';
import css from './Cast.module.css';
const Cast = () => {
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
      <ul className={css.CastList}>
        {casts.map(item => {
          return (
            <li className={css.CastListItem} key={item.id}>
              <CastCard cast={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
