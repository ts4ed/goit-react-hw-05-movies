import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Home } from './Home';
// import { Movies } from './Movies';
// import { NotFounder } from './NotFounder';
// import { MovieDetails } from './MovieDetails';
// import { MovieDetailsCast } from './MovieDetails/MovieDetailsCast';
// import { MovieDetailsReviews } from './MovieDetails/MovieDetailsReviews';
// import { NavLinks } from './NavLinks';

const Home = lazy(() => import('./Home' /* webpackChunkName: "home-page" */));

const Movies = lazy(() =>
  import('./Movies' /* webpackChunkName: "movies-page" */)
);

const NotFound = lazy(() =>
  import('./NotFounder' /* webpackChunkName: "notFound-page" */)
);

const MovieDetailsCast = lazy(() =>
  import(
    './MovieDetails/MovieDetailsCast' /* webpackChunkName: "movieDetailsCast-page" */
  )
);
const MovieDetailsReviews = lazy(() =>
  import(
    './MovieDetails/MovieDetailsReviews' /* webpackChunkName: "movieDetailsReviews-page" */
  )
);

const NavLinks = lazy(() =>
  import('./NavLinks' /* webpackChunkName: "navLinks-page" */)
);

export const App = () => {
  return (
    <div>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <NavLinks />
        <Suspense fallback={<div>back</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />}>
              <Route path=":movieId" element={<MovieDetails />}>
                <Route path="cast" element={<MovieDetailsCast />} />
                <Route path="reviews" element={<MovieDetailsReviews />} />
                <Route path="*" element={<NotFounder />} />
              </Route>
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
