import React from "react";
import treatment from '../../../assets/images/treatment.png';

const Terms = () => {
  return (
    <div className="hero my-8">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="lg:w-1/2 rounded-lg shadow-2xl" alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed cumque, doloremque ipsam reprehenderit quos modi aperiam quidem aliquam. Maiores est et, perspiciatis doloremque maxime fugit corporis? Veniam beatae necessitatibus animi eveniet ex, ipsa dignissimos laborum esse odio consequatur est in possimus numquam distinctio voluptatibus soluta vitae nisi alias molestiae.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
