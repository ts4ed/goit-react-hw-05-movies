import { useOutletContext } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import * as Api from 'services';

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
      )}
      {!film.reviews && <h4>There is no reviews yet</h4>}
    </div>
  );
};

export default MovieDetailsReviews;
