import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    const fetchVideoIds = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=action+movie+trailer&videoEmbeddable=true&key=AIzaSyD9P2eUPFSaOkvG-YcV7Q7BTot3o-UYKeI`
      );
      const data = await response.json();
      const ids = data.items.map((item) => item.id.videoId);
      setVideoIds(ids);
    };
    fetchVideoIds();
  }, []);

  const handleVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  return (
    <section className="hero">
      <div className="background-video">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoIds[videoIndex]}`}
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
          onEnded={handleVideoEnd}
          onClick={null}
          style={{
            pointerEvents: "none",
            transform: "scale(1.5)" /* Scale the video by 10% */,
          }}
        />
      </div>
      <div className="home__hero">
        <h1> Pop & Chill</h1>
        <p>
          Pop & Chill Official Website, your no 1 stop for the best sites for
          watching movies online for free. We offer full access to a database of
          more than 20,000 films and 5,000 high quality TV series for free
          viewing without registration. Fmovies is updated with new content
          daily and our huge database makes it easy to find all of your favorite
          movies and shows. Please support us by sharing fmovies site with your
          friends and family. Thanks!
        </p>
      </div>
    </section>
  );
};

export default BackgroundVideo;


