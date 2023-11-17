import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName,setBtnName]=useState("Login");
  let btnName2 = "Login";
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items"></div>
      <ul className="ul">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button
          className="login"
          onClick={() => {
            btnName==="Login"?setBtnName("logout"):setBtnName("Login")
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
