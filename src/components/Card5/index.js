import React from "react";
import "./index.css";

import { ReactComponent as RatingHost } from "../../images/ratingHostIcon.svg";
import { ReactComponent as RatingStar } from "../../images/ratingStarIcon.svg";

export default function Card5(props) {
  return (
    <div className="card5Container">
      <div className="card5ContainerSection1">
        <div className="card5ContainerSection1a">
          <img
            className="section1Img"
            src={props.hostImg}
            alt=""
          />
        </div>
        <div className="card5ContainerSection1b">
          <p className="card5ContainerSection1bHead">{props.hostName}</p>
          <span className="card5ContainerSection1bText1">
            <RatingHost />
            All Star Host
          </span>
          <p className="card5ContainerSection1bText2">
            {props.hostTrips}
          </p>
        </div>
      </div>
      <div className="card5ContainerSection2">
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
        <RatingStar />
      </div>
      <div className="card5ContainerSection3">
      <span>{props.hostReviews}</span>
      </div>
      <div className="card5ContainerSection4">
      <div>{props.hostReviewDate}</div>
      </div>
    </div>
  );
}
