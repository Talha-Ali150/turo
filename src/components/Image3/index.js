import React from "react";
import "./index.css";
import { ReactComponent as ServicesImg } from "../../images/services.svg";

export default function Image3() {
  return (
    <div className="img3Container">
      <ServicesImg />
      <div className="offer1">
        <p className="offer1Head">Book a car &gt;</p>
        <p className="offer1Para">
          Down the street or across the country, find the perfect vehicle for
          your next adventure.
        </p>
      </div>
      <div className="offer2">
        <p className="offer2Head">Become a host &gt;</p>
        <p className="offer2Para">
          Accelerate your entrepreneurship and start building a small car
          sharing business on Turo.
        </p>
      </div>
    </div>
  );
}
