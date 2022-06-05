import Homepage from "../pages/homepage";
import About from "../pages/about";
import Explore from "../pages/explore";
import { Routes, Route } from "react-router-dom";

export const HOMEPAGE = "/";
export const ABOUT = "/about";
export const EXPLORE = "/explore";

export const availableRoutes = (
  <Routes>
    <Route path={HOMEPAGE} element={<Homepage />} />
    <Route path={ABOUT} element={<About />} />
    <Route path={EXPLORE} element={<Explore />} />
  </Routes>
);
