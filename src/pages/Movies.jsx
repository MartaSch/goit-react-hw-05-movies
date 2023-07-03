import { SearchInput } from 'components/SearchInput/SearchInput';
import { MovieList } from 'components/MovieElements/MovieList';
import { useState, useEffect } from 'react';
import { fetchSerchingMovies } from 'services/api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [, setError] = useState(null);

  const handleSubmitSearch = newQuery => {
    if (newQuery.trim() === '') {
      alert('Please, fill in the search field!');
      return;
    }
    setQuery(newQuery);
    setMovies([]);
  };

  useEffect(() => {
    const getSearchingMovies = async () => {
      try {
        const movies = await fetchSerchingMovies(query);
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      }
    };
    getSearchingMovies();
  }, [query]);

  return (
    <>
      <SearchInput query={query} onSubmit={handleSubmitSearch} />
      <MovieList moviesList={movies} />
    </>
  );
};
