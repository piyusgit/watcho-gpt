import React from "react";
import lang from "../utils/langConstant";
import { useSelector } from "react-redux";
const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12" action="">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="col-3 m-4 bg-red-700
         text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
