import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const selectedService = useLoaderData();
  console.log(selectedService);

  //   const { title, _id, imageLink, price } = selectedService;

  const [user, setUser] = useState(selectedService);

  const handleUpdateService = (event) => {
    event.preventDefault();
    console.log(user);

    fetch(`http://localhost:5000/services/${selectedService[0]._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Data Updated");
          console.log(data);
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className="App container">
      <h3 className="fw-bold mt-4">
        {" "}
        Update Your Existing Services of {selectedService[0].name}
      </h3>
      <form onSubmit={handleUpdateService} className="my-3">
        <input
          onChange={handleInputChange}
          type="text"
          name="title"
          placeholder="Service Title"
          className="input w-full max-w-xs border border-gray-700"
        />

        <br />
        <br />
        <input
          onChange={handleInputChange}
          type="text"
          name="imageLink"
          placeholder="Image Link"
          className="input w-full max-w-xs border border-gray-700"
        />

        <br />
        <br />
        <input
          onChange={handleInputChange}
          type="number"
          name="price"
          placeholder="Price"
          className="input w-full max-w-xs border border-gray-700"
        />
        <br />
        <br />

        <button className="btn btn-success" type="submit">
          Update Service
        </button>
      </form>
    </div>
  );
};

export default Update;
