import { useOutletContext } from 'react-router-dom';

const MovieDetailsReviews = () => {
  const film = useOutletContext();

  return (
    <div>
      {film.reviews && (
          <ul>
            {film.reviews.results.map(r => (
              <li key={r.id}>
                <h4>{r.author}</h4>
                <p>{r.content}</p>
                <p>{r.created_at}</p>
              </li>
            ))}
          </ul>
        ) && <h4>There is no reviews yet</h4>}
      {/* {!film.reviews && <h4>There is no reviews yet</h4>} */}
    </div>
  );
};

export default MovieDetailsReviews;
