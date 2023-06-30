import PropTypes from 'prop-types';

export const MovieCard = ({ moviesDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    moviesDetails;
  const releaseDate = new Date(release_date);
  const releaseYear = releaseDate.getFullYear();
  const userScore = Math.round((Number(vote_average) * 100) / 10);

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'no poster'
        }
        alt="{title}"
      />
      <h3>
        {title} {releaseYear}
      </h3>
      <p>User score: {userScore}%</p>
      <h5>
        Overview:
        <p>{overview}</p>
      </h5>
      <h5>Genres:</h5>
      <ul>
        <li>{genres?.map(({ name }) => name).join(' ')}</li>
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
    userScore: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
