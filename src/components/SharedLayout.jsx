import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
export const SharedLayout = () => {
  <>
    <nav>
      <Link to="/goit-react-hw-05-movies/" end>
        Home
      </Link>
      <Link to="movies">Movies</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </>;
};
