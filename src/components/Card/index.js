import React from "react";
import "../../App.css";

export default function Card(props) {
  return (
    <div className="carCard">
      {/* <div className="carImgContainer">
      </div> */}
      <img className="carImgContainer" src={props.source} />
      <p className="carCardText">{props.title}</p>
    </div>
  );
}
