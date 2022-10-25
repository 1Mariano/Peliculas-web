import { Link } from "react-router-dom";
import { getMovieImg } from "../../utils/getMovieImg";
import style from "./MovieCard.module.css";


export function MovieCard({ movie }) {

  const imageUrl = getMovieImg(movie.poster_path , 300)
  
  return (
    <li className={style.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          className={style.movieImage}
          src={imageUrl}
          alt={movie.title}
          width={230}
          height={345}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
