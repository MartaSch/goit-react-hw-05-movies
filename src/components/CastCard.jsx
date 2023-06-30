export const CastCard = ({ cast }) => {
  const { character, name, profile_path } = cast;
  return (
    <>
      <ul>
        <li>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'no poster'
            }
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      </ul>
    </>
  );
};
