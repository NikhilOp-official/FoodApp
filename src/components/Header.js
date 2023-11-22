import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
  const [btnName,setBtnName]=useState("Login");
  
const  isOnline= useOnlineStatus()


  return (
    <div className="flex shadow-xl justify-between items-center">
      <div className="w-36 h-full">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items"></div>
      <ul className="flex items-center">
        <li className=" ml-14">Online Status:{isOnline?"🟢":"🔴"}</li>
      <Link to={"/"}><li  className=" ml-14">Home</li></Link>
       <Link to={"/about"}> <li  className=" ml-14">About Us</li></Link>
       <Link to={"/contact"}><li  className=" ml-14">Contact Us</li></Link>
       <Link to={"/grocery"}><li  className=" ml-14">Grocery</li></Link>
       <Link to={"/cart"}><li  className=" ml-14">Cart</li></Link>
        <button
          className="mx-14"
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
