import axios from 'axios';

const KEY = '119d79b053f922516c6af4b71b0fd3ac';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const IMG_BASE_URL = `https://image.tmdb.org/t/p`;
export const IMG_W500 = `/w500`;
export const IMG_W400 = `/w400`;
export const IMG_W300 = `/w300`;
export const IMG_W200 = `/w200`;
export const IMG_W100 = `/w100`;
export const IMG_ORIG = `/original`;

export const getTrending = async (page = 1) => {
  const { data } = await axios.get(
    `/trending/movie/week?api_key=${KEY}&page=${page}`
  );
  return data;
};

export const getSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  return data;
};
export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US&append_to_response=credits,reviews`
  );
  return data;
};

export const getMovieCredits = async () => {
  const { data } = await axios.get('/movies/get-movie-credits');
  return data;
};

export const getMovieReviews = async () => {
  const { data } = await axios.get('/movies/get-movie-reviews');
  return data;
};
