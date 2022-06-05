import Homepage from "../pages/homepage";
import { Routes, Route } from "react-router-dom";

export const HOMEPAGE = "/";

export const availableRoutes = (
  <Routes>
    <Route path={HOMEPAGE} element={<Homepage />} />
  </Routes>
);
