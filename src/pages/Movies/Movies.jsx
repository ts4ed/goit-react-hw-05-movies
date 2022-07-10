import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useLocation, Outlet } from 'react-router-dom';
import s from './Movies.module.css';

const Movies = () => {
  const location = useLocation();
  return (
    <div className={s.container}>
      {location.pathname === '/movies' && <SearchMovies />}
      <Outlet />
    </div>
  );
};
export default Movies;
