import React from "react";
import { Link } from "react-router-dom";
import "./Action.css";

const Action = () => {
  return (
    <section className="action__movies">
      <div className="action__hero">
        <div className="action__poster">
          <img
            src="https://i0.wp.com/thehoneypop.com/wp-content/uploads/2022/02/THP-1200-x-675-new-22.png?fit=1200%2C675&ssl=1"
            alt=""
          />
        </div>
        <div className="action__head">
          <h1> Pop & Chill</h1>
          <p>
            Welcome to the Action Movies section! If you're a fan of
            action-packed movies, then you're in the right place. We have a wide
            selection of adrenaline-fueled films that will keep you on the edge
            of your seat. Whether you're in the mood for heart-stopping car
            chases, intense fight scenes, or explosive shootouts, we've got you
            covered. So sit back, relax, and get ready for some high-octane
            entertainment. Check out our action movies below and let the
            excitement begin!
          </p>
        </div>
      </div>
      <h1>This is Action Component</h1>
      <Link to="/"> Back to Home</Link>
    </section>
  );
};

export default Action;
