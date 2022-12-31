import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Products = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/products`);
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this product?");
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Product Deleted Successfully");
            refetch();
          }
        });
    }
  };

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  console.log(products);
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-center my-10">Our Products</h1>

      <div className="grid grid-cols-3">
        {products.map((product) => (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.img}
                  className="w-full h-[350px]"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className=" font-bold">{product.price} Taka</p>
                <p>{product.details} </p>

                <div className="card-actions justify-end">
                  <button className="btn bg-sky-700 text-white ">Edit</button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn  bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
