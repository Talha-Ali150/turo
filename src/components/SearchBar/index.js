import React from "react";
import "./index.css";
import { ReactComponent as ArrowDown } from "../../images/arrowDown.svg";
import { ReactComponent as SearchIcon } from "../../images/searchIcon.svg";

export default function SearchBar() {
  return (
    <div className="searchBarContainer">
      <div className="searchBarSection1">
        <div className="searchBarSection1SectionA">
          <p className="searchBarSection1SectionAPara1">Where</p>
        </div>
        <div className="searchBarSection1SectionB">
          <input
            className="searchBarInput"
            placeholder="City, airport, adress or hotel"
          />
        </div>
      </div>
      <div className="searchBarSection2">
        <div className="searchBarSection2SectionA">
          <p className="searchBarSection1SectionAPara">From</p>
        </div>
        <div className="searchBarSection2SectionB">
          <p className="searchBarSection1SectionAPara">3/24/2023</p>
          <ArrowDown />
          <p className="searchBarSection1SectionAPara">3/24/2023</p>
          <ArrowDown />
        </div>
      </div>
      <div className="searchBarSection3">
        <div className="searchBarSection3SectionA">
          <p className="searchBarSection1SectionAPara">Until</p>
        </div>
        <div className="searchBarSection3SectionB">
          <p className="searchBarSection1SectionAPara">3/24/2023</p>
          <ArrowDown />
          <p className="searchBarSection1SectionAPara">3/24/2023</p>
          <ArrowDown />
        </div>
      </div>
      <div className="searchIconContainer">
        <SearchIcon className="searchIcon" />
      </div>
    </div>
  );
}
