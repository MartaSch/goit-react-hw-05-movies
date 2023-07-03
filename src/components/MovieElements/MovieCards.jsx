import PropTypes from 'prop-types';
import css from './MovieCards.module.css';
export const MovieCard = ({ moviesDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    moviesDetails;
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear();
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <section className={css.MovieCardContainer}>
      <img
        className={css.Poster}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'no poster'
        }
        alt="{title}"
      />
      <div className={css.MovieInformation}>
        <h3 className={css.MovieYearTitle}>
          {title} ({releaseYear})
        </h3>
        <p className={css.UserScore}>User score: {userScore}%</p>
        <h5 className={css.Title}>Overview:</h5>
        <p className={css.Text}>{overview}</p>
        <h5 className={css.Title}>Genres:</h5>
        <ul className={css.List}>
          <li className={css.Text}>
            {genres?.map(({ name }) => name).join(', ')}
          </li>
        </ul>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
    vote_average: PropTypes.number.isRequired,
    userScore: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
