import React from "react";
import "./index.css";

export default function Image2() {
  return (
    <div className="img2Container">
      <img
        className="img2Styling"
        src="https://blog.turo.com/blog/wp-content/uploads/2021/04/Kyle_Engman_21-copy-2_lesssmall.jpg"
        alt=""
      />
      <div className="img2TextContainer">
        <p className="img2Text1">FEATURED TRAVELOGUE</p>
        <p className="img2Text2">An Olympic experience in Washington</p>
        <p className="img2Text3">
          Discover the epic waterfalls, moody weather, and lush forests of
          coastal Washington.
        </p>
        <p className="img2Text4">Read more</p>
      </div>
    </div>
  );
}
