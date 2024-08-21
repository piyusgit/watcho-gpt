import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-lg  rounded-md hover:bg-opacity-80">
          Watch
        </button>
        <button className="bg-gray-600 text-white p-4 px-12 mx-2 text-lg bg-opacity-50 rounded-md hover:bg-opacity-20">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
