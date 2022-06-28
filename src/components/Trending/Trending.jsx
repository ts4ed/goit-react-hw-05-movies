import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getTrending } from 'services';
import s from './Trending.module.css';
import * as Api from 'services';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Trending = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(r => {
      setMovies(r.results);
    });
  }, []);

  return (
    <div>
      <ul className={s.list}>
        {movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                className={s.img}
                src={`${Api.IMG_BASE_URL}${Api.IMG_W400}${movie.poster_path}`}
                alt={`${movie.original_title}`}
              />
              <h3 className={s.title}>{movie.original_title}</h3>
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
