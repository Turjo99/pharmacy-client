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
import Update from "./Components/Update";

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
        {
          path: "/product/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(
              `https://pharma-server-three.vercel.app/product/${params.id}`
            ),
        },
        {
          path: "/products/product/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(
              `https://pharma-server-three.vercel.app/product/${params.id}`
            ),
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
