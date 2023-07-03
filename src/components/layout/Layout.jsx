import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
export const Layout = () => {
  return (
    <>
      <nav>
        <Link className={css.NavigationLinks} to="/">
          Home
        </Link>
        <Link className={css.NavigationLinks} to="/movies">
          Movies
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
