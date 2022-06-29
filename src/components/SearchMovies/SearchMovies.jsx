import { getSearchMovie } from 'services';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
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
  let params = new URLSearchParams(location.search);
  const [movies, setMovies] = useState('');
  const [input, setInput] = useState('');
  const [totalPage, setTotalPage] = useState('');
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(params.get('page') ?? 1);
  query === '' && params.get('query') !== null && setQuery(params.get('query'));

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movie;
    if (input === '' && alert('Введите запрос')) {
      return;
    }
    if (value !== query) {
      setPage(1);
      setQuery(value);
      location = {
        pathname: `/movies`,
        search: `?query=${value}&page=1`,
      };
      navigate(location.search);
      setInput('');
      setInput('');
    }
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchMovie() {
      try {
        setLoading(true);

        getSearchMovie(query, page).then(r => {
          r.results.length === 0 && alert('По вашему запросу ничего нет');
          setMovies(r.results);
          setTotalPage(r.total_pages);
          setPage(r.page);
          setLoading(false);
        });
      } catch (error) {
        if (error) {
          navigate(`/home`);
        }
      }
    }
    fetchMovie();
  }, [query, navigate, page]);

  const hendleSetPage = data => {
    setPage(data);
    location = {
      search: `?query=${input}&page=${data}`,
    };
    navigate(location.search);
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
          changePage={hendleSetPage}
          page={page}
          totalPage={totalPage}
        />
      )}
    </div>
  );
};
