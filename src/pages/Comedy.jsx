import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import "./Comedy.css";

const Comedy = () => {
  return (
    <section className="comedy__movies">
      <Hero
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/best-comedies-1624977335.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
        heading="Pop & Chill"
        description="Welcome to our Comedy Movies section! Get ready to laugh out loud with our handpicked selection of hilarious movie trailers. Whether you're in the mood for slapstick, witty banter, or irreverent satire, we've got the perfect preview to tickle your funny bone. Sit back, relax, and let the laughter roll!"
      />
      <h2>Comedy</h2>
      <MovieList genreId="35" />
    </section>
  );
};

export default Comedy;
