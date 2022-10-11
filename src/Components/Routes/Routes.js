import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import NotFound from "../NotFoundPage/NotFound";
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
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
        loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
