import Axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../utilities/Loading";
import SingleCustomerReviewCard from "../SingleCustomerReviewCard/SingleCustomerReviewCard";

const SingleCustomerReview = () => {
  const [singleReview, setSingleReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showSingleReview"
        );
        setSingleReview(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className="my-5">
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card-deck row mt-5">
            {singleReview.map((review) => (
              <SingleCustomerReviewCard review={review} key={review._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleCustomerReview;
