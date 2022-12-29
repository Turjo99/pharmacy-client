import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_627829-3327.jpg?w=1380&t=st=1672331859~exp=1672332459~hmac=d46b34d5582409073b319e6b073d40ce8f77348c7cc4d7c57daabee1dcb47e1a"
            className=" w-full h-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25532.jpg?w=1380&t=st=1672331937~exp=1672332537~hmac=424dd4a47016bca06e18d4e5c36917177523da8ea05563d82e2d8da71426aa41"
            className=" w-full h-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/warehouse-pharmacy_1161-231.jpg?w=1380&t=st=1672331988~exp=1672332588~hmac=484e40729fe06793273c2c70861b30b7c9b272946ae7c7216c0e635b9220b1a4"
            className=" w-full h-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/closeup-view-pharmacist-hand-taking-medicine-box-from-shelf-drug-store_342744-320.jpg?t=st=1672331929~exp=1672332529~hmac=2f759967c2ef38e9ec47e4adea4ddc8be63525356a9664244cae5fedd2fd09ca"
            className=" w-full h-auto"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
