import "./explore.css";
import "./footer.css";
import { exploreData, aboutUsData, defaultForm } from "../../utility/constant";
import { useState, useEffect } from "react";

export function Explore({ form, setDetails }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let temp = [...exploreData];
    if (form.city && form.city !== "Select your city") {
      temp = temp.filter((item) => item.city === form.city);
    }
    if (form.date && form.date !== "Select a date") {
      temp = temp.filter((item) => item.date === form.date);
    }
    if (form.guests && form.guests !== "Select guests") {
      temp = temp.filter(
        (item) =>
          item.guests === Number(form.guests) || form.guests - item.guests === 1
      );
    }
    setData([...temp]);
    setDetails(defaultForm);
  }, [form, setDetails]);

  return (
    <div className="explore" id="explore">
      <h1 className="explore__heading">Explore</h1>
      <p className="explore__para">
        From One guest room to penthouse with pools and gardens
      </p>
      <div className="explore__container">
        {data.length ? (
          <>
            {data.map((item) => {
              const { id, name, price, area, photo } = item;
              return (
                <div key={id} className="explore__card">
                  <img
                    src={photo}
                    alt="rental_place"
                    className="explore__photo"
                  />
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
          </>
        ) : (
          <div className="emptyGif">
            <img src="empty.gif" alt="Empty" />
          </div>
        )}
      </div>
      {/* About Us */}
      <div className="about" id="about">
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
      <div className="footer__ctr" id="call">
        <section className="logo__details">
          <img src="logo.png" alt="logo" />
          <h1>&#169; 2022 New Renters</h1>
          <h1>All rights reserved</h1>
        </section>
        {/* eslint-disable-next-line */}
        <section className="links">
          <a href="/#explore" className="link">
            Explore
          </a>
          <a href="/#about" className="link">
            About Us
          </a>
          <span className="link">Cities</span>
          <a href="/#call" className="link call">
            Call
          </a>
        </section>
      </div>
    </div>
  );
}
