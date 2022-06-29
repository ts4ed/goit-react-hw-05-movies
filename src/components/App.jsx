import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading } from './Loading/Loading';

const Home = lazy(() =>
  import('./Home/Home' /* webpackChunkName: "home-page" */)
);

const Movies = lazy(() =>
  import('./Movies/Movies' /* webpackChunkName: "movies-page" */)
);

const NavLinks = lazy(() =>
  import('./NavLinks/NavLinks' /* webpackChunkName: "navLinks-page" */)
);
const NotFounder = lazy(() =>
  import('./NotFounder/NotFounder' /* webpackChunkName: "notFound-page" */)
);

const MovieDetails = lazy(() =>
  import(
    './MovieDetails/MovieDetails' /* webpackChunkName: "movieDetails-page" */
  )
);

const MovieDetailsCast = lazy(() =>
  import(
    './MovieDetailsCast/MovieDetailsCast' /* webpackChunkName: "movieDetailsCast-page" */
  )
);
const MovieDetailsReviews = lazy(() =>
  import(
    './MovieDetailsReviews/MovieDetailsReviews' /* webpackChunkName: "movieDetailsReviews-page" */
  )
);

export const App = () => {
  return (
    <>
      <NavLinks />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieDetailsCast />} />
              <Route path="reviews" element={<MovieDetailsReviews />} />
              <Route path="*" element={<NotFounder />} />
            </Route>
          </Route>
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};
