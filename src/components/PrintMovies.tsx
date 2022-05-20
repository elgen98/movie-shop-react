import { useEffect, useState } from "react";
import IMovie from "../models/IMovie";
import MovieService from "../services/MovieService";
import "./PrintMovies.scss";

export default function PrintMovies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    let service = new MovieService();

    service
      .getMovies()
      .then((response) => {
        console.log("Result from service", response);
        setMovies(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let html = movies.map((movie) => {
    return (
      <div className="movie-container" key={movie.id}>
        <h2>{movie.name}</h2>
        <img src={movie.imageUrl} alt="Movie Poster" width={300} />
        <h4>{movie.price} kr</h4>
      </div>
    );
  });
  return <>{html}</>;
}
