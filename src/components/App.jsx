import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Table'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
