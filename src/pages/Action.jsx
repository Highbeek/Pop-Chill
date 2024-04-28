import React from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import "./Action.css";

const Action = () => {
  return (
    <section className="action__movies" data-aos="fade-up">
      <Hero
        imageSrc="https://i0.wp.com/thehoneypop.com/wp-content/uploads/2022/02/THP-1200-x-675-new-22.png?fit=1200%2C675&ssl=1"
        heading="Pop & Chill"
        description="Welcome to our Action Movies section! Get set for a thrill ride with trailers that'll leave you on the edge of your seat. From adrenaline-fueled car chases to intense fight scenes, we've handpicked the best previews for you. Sit tight, and let the excitement begin!"
      />
      <h2>Action Movies</h2>
      <MovieList genreId="28" />
    </section>
  );
};

export default Action;
