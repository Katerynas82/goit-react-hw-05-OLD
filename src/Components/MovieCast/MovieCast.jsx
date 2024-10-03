import { fetchMovieCast } from "../../services/api";
import { useState, useEffect } from "react";
import s from '../MovieCast/MovieCast.module.css';

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);
  console.log(cast);
  return (
    <div className={s.container}>
      <h2>Cast</h2>
      <ul className={s.actorsList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              // className={s.actors_list_img}
              src={
                actor.profile_path
                                
              }
              alt={actor.name}
              width="100"
            />
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
