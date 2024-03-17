import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import "./Action.css";

const Action = () => {
  return (
    <section className="action__movies">
      <Hero
        imageSrc="https://i0.wp.com/thehoneypop.com/wp-content/uploads/2022/02/THP-1200-x-675-new-22.png?fit=1200%2C675&ssl=1"
        heading="Pop & Chill"
        description="Welcome to the Action Movies section! Get ready for adrenaline-pumping films that will keep you on the edge of your seat. From heart-stopping car chases to intense fight scenes and explosive shootouts, we've got it all. Sit back, relax, and enjoy some high-octane entertainment. Check out our action movies below and let the excitement begin"
      />
      <h2>Action Movies</h2>
      <MovieList genreId="28" />
    </section>
  );
};

export default Action;
