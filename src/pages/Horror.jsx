import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import "./Horror.css";

const Horror = () => {
  return (
    <section className="Horror__movies">
      <Hero
        imageSrc="https://i.pinimg.com/originals/aa/8b/31/aa8b3137003af4376dd0566a5415ef30.jpg"
        heading="Pop & Chill"
        description="Welcome to the Horror Movies section! Prepare yourself for spine-chilling thrills with our curated selection of trailers. From hair-raising suspense to heart-pounding terror, we've handpicked the most chilling previews to keep you on the edge of your seat. So, dim the lights, grab your popcorn, and dive into our horror collection below. The frights await!"
      />
      <h2>Horror Movies</h2>
      <MovieList genreId="27" />
    </section>
  );
};

export default Horror;
