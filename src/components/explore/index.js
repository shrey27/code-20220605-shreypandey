import "./explore.css";
import { exploreData, aboutUsData } from "../../utility/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { HOMEPAGE } from "../../utility/routes";

export function Explore() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([...exploreData]);
  }, []);
  return (
    <div className="explore">
      <h1 className="explore__heading">Explore</h1>
      <p className="explore__para">
        From One guest room to penthouse with pools and gardens
      </p>
      <div className="explore__container">
        {data.map((item) => {
          const { id, name, price, area, photo } = item;
          return (
            <div key={id} className="explore__card">
              <img src={photo} alt="rental_place" className="explore__photo" />
              <section className="explore__details">
                <h1>{name}</h1>
                <section className="explore__details__tags">
                  <span className="details">{price}</span>
                  <span className="details">{area}</span>
                  <a href="/" className="details url">
                    Book
                  </a>
                </section>
              </section>
            </div>
          );
        })}
      </div>
      {/* About Us */}
      <div className="about">
        <h1 className="explore__heading">About Us</h1>
        <p className="explore__para">Allow us to tell you a short story</p>
        <div className="explore__container">
          {aboutUsData.map((item) => {
            const { id, name, description, image } = item;
            return (
              <div key={id} className="explore__card">
                <img
                  src={image}
                  alt="rental_place"
                  className="explore__photo"
                />
                <section className="explore__details">
                  <h1>{name}</h1>
                  <h2>{description}</h2>
                </section>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="footer__ctr">
        <section className="logo__details">
          <img src="logo.png" alt="logo" />
          <h1>&#169; 2022 New Renters</h1>
          <h1>All rights reserved</h1>
        </section>
        <section className="links">
          <Link to={HOMEPAGE} className="link">
            Explore
          </Link>
          <Link to={HOMEPAGE} className="link">
            About Us
          </Link>
          <Link to={HOMEPAGE} className="link">
            Cities
          </Link>
          <Link to={HOMEPAGE} className="link call">
            Call
          </Link>
        </section>
      </div>
    </div>
  );
}
