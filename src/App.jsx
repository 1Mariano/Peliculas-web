//import { MoviesGrid } from "./components/MoviesGrid/MoviesGrid";
import style from "./App.module.css";
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"> <h1 className={style.title}>Movies</h1> </Link>
        <Link to="/">Home</Link>
        <Link to="/movies">Movie</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/> } />
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
