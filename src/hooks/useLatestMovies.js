import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useLatestMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getLatestMovies();
  }, []);
};

export default useLatestMovies;
