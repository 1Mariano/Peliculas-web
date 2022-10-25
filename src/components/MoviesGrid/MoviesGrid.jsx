import style from "./MoviesGrid.module.css";
import { MovieCard } from "../MovieCard/MovieCard";


import { Spinner } from "../Spinner/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../Empty/Empty";

import { useMovies } from "../hooks/useMovies";




export function MoviesGrid({search}) {

  const {movies, isLoading, hasNextPage, fetchNextPage} = useMovies(search)

  /*const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);

  
  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search 
        ? "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page" + page;
    get(searchUrl)
      .then((data) => {
        setMovies(prevMovies => prevMovies.concat(data.results))
        setHasmore(data.page < data.total_pages)
        setIsLoading(false)
      });
    }, [search, page]);*/

    if(!isLoading && movies.length === 0 ){
      return <Empty />
    }
    
  return (
    <InfiniteScroll 
      dataLength={movies.length} 
      hasMore={hasNextPage || isLoading} 
      next={()=> fetchNextPage()}
      loader={<Spinner />}>
    <ul className={style.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
    </InfiniteScroll>
  );
}
