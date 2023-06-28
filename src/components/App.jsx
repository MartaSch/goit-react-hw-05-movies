import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('./pages/Home'));
const MoviesDetails = lazy(() => import('./MoviesDetails'));
const MoviesSearch = lazy(() => import('./pages/Movies'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));
const NotFound = lazy(() => import('./NotFound'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
