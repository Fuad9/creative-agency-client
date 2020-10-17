import React from "react";

const CustomerReviewCard = (props) => {
  const { name, company, description, image } = props.review;

  return (
    <div className="card col-sm-12 col-md-4">
      <div className="card-header row align-items-center bg-white border-bottom-0">
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

export default CustomerReviewCard;
