import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__links__div a">
          <a href="/movies" className="app-name">
            Pop & Chill
          </a>
          <p>
            Pop & chill is a free streaming Trailer site, where you can watch
            the best movie trailers for free. Pop&Chill.cc Contact us Terms of
            service
          </p>
        </div>

        <div className="footer__links__div b">
          <h4>Movie</h4>
          <ul>
            <li>
              <Link to="./action">Action</Link>
            </li>
            <li>
              <Link to="./comedy">Comedy</Link>
            </li>
            <li>
              <Link to="./romance">Romance</Link>
            </li>
            <li>
              <Link to="./anime">Anime</Link>
            </li>
            <li>
              <Link to="./tvseries">Tvseries</Link>
            </li>
          </ul>
        </div>

        <div className="footer__social c">
          <h4>Follow Us</h4>
          <Link to="/" className="icons">
            <BsTwitter />
          </Link>
          <Link to="/" className="icons">
            <BsFacebook />
          </Link>
          <Link to="/" className="icons">
            <BsInstagram />
          </Link>
        </div>
      </div>
      <div className="footer__below">
        <div className="footer__copyright">
          <p>
            @{new Date().getFullYear()} Designed by Highbeek|. All right
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
