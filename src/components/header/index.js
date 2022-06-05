import "./header.css";
import { banner } from "../../utility/constant";

export function Header() {
  return (
    <div className="header">
      <img src="banner.jpg" alt="banner" className="banner" />
      <h1>Rethink your living and renting</h1>
      <h2>Make your stay painless with us</h2>
      <form>
        <select>
          <option>Select your city</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Kolkata</option>
          <option>Chennai</option>
        </select>
        <select>
          <option>Select a date</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
        </select>
        <select>
          <option>Guests</option>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
