import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items"></div>
        <ul className="ul">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

  export default Header