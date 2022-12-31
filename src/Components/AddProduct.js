import React from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const notify = () => toast.success("Product Added successfully!");
  const addProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const pname = form.name.value;
    const price = form.price.value;
    const img = form.img.value;
    const details = form.details.value;
    console.log(pname, price, img, details);
    const item = {
      name: pname,
      price,
      img,
      details,
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          notify();
        }
      });
  };

  return (
    <div>
      <form class="w-full " onSubmit={addProduct}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Product Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Product Name"
              name="name"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Product Price"
              name="price"
              required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Image
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Image Link"
              name="img"
              required
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Details
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="details"
              name="details"
              required
            />
          </div>
        </div>
        <button className="btn btn-primary mx-auto" type="submit ">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
