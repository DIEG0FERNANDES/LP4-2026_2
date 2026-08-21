import type { RouteObject } from "react-router-dom";
import { Home } from "../pages";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
