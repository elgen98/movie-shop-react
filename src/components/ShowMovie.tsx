import IMovie from "../models/IMovie";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./ShowMovie.scss";

interface IShowMovieProps {
  movie: IMovie;
}

export function ShowMovie(props: IShowMovieProps) {
  return (
    <div className="movie-container" key={props.movie.id}>
      <h2>{props.movie.name}</h2>
      <img src={props.movie.imageUrl} alt="Movie Poster" width={300} />
      <div className="movie-price-cart">
        <h4>{props.movie.price} kr</h4>
        <MdOutlineAddShoppingCart style={{ width: "25px", height: "25px" }} />
      </div>
    </div>
  );
}
