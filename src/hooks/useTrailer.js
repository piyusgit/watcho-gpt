import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  // Fetch trailer
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useTrailer;
