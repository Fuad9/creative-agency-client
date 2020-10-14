import React from "react";

const CustomerReviewCard = (props) => {
  const { name, designation, company, description, image } = props.review;

  return (
    <div className="card shadow-sm">
      <div className="card-header d-flex  align-items-center">
        <img className="mx-3" src={image} alt="" width="60" />
        <div>
          <h6 className="text-dark font-weight-bold">{name}</h6>
          <p className="m-0">
            {designation}, {company}
          </p>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-secondary mt-4">{description}</p>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
