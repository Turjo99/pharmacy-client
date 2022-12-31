import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import ProductPage from "./Components/ProductPage";
import AddProduct from "./Components/AddProduct";
import toast, { Toaster } from "react-hot-toast";

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
          element: <ProductPage></ProductPage>,
        },
        {
          path: "/add",
          element: <AddProduct></AddProduct>,
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
