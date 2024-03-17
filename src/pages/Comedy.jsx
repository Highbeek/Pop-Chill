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
        description="Welcome to the Comedy Movies section! If you're looking for a good laugh, then you're in the right place. We have a wide selection of hilarious films that will tickle your funny bone and lift your spirits. Whether you're in the mood for silly slapstick, witty banter, or irreverent satire, we've got you covered. So sit back, relax, and get ready for some gut-busting entertainment. Check out our comedy movies below and let the laughter begin!"
      />
      <h2>Comedy</h2>
      <MovieList genreId="35" />
    </section>
  );
};

export default Comedy;
