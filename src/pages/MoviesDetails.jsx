import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { fetchDetailsMovies } from 'services/api';
import { MovieCard } from '../components/MovieElements/MovieCards';
import css from './MoviesDetails.module.css';
export const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const { id } = useParams();
  const [, setError] = useState(null);
  const location = useLocation();
  const back = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        const moviesDetails = await fetchDetailsMovies(id);
        setMoviesDetails(moviesDetails);
      } catch (error) {
        setError(error.message);
      }
    };
    getMoviesDetails();
  }, [id]);

  return (
    <div className={css.MoviesDetailsContainer}>
      <button className={css.ButtonBack} type="button">
        <Link className={css.TextButton} to={back.current}>
          Go back
        </Link>
      </button>
      <MovieCard moviesDetails={moviesDetails} />
      <ul className={css.LinkList}>
        <li className={css.LinkReviewsCastItem}>
          <NavLink
            className={css.LinkReviewsCast}
            state={location.state}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            className={css.LinkReviewsCast}
            state={location.state}
            to="cast"
          >
            Cast
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
