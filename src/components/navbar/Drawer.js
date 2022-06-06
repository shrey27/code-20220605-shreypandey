import "./navbar.css";
import { Link } from "react-router-dom";
import { HOMEPAGE } from "../../utility/routes";

export function Drawer({ open, setOpen }) {
  return (
    <div>
      <div className={`drawer flex-ct-ct ${open && "drawer__open"}`}>
        <div
          className={`drawer__background ${open && "drawer__open"}`}
          onClick={() => setOpen(false)}
        ></div>
        <div className="drawer__content" direction="left">
          <h1 className="btn--float home xs-s">
            <Link to={HOMEPAGE} className="">
              <i className="fas fa-home"></i>
            </Link>
          </h1>
          <hr />
          {/* eslint-disable-next-line */}
          <section className="flex-st-ct flex-vertical">
            <a href="/#about" className="drawer__links ">
              About Us
            </a>
            <a href="/#explore" className="drawer__links ">
              Explore
            </a>
            <a href="/#call" className="drawer__links ">
              Call
            </a>
          </section>
          <hr />
        </div>
        <span className="drawer__close" onClick={() => setOpen(false)}>
          <i className="fas fa-times-circle"></i>
        </span>
      </div>
    </div>
  );
}
