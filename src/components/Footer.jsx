import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__links__div a">
          <a href="/movies">
            <h4>Pop & Chill</h4>
          </a>
          <p>
            Pop & chill is a free streaming Trailer site , where you can watch
            movies best movie trailers  for free.
            Pop&Chill.cc Contact us Terms of service
          </p>
        </div>

        <div className="footer__links__div b">
          <h4>Movie</h4>
          <ul>
            <Link to="./action">
              <li>Action</li>
            </Link>
            <Link to="./comedy">
              <li>Comedy</li>
            </Link>
            <Link to="./romance">
              <li>Romance</li>
            </Link>
            <Link to="./anime">
              <li>Anime</li>
            </Link>
            <Link to="./tvseries">
              <li>Tvseries</li>
            </Link>
          </ul>
        </div>

        <div className="footer__social c">
          <h4>Pop & Chill</h4>
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
