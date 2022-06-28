import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { useLocation, Outlet } from 'react-router-dom';
export const Movies = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/movies' && <SearchMovies />}
      <Outlet />
    </div>
  );
};
