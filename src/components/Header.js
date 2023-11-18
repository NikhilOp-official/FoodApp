import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";



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
      <Link to={"/"}><li>Home</li></Link>
       <Link to={"/about"}> <li>About Us</li></Link>
       <Link to={"/contact"}><li>Contact Us</li></Link>
       <Link to={"/cart"}><li>Cart</li></Link>
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
