import React from "react";
import slack from "../../../../images/logos/slack.png";
import google from "../../../../images/logos/google.png";
import uber from "../../../../images/logos/uber.png";
import netflix from "../../../../images/logos/netflix.png";
import airbnb from "../../../../images/logos/airbnb.png";
import "./Clients.css";

const Clients = () => {
  return (
    <section
      className="row w-100 d-flex justify-content-center mt-5 h-50"
      style={{ height: "100px" }}
      id="team"
    >
      <div className="col-4 col-md-2">
        <img className="img-fluid w-100 h-50" src={slack} alt="" />
      </div>
      <div className="col-4  col-md-2">
        <img className="img-fluid w-100 h-50" src={google} alt="" />
      </div>
      <div className="col-4  col-md-2">
        <img className="img-fluid w-100 h-50" src={uber} alt="" />
      </div>
      <div className="col-4  col-md-2">
        <img className="img-fluid w-100 h-50" src={netflix} alt="" />
      </div>
      <div className="col-4 col-md-2">
        <img className="img-fluid w-100 h-50" src={airbnb} alt="" />
      </div>
    </section>
  );
};

export default Clients;
