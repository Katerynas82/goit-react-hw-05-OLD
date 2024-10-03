import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList"
import { fetchMovies } from "../../services/api";

const MoviesPage = () => {

  const [movies, setMovies] = useState([]);
  
useEffect(() => {
  const fetchTopMovies = async () =>
  { try {
    const data=await fetchMovies();
     if (data && data.results) {
    setMovies (data.results);}
  }catch (error){
    console.error("Error fetching movies:",error);
}};

fetchTopMovies();
},[]);

 return (
    <div>
        <h2>Top 15  Movies</h2>
      <MovieList movies={movies}/>


    </div>
  );
};


export default MoviesPage;