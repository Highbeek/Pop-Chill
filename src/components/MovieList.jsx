import React, { useState, useEffect, useCallback, useRef } from "react";
import "./MovieList.css";
import { FaPlayCircle } from "react-icons/fa";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./Loading";

const MovieList = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const movieListRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    const apiKey = "c2fd65c8e84371772739b79b6c4cba09";
    const currentDate = new Date().toISOString().split("T")[0];
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc,release_date.desc&include_adult=true&include_video=false&page=${currentPage}&release_date.lte=${currentDate}&with_genres=${genreId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const totalPages = data.total_pages;
        setTotalPages(totalPages);

        const movies = data.results.map((movie) => ({
          title: movie.title,
          releaseYear: movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : "N/A",
          trailerUrl: movie.videos?.results?.[0]?.key || null,
          imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));

        setMovies(movies);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [genreId, currentPage]);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handlePlayClick = useCallback((title, releaseYear) => {
    const query = `${title} ${releaseYear} trailer`;
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&key=${apiKey}`;

    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const videoId = data.items[0].id.videoId;

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
              onReady={() => setLoading(false)}
            />
          </>
        );
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useGSAP(() => {
    if (movieListRef.current) {
      const items = movieListRef.current.querySelectorAll(".movie-grid li");
      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: items[0],
          start: "top 80%",
        },
      });
    }
  }, [movies]);

  return (
    <div className="movie-list" data-aos="fade-up">
      {loading && <Loading loading={loading} />}
      {!loading && (
        <>
          <ul className="movie-grid" ref={movieListRef}>
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

          <div className="pagination">
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            appElement={document.body}
          >
            {modalContent}
          </Modal>
        </>
      )}
    </div>
  );
};

export default MovieList;
