import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../App";
// import { CustomerReviewData } from "../../../../fakedata/CustomerReviewData";
import Loading from "../../../utilities/Loading";
import CustomerReviewCard from "../CustomerReviewCard/CustomerReviewCard";
import SingleCustomerReview from "../SingleCustomerReview/SingleCustomerReview";

const AllCustomerReview = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // to show all reviews
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await Axios.get(
          "https://gentle-sands-61587.herokuapp.com/showReviews"
        );
        setReviewsInfo(response.data);
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
        <div className="section-header text-center">
          <h2>
            Clients <span style={{ color: "#7AB259" }}>feedback</span>
          </h2>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="card-deck mt-5">
            {reviewsInfo.map((review) => (
              <CustomerReviewCard review={review} key={review._id} />
            ))}
          </div>
        )}
      </div>
      <SingleCustomerReview />
    </section>
  );
};

export default AllCustomerReview;
