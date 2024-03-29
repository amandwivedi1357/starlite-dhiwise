import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Starlitehomepage from "pages/Starlitehomepage";
import Mediapage from "pages/Mediapage";
import Contactform from "pages/Contactform";
import Header from "pages/Header";
import Aboutuspage from "pages/Aboutuspage";
import Blogpage from "pages/Blogpage";
import Singleblogpage from "pages/Singleblogpage";
import Nutrition from "pages/Nutrition";
import Fitness from "pages/Fitness";
import Healing from "pages/Healing";
import Wellness from "pages/Wellness";
import Testimonial from "pages/Testimonial";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "starlitehomepage",
      element: <Starlitehomepage />,
    },
    {
      path: "mediapage",
      element: <Mediapage />,
    },
    {
      path: "contactform",
      element: <Contactform />,
    },
    {
      path: "header",
      element: <Header />,
    },
    {
      path: "aboutuspage",
      element: <Aboutuspage />,
    },
    {
      path: "blogpage",
      element: <Blogpage />,
    },
    {
      path: "singleblogpage",
      element: <Singleblogpage />,
    },
    {
      path: "nutrition",
      element: <Nutrition />,
    },
    {
      path: "fitness",
      element: <Fitness />,
    },
    {
      path: "healing",
      element: <Healing />,
    },
    {
      path: "wellness",
      element: <Wellness />,
    },
    {
      path: "testimonial",
      element: <Testimonial />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
