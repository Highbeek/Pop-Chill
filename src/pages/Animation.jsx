import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import "./Animation.css";

const Animation = () => {
  return (
    <section className="anime__movies">
      <Hero
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/best-netflix-animation-index-1585754615.jpg"
        heading="Pop & Chill"
        description="Welcome to the Animation Movies section! Explore our magical selection of animated movie trailers that will take you on unforgettable adventures. From heartwarming tales to musical delights, we've got something for everyone. Sit back, relax, and let the magic of animation sweep you away. Check out our trailers below and dive into the enchantment!"
      />
      <h2>Animations</h2>
      <MovieList genreId="16" />
    </section>
  );
};

export default Animation;
