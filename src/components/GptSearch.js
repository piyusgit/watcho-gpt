import React from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMAGE} alt=""></img>
      </div>
      <SearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
