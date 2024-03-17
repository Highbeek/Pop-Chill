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
      console.log("FETCHED VIDEOS========>", data);
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
  console.log("VIDEOS SHOWN", videoIds.length);

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
      <div className="home__hero">
        <h1> Pop & Chill</h1>
        <p>
          Welcome to Pop & Chill Official Website, your no. 1 stop for the
          latest and greatest movies online for free. Discover a wide selection
          of recently released films, from blockbuster action to award-winning
          dramas and indie gems. Stay up-to-date with the latest trends and find
          your new favorite film here!
        </p>
      </div>
    </section>
  );
};

export default BackgroundVideo;
