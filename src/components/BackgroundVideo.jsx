import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    const fetchVideoIds = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=action+movie+trailer&videoEmbeddable=true&key=${process.env.REACT_APP_API_KEY}`
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
          watching movies online for free.If you're looking for the latest and
          greatest films, then you're in the right place. We have a wide
          selection of movies that have just hit the theaters or have been
          recently released on streaming platforms. Whether you're in the mood
          for blockbuster action, award-winning dramas, or indie gems, we've got
          you covered. So stay up-to-date with the latest trends and check out
          our selection of recent movies below. You never know, you might
          discover your new favorite film!
        </p>
      </div>
    </section>
  );
};

export default BackgroundVideo;
