import React, { useEffect, useState } from "react";
import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { useQuery } from "react-query";


export function MovieDetails() { 
  const { movieId } = useParams();
  const {data:movie, isLoading} = useQuery(["movieDetails", movieId], ()=> get("/movie/" + movieId))

  /*const [movie, setMovie] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  
  
  

  useEffect(() => {
    setIsLoading(true)
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false)
      setMovie(data);
    });
  }, [movieId]);*/

  if(isLoading){
    return <Spinner />
  }


  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={style.detailsContainer}>
      <img
        className={`${style.col} ${style.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${style.col} ${style.movieDetails}`}>
        <p className={style.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
