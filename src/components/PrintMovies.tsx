import { useEffect, useState } from "react";
import IMovie from "../models/IMovie";
import MovieService from "../services/MovieService";
import { ShowMovie } from "./ShowMovie";

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
      <div key={movie.id}>
        <ShowMovie movie={movie} key={movie.id} />
      </div>
    );
  });
  return <>{html}</>;
}
