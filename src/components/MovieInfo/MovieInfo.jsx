import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getMovieById } from 'utils/api';

const MovieInfo = ({ moviesId }) => {
  const [movieById, setMovieById] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(moviesId).then(movie => setMovieById(movie));
  }, [moviesId]);
  return (
    <>
      <NavLink to={backLinkLocationRef.current}>Back</NavLink>
      {movieById && <MovieCard movie={movieById}></MovieCard>}
    </>
  );
};
export default MovieInfo;
