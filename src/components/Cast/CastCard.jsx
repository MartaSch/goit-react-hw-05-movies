import css from './CastCard.module.css';
import { PropTypes } from 'prop-types';
export const CastCard = ({ cast }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <img
        className={css.ProfileImage}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : 'no poster'
        }
        alt={name}
      />
      <p className={css.ActorName}>{name}</p>
      <p className={css.CharacterName}>Character: {character}</p>
    </>
  );
};

CastCard.propTypes = {
  cast: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
