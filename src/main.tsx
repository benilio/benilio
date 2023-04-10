import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";
import Projects from "./components/Project/ProjectSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Geological from "./pages/projects/Geological";
import Geomechanical from "./pages/projects/Geomechanical";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/#projects", element: <Projects /> },
      { path: "/#about", element: <About /> },
      { path: "/#contact", element: <Contact /> },
      { path: "/projects/geological", element: <Geological /> },
      { path: "/projects/geomechanical", element: <Geomechanical /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
