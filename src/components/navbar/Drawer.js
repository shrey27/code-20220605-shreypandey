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
          <section className="flex-st-ct flex-vertical">
            <Link to={HOMEPAGE} className="drawer__links ">
              About Us
            </Link>
            <Link to={HOMEPAGE} className="drawer__links ">
              Explore
            </Link>
            <span className="drawer__links ">Call</span>
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
