import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import "./Romance.css";

const Romance = () => {
  return (
    <section className="romance__movies">
      <Hero
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/lead-image-book-template-01-1-1671639058.jpg?resize=1200:*"
        heading="Pop & Chill"
        description="Welcome to the Romance Movies section! Get ready to be swept off your feet with our enchanting selection of trailers. Whether you're in the mood for classic romances, steamy love stories, or charming indie films, we've got just the preview to make your heart flutter. So, cozy up with your loved one, grab some tissues, and embark on a journey of love and emotion. Explore our romance movie trailers below and let the romance unfold!"
      />
      <h2>Romance movies</h2>

      <MovieList genreId="10749" />
    </section>
  );
};

export default Romance;
