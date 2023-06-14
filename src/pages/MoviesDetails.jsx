import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MoviesDetails = () => {
  const { moviesId } = useParams();

  return (
    <main>
      <section>
        <div>
          <MovieInfo moviesId={moviesId}>Information about movie</MovieInfo>
          <div>
            <NavLink to="reviews">Reviews</NavLink>
          </div>
          <Suspense fallback={<div>Is loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </section>
    </main>
  );
};
export default MoviesDetails;
