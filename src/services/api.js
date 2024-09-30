import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const API_HEADERS = {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTg3NGU3NDlkZmFjNzFjZDE3ZjAyN2YxODQ5Y2JlMyIsIm5iZiI6MTcyNzcyMTM1OC40MTEwNiwic3ViIjoiNjZmYTlkNGIzOTEwMTNlZmFiMTMzM2Y0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mA1oTBapusnad6jefRvRZf7bao939kKOICl3Ptzrdgg",
  },
};


export const fetchMovies = async (query = "") => {
  const url = `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;
  try {
    const response = await axios.get(url, API_HEADERS);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};


export const fetchMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?language=en-US`; 
  try {
    const response = await axios.get(url, API_HEADERS);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};


export const fetchMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US`;
  try {
    const response = await axios.get(url, API_HEADERS);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};
