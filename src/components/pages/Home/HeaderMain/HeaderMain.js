import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../../../images/logos/Frame.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex align-items-center header-bg"
    >
      <div className="col-md-4 col-sm-6 col-12 offset-md-1">
        <h1 style={{ color: "#111430" }}>
          Let's Grow Your
          <br /> Brand To The <br /> Next Level
        </h1>
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <Link to="/appointment" className="btn btn-brand">
          Hire us
        </Link>
      </div>
      <div className="col-md-6 col-sm-6 col-12">
        <img src={headerImg} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
