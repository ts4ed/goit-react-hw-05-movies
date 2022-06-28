import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTrending } from 'services';
import s from './Trending.module.css';
import * as Api from 'services';
import styled from 'styled-components';
import { Loading } from '../Loading/Loading';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Trending = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrending().then(r => {
      setMovies(r.results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <Loading />}
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
