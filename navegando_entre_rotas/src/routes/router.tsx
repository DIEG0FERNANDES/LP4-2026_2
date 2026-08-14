import type { RouteObject } from "react-router-dom";
import { Home, Login, NotFound } from "../pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
