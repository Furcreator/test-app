import noPoster from '../../images/noPhoto.png';

const MovieCard = ({ movie }) => {
  const { genres, overview, original_title, vote_average, poster_path } = movie;
  const score = Math.round(vote_average * 10);
  const genresOfMovie = genres.map(item => item.name);
  let posterPath = noPoster;
  if (poster_path) {
    posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  return (
    <div>
      <img src={posterPath} alt="poster-film" />
      <div>
        <h1>{original_title}</h1>
        <p>User Score: {score}% </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genresOfMovie.join(', ')}</p>
      </div>
    </div>
  );
};
export default MovieCard;
