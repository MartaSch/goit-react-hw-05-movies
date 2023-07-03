import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovies } from 'services/api';
import { PropTypes } from 'prop-types';
import css from './Reviews.module.css';

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
      <ul className={css.ReviewsList}>
        {movieReviews && movieReviews.length ? (
          movieReviews?.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p className={css.AuthorName}>Author: {author}</p>
                <p className={css.Contect}>{content}</p>
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

Reviews.propTypes = {
  movieReviews: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
