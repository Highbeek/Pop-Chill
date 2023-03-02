import "./Hero.css";

const Hero = ({ imageSrc, heading, description }) => {
  return (
    <>
      <div className="hero__header">
        <div className="hero__poster">
          <img src={imageSrc} alt="" />
        </div>
        <div className="hero__head">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
