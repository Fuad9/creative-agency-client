import React, { useContext } from "react";
import { AuthContext } from "../../../../App";

const SingleCustomerReviewCard = (props) => {
  const { name, image, company, description } = props.review;
  const [loggedInUser] = useContext(AuthContext);

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex  align-items-center">
        <img className="mx-3" src={image} alt="" width="60px" />
        <div>
          <h6 className="text-dark font-weight-bold">{name}</h6>
          <p className="m-0">{company}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-secondary mt-4">{description}</p>
      </div>
    </div>
  );
};

export default SingleCustomerReviewCard;
