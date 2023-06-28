import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ moviesList }) => {
  const location = useLocation();
  const allPath = location.pathname + location.search;
  return (
    <>
      <ul>
        {moviesList.map(({ title, id }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: allPath }}>
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
