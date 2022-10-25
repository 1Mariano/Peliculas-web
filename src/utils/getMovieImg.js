import placeholder from "../components/MovieCard/Placeholder.png"
export function getMovieImg(path, width){
    return path 
                    ? `https://image.tmdb.org/t/p/w${width}${path}` 
                    : placeholder;
}