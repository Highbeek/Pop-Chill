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
        description="Welcome to the Romance Movies section! If you're in the mood for love, then you're in the right place. We have a wide selection of heartwarming films that will make you swoon, laugh, and cry. Whether you're in the mood for classic romances, steamy love stories, or quirky indie films, we've got you covered. So snuggle up with your loved one, grab some tissues, and get ready for a rollercoaster of emotions. Check out our selection of romance movies below and let the romance begin!"
      />
      <h2>Romance movies</h2>

      <MovieList genreId="10749" />
    </section>
  );
};

export default Romance;
