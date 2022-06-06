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
        {/* eslint-disable-next-line */}
        <section className="end">
          <section className="end__links">
            <a href="/#about" className="end__link">
              About Us
            </a>
            <a href="/#explore" className="end__link">
              Explore
            </a>
            <span className="end__link citites">
              Cities <i className="fa-solid fa-chevron-down"></i>
            </span>
            <a href="/#call" className="end__link call">
              Call
            </a>
          </section>
          <span className="hamburger lg" onClick={handleClick}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </section>
      </nav>
    </div>
  );
}
