import { lazy, Suspense } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";
import Projects from "./components/Project/ProjectSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Loading from "./pages/Loading";

import "./styles/index.css";

const Geological = lazy(() => import("./pages/projects/Geological"));
const Geomechanical = lazy(() => import("./pages/projects/Geomechanical"));

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
      {
        path: "/projects/geological",
        element: (
          <Suspense fallback={<Loading />}>
            <Geological />
          </Suspense>
        ),
      },
      {
        path: "/projects/geomechanical",
        element: (
          <Suspense fallback={<Loading />}>
            <Geomechanical />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
