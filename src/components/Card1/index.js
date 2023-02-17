import React from "react";
import './index.css'

export default function Card1(props) {
  return (
    <div className="carCard">
      <img className="carImgContainer" src={props.source} />
      <p className="carCardText">{props.title}</p>
    </div>
  );
}
