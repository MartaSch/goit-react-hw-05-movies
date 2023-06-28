import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <>
      <h3>{'Something went wrong...'}</h3>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </>
  );
};
