import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Products from "./Components/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/banner",
          element: <Banner></Banner>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
