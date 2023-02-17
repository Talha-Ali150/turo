import React from "react";
import './index.css'

export default function Heading() {
  return (
    <div>
      <div className="mainImg"></div>
      <div className="text">
        <p className="heading">Find your drive</p>
        <div className="subHeadingContainer">
          <div className="subHeadingBackground"></div>
          <p className="subHeading">
            Explore the world's largest car sharing marketplace
          </p>
        </div>
      </div>
    </div>
  );
}
