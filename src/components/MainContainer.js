import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Video from "./Video";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Video movieId={id} />
    </div>
  );
};

export default MainContainer;
