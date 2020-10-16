import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Clients from "../Clients/Clients";
import HeaderMain from "../HeaderMain/HeaderMain";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <NavBar />
      <HeaderMain />
      <Clients />
    </div>
  );
};

export default Header;
