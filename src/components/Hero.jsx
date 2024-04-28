import React, { useEffect } from "react";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Hero = ({ imageSrc, heading, description }) => {
  useGSAP(() => {
    gsap.from(".hero__poster img", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero__head h1", {
      opacity: 0,
      y: -20,
      duration: 2,
      delay: 0.5,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".hero__description p", {
      opacity: 0,
      y: -20,
      ease: "power3.out",
      delay: 1,
      stagger: 0.4,
    });
  }, []);

  return (
    <div className="hero__header">
      <div className="hero__poster">
        <img src={imageSrc} alt="" />
      </div>
      <div className="hero__head">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Hero;
