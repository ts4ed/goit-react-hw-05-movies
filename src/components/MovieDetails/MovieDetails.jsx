import { useEffect, useState } from 'react';
import {
  Outlet,
  useParams,
  Link,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import * as Api from 'services';
import s from './MovieDetails.module.css';
import { Loading } from '../Loading/Loading';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const [film, setFilm] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    Api.getMovieDetails(movieId).then(r => {
      setFilm(r);
      setLoading(false);
    });
  }, [movieId]);

  const onBack = e => {
    location.state !== null
      ? navigate(`${location.state.from.pathname}${location.state.from.search}`)
      : navigate(`/home`);
  };
  return (
    <div>
      {film && (
        <button className={s.btn} onClick={onBack}>
          Back
        </button>
      )}
      {loading && <Loading />}
      {film && (
        <div className={s.container}>
          <img
            className={s.img}
            src={`${Api.IMG_BASE_URL}${Api.IMG_W400}${film.poster_path}`}
            alt={`${film.original_title}`}
          />
          <div className={s.info}>
            <h1 className={s.title}>
              {film.original_title} ({film.release_date.slice(0, 4)})
            </h1>
            <h2 className={s.rating}>Rating: {film.vote_average.toFixed(2)}</h2>
            <p className={s.overview}>{film.overview}</p>

            <h4>Genres</h4>
            <div className={s.genres}>
              {film.genres.map(g => (
                <span className={s.span} key={g.id}>
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      {film && (
        <ul className={s.linkList}>
          <Link className={s.link} to="cast">
            Cast
          </Link>
          <Link className={s.reviews} to="reviews">
            Reviews
          </Link>
          <Outlet context={film} />
        </ul>
      )}
    </div>
  );
};
export default MovieDetails;
