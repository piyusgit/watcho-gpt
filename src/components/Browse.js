import React from "react";
import Header from "./Header";
import useLatestMovies from "../hooks/useLatestMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  // Custom Hook to get latest movies
  useLatestMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
      {/* 
      
      
      
       */}
    </div>
  );
};

export default Browse;
