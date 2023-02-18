import React from "react";
import "./index.css";

export default function Card2(props) {
  return (
      <div className="cardContainer">
        <div className="container1">
          <img src={props.imgSrc} />
        </div>
        <div className="container2">
          <div className="text1">
            <span className="text1a">{props.text1}</span>
            <span className="text1b">{props.text2}</span>
          </div>
          <div className="text2">
            <p className="text2Para">{props.text3}</p>
          </div>
          <div className="btn1Container">
            <button className="btn1">Browse cars</button>
          </div>
        </div>
      </div>
  );
}
