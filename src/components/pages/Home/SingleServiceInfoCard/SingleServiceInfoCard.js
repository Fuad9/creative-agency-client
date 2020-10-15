import React from "react";
import { Link } from "react-router-dom";

const SingleServiceInfoCard = (props) => {
  const { image, title, description } = props.singleService;

  return (
    <>
      <div
        className="cards col-md-3 text-center m-4 w-25"
        style={{ boxShadow: "5px 5px 5px lightgray" }}
      >
        <Link to="/order">
          <img
            style={{ height: "80px" }}
            src={`data:image/png;base64,${image.img}`}
            alt=""
          />
          <h5 className="mt-3 mb-3">{title}</h5>
          <p className="text-secondary">{description}</p>
        </Link>
      </div>
    </>
  );
};

export default SingleServiceInfoCard;
