import type { RouteObject } from "react-router-dom";
import { Home, ListaFilmes, NotFound } from "../pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listaFilmes",
    element: <ListaFilmes />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
