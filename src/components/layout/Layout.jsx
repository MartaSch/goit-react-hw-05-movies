import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
const Layout = () => {
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

export default Layout;
