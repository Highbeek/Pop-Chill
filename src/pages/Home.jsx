import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <>
      <BackgroundVideo />
      <h2>Recent Movies</h2>
      <MovieList genreId={35} />
    </>
  );
};

export default Home;
