import React, { useState, useEffect, useRef } from "react";
import "./MovieList.css";
import ReactPlayer from "react-player";
import ReactDOMServer from "react-dom/server";

const MovieList = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const apiKey = "c2fd65c8e84371772739b79b6c4cba09";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results.map((movie) => ({
          title: movie.title,
          trailerUrl: `https://www.youtube.com/watch?v=${movie.videos?.results?.[0]?.key}`,
          imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));
        setMovies(movies);
      });
  }, [genreId]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };
const handlePlayClick = (trailerUrl) => {
  const windowName = "movieTrailer";
  const windowFeatures =
    "width=800,height=600,resizable,scrollbars=yes,status=1";
  const videoUrl = `https://www.youtube.com/watch?v=${trailerUrl}`;
  const player = <ReactPlayer url={videoUrl} playing={true} controls={true} />;
  const newWindow = window.open("", windowName, windowFeatures);
  const newDocument = newWindow.document;
  newDocument.body.innerHTML = ReactDOMServer.renderToString(player);
  newDocument.querySelector("a").setAttribute("target", "_blank");
  newDocument.querySelector("a").setAttribute("rel", "noopener noreferrer");
};


  return (
    <div className="movie-list">
      <ul className="movie-grid">
        {movies.map((movie, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={hoverIndex === index ? "hover" : ""}
          >
            <img src={movie.imageUrl} alt={movie.title} />
            {hoverIndex === index && (
              <button
                onClick={() => handlePlayClick(movie.trailerUrl)}
              ></button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
