import "./navbar.css";
import { Drawer } from "./Drawer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HOMEPAGE } from "../../utility/routes";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <div>
      <Drawer open={open} setOpen={setOpen} />
      <nav className="navbar xs-s border--btm">
        <section>
          <Link to={HOMEPAGE} className="link__style">
            <img className="box__image" src="logo.png" alt="logo" />
          </Link>
        </section>

        <section className="end">
          <section className="end__links">
            <Link to={HOMEPAGE} className="end__link">
              About Us
            </Link>
            <Link to={HOMEPAGE} className="end__link">
              Explore
            </Link>
            <span className="end__link citites">
              Cities <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span className="end__link call"> Call</span>
          </section>
          <span className="hamburger lg" onClick={handleClick}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </section>
      </nav>
    </div>
  );
}
