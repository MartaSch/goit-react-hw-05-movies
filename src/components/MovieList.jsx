import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ moviesList }) => {
  const location = useLocation();
  const fullPath = location.pathname + location.movies;
  return (
    <>
      <ul>
        {moviesList.map(({ title, id }) => (
          <li key={id}>
            <Link
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
  moviesList: PropTypes.array,
};
