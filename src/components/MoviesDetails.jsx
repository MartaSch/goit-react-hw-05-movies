import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { fetchDetailsMovies } from 'services/api';
import { MovieCard } from './MovieCards';
export const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const { id } = useParams();
  const [, setError] = useState(null);
  const location = useLocation();
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
    <div>
      <MovieCard moviesDetails={moviesDetails} />
      <ul>
        <li>
          <NavLink state={location.state} to="reviews">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink state={location.state} to="cast">
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
