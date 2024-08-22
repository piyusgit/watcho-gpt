import React from "react";
import Header from "./Header";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showSearch = useSelector((store) => store.gpt.showSearch);
  // Custom Hook to get latest movies
  useLatestMovies();
  // Custom Hook to get Popular movies
  usePopularMovies();
  // Custom Hook to get TopRated movies
  useTopRated();
  return (
    <div>
      <Header />
      {showSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
