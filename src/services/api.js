import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3bffe50dfda579cb925403e66a2c7938';
const PARAM = {
  trending: '/trending/movie/day',
  search: '/search/movie',
  details: '/movie',
  credits: '/credits',
  reviews: '/reviews',
  genre: '/genre/movie/list',
};

const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${PARAM.trending}?api_key=${API_KEY}`);
  return data.results;
};

const fetchSerchingMovies = async query => {
  const { data } = await axios.get(
    `${PARAM.search}?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

const fetchDetailsMovies = async id => {
  const { data } = await axios.get(`${PARAM.details}/${id}?api_key=${API_KEY}`);
  return data;
};

const fetchCreditsMovies = async id => {
  const { data } = await axios.get(
    `${PARAM.details}/${id}${PARAM.credits}?api_key=${API_KEY}`
  );
  return data;
};

const fetchReviewsMovies = async id => {
  const { data } = await axios.get(
    `${PARAM.details}/${id}${PARAM.reviews}?api_key=${API_KEY}`
  );
  return data;
};

export {
  fetchTrendingMovies,
  fetchSerchingMovies,
  fetchDetailsMovies,
  fetchCreditsMovies,
  fetchReviewsMovies,
};
