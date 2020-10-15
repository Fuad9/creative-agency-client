import React from "react";
import { Link } from "react-router-dom";
import "./ServicesInfoCard.css";

const ServicesInfoCard = ({ info }) => {
  return (
    <div
      className="cards col-md-3 text-center m-4"
      style={{ border: "1px solid lightgray" }}
    >
      <img style={{ height: "80px" }} src={info.photo} alt="" />
      <h5 className="mt-3 mb-3">{info.name}</h5>
      <p className="text-secondary">{info.details}</p>
    </div>
  );
};

export default ServicesInfoCard;
