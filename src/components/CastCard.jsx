import PropTypes from 'prop-types';

const IMAGEURL = 'https://image.tmdb.org/t/p/w500/';
export const CastCard = ({ cast }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <ul>
        <li>
          <img src={`${IMAGEURL}${profile_path}`} alt={name} />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      </ul>
    </>
  );
};
CastCard.propTypes = {
  cast: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string,
    name: PropTypes.string,
  }),
};
