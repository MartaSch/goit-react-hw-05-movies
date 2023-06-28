import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovies } from 'services/api';
export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    const getMoviesReviews = async () => {
      setLoading(true);
      try {
        const reviews = await fetchReviewsMovies(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMoviesReviews();
  }, [movieId]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {reviews.length > 0 &&
            reviews.map(({ id, author, content }) => (
              <div key={id}>
                <p>Author: {author}</p>
                <p>"{content}"</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
