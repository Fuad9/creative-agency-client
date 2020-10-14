import React from "react";
import NavBar from "../../Shared/NavBar/NavBar";
import Clients from "../Clients/Clients";
import HeaderMain from "../HeaderMain/HeaderMain";

const Header = () => {
  return (
    <div>
      <NavBar />
      <HeaderMain />
      <Clients />
    </div>
  );
};

export default Header;
