import React, { useState, useEffect, useCallback } from "react";
import "./MovieList.css";
import { FaPlayCircle } from "react-icons/fa";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const MovieList = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const apiKey = "c2fd65c8e84371772739b79b6c4cba09";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results.map((movie) => ({
          title: movie.title,
          trailerUrl: movie.videos?.results?.[0]?.key || null, // handle missing trailer URL
          imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));

        setMovies(movies);
      });
  }, [genreId]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handlePlayClick = useCallback((title, releaseYear) => {
    console.log("movie is clicked");

    // Search for trailer on YouTube using movie title and release year
    const query = `${title} ${releaseYear} trailer`;
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&key=${apiKey}`;

    // Retrieve video ID from API response
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const videoId = data.items[0].id.videoId;

        // Embed video using ReactPlayer
        setModalIsOpen(true);
        setModalContent(
          <>
            <h2>{title}</h2>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="100%"
              controls={true}
              playing={true}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    controls: 1,
                    rel: 0,
                    fs: 0,
                    iv_load_policy: 3,
                  },
                },
              }}
            />
          </>
        );
      });
  }, []);

  return (
    <div className="movie-list">
      <ul className="movie-grid">
        {movies.map((movie, index) => (
          <li
            onClick={() => handlePlayClick(movie.title, movie.releaseYear)}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            className={hoverIndex === index ? "hover" : ""}
          >
            <img src={movie.imageUrl} alt={movie.title} />
            {hoverIndex === index && (
              <button type="button" className="play-button">
                <FaPlayCircle />
              </button>
            )}
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        appElement={document.body}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default MovieList;
