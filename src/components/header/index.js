import "./header.css";
import { Navbar } from "../navbar/index";

export function Header({ setForm, details, setDetails }) {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setForm({ ...details });
  };

  return (
    <div className="header">
      <img src="banner.jpg" alt="banner" className="banner" />
      <Navbar />
      <div className="headings">
        <h1 className="header__h1">Rethink your living and renting</h1>
        <h2 className="header__h2">Make your stay painless with us</h2>
      </div>

      <form className="form" onSubmit={handleFormSubmission}>
        <section>
          <h1>CITY</h1>
          <select
            onChange={(e) => setDetails({ ...details, city: e.target.value })}
            value={details.city}
          >
            <option>Select your city</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Kolkata</option>
            <option>Chennai</option>
          </select>
        </section>
        <section>
          <h1>DATES</h1>
          <select
            onChange={(e) => setDetails({ ...details, date: e.target.value })}
            value={details.date}
          >
            <option>Select a date</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
          </select>
        </section>
        <section>
          <h1>GUESTS</h1>
          <select
            onChange={(e) => setDetails({ ...details, guests: e.target.value })}
            value={details.guests}
          >
            <option>Select guests</option>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>8</option>
          </select>
        </section>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>Search
        </button>
      </form>
    </div>
  );
}
