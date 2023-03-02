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
        description="Welcome to the Animation Movies section! If you're a fan of animated films, then you're in the right place. We have a wide selection of family-friendly movies that will transport you to magical worlds and introduce you to unforgettable characters. Whether you're in the mood for heartwarming stories, epic adventures, or musical extravaganzas, we've got you covered. So sit back, relax, and get ready to experience the wonders of animation. Check out our selection of animated movies below and let the magic begin!"
      />
      <h2>Animations</h2>
      <MovieList genreId="16" />
    </section>
  );
};

export default Animation;
