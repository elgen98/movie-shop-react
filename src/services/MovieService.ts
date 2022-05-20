import axios from "axios";
import IMovie from "../models/IMovie";

export default class MovieService {
  async getMovies(): Promise<IMovie[]> {
    const response = await axios.get<IMovie[]>(
      "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
    );

    return response.data;
  }
}
