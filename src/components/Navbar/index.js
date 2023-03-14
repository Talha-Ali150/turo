import React from "react";
import "./index.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Option } from "../../images/hamburger.svg";
import { ReactComponent as User } from "../../images/user.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarImgDiv">
      <Logo style={{marginLeft: '1%'}} />
      </div>
      
      <div className="navbarBtnContainer">
        <button className="navbarBtn">Become a host</button>
      </div>
      <Option style={{marginLeft: '2%'}} />
      <User style={{marginLeft: '0.3%'}}  />
    </div>
  );
}
