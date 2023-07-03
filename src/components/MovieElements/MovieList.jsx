import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ moviesList }) => {
  const location = useLocation();
  const fullPath = location.pathname + location.movies;
  return (
    <>
      <ul className={css.MovieList}>
        {moviesList.map(({ title, id }) => (
          <li key={id}>
            <Link
              className={css.MovieListItem}
              to={{
                pathname: `/movies/${id}`,
                state: { fullPath },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};
