import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovies } from 'services/api';
export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();
  const [, setLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    const getMoviesReviews = async () => {
      setLoading(true);
      try {
        const { results } = await fetchReviewsMovies(id);
        setMovieReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMoviesReviews();
  }, [id]);

  return (
    <>
      <ul>
        {movieReviews && movieReviews.length ? (
          movieReviews?.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>No reviews for this movie</p>
        )}
      </ul>
    </>
  );
};
