import React from "react";
import { Link } from "react-router-dom";
import "./ServicesInfoCard.css";

const ServicesInfoCard = ({ info }) => {
  return (
    <div className="cards col-md-4 text-center">
      <img style={{ height: "80px" }} src={info.image} alt="" />
      <h5 className="mt-3 mb-3">{info.title}</h5>
      <p className="text-secondary">{info.description}</p>
    </div>
  );
};

export default ServicesInfoCard;
