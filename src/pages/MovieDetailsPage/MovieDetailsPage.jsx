import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {fetchMovieDetails} from '../../services/api'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MovieDetailsPage = () => {

const {movieId }= useParams();
const [movie, setMovie] = useState(null);

useEffect(()=> {
    const FetchDetails = async() =>{
try{
    const data=await fetchMovieDetails(movieId);
    setMovie(data);
} catch (error){
    console.error("Error fetching movie details:", error)
}
    };
    if (movieId) {
        FetchDetails();
    }
}, [movieId]);
if (!movie){
    return <div>Loading...</div>
}

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage