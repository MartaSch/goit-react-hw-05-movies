import { PropTypes } from 'prop-types';
const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';

export const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genre_ids,
  } = movie;
  const releaseDate = release_date;
  //const movieGenres = genres.map(item => item.name).join(' ');
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  return (
    <div>
      <img src={`${IMAGEURL}${poster_path}`} alt="{title}" />
      <h3>
        {title} {releaseDate}
      </h3>
      <p>User score: {userScore}%</p>
      <h5>
        Overview:
        <p>{overview}</p>
      </h5>
      <h5>
        Genres:
        <p>{genre_ids}</p>
      </h5>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};
