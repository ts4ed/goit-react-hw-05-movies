import { getSearchMovie } from 'services';
import { useState, useEffect } from 'react';
import {
  useLocation,
  useSearchParams,
  useNavigate,
  Link,
} from 'react-router-dom';
import s from './SearchMovies.module.css';
import { Pagination } from 'components/Pagination/Pagination';
import { Loading } from '../Loading/Loading';
import * as Api from 'services';
import styled from 'styled-components';
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const SearchMovies = () => {
  let location = useLocation();
  const [input, setInput] = useState('');
  const [totalPage, setTotalPage] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movie;

    if (input.trim() === '' && alert('Введите запрос')) {
      return console.log(value);
    }

    setSearchParams({
      query: value.trim(),
      page: 1,
    });
  };
  const searchQuery = searchParams.get('query') ?? '';
  const currentPage = searchParams.get('page') ?? 1;
  useEffect(() => {
    if (!searchQuery) return setSearchParams('');
    async function fetchMovie() {
      try {
        setLoading(true);
        getSearchMovie(searchQuery, currentPage).then(r => {
          r.results.length === 0 && alert('По вашему запросу ничего нет');
          setMovies(r.results);
          setTotalPage(r.total_pages);
          setLoading(false);
        });
      } catch (error) {
        if (error) {
          navigate(`/home`);
        }
      }
    }
    fetchMovie();
  }, [searchQuery, setSearchParams, navigate, currentPage]);

  const hendleUpPage = () => {
    setSearchParams({
      query: searchQuery,
      page: Number(currentPage) + 1,
    });
  };
  const hendleDownPage = () => {
    setSearchParams({
      query: searchQuery,
      page: Number(currentPage) - 1,
    });
  };
  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          type="text"
          name="movie"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Search Movie</button>
      </form>
      {loading && <Loading />}

      <ul className={s.list}>
        {movies &&
          movies.map(r => (
            <li className={s.item} key={r.id}>
              <StyledLink to={`/movies/${r.id}`} state={{ from: location }}>
                <img
                  className={s.img}
                  src={`${Api.IMG_BASE_URL}${Api.IMG_W400}${r.poster_path}`}
                  alt={r.title}
                />

                <h2 className={s.title}>{r.original_title}</h2>
              </StyledLink>
            </li>
          ))}
      </ul>
      {movies.length !== 0 && (
        <Pagination
          changeUpPage={hendleUpPage}
          changeDownPage={hendleDownPage}
          page={Number(currentPage)}
          totalPage={totalPage}
        />
      )}
    </div>
  );
};
