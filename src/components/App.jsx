import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Loading } from './Loading/Loading';
// import { Home } from './Home';
// import { Movies } from './Movies';
// import { NotFounder } from './NotFounder';
// import { MovieDetails } from './MovieDetails';
// import { MovieDetailsCast } from './MovieDetailsCast/MovieDetailsCast';
// import { MovieDetailsReviews } from './MovieDetailsReviews/MovieDetailsReviews';
// import { NavLinks } from './NavLinks';

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
    <div>
      <BrowserRouter basename="/goit-react-hw-05-movies">
        <NavLinks />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/home"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
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
