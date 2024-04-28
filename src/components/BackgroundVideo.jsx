import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    const fetchVideoIds = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=action+movie+trailer&videoEmbeddable=true&key=AIzaSyD9P2eUPFSaOkvG-YcV7Q7BTot3o-UYKeI`
      );
      const data = await response.json();
      if (data.items) {
        const ids = data.items.map((item) => item.id.videoId);
        setVideoIds(ids);
      }
    };

    fetchVideoIds();
  }, []);

  const handleVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  return (
    <section className="hero">
      <div className="background-video">
        {videoIds.length > 0 && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoIds[videoIndex]}`}
            playing={true}
            loop={false}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
            onEnded={handleVideoEnd}
            onClick={null}
            style={{
              pointerEvents: "none",
              transform: "scale(1.5)",
            }}
            onPlay={() =>
              console.log(
                `Video URL: https://www.youtube.com/watch?v=${videoIds[videoIndex]}`
              )
            }
          />
        )}
      </div>
      <div
        className="home__hero"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        <h1> Pop & Chill</h1>
        <p>
          Welcome to Pop & Chill Website, your number one stop for the latest
          and greatest movie trailers online, all available for free. Discover a
          wide selection of recently released trailers, from blockbuster action
          to award-winning dramas and indie gems. Stay up-to-date with the
          latest trends and find exciting previews of upcoming films here!
        </p>
      </div>
    </section>
  );
};

export default BackgroundVideo;
