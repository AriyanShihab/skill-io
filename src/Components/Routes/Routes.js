import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Quiz from "../Quiz/Quiz";
import Stats from "../Stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
      },
      {
        path: "quiz/:id",
        element: <Quiz></Quiz>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
  },
]);

export default router;
