import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

function Header() {
  const navigate = useNavigate();
  
  const handleClick = (route) => {
    navigate(route);
  };
  
  return (
    <div className="header">
      <div className="logo-container" onClick={() => handleClick("/")}>
        <Logo className="logo" />
      </div>
      <div className="options">
        <div className="option" onClick={() => handleClick("/shop")}>
          SHOP
        </div>
        <div className="option" onClick={() => handleClick("/contact")}>
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Header;
