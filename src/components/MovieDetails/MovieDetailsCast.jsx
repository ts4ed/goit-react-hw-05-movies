import { useOutletContext } from 'react-router-dom';
import * as Api from 'services';
import s from './MovieDetailsCast.module.css';

export const MovieDetailsCast = () => {
  const film = useOutletContext();

  return (
    <div>
      <ul className={s.list}>
        {film.credits.cast.map(r => (
          <li className={s.item} key={r.id}>
            <img
              className={s.img}
              src={
                r.profile_path &&
                `${Api.IMG_BASE_URL}${Api.IMG_W200}${r.profile_path}`
              }
              alt={r.name}
            />
            <h2 className={s.title}>{r.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
