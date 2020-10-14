import React from "react";
import { Link } from "react-router-dom";
import "./ServicesInfoCard.css";

const ServicesInfoCard = ({ info }) => {
  return (
    <div className="cards col-md-4 text-center">
      <Link to="/dashboard">
        <img style={{ height: "80px" }} src={info.icon} alt="" />
        <h5 className="mt-3 mb-3">{info.title}</h5>
        <p className="text-secondary">{info.description}</p>
      </Link>
    </div>
  );
};

export default ServicesInfoCard;
