import React from "react";
import "./index.css";

export default function Card4(props) {
  return (
    <div className="card4Container">
      <img
        src={props.card4Img}
        alt=""
      />
      <div className="iconContainer">
        {props.card4icon}
        <p className="iconText">{props.card4title}</p>
      </div>
    </div>
  );
}
