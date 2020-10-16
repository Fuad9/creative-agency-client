import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./SingleServiceInfoCard.css";

const SingleServiceInfoCard = (props) => {
  const history = useHistory();
  const { image, title, description } = props.singleService;

  return (
    <>
      <div
        className="cards col-12 col-sm-12 col-md-3 text-center m-4"
        style={{
          boxShadow: "5px 5px 5px lightgray",
          cursor: "pointer",
          width: "25em",
        }}
        onClick={() => history.push("/order")}
      >
        <img
          style={{ height: "80px" }}
          src={`data:image/png;base64,${image.img}`}
          alt=""
        />
        <h5 className="mt-3 mb-3">{title}</h5>
        <p className="text-secondary">{description}</p>
      </div>
    </>
  );
};

export default SingleServiceInfoCard;
